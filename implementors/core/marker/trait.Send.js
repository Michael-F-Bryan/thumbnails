(function() {var implementors = {};
implementors["bytemuck"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"bytemuck/enum.PodCastError.html\" title=\"enum bytemuck::PodCastError\">PodCastError</a>","synthetic":true,"types":["bytemuck::PodCastError"]}];
implementors["byteorder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>","synthetic":true,"types":["byteorder::BigEndian"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>","synthetic":true,"types":["byteorder::LittleEndian"]}];
implementors["field_offset"] = [{"text":"impl&lt;T, U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"field_offset/struct.FieldOffset.html\" title=\"struct field_offset::FieldOffset\">FieldOffset</a>&lt;T, U&gt;","synthetic":true,"types":["field_offset::FieldOffset"]}];
implementors["image"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Luma.html\" title=\"struct image::Luma\">Luma</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::Luma"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.LumaA.html\" title=\"struct image::LumaA\">LumaA</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::LumaA"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Rgb.html\" title=\"struct image::Rgb\">Rgb</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::Rgb"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Rgba.html\" title=\"struct image::Rgba\">Rgba</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::Rgba"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Bgr.html\" title=\"struct image::Bgr\">Bgr</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::Bgr"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Bgra.html\" title=\"struct image::Bgra\">Bgra</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::color::Bgra"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Progress.html\" title=\"struct image::Progress\">Progress</a>","synthetic":true,"types":["image::image::Progress"]},{"text":"impl&lt;'a, I:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Pixels.html\" title=\"struct image::Pixels\">Pixels</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["image::image::Pixels"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.SubImage.html\" title=\"struct image::SubImage\">SubImage</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::image::SubImage"]},{"text":"impl&lt;P, Container&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.ImageBuffer.html\" title=\"struct image::ImageBuffer\">ImageBuffer</a>&lt;P, Container&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Container: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::ImageBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Delay.html\" title=\"struct image::Delay\">Delay</a>","synthetic":true,"types":["image::animation::Delay"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Frame.html\" title=\"struct image::Frame\">Frame</a>","synthetic":true,"types":["image::animation::Frame"]},{"text":"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/struct.Frames.html\" title=\"struct image::Frames\">Frames</a>&lt;'a&gt;","synthetic":true,"types":["image::animation::Frames"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/enum.ColorType.html\" title=\"enum image::ColorType\">ColorType</a>","synthetic":true,"types":["image::color::ColorType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/enum.ExtendedColorType.html\" title=\"enum image::ExtendedColorType\">ExtendedColorType</a>","synthetic":true,"types":["image::color::ExtendedColorType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/enum.ImageFormat.html\" title=\"enum image::ImageFormat\">ImageFormat</a>","synthetic":true,"types":["image::image::ImageFormat"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/enum.ImageOutputFormat.html\" title=\"enum image::ImageOutputFormat\">ImageOutputFormat</a>","synthetic":true,"types":["image::image::ImageOutputFormat"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/enum.DynamicImage.html\" title=\"enum image::DynamicImage\">DynamicImage</a>","synthetic":true,"types":["image::dynimage::DynamicImage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/error/struct.UnsupportedError.html\" title=\"struct image::error::UnsupportedError\">UnsupportedError</a>","synthetic":true,"types":["image::error::UnsupportedError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/error/struct.EncodingError.html\" title=\"struct image::error::EncodingError\">EncodingError</a>","synthetic":true,"types":["image::error::EncodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/error/struct.ParameterError.html\" title=\"struct image::error::ParameterError\">ParameterError</a>","synthetic":true,"types":["image::error::ParameterError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/error/struct.DecodingError.html\" title=\"struct image::error::DecodingError\">DecodingError</a>","synthetic":true,"types":["image::error::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/error/struct.LimitError.html\" title=\"struct image::error::LimitError\">LimitError</a>","synthetic":true,"types":["image::error::LimitError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/error/enum.ImageError.html\" title=\"enum image::error::ImageError\">ImageError</a>","synthetic":true,"types":["image::error::ImageError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/error/enum.UnsupportedErrorKind.html\" title=\"enum image::error::UnsupportedErrorKind\">UnsupportedErrorKind</a>","synthetic":true,"types":["image::error::UnsupportedErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/error/enum.ParameterErrorKind.html\" title=\"enum image::error::ParameterErrorKind\">ParameterErrorKind</a>","synthetic":true,"types":["image::error::ParameterErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/error/enum.LimitErrorKind.html\" title=\"enum image::error::LimitErrorKind\">LimitErrorKind</a>","synthetic":true,"types":["image::error::LimitErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/error/enum.ImageFormatHint.html\" title=\"enum image::error::ImageFormatHint\">ImageFormatHint</a>","synthetic":true,"types":["image::error::ImageFormatHint"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.EnumeratePixels.html\" title=\"struct image::buffer::EnumeratePixels\">EnumeratePixels</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::EnumeratePixels"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.EnumeratePixelsMut.html\" title=\"struct image::buffer::EnumeratePixelsMut\">EnumeratePixelsMut</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::EnumeratePixelsMut"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.EnumerateRows.html\" title=\"struct image::buffer::EnumerateRows\">EnumerateRows</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::EnumerateRows"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.EnumerateRowsMut.html\" title=\"struct image::buffer::EnumerateRowsMut\">EnumerateRowsMut</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::EnumerateRowsMut"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.Pixels.html\" title=\"struct image::buffer::Pixels\">Pixels</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::Pixels"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.PixelsMut.html\" title=\"struct image::buffer::PixelsMut\">PixelsMut</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::PixelsMut"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.Rows.html\" title=\"struct image::buffer::Rows\">Rows</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::Rows"]},{"text":"impl&lt;'a, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/buffer/struct.RowsMut.html\" title=\"struct image::buffer::RowsMut\">RowsMut</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as <a class=\"trait\" href=\"image/trait.Pixel.html\" title=\"trait image::Pixel\">Pixel</a>&gt;::<a class=\"type\" href=\"image/trait.Pixel.html#associatedtype.Subpixel\" title=\"type image::Pixel::Subpixel\">Subpixel</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::buffer_::RowsMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/math/struct.Rect.html\" title=\"struct image::math::Rect\">Rect</a>","synthetic":true,"types":["image::math::rect::Rect"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/math/nq/struct.NeuQuant.html\" title=\"struct image::math::nq::NeuQuant\">NeuQuant</a>","synthetic":true,"types":["image::math::nq::NeuQuant"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/imageops/enum.FilterType.html\" title=\"enum image::imageops::FilterType\">FilterType</a>","synthetic":true,"types":["image::imageops::sample::FilterType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/imageops/colorops/struct.BiLevel.html\" title=\"struct image::imageops::colorops::BiLevel\">BiLevel</a>","synthetic":true,"types":["image::imageops::colorops::BiLevel"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/io/struct.Reader.html\" title=\"struct image::io::Reader\">Reader</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::io::reader::Reader"]},{"text":"impl&lt;Buffer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/flat/struct.FlatSamples.html\" title=\"struct image::flat::FlatSamples\">FlatSamples</a>&lt;Buffer&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Buffer: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::flat::FlatSamples"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/flat/struct.SampleLayout.html\" title=\"struct image::flat::SampleLayout\">SampleLayout</a>","synthetic":true,"types":["image::flat::SampleLayout"]},{"text":"impl&lt;Buffer, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/flat/struct.View.html\" title=\"struct image::flat::View\">View</a>&lt;Buffer, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Buffer: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::flat::View"]},{"text":"impl&lt;Buffer, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"image/flat/struct.ViewMut.html\" title=\"struct image::flat::ViewMut\">ViewMut</a>&lt;Buffer, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Buffer: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["image::flat::ViewMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/flat/enum.Error.html\" title=\"enum image::flat::Error\">Error</a>","synthetic":true,"types":["image::flat::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"image/flat/enum.NormalForm.html\" title=\"enum image::flat::NormalForm\">NormalForm</a>","synthetic":true,"types":["image::flat::NormalForm"]}];
implementors["num_integer"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_integer/struct.ExtendedGcd.html\" title=\"struct num_integer::ExtendedGcd\">ExtendedGcd</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_integer::ExtendedGcd"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_integer/struct.IterBinomial.html\" title=\"struct num_integer::IterBinomial\">IterBinomial</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_integer::IterBinomial"]}];
implementors["num_iter"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_iter/struct.Range.html\" title=\"struct num_iter::Range\">Range</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_iter::Range"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_iter/struct.RangeInclusive.html\" title=\"struct num_iter::RangeInclusive\">RangeInclusive</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_iter::RangeInclusive"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_iter/struct.RangeStep.html\" title=\"struct num_iter::RangeStep\">RangeStep</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_iter::RangeStep"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_iter/struct.RangeStepInclusive.html\" title=\"struct num_iter::RangeStepInclusive\">RangeStepInclusive</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_iter::RangeStepInclusive"]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","synthetic":true,"types":["num_rational::Ratio"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_rational/struct.ParseRatioError.html\" title=\"struct num_rational::ParseRatioError\">ParseRatioError</a>","synthetic":true,"types":["num_rational::ParseRatioError"]}];
implementors["num_traits"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"num_traits/struct.ParseFloatError.html\" title=\"struct num_traits::ParseFloatError\">ParseFloatError</a>","synthetic":true,"types":["num_traits::ParseFloatError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"num_traits/enum.FloatErrorKind.html\" title=\"enum num_traits::FloatErrorKind\">FloatErrorKind</a>","synthetic":true,"types":["num_traits::FloatErrorKind"]}];
implementors["thumbnails"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/struct.Dimensions.html\" title=\"struct thumbnails::Dimensions\">Dimensions</a>","synthetic":true,"types":["thumbnails::Dimensions"]},{"text":"impl&lt;P&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/struct.Wrapper.html\" title=\"struct thumbnails::arch::windows::Wrapper\">Wrapper</a>&lt;P&gt;","synthetic":true,"types":["thumbnails::arch::windows::wrapper::Wrapper"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._LARGE_INTEGER__bindgen_ty_1.html\" title=\"struct thumbnails::arch::windows::sys::_LARGE_INTEGER__bindgen_ty_1\">_LARGE_INTEGER__bindgen_ty_1</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_LARGE_INTEGER__bindgen_ty_1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._LARGE_INTEGER__bindgen_ty_2.html\" title=\"struct thumbnails::arch::windows::sys::_LARGE_INTEGER__bindgen_ty_2\">_LARGE_INTEGER__bindgen_ty_2</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_LARGE_INTEGER__bindgen_ty_2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._ULARGE_INTEGER__bindgen_ty_1.html\" title=\"struct thumbnails::arch::windows::sys::_ULARGE_INTEGER__bindgen_ty_1\">_ULARGE_INTEGER__bindgen_ty_1</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_ULARGE_INTEGER__bindgen_ty_1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._ULARGE_INTEGER__bindgen_ty_2.html\" title=\"struct thumbnails::arch::windows::sys::_ULARGE_INTEGER__bindgen_ty_2\">_ULARGE_INTEGER__bindgen_ty_2</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_ULARGE_INTEGER__bindgen_ty_2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._GUID.html\" title=\"struct thumbnails::arch::windows::sys::_GUID\">_GUID</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_GUID"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct._FILETIME.html\" title=\"struct thumbnails::arch::windows::sys::_FILETIME\">_FILETIME</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_FILETIME"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.HBITMAP__.html\" title=\"struct thumbnails::arch::windows::sys::HBITMAP__\">HBITMAP__</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::HBITMAP__"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IUnknownVtbl.html\" title=\"struct thumbnails::arch::windows::sys::IUnknownVtbl\">IUnknownVtbl</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IUnknownVtbl"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IUnknown.html\" title=\"struct thumbnails::arch::windows::sys::IUnknown\">IUnknown</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IUnknown"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IClassFactoryVtbl.html\" title=\"struct thumbnails::arch::windows::sys::IClassFactoryVtbl\">IClassFactoryVtbl</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IClassFactoryVtbl"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IClassFactory.html\" title=\"struct thumbnails::arch::windows::sys::IClassFactory\">IClassFactory</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IClassFactory"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.tagSTATSTG.html\" title=\"struct thumbnails::arch::windows::sys::tagSTATSTG\">tagSTATSTG</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::tagSTATSTG"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IStreamVtbl.html\" title=\"struct thumbnails::arch::windows::sys::IStreamVtbl\">IStreamVtbl</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IStreamVtbl"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IStream.html\" title=\"struct thumbnails::arch::windows::sys::IStream\">IStream</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IInitializeWithStreamVtbl.html\" title=\"struct thumbnails::arch::windows::sys::IInitializeWithStreamVtbl\">IInitializeWithStreamVtbl</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IInitializeWithStreamVtbl"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IInitializeWithStream.html\" title=\"struct thumbnails::arch::windows::sys::IInitializeWithStream\">IInitializeWithStream</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IInitializeWithStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IThumbnailProviderVtbl.html\" title=\"struct thumbnails::arch::windows::sys::IThumbnailProviderVtbl\">IThumbnailProviderVtbl</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IThumbnailProviderVtbl"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"thumbnails/arch/windows/sys/struct.IThumbnailProvider.html\" title=\"struct thumbnails::arch::windows::sys::IThumbnailProvider\">IThumbnailProvider</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::IThumbnailProvider"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"union\" href=\"thumbnails/arch/windows/sys/union._LARGE_INTEGER.html\" title=\"union thumbnails::arch::windows::sys::_LARGE_INTEGER\">_LARGE_INTEGER</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_LARGE_INTEGER"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"union\" href=\"thumbnails/arch/windows/sys/union._ULARGE_INTEGER.html\" title=\"union thumbnails::arch::windows::sys::_ULARGE_INTEGER\">_ULARGE_INTEGER</a>","synthetic":true,"types":["thumbnails::arch::windows::sys::_ULARGE_INTEGER"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()