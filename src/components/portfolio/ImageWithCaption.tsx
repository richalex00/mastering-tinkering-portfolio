import { motion } from "framer-motion";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}

const ImageWithCaption = ({ 
  src, 
  alt, 
  caption, 
  aspectRatio = "landscape" 
}: ImageWithCaptionProps) => {
  const aspectClasses = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <div className={`${aspectClasses[aspectRatio]} overflow-hidden bg-muted`}>
        <img
          src={src}
          alt={alt}
          className="gallery-image w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="gallery-caption mt-3 italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export default ImageWithCaption;
