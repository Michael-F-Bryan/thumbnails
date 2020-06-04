mod wrapper;

pub use wrapper::Wrapper;

/// Type declarations for `thumbcache.h`.
///
/// Generated using the following `bindgen` invocation:
///
/// ```text
///  bindgen bindings.h -o bindings.rs \
///     --whitelist-type 'IThumbnailProvider|IInitializeWithStream|IClassFactory'
///     --with-derive-default \
///     --impl-debug \
///     --blacklist-type HBITMAP \
///     --blacklist-type GUID \
///     --blacklist-type FILETIME
/// ```
///
/// Where `$header` is the `thumbcache.h` installed with the Windows SDK. For
/// example,
///
/// ```text
/// $header = "C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um\thumbcache.h"
/// ```
#[allow(bad_style, dead_code)]
mod sys {
    pub use winapi::shared::{
        guiddef::GUID, minwindef::FILETIME, windef::HBITMAP,
    };
    use winapi::Interface;

    include!("bindings.rs");

    impl Interface for IThumbnailProvider {
        fn uuidof() -> GUID { unimplemented!() }
    }

    impl Interface for IInitializeWithStream {
        fn uuidof() -> GUID { unimplemented!() }
    }
}
