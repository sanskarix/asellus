import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export function Hero() {
  return (
    <section className="editorial-section min-h-[100vh] flex items-center justify-center relative overflow-hidden py-20 md:py-0">
      {/* Premium layered background with animated gradients */}
      <div className="absolute inset-0 -z-20">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,30%,6%)] via-[hsl(230,25%,10%)] to-[hsl(210,20%,8%)]"></div>

        {/* Animated premium glows */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl pointer-events-none"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-slate-700/15 blur-3xl pointer-events-none"
        ></motion.div>
      </div>

      {/* Experimental layered glass content */}
      <div className="editorial-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main content with text */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-subheadline mb-6 inline-block px-4 py-2 rounded-lg glass-card"
            >
              Marketing that moves
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-display mb-8 leading-[0.95]"
            >
              We don't do hype.
              <br />
              <span className="text-muted-foreground">We do growth.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body-large text-muted-foreground max-w-lg mb-12 leading-relaxed"
            >
              A new-age marketing agency for brands that care about ROI. We build systems, test hypotheses, and scale what works.
            </motion.p>

            <motion.div
              variants={itemVariants}
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
          </motion.div>

          {/* Experimental visual motif - System/Grid concept */}
          <motion.div
            className="lg:col-span-5 relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Glass panel system visualization */}
            <div className="absolute inset-0 flex flex-col gap-4 perspective">
              {/* Top glass strip */}
              <motion.div
                className="glass-card p-4 flex items-center justify-between h-20"
                whileHover={{ y: -4, boxShadow: "0 20px 60px hsl(220 40% 5% / 0.5)" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                  <span className="text-xs font-medium text-primary">System</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                </div>
              </motion.div>

              {/* Middle glass panels - staggered */}
              <div className="flex gap-4 flex-1">
                <motion.div
                  className="glass-card flex-1 p-5 flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/30"></div>
                    <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
                    <div className="h-1 w-16 bg-primary/10 rounded-full"></div>
                  </div>
                  <span className="text-xs text-primary/60 font-mono">experiments</span>
                </motion.div>

                <motion.div
                  className="glass-card flex-1 p-5 flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/25"></div>
                    <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
                    <div className="h-1 w-14 bg-primary/10 rounded-full"></div>
                  </div>
                  <span className="text-xs text-primary/60 font-mono">channels</span>
                </motion.div>
              </div>

              {/* Bottom glass element */}
              <motion.div
                className="glass-card p-4 h-16 flex items-center justify-between"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-primary font-mono">growth.loop</span>
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full"></div>
              </motion.div>
            </div>

            {/* Subtle glow effect behind visualization */}
            <div className="absolute -inset-20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl -z-10 animate-glow-pulse"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements for premium feel */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-blue-900/5 blur-3xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>
    </section>
  );
}
