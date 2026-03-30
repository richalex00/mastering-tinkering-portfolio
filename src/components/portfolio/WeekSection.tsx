import { motion } from "framer-motion";
import ImageGallery, { GalleryImage } from "./ImageGallery";

const renderHighlightedText = (text: string) => {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^\)]+\))/g)
    .map((segment, index) => {
      const boldMatch = segment.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <span
            key={`${boldMatch[1]}-${index}`}
            className="font-medium text-primary"
          >
            {boldMatch[1]}
          </span>
        );
      }

      const linkMatch = segment.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={`${linkMatch[1]}-${index}`}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            {linkMatch[1]}
          </a>
        );
      }

      return segment;
    });
};

const renderReflectionContent = (text: string, className: string) => {
  if (!text.includes("**")) {
    return <p className={className}>{text}</p>;
  }

  const paragraphs = text.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="max-w-2xl space-y-6">
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("\n");
        const headingMatch = lines[0]?.trim().match(/^\*\*(.+)\*\*$/);

        if (headingMatch) {
          const body = lines.slice(1).join("\n");

          return (
            <div key={index} className="space-y-2">
              <p className="gallery-body leading-relaxed font-medium text-primary">
                {headingMatch[1]}
              </p>
              {body ? (
                <p className={className}>{renderHighlightedText(body)}</p>
              ) : null}
            </div>
          );
        }

        return (
          <p key={index} className={className}>
            {renderHighlightedText(paragraph)}
          </p>
        );
      })}
    </div>
  );
};

interface WeekSectionProps {
  weekNumber: number | string;
  sectionLabel?: string;
  containerClassName?: string;
  title: string;
  date?: string;
  reflection: string;
  images: GalleryImage[];
  tags?: string[];
  subsections?: {
    title: string;
    reflection: string;
    images: GalleryImage[];
  }[];
  title2?: string;
  date2?: string;
  reflection2?: string;
  images2?: GalleryImage[];
  tags2?: string[];
  postTitle2?: string;
  postReflection2?: string;
}

const WeekSection = ({
  weekNumber,
  sectionLabel = "Week",
  containerClassName,
  title,
  date,
  reflection,
  images,
  tags,
  subsections,
  title2,
  date2,
  reflection2,
  images2,
  tags2,
  postTitle2,
  postReflection2,
}: WeekSectionProps) => {
  const hasImages = images.length > 0;
  const hasSecondaryImages = Boolean(images2 && images2.length > 0);

  return (
    <section
      className={`${containerClassName ?? "gallery-container"} pt-8 pb-16 md:pt-12 md:pb-24`}
    >
      {/* Week Header - Only shows week number once */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-baseline gap-4 mb-4">
          <span className="gallery-label">
            {sectionLabel} {weekNumber}
          </span>
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
        {renderReflectionContent(
          reflection,
          "gallery-body max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line",
        )}
      </motion.div>

      {/* Image Gallery */}
      {hasImages && <ImageGallery images={images} />}

      {subsections && subsections.length > 0 && (
        <div
          className={`${hasImages ? "mt-16 md:mt-20" : "mt-8 md:mt-10"} space-y-16`}
        >
          {subsections.map((subsection, index) => (
            <motion.div
              key={`${subsection.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="gallery-heading-md mb-4">{subsection.title}</h3>
              <div className="mb-8">
                {renderReflectionContent(
                  subsection.reflection,
                  "gallery-body max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line",
                )}
              </div>
              <ImageGallery images={subsection.images} />
            </motion.div>
          ))}
        </div>
      )}

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

            {renderReflectionContent(
              reflection2,
              "gallery-body max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line",
            )}
          </motion.div>

          {/* Second Image Gallery */}
          {hasSecondaryImages && <ImageGallery images={images2!} />}
        </>
      )}

      {postReflection2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={title2 ? "mt-10 md:mt-14" : "mt-16 md:mt-20"}
        >
          {postTitle2 && (
            <h3 className="gallery-heading-md mb-4">{postTitle2}</h3>
          )}
          {renderReflectionContent(
            postReflection2,
            "gallery-body text-muted-foreground leading-relaxed whitespace-pre-line",
          )}
        </motion.div>
      )}

      {/* Final Section Divider (Only if no second assignment) */}
      {!title2 && !postReflection2 && (
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
