import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="editorial-section min-h-[85vh] flex items-center relative pt-24">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-display mb-6"
          >
            Real Growth. Every Day.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-body-large max-w-2xl mx-auto mb-10"
          >
            A new-age marketing agency for brands that care about ROI. 
            No vanity metrics. No decks. Just growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/contact" className="btn-primary">
              Let's talk growth
              <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn-secondary">
              See our work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <div className="stat-badge">
              <span className="font-bold text-foreground">50+</span>
              <span className="text-muted-foreground">Brands scaled</span>
            </div>
            <div className="stat-badge">
              <span className="font-bold text-foreground">₹100Cr+</span>
              <span className="text-muted-foreground">Revenue generated</span>
            </div>
            <div className="stat-badge">
              <span className="font-bold text-foreground">4.2x</span>
              <span className="text-muted-foreground">Average ROAS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}