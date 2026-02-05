import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Star {
  id: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
}

export function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);
  const [, forceUpdate] = useState(0);
  const { scrollY } = useScroll();
  const starOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Generate minimal star field and animation loop
  useEffect(() => {
    const newStars: Star[] = [];
    const centerX = 50;
    const centerY = 50;

    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 40 + 10;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      newStars.push({
        id: i,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }
    setStars(newStars);

    // Animation loop for star drift
    let animationId: number;
    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      forceUpdate((prev) => prev + 1);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Track mouse position for fisheye effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX / rect.width,
          y: e.clientY / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate star position with subtle fisheye effect and inward drift with fade
  const getStarPos = (star: Star, time: number) => {
    const centerX = 50;
    const centerY = 50;

    // Continuous inward movement toward center with fade
    const driftSpeed = 0.003; // Very slow drift toward center
    const driftAmount = time * driftSpeed;
    const driftedX = centerX + (star.baseX - centerX) * (1 - driftAmount);
    const driftedY = centerY + (star.baseY - centerY) * (1 - driftAmount);

    // Distance from star to center (for fade calculation)
    const dx = driftedX - centerX;
    const dy = driftedY - centerY;
    const distFromCenter = Math.sqrt(dx * dx + dy * dy);

    // Mouse distance from drifted star position
    const mouseX = mousePos.x * 100;
    const mouseY = mousePos.y * 100;
    const dxMouse = driftedX - mouseX;
    const dyMouse = driftedY - mouseY;
    const distFromMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    // Subtle fisheye zoom effect - very gentle push away from cursor
    const hoverRadius = 30;
    const zoomStrength = Math.max(0, 1 - distFromMouse / hoverRadius) * 3; // Reduced from 15 to 3

    const normalizedDxMouse = dxMouse / (distFromMouse + 0.1);
    const normalizedDyMouse = dyMouse / (distFromMouse + 0.1);

    const finalX = driftedX + normalizedDxMouse * zoomStrength;
    const finalY = driftedY + normalizedDyMouse * zoomStrength;

    // Calculate fade based on distance from center
    const fadeDistance = 8; // Start fading when within 8% of center
    const opacity = distFromCenter < fadeDistance ? (distFromCenter / fadeDistance) * star.opacity : star.opacity;

    return { x: finalX, y: finalY, opacity };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="editorial-section min-h-[100vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Ultra-dark background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(230,25%,2.5%)] to-[hsl(210,28%,2%)]"></div>

      {/* Minimal stars field */}
      <motion.div
        style={{
          opacity: starOpacity,
        }}
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        {stars.map((star) => {
          const pos = getStarPos(star);
          return (
            <motion.div
              key={star.id}
              className="absolute rounded-full"
              animate={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `hsl(210, 100%, 85%)`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 2}px hsl(210, 100%, 85%)`,
              }}
            ></motion.div>
          );
        })}
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
