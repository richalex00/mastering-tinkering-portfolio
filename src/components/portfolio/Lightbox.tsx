import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { GalleryImage } from "./ImageGallery";

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, startIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-[95%] max-h-[95%]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[80vh] object-contain rounded"
        />

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
          aria-label="Close"
        >
          ✕
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Lightbox;
