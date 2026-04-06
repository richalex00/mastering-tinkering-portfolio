// src/components/portfolio/SectionView.tsx
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";
import type { SectionEntry } from "@/data/sections";

// Parses **bold** and [link](url) inline markers
const renderHighlightedText = (text: string) => {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^\)]+\))/g)
    .map((segment, index) => {
      const boldMatch = segment.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <span key={`bold-${index}`} className="font-medium text-primary">
            {boldMatch[1]}
          </span>
        );
      }
      const linkMatch = segment.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={`link-${index}`}
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

// Renders multi-paragraph reflection text, treating **heading** lines specially
const renderReflection = (text: string) => {
  const bodyClass =
    "gallery-body max-w-2xl text-muted-foreground leading-relaxed whitespace-pre-line";

  if (!text.includes("**")) {
    return <p className={bodyClass}>{text}</p>;
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
                <p className={bodyClass}>{renderHighlightedText(body)}</p>
              ) : null}
            </div>
          );
        }

        return (
          <p key={index} className={bodyClass}>
            {renderHighlightedText(paragraph)}
          </p>
        );
      })}
    </div>
  );
};

interface SectionViewProps {
  section: SectionEntry;
}

const SectionView = ({ section }: SectionViewProps) => {
  const { id, title, date, reflection, images, subsections, postTitle, postReflection } = section;

  return (
    <article className="px-8 md:px-12 pt-10 pb-20 max-w-3xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <p className="gallery-label mb-1">{id}</p>
        {date && <p className="gallery-caption mb-4">{date}</p>}
        <h1 className="gallery-heading-lg mb-6">{title}</h1>
        {renderReflection(reflection)}
      </motion.div>

      {/* Primary images */}
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <ImageGallery images={images} />
        </motion.div>
      )}

      {/* Subsections */}
      {subsections && subsections.length > 0 && (
        <div className="mt-12 space-y-16">
          {subsections.map((sub, i) => (
            <motion.div
              key={`${sub.title}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="gallery-heading-md mb-4">{sub.title}</h2>
              <div className="mb-8">{renderReflection(sub.reflection)}</div>
              {sub.images.length > 0 && <ImageGallery images={sub.images} />}
            </motion.div>
          ))}
        </div>
      )}

      {/* Post content (e.g. POEMS report) */}
      {postReflection && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-14"
        >
          {postTitle && <h2 className="gallery-heading-md mb-4">{postTitle}</h2>}
          {renderReflection(postReflection)}
        </motion.div>
      )}
    </article>
  );
};

export default SectionView;
