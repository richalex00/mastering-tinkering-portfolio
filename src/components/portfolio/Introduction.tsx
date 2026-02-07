import { motion } from "framer-motion";
import meInCorkNature from "@/assets/me_in_cork_nature.jpeg";

const Introduction = () => {
  return (
    <section className="gallery-container pb-16 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-start gap-12"
      >
        <div className="flex-1 min-w-0">
          <h2 className="gallery-heading-md mb-6">About Me</h2>
          <div className="space-y-4 gallery-body text-muted-foreground">
            <p>
              Hi there! I'm Richard, an EIT Digital student studying
              Human-Computer Interaction, with a strong interest in hands-on
              experimentation and learning through making. I am drawn to the
              intersection of design, technology, and human experience, and I
              use tinkering as a way to explore ideas, test assumptions, and
              reflect on how systems are experienced in practice.
            </p>
          </div>
        </div>

        {/* Profile Picture - Circular */}
        <div className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48 rounded-full bg-secondary overflow-hidden border-2 border-border mt-6 md:mt-14">
          <img
            src={meInCorkNature}
            alt="Profile"
            className="w-full h-full object-cover"
          />
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
