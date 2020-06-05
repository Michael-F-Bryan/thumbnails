use crate::{
    arch::windows::sys::{
        IInitializeWithStream, IInitializeWithStreamVtbl, IStream,
        IThumbnailProvider, IThumbnailProviderVtbl, IUnknown, GUID, HBITMAP,
        HRESULT, SUCCEEDED, S_OK,
    },
    Dimensions, ThumbnailProvider,
};
use field_offset::FieldOffset;
use std::{
    io::{self, Read},
    os::raw::{c_ulong, c_void},
    ptr,
    sync::atomic::{AtomicPtr, AtomicU32, Ordering},
};

/// A COM adapter that can be used as an [`IThumbnailProvider`].
#[repr(C)]
pub struct Wrapper<P> {
    stream_vtable: *mut IInitializeWithStreamVtbl,
    thumbnail_vtable: *mut IThumbnailProviderVtbl,

    ref_count: AtomicU32,
    stream: AtomicPtr<IStream>,
    provider: P,
}

impl<P: ThumbnailProvider + Send + Sync + 'static> Wrapper<P> {
    const INITIALIZE_WITH_STREAM_VTABLE: IInitializeWithStreamVtbl =
        IInitializeWithStreamVtbl {
            AddRef: Some(init_with_stream_add_ref::<P>),
            Release: Some(init_with_stream_release::<P>),
            QueryInterface: Some(init_with_stream_query_interface::<P>),
            Initialize: Some(init_with_stream_initialize::<P>),
        };
    const THUMBNAIL_VTABLE: IThumbnailProviderVtbl = IThumbnailProviderVtbl {
        AddRef: Some(thumbnail_provider_add_ref::<P>),
        Release: Some(thumbnail_provider_release::<P>),
        QueryInterface: Some(thumbnail_provider_query_interface::<P>),
        GetThumbnail: Some(thumbnail_provider_get_thumbnail::<P>),
    };

    pub fn new(provider: P) -> Self {
        Wrapper {
            stream_vtable: &mut Wrapper::<P>::INITIALIZE_WITH_STREAM_VTABLE,
            thumbnail_vtable: &mut Wrapper::<P>::THUMBNAIL_VTABLE,
            ref_count: AtomicU32::new(1),
            stream: AtomicPtr::default(),
            provider,
        }
    }

    pub fn new_unknown(provider: P) -> *mut IUnknown {
        let wrapper = Wrapper::new(provider);
        // SAFETY: the first item in this struct is a pointer to a vtable which
        // inherits from IUnknown, meaning `*mut Self` is also a `*mut IUnknown`
        // for all intents and purposes.
        Box::into_raw(Box::new(wrapper)) as *mut IUnknown
    }
}

impl<P> Wrapper<P> {
    pub unsafe fn from_initialize_with_stream<'a>(
        raw: *mut IInitializeWithStream,
    ) -> &'a Self {
        let offset =
            FieldOffset::new(|w: *const Wrapper<P>| &(*w).stream_vtable);
        let vtable: *const *mut IInitializeWithStreamVtbl = &(*raw).lpVtbl;
        let wrapper = offset.unapply_ptr(vtable);

        &*wrapper
    }

    pub unsafe fn from_thumbnail_provider<'a>(
        raw: *mut IThumbnailProvider,
    ) -> &'a Self {
        let offset =
            FieldOffset::new(|w: *const Wrapper<P>| &(*w).thumbnail_vtable);
        let vtable: *const *mut IThumbnailProviderVtbl = &(*raw).lpVtbl;
        let wrapper = offset.unapply_ptr(vtable);

        &*wrapper
    }

    pub fn inner(&self) -> &P { &self.provider }

    pub fn as_initialize_with_stream(&self) -> *mut IInitializeWithStream {
        &self.stream_vtable as *const *mut IInitializeWithStreamVtbl as *mut _
    }

    pub fn as_thumbnail_provider(&self) -> *mut IThumbnailProvider {
        &self.thumbnail_vtable as *const *mut IThumbnailProviderVtbl as *mut _
    }

    pub fn as_unknown(&self) -> *mut IUnknown { self as *const Self as *mut _ }

    unsafe fn query_interface(
        &self,
        guid: &GUID,
        p: *mut *mut c_void,
    ) -> HRESULT {
        if guid == &IUnknown::IID {
            *p = self as *const Self as *mut Self as *mut c_void;
            S_OK
        } else if guid == &IThumbnailProvider::IID {
            *p = self.as_thumbnail_provider() as *mut c_void;
            S_OK
        } else if guid == &IInitializeWithStream::IID {
            *p = self.as_initialize_with_stream() as *mut c_void;
            S_OK
        } else {
            unimplemented!()
        }
    }
}

unsafe extern "C" fn init_with_stream_add_ref<P>(
    this: *mut IInitializeWithStream,
) -> c_ulong {
    let this = Wrapper::<P>::from_initialize_with_stream(this);
    this.ref_count.fetch_add(1, Ordering::SeqCst) + 1
}

unsafe extern "C" fn init_with_stream_release<P>(
    this: *mut IInitializeWithStream,
) -> c_ulong {
    let this = Wrapper::<P>::from_initialize_with_stream(this);
    let count = this.ref_count.fetch_sub(1, Ordering::SeqCst);

    if count == 0 {
        let _ = Box::from_raw(this as *const _ as *mut Wrapper<P>);
    }

    count
}

unsafe extern "C" fn init_with_stream_query_interface<P>(
    this: *mut IInitializeWithStream,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    assert!(!this.is_null());
    assert!(!guid.is_null());
    assert!(!p.is_null());

    let this = Wrapper::<P>::from_initialize_with_stream(this);
    this.query_interface(&*guid, p)
}

unsafe extern "C" fn init_with_stream_initialize<P>(
    this: *mut IInitializeWithStream,
    pstream: *mut IStream,
    _mode: c_ulong,
) -> HRESULT {
    assert!(!this.is_null());

    let this = Wrapper::<P>::from_initialize_with_stream(this);

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
    let this = Wrapper::<P>::from_thumbnail_provider(this);
    this.ref_count.fetch_add(1, Ordering::SeqCst) + 1
}

unsafe extern "C" fn thumbnail_provider_release<P>(
    this: *mut IThumbnailProvider,
) -> c_ulong {
    let this = Wrapper::<P>::from_thumbnail_provider(this);
    let count = this.ref_count.fetch_sub(1, Ordering::SeqCst);

    if count == 0 {
        let _ = Box::from_raw(this as *const _ as *mut Wrapper<P>);
    }

    count
}

unsafe extern "C" fn thumbnail_provider_query_interface<P>(
    this: *mut IThumbnailProvider,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    assert!(!this.is_null());
    assert!(!guid.is_null());
    assert!(!p.is_null());

    let this = Wrapper::<P>::from_thumbnail_provider(this);
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

    let this = Wrapper::<P>::from_thumbnail_provider(this);
    let dims = Dimensions {
        width,
        height: width,
    };
    let stream = this.stream.swap(ptr::null_mut(), Ordering::SeqCst);

    assert!(!stream.is_null());

    let reader = StreamReader(stream);
    match this.provider.get_thumbnail(reader, dims) {
        Ok(rendered) => unimplemented!(),
        Err(e) => panic!("{:?}", e),
    }
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
                return Err(io::Error::from_raw_os_error(ret));
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
