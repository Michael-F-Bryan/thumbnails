//! Type declarations for `thumbcache.h`.
//!
//! Generated using the following `bindgen` invocation:
//!
//! ```text
//!  bindgen bindings.h -o bindings.rs \
//!     --whitelist-type 'IThumbnailProvider|IInitializeWithStream|IClassFactory'
//!     --with-derive-default \
//!     --with-derive-partialeq \
//!     --impl-debug
//! ```
//!
//! Where `$header` is the `thumbcache.h` installed with the Windows SDK. For
//! example,
//!
//! ```text
//! $header = "C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um\thumbcache.h"
//! ```

#![allow(bad_style, dead_code)]

use std::{
    fmt::{self, Display, Formatter},
    os::raw::{c_uchar, c_ulong, c_ushort},
};

include!("bindings.rs");

impl GUID {
    pub const fn new(
        a: c_ulong,
        b: c_ushort,
        c: c_ushort,
        d: [c_uchar; 8usize],
    ) -> Self {
        GUID {
            Data1: a,
            Data2: b,
            Data3: c,
            Data4: d,
        }
    }
}

impl Display for GUID {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{:08x?}-{:04x?}-{:04x?}-{:02x?}{:02x?}-{:02x?}{:02x?}{:02x?}{:02x?}{:02x?}{:02x?}",
            self.Data1,
            self.Data2,
            self.Data3,
            self.Data4[0],
            self.Data4[1],
            self.Data4[2],
            self.Data4[3],
            self.Data4[4],
            self.Data4[5],
            self.Data4[6],
            self.Data4[7]
        )
    }
}

impl IUnknown {
    pub const IID: IID = GUID::new(
        0x00000000,
        0x0000,
        0x0000,
        [0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x46],
    );
}

impl IThumbnailProvider {
    pub const IID: IID = GUID::new(
        0xe357fccd,
        0xa995,
        0x4576,
        [0xb0, 0x1f, 0x23, 0x46, 0x30, 0x15, 0x4e, 0x96],
    );
}

impl IInitializeWithStream {
    pub const IID: IID = GUID::new(
        0xb824b49d,
        0x22ac,
        0x4161,
        [0xac, 0x8a, 0x99, 0x16, 0xe8, 0xfa, 0x3f, 0x7f],
    );
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn guid_display_impl() {
        let guid = GUID::new(
            0xe357fccd,
            0xa995,
            0x4576,
            [0xb0, 0x1f, 0x23, 0x46, 0x30, 0x15, 0x4e, 0x96],
        );
        let should_be = "e357fccd-a995-4576-b01f-234630154e96";

        let got = guid.to_string();

        assert_eq!(got, should_be);
    }
}
