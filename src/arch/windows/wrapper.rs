use crate::{
    arch::windows::sys::{
        IInitializeWithStream, IInitializeWithStreamVtbl, IStream,
        IThumbnailProvider, IThumbnailProviderVtbl,
    },
    Dimensions, ThumbnailProvider,
};
use field_offset::FieldOffset;
use std::{
    os::raw::{c_long, c_ulong, c_void},
    ptr,
};
use winapi::{
    shared::{guiddef::GUID, windef::HBITMAP},
    shared::winerror::HRESULT,
};

/// A COM adapter that can be used as an [`IThumbnailProvider`].
#[repr(C)]
pub struct Wrapper<P> {
    stream_vtable: *mut IInitializeWithStreamVtbl,
    thumbnail_vtable: *mut IThumbnailProviderVtbl,

    stream: *mut IStream,
    provider: P,
}

impl<P> Wrapper<P> {
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
            stream: ptr::null_mut(),
            provider,
        }
    }

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

    pub fn inner(&self) -> &P {
        &self.provider
    }

    pub fn as_initialize_with_stream(&self) -> *const IInitializeWithStream {
        &self.stream_vtable as *const *mut IInitializeWithStreamVtbl as *const _
    }

    pub fn as_thumbnail_provider(&self) -> *const IThumbnailProvider {
        &self.thumbnail_vtable as *const *mut IThumbnailProviderVtbl as *const _
    }
}

unsafe extern "C" fn init_with_stream_add_ref<P>(
    this: *mut IInitializeWithStream,
) -> u32 {
    unimplemented!()
}

unsafe extern "C" fn init_with_stream_release<P>(
    this: *mut IInitializeWithStream,
) -> u32 {
    unimplemented!()
}

unsafe extern "C" fn init_with_stream_query_interface<P>(
    this: *mut IInitializeWithStream,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> i32 {
    unimplemented!()
}

unsafe extern "C" fn init_with_stream_initialize<P>(
    this: *mut IInitializeWithStream,
    pstream: *mut IStream,
    grfMode: c_ulong,
) -> HRESULT {
    unimplemented!()
}

unsafe extern "C" fn thumbnail_provider_add_ref<P>(
    this: *mut IThumbnailProvider,
) -> u32 {
    unimplemented!()
}

unsafe extern "C" fn thumbnail_provider_release<P>(
    this: *mut IThumbnailProvider,
) -> u32 {
    unimplemented!()
}

unsafe extern "C" fn thumbnail_provider_query_interface<P>(
    this: *mut IThumbnailProvider,
    guid: *const GUID,
    p: *mut *mut c_void,
) -> HRESULT {
    unimplemented!()
}

unsafe extern "C" fn thumbnail_provider_get_thumbnail<P>(
    this: *mut IThumbnailProvider,
    width: u32,
    bitmap: *mut HBITMAP,
    pdwAlpha: *mut i32,
) -> HRESULT {
    unimplemented!()
}
