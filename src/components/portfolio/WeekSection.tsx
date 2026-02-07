import { motion } from "framer-motion";
import ImageGallery, { GalleryImage } from "./ImageGallery";

interface WeekSectionProps {
  weekNumber: number;
  title: string;
  date?: string;
  reflection: string;
  images: GalleryImage[];
  tags?: string[];
  title2?: string;
  date2?: string;
  reflection2?: string;
  images2?: GalleryImage[];
  tags2?: string[];
}

const WeekSection = ({
  weekNumber,
  title,
  date,
  reflection,
  images,
  tags,
  title2,
  date2,
  reflection2,
  images2,
  tags2,
}: WeekSectionProps) => {
  return (
    <section className="gallery-container py-16 md:py-24">
      {/* Week Header - Only shows week number once */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
      </motion.div>

      {/* First Assignment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 md:mb-14"
      >
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

      {/* Second Assignment (Optional) */}
      {title2 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 md:mb-14 mt-16 md:mt-24"
          >
            {date2 && (
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gallery-stone">·</span>
                <span className="gallery-caption">{date2}</span>
              </div>
            )}

            <h2 className="gallery-heading-lg mb-6">{title2}</h2>

            {tags2 && tags2.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags2.map((tag, index) => (
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
              {reflection2}
            </p>
          </motion.div>

          {/* Second Image Gallery */}
          {images2 && <ImageGallery images={images2} />}
        </>
      )}

      {/* Final Section Divider (Only if no second assignment) */}
      {!title2 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gallery-divider mt-16 md:mt-24 origin-left"
        />
      )}
    </section>
  );
};

export default WeekSection;
