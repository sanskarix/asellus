import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-subheadline mb-8"
          >
            Our philosophy
          </motion.p>
          
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
          >
            "Marketing isn't about being loud.
            <br />
            <span className="text-muted-foreground">It's about being right—at the right time, in the right place, with the right message."</span>
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="w-12 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground tracking-wide">The Asellus Way</span>
            <div className="w-12 h-px bg-border"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
