import { motion } from "framer-motion";

const Header = () => {
  // Import your profile image here
  // import profileImage from "@/assets/your-profile-image.jpg";

  return (
    <header className="gallery-container pt-16 pb-20 md:pt-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="gallery-label mb-6">Quater 3 — Process Documentation</p>
        <h1 className="gallery-heading-xl mb-8">Mastering Tinkering</h1>
        <p className="gallery-body text-muted-foreground max-w-2xl">
          This portfolio documents my journey through{" "}
          <em className="text-foreground"> Mastering Tinkering</em>, a
          semester-long course centered on learning through making, iteration,
          and hands-on experimentation. Organised week by week, it brings
          together assignments, collaborative work, and personal reflections
          that trace my evolving understanding of tinkering as a practice. The
          work shown here includes both successes and productive failures,
          capturing the ongoing, imperfect process of learning by doing.
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
