/// Type declarations for `thumbcache.h`.
///
/// Generated using the following `bindgen` invocation:
///
/// ```text
///  bindgen $header -o .\src\thumbcache_sys.rs \
///     --whitelist-type 'IThumbnailProvider|IInitializeWithStream' 
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
#[allow(bad_style)]
pub mod thumbcache_sys {
    pub use winapi::shared::{guiddef::GUID, minwindef::FILETIME, windef::HBITMAP};

    include!("thumbcache_sys.rs");
}