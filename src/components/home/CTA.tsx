import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function CTA() {
  return (
    <section className="editorial-section relative overflow-hidden">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass-panel p-12 md:p-16 lg:p-24 text-center relative overflow-hidden group"
        >
          {/* Premium glow effects */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/15 blur-3xl"
            ></motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <motion.p
              variants={itemVariants}
              className="text-subheadline mb-6"
            >
              Ready to grow?
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-display mb-10 leading-[0.95]"
            >
              Let's make it happen.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              No pitch decks. No lengthy proposals. Just a conversation about what you're
              building and how we can help you grow.
            </motion.p>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact" className="btn-primary text-base">
                Start a conversation
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
