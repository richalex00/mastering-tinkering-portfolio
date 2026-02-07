import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="gallery-container pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl"
      >
        <h2 className="gallery-heading-md mb-6">About This Portfolio</h2>
        <div className="space-y-4 gallery-body text-muted-foreground">
          <p>
            This digital space serves as a living document of my journey through 
            <em className="text-foreground"> Mastering Tinkering</em>, a course 
            dedicated to hands-on learning and iterative making.
          </p>
          <p>
            Each week brings new challenges: from material explorations and rapid 
            prototyping to collaborative problem-solving and reflective practice. 
            The work documented here represents both successes and productive failures—
            the messy, beautiful process of learning by doing.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="gallery-divider mt-16 md:mt-24 origin-left"
      />
    </section>
  );
};

export default Introduction;
