import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="editorial-section min-h-[90vh] flex items-center relative">
      <div className="editorial-container">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-subheadline mb-6"
          >
            Marketing that moves
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mb-8"
          >
            We don't do hype.
            <br />
            <span className="text-muted-foreground">We do growth.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-large text-muted-foreground max-w-xl mb-10"
          >
            A new-age marketing agency for brands that care about real results. 
            Clear strategies. Fast experiments. No bullshit.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Let's talk growth
              <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn-secondary">
              See our work
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle gradient glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] -z-10 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
    </section>
  );
}