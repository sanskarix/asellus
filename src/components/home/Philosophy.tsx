import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="editorial-section relative z-10">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 lg:p-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Our philosophy
            </motion.p>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight"
            >
              "Marketing isn't about being loud.{" "}
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
              <span className="text-sm text-muted-foreground font-medium">The Asellus Way</span>
              <div className="w-12 h-px bg-border"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}