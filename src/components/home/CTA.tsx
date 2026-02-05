import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="editorial-section relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-16 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle glow behind CTA */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-3xl"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-subheadline mb-6"
          >
            Ready to grow?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-8"
          >
            Let's make it happen.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-large text-muted-foreground max-w-xl mx-auto mb-10"
          >
            No pitch decks. No lengthy proposals. Just a conversation about what 
            you're building and how we can help you grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}