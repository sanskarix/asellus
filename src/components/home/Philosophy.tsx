import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="editorial-section relative overflow-hidden">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass-panel p-12 md:p-16 lg:p-20 relative overflow-hidden group"
        >
          {/* Subtle glow behind panel */}
          <div className="absolute -inset-20 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-subheadline mb-10"
            >
              Our philosophy
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight"
            >
              "Marketing isn't about being loud.
              <br />
              <span className="text-muted-foreground">It's about being right—at the right time, in the right place, with the right message."</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 flex items-center justify-center gap-6"
            >
              <motion.div
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              ></motion.div>
              <span className="text-sm text-primary/80 font-medium tracking-widest">THE ASELLUS WAY</span>
              <motion.div
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
