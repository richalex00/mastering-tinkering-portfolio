import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="gallery-container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div className="max-w-md">
          <p className="gallery-label mb-4">End of Documentation</p>
          <p className="gallery-caption">
            This portfolio is a living document, developed over the course of
            Mastering Tinkering · EIT Digital · Human-Computer Interaction
          </p>
        </div>

        <div className="text-right">
          <p className="gallery-caption">
            Mastering Tinkering
            <br />
            Quater 3
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
