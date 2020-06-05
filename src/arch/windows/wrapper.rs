use crate::{
    arch::windows::sys::{
        IInitializeWithStream, IInitializeWithStreamVtbl, IStream,
        IThumbnailProvider, IThumbnailProviderVtbl, IUnknown, IUnknownVtbl,
        GUID, HBITMAP, HRESULT, SUCCEEDED, S_OK,
    },
    Dimensions, ThumbnailProvider,
};
use field_offset::FieldOffset;
use std::{
    io::{self, Read},
    os::raw::{c_ulong, c_void},
    ptr,
    sync::atomic::{AtomicPtr, AtomicUsize, Ordering},
};

/// A COM adapter that can be used as an [`IThumbnailProvider`].
#[repr(C)]
pub struct Wrapper<P> {
    unknown_vtable: *mut IUnknownVtbl,
    stream_vtable: *mut IInitializeWithStreamVtbl,
    thumbnail_vtable: *mut IThumbnailProviderVtbl,

    ref_count: AtomicUsize,
    stream: AtomicPtr<IStream>,
    provider: P,
}

impl<P: ThumbnailProvider + Send + Sync + 'static> Wrapper<P> {
    const INITIALIZE_WITH_STREAM_VTABLE: IInitializeWithStreamVtbl =
        IInitializeWithStreamVtbl {
            QueryInterface: Some(init_with_stream_query_interface::<P>),
            AddRef: Some(init_with_stream_add_ref::<P>),
            Release: Some(init_with_stream_release::<P>),
            Initialize: Some(init_with_stream_initialize::<P>),
        };
    const THUMBNAIL_VTABLE: IThumbnailProviderVtbl = IThumbnailProviderVtbl {
        QueryInterface: Some(thumbnail_provider_query_interface::<P>),
        AddRef: Some(thumbnail_provider_add_ref::<P>),
        Release: Some(thumbnail_provider_release::<P>),
        GetThumbnail: Some(thumbnail_provider_get_thumbnail::<P>),
    };
    const UNKNOWN_VTABLE: IUnknownVtbl = IUnknownVtbl {
        QueryInterface: Some(unknown_query_interface::<P>),
        AddRef: Some(unknown_add_ref::<P>),
        Release: Some(unknown_release::<P>),
    };

    pub fn new(provider: P) -> Self {
        Wrapper {
            unknown_vtable: &mut Wrapper::<P>::UNKNOWN_VTABLE,
            stream_vtable: &mut Wrapper::<P>::INITIALIZE_WITH_STREAM_VTABLE,
            thumbnail_vtable: &mut Wrapper::<P>::THUMBNAIL_VTABLE,
            ref_count: AtomicUsize::new(1),
            stream: AtomicPtr::default(),
            provider,
        }
    }

    pub fn new_unknown(provider: P) -> *mut IUnknown {
        let boxed = Box::new(Wrapper::new(provider));

        // SAFETY: the first item in this struct is a pointer to an IUnknown
        // vtable, meaning `*mut Self` is also a `*mut IUnknown` for all intents
        // and purposes.
        unsafe {
            let raw = Box::into_raw(boxed);
            (&mut (*raw).unknown_vtable as *mut *mut IUnknownVtbl)
                as *mut IUnknown
        }
    }
}

impl<P> Wrapper<P> {
    pub unsafe fn from_unknown<'a>(raw: *mut IUnknown) -> *mut Self {
        let offset =
            FieldOffset::new(|w: *const Wrapper<P>| &(*w).unknown_vtable);
        let vtable: *mut *mut IUnknownVtbl = &mut (*raw).lpVtbl;
        offset.unapply_ptr_mut(vtable)
    }

    pub unsafe fn from_initialize_with_stream<'a>(
        raw: *mut IInitializeWithStream,
    ) -> *mut Self {
        let offset =
            FieldOffset::new(|w: *const Wrapper<P>| &(*w).stream_vtable);
        let vtable: *mut *mut IInitializeWithStreamVtbl = &mut (*raw).lpVtbl;
        offset.unapply_ptr_mut(vtable)
    }

    pub unsafe fn from_thumbnail_provider<'a>(
        raw: *mut IThumbnailProvider,
    ) -> *mut Self {
        let offset =
            FieldOffset::new(|w: *const Wrapper<P>| &(*w).thumbnail_vtable);
        let vtable: *mut *mut IThumbnailProviderVtbl = &mut (*raw).lpVtbl;
        offset.unapply_ptr_mut(vtable)
    }

    pub fn inner(&self) -> &P { &self.provider }

    pub fn as_initialize_with_stream(&self) -> *mut IInitializeWithStream {
        &self.stream_vtable as *const *mut IInitializeWithStreamVtbl as *mut _
    }

    pub fn as_thumbnail_provider(&self) -> *mut IThumbnailProvider {
        &self.thumbnail_vtable as *const *mut IThumbnailProviderVtbl as *mut _
    }

    pub fn as_unknown(&self) -> *mut IUnknown {
        &self.unknown_vtable as *const *mut IUnknownVtbl as *mut _
    }

    unsafe fn query_interface(
        &self,
        guid: &GUID,
        p: *mut *mut c_void,
    ) -> HRESULT {
        eprintln!("Query interface: {}", guid);

        if guid == &IUnknown::IID {
            *p = self.as_unknown() as *mut c_void;
            S_OK
        } else if guid == &IThumbnailProvider::IID {
            *p = self.as_thumbnail_provider() as *mut c_void;
            S_OK
        } else if guid == &IInitializeWithStream::IID {
            *p = self.as_initialize_with_stream() as *mut c_void;
            S_OK
        } else {
            *p = ptr::null_mut();
            unimplemented!()
        }
    }
}

impl<P> Drop for Wrapper<P> {
    fn drop(&mut self) {
        let stream = self.stream.swap(ptr::null_mut(), Ordering::SeqCst);

        if !stream.is_null() {
            unsafe {
                if let Some(release) = (*(*stream).lpVtbl).Release {
                    release(stream);
                }
            }
        }
    }
}

unsafe extern "C" fn unknown_add_ref<P>(this: *mut IUnknown) -> c_ulong {
    eprintln!("Incrementing ref count for {:#p}", this);

    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_unknown(this);
    this.ref_count.fetch_add(1, Ordering::SeqCst) as c_ulong + 1
}

unsafe extern "C" fn unknown_release<P>(this: *mut IUnknown) -> c_ulong {
    eprintln!("Decrementing ref count for {:#p}", this);
    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_unknown(this);
    let count = this.ref_count.fetch_sub(1, Ordering::SeqCst) - 1;

    if count == 0 {
        let _ = Box::from_raw(this as *const _ as *mut Wrapper<P>);
    }

    count as c_ulong
}

unsafe extern "C" fn unknown_query_interface<P>(
    this: *mut IUnknown,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    assert!(!this.is_null());
    assert!(!guid.is_null());
    assert!(!p.is_null());

    let this = &mut *Wrapper::<P>::from_unknown(this);
    this.query_interface(&*guid, p)
}

unsafe extern "C" fn init_with_stream_add_ref<P>(
    this: *mut IInitializeWithStream,
) -> c_ulong {
    eprintln!("Incrementing ref count for {:#p}", this);

    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_initialize_with_stream(this);
    this.ref_count.fetch_add(1, Ordering::SeqCst) as c_ulong + 1
}

unsafe extern "C" fn init_with_stream_release<P>(
    this: *mut IInitializeWithStream,
) -> c_ulong {
    eprintln!("Decrementing ref count for {:#p}", this);
    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_initialize_with_stream(this);
    let count = this.ref_count.fetch_sub(1, Ordering::SeqCst) - 1;

    if count == 0 {
        let _ = Box::from_raw(this as *const _ as *mut Wrapper<P>);
    }

    count as c_ulong
}

unsafe extern "C" fn init_with_stream_query_interface<P>(
    this: *mut IInitializeWithStream,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    assert!(!this.is_null());
    assert!(!guid.is_null());
    assert!(!p.is_null());

    let this = &mut *Wrapper::<P>::from_initialize_with_stream(this);
    this.query_interface(&*guid, p)
}

unsafe extern "C" fn init_with_stream_initialize<P>(
    this: *mut IInitializeWithStream,
    pstream: *mut IStream,
    _mode: c_ulong,
) -> HRESULT {
    assert!(!this.is_null());

    let this = &mut *Wrapper::<P>::from_initialize_with_stream(this);

    // we're taking ownership of the stream, bump the reference count
    if !pstream.is_null() {
        if let Some(add_ref) = (*(*pstream).lpVtbl).AddRef {
            add_ref(pstream);
        }
    }

    let old_stream = this.stream.swap(pstream, Ordering::SeqCst);

    if !old_stream.is_null() {
        if let Some(release) = (*(*old_stream).lpVtbl).Release {
            release(old_stream);
        }
    }

    S_OK
}

unsafe extern "C" fn thumbnail_provider_add_ref<P>(
    this: *mut IThumbnailProvider,
) -> c_ulong {
    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_thumbnail_provider(this);
    this.ref_count.fetch_add(1, Ordering::SeqCst) as c_ulong + 1
}

unsafe extern "C" fn thumbnail_provider_release<P>(
    this: *mut IThumbnailProvider,
) -> c_ulong {
    assert!(!this.is_null());
    let this = &mut *Wrapper::<P>::from_thumbnail_provider(this);
    let count = this.ref_count.fetch_sub(1, Ordering::SeqCst) - 1;

    if count == 0 {
        let _ = Box::from_raw(this as *const _ as *mut Wrapper<P>);
    }

    count as c_ulong
}

unsafe extern "C" fn thumbnail_provider_query_interface<P>(
    this: *mut IThumbnailProvider,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    assert!(!this.is_null());
    assert!(!guid.is_null());
    assert!(!p.is_null());

    let this = &mut *Wrapper::<P>::from_thumbnail_provider(this);
    this.query_interface(&*guid, p)
}

unsafe extern "C" fn thumbnail_provider_get_thumbnail<P>(
    this: *mut IThumbnailProvider,
    width: u32,
    bitmap: *mut HBITMAP,
    alpha: *mut i32,
) -> HRESULT
where
    P: ThumbnailProvider,
{
    assert!(!this.is_null());
    assert!(!bitmap.is_null());
    assert!(!alpha.is_null());

    let this = &mut *Wrapper::<P>::from_thumbnail_provider(this);
    let dims = Dimensions {
        width,
        height: width,
    };
    let stream = this.stream.swap(ptr::null_mut(), Ordering::SeqCst);

    assert!(!stream.is_null());

    let reader = StreamReader(stream);

    let thumbnail = match this.provider.get_thumbnail(reader, dims) {
        Ok(img) => img,
        Err(e) => {
            *bitmap = ptr::null_mut();
            return get_hresult(&e);
        },
    };

    match to_bitmap(thumbnail) {
        Ok(t) => {
            *bitmap = t;
            S_OK
        },
        Err(e) => {
            *bitmap = ptr::null_mut();
            get_hresult(&e)
        },
    }
}

fn to_bitmap<I>(_image: I) -> Result<HBITMAP, io::Error> { unimplemented!() }

fn get_hresult<E>(error: &E) -> HRESULT
where
    E: std::error::Error + 'static,
{
    let mut error: Option<&dyn std::error::Error> = Some(error);

    while let Some(e) = error {
        if let Some(code) =
            e.downcast_ref::<io::Error>().and_then(|e| e.raw_os_error())
        {
            return code as HRESULT;
        }

        error = e.source();
    }

    unimplemented!()
}

struct StreamReader(*mut IStream);

impl Read for StreamReader {
    fn read(&mut self, buf: &mut [u8]) -> Result<usize, io::Error> {
        unsafe {
            let read = match (*(*self.0).lpVtbl).Read {
                Some(r) => r,
                None => return Err(io::ErrorKind::InvalidInput.into()),
            };

            let mut bytes_read = 0;
            let ret = read(
                self.0,
                buf.as_mut_ptr() as *mut c_void,
                buf.len() as _,
                &mut bytes_read,
            );

            if SUCCEEDED(ret) {
                return Ok(bytes_read as usize);
            } else {
                return Err(io::Error::from_raw_os_error(ret as _));
            }
        }
    }
}

impl Drop for StreamReader {
    fn drop(&mut self) {
        unsafe {
            if let Some(release) = (*(*self.0).lpVtbl).Release {
                release(self.0);
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use image::RgbaImage;
    use std::sync::{atomic::AtomicBool, Arc};

    struct DropCheck(Arc<AtomicBool>);

    impl ThumbnailProvider for DropCheck {
        type Error = std::io::Error;
        type Thumbnail = RgbaImage;

        fn get_thumbnail<R>(
            &self,
            _reader: R,
            _desired_dimensions: Dimensions,
        ) -> Result<Self::Thumbnail, Self::Error> {
            unimplemented!()
        }
    }

    impl Drop for DropCheck {
        fn drop(&mut self) { self.0.store(true, Ordering::SeqCst); }
    }

    #[test]
    fn release_actually_drops_the_object() {
        unsafe {
            let deleted = Arc::new(AtomicBool::new(false));

            let wrapper = Wrapper::new_unknown(DropCheck(Arc::clone(&deleted)));
            assert!(!wrapper.is_null());

            let current_ref_count = (*(wrapper as *mut Wrapper<DropCheck>))
                .ref_count
                .load(Ordering::SeqCst);
            assert_eq!(current_ref_count, 1);

            let release = (*(*wrapper).lpVtbl).Release.unwrap();
            assert_eq!(release as usize, unknown_release::<DropCheck> as usize);
            assert_eq!(release(wrapper), 0);

            let was_actually_released = deleted.load(Ordering::SeqCst);
            assert!(was_actually_released);
        }
    }

    struct DummyProvider;

    impl ThumbnailProvider for DummyProvider {
        type Error = std::io::Error;
        type Thumbnail = RgbaImage;

        fn get_thumbnail<R>(
            &self,
            _reader: R,
            _desired_dimensions: Dimensions,
        ) -> Result<Self::Thumbnail, Self::Error> {
            unimplemented!()
        }
    }

    #[test]
    fn wrapper_from_unknown() {
        unsafe {
            let wrapper = Wrapper::new_unknown(DummyProvider);
            assert!(!wrapper.is_null());

            let got = Wrapper::<DummyProvider>::from_unknown(wrapper);
            assert!(!got.is_null());
            assert!(ptr::eq(got, wrapper as *mut Wrapper<DummyProvider>));

            let _ = Box::from(got);
        }
    }

    #[test]
    fn query_interface_gets_unknown() {
        unsafe {
            let wrapper = Wrapper::new_unknown(DummyProvider);
            assert!(!wrapper.is_null());

            let query_interface = (*(*wrapper).lpVtbl).QueryInterface.unwrap();
            assert_eq!(
                query_interface as usize,
                unknown_query_interface::<DummyProvider> as usize
            );

            let mut place = ptr::null_mut();
            let result = query_interface(wrapper, &IUnknown::IID, &mut place);
            assert_eq!(result, S_OK);
            assert!(ptr::eq(wrapper, place as *mut IUnknown));

            let _ = Box::from_raw(wrapper as *mut Wrapper<DummyProvider>);
        }
    }

    #[test]
    fn increment_the_ref_count() {
        unsafe {
            let wrapper = Wrapper::new_unknown(DummyProvider);
            assert!(!wrapper.is_null());

            let current_ref_count = (*(wrapper as *mut Wrapper<DummyProvider>))
                .ref_count
                .load(Ordering::SeqCst);
            assert_eq!(current_ref_count, 1);

            let add_ref = (*(*wrapper).lpVtbl).AddRef.unwrap();
            let new_ref_count = add_ref(wrapper);
            assert_eq!(new_ref_count, 2);

            let _ = Box::from_raw(wrapper as *mut Wrapper<DummyProvider>);
        }
    }
}
