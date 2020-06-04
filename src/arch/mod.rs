//! Platform-specific code.

macro_rules! gated {
    ($( #[cfg($cfg:meta)] $item:item )*) => {
        $(
            #[cfg_attr(docsrs, cfg($cfg), doc(cfg($cfg)))]
            #[cfg_attr(not(docsrs), cfg($cfg))]
            $item
        )*
    };
}

gated! {
    #[cfg(windows)]
    pub mod windows;
}
