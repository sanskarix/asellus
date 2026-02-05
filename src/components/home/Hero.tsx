import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  baseX: number;
  baseY: number;
}

export function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const starOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { damping: 20, mass: 0.5 });
  const springMouseY = useSpring(mouseY, { damping: 20, mass: 0.5 });
  const [loadingPhase, setLoadingPhase] = useState(true);
  const [inwardAnimation, setInwardAnimation] = useState(true);

  // Handle cursor movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create scroll transforms (outside of map)
  const starOutwardX = useTransform(scrollY, [0, 600], [0, 20]);
  const starOutwardY = useTransform(scrollY, [0, 600], [0, 20]);
  const starFadeOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Generate star field and handle animations
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const centerX = 50;
      const centerY = 50;

      for (let i = 0; i < 200; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 45 + 5;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        newStars.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * 3 + 2,
        });
      }
      setStars(newStars);
    };
    generateStars();

    // After 5 seconds, slow down the inward movement
    const timer = setTimeout(() => {
      setInwardAnimation(false);
      setLoadingPhase(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="editorial-section min-h-[100vh] flex items-center justify-center relative overflow-hidden py-20 md:py-0"
    >
      {/* Ultra-dark base background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[hsl(220,35%,2%)] via-[hsl(230,30%,3%)] to-[hsl(210,25%,2.5%)]"></div>

      {/* Galaxy and stars effect - dissolves on scroll */}
      <motion.div
        style={{ opacity: starOpacity }}
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        {/* Animated galaxy core glow */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-transparent blur-3xl"
        ></motion.div>

        {/* Secondary galaxy spiral effect */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-conic from-blue-600/10 via-purple-600/5 to-transparent blur-3xl"
        ></motion.div>

        {/* Starfield - individual twinkling stars with interactive movement */}
        {stars.map((star) => {
          // Calculate inward movement during loading phase
          const centerX = 50;
          const centerY = 50;
          const angle = Math.atan2(star.baseY - centerY, star.baseX - centerX);
          const distance = Math.sqrt(
            Math.pow(star.baseX - centerX, 2) + Math.pow(star.baseY - centerY, 2)
          );

          // Inward movement (first 5 seconds)
          const inwardX = inwardAnimation
            ? centerX + Math.cos(angle) * distance * 0.3
            : star.baseX;
          const inwardY = inwardAnimation
            ? centerY + Math.sin(angle) * distance * 0.3
            : star.baseY;

          // Calculate final position with scroll offset
          const finalX = inwardX + Math.cos(angle) * 20;
          const finalY = inwardY + Math.sin(angle) * 20;

          return (
            <motion.div
              key={star.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: useTransform(scrollY, [0, 600], [inwardX, finalX], {
                  clamp: false,
                }),
                top: useTransform(scrollY, [0, 600], [inwardY, finalY], {
                  clamp: false,
                }),
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `hsl(210, 100%, ${70 + Math.random() * 30}%)`,
                opacity: starFadeOpacity,
              }}
              animate={{
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            ></motion.div>
          );
        })}

        {/* Nebula clouds */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 left-1/3 w-[700px] h-[500px] rounded-full bg-gradient-to-tl from-purple-600/8 via-blue-600/4 to-transparent blur-3xl"
        ></motion.div>
      </motion.div>

      {/* Content - fades out as stars dissolve */}
      <div className="editorial-container relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-subheadline mb-8 text-primary/80"
          >
            Marketing that moves
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-display mb-10 leading-[0.95] font-serif"
          >
            We don't do hype.
            <br />
            <span className="text-muted-foreground">We do growth.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            A new-age marketing agency for brands that care about ROI. We build
            systems, test hypotheses, and scale what works. Quietly confident.
            Radically efficient.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Let's talk growth
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/work" className="btn-secondary inline-flex items-center">
                See our work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-muted-foreground/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
