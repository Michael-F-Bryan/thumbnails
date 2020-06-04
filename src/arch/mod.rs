//! Platform-specific code.

macro_rules! gated {
    ($( #[cfg($cfg:meta)] $item:item )*) => {
        $(
            #[cfg(any(not($cfg), all(doc, docsrs)))]
            #[cfg_attr(docsrs, doc(cfg($cfg)))]
            $item
        )*
    };
}

gated! {
    #[cfg(windows)]
    pub mod windows;
}
