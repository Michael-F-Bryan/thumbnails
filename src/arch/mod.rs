//! Platform-specific code.

macro_rules! gated {
    ($( #[cfg($cfg:meta)] $item:item )*) => {
        $(
            #[cfg(any($cfg, all(doc)))]
            #[cfg_attr(docsrs, doc(cfg($cfg)))]
            $item
        )*
    };
}

gated! {
    #[cfg(windows)]
    pub mod windows;
}
