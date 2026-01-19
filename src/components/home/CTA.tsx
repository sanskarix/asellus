import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="editorial-section bg-foreground text-background">
      <div className="editorial-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-subheadline text-background/60 mb-6"
        >
          Ready to grow?
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-display text-background mb-8"
        >
          Let's make it happen.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-large text-background/70 max-w-xl mx-auto mb-10"
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
            className="btn-secondary border-background text-background hover:bg-background hover:text-foreground inline-flex items-center gap-2"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
