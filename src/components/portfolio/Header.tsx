import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="gallery-container pt-16 pb-20 md:pt-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="gallery-label mb-6">Spring 2024 — Process Documentation</p>
        <h1 className="gallery-heading-xl mb-8">Mastering Tinkering</h1>
        <p className="gallery-body text-muted-foreground max-w-2xl">
          A semester-long exploration of making, iterating, and learning through hands-on experimentation. 
          This portfolio documents weekly assignments, collaborative projects, and personal reflections 
          on the practice of tinkering.
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
