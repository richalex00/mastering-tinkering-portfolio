import { motion } from "framer-motion";
import ImageWithCaption from "./ImageWithCaption";
import { useState } from "react";
import Lightbox from "./Lightbox";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "landscape" | "portrait" | "square" | "auto";
  span?: "normal" | "wide";
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={image.span === "wide" ? "md:col-span-2" : ""}
          >
            <ImageWithCaption
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              aspectRatio={image.aspectRatio}
              onClick={() => setOpenIndex(index)}
            />
          </div>
        ))}
      </motion.div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default ImageGallery;
