import { motion } from "framer-motion";
import ImageGallery, { GalleryImage } from "./ImageGallery";

interface WeekSectionProps {
  weekNumber: number;
  title: string;
  date?: string;
  reflection: string;
  images: GalleryImage[];
  tags?: string[];
}

const WeekSection = ({
  weekNumber,
  title,
  date,
  reflection,
  images,
  tags,
}: WeekSectionProps) => {
  return (
    <section className="gallery-container py-16 md:py-24">
      {/* Week Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 md:mb-14"
      >
        <div className="flex items-baseline gap-4 mb-4">
          <span className="gallery-label">Week {weekNumber}</span>
          {date && (
            <>
              <span className="text-gallery-stone">·</span>
              <span className="gallery-caption">{date}</span>
            </>
          )}
        </div>
        
        <h2 className="gallery-heading-lg mb-6">{title}</h2>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs tracking-wide bg-secondary text-secondary-foreground rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="gallery-body max-w-2xl text-muted-foreground leading-relaxed">
          {reflection}
        </p>
      </motion.div>

      {/* Image Gallery */}
      <ImageGallery images={images} />

      {/* Section Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="gallery-divider mt-16 md:mt-24 origin-left"
      />
    </section>
  );
};

export default WeekSection;
