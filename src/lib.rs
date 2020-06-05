#![cfg_attr(docsrs, feature(doc_cfg))]

pub mod arch;

use image::GenericImageView;
use std::io::Read;

#[derive(Debug, Copy, Clone, PartialEq)]
pub struct Dimensions {
    pub width: u32,
    pub height: u32,
}

pub trait ThumbnailProvider: Send + Sync {
    type Thumbnail: GenericImageView;
    type Error: std::error::Error + Send + Sync + 'static;

    fn get_thumbnail<R>(
        &self,
        input: R,
        desired_dimensions: Dimensions,
    ) -> Result<Self::Thumbnail, Self::Error>
    where
        R: Read;
}
