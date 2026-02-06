import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Star {
  id: number;
  spawnX: number;
  spawnY: number;
  currentX: number;
  currentY: number;
  targetCenterX: number;
  targetCenterY: number;
  size: number;
  initialOpacity: number;
  spawnTime: number;
  lifespan: number;
}

export function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);
  const { scrollY } = useScroll();
  const starOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // ========== CONFIGURATION ==========
  // DENSITY & PERFORMANCE: Adjust these to control visual density and frame rate
  const MAX_PARTICLES = 60; // Maximum number of stars on screen at once. Lower = less crowded, better performance. (40-80 recommended)
  const SPAWN_INTERVAL = 100; // Milliseconds between spawning new particles. Higher = fewer spawns, lower density. (80-150 recommended)
  const INITIAL_PARTICLE_COUNT = 60; // Number of particles to spawn immediately on load. Match MAX_PARTICLES for full start.

  // MOVEMENT: Speed and fade behavior
  const PARTICLE_SPEED = 0.25; // Units per frame (3x the previous speed of ~0.083)
  const FADE_START_PERCENT = 0.7; // Start fading at 70% of journey (last 30%)

  // VISUALS: Size and opacity ranges
  const MIN_PARTICLE_SIZE = 0.3;
  const MAX_PARTICLE_SIZE = 1.2;
  const MIN_INITIAL_OPACITY = 0.4;
  const MAX_INITIAL_OPACITY = 0.9;
  // ===================================

  const starsRef = useRef<Star[]>([]);
  const nextStarId = useRef(0);
  const lastSpawnTimeRef = useRef(0);
  const initializedRef = useRef(false);

  // Spawn a new particle from a random edge
  const spawnParticle = () => {
    const centerX = 50;
    const centerY = 50;
    let spawnX, spawnY;

    // Randomly choose which edge to spawn from (0=top, 1=right, 2=bottom, 3=left)
    const edge = Math.floor(Math.random() * 4);
    const randomOffset = Math.random() * 100;

    switch (edge) {
      case 0: // Top edge
        spawnX = randomOffset;
        spawnY = -5;
        break;
      case 1: // Right edge
        spawnX = 105;
        spawnY = randomOffset;
        break;
      case 2: // Bottom edge
        spawnX = randomOffset;
        spawnY = 105;
        break;
      case 3: // Left edge
        spawnX = -5;
        spawnY = randomOffset;
        break;
      default:
        spawnX = 50;
        spawnY = 50;
    }

    // Add slight randomization to trajectory for natural feel
    const targetX = centerX + (Math.random() - 0.5) * 10;
    const targetY = centerY + (Math.random() - 0.5) * 10;

    const newStar: Star = {
      id: nextStarId.current++,
      spawnX,
      spawnY,
      currentX: spawnX,
      currentY: spawnY,
      targetCenterX: targetX,
      targetCenterY: targetY,
      size: Math.random() * (MAX_PARTICLE_SIZE - MIN_PARTICLE_SIZE) + MIN_PARTICLE_SIZE,
      initialOpacity: Math.random() * (MAX_INITIAL_OPACITY - MIN_INITIAL_OPACITY) + MIN_INITIAL_OPACITY,
      spawnTime: timeRef.current,
      lifespan: 0, // Will be calculated based on distance
    };

    // Calculate lifespan based on distance to center
    const dx = targetX - spawnX;
    const dy = targetY - spawnY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    newStar.lifespan = distance / PARTICLE_SPEED;

    starsRef.current.push(newStar);
  };

  // Animation loop for particle movement and lifecycle
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      timeRef.current += 1;

      // Spawn new particles
      for (let i = 0; i < SPAWN_RATE; i++) {
        spawnParticle();
      }

      // Update particle positions and remove dead ones
      starsRef.current = starsRef.current.filter((star) => {
        const age = timeRef.current - star.spawnTime;
        const progress = Math.min(age / star.lifespan, 1);

        if (progress >= 1) {
          return false; // Remove particle
        }

        // Linear movement toward center
        star.currentX = star.spawnX + (star.targetCenterX - star.spawnX) * progress;
        star.currentY = star.spawnY + (star.targetCenterY - star.spawnY) * progress;

        return true; // Keep particle
      });

      setStars([...starsRef.current]);
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

  // Calculate star position with subtle fisheye effect and fade/scale based on lifespan
  const getStarPos = (star: Star) => {
    const centerX = 50;
    const centerY = 50;

    let displayX = star.currentX;
    let displayY = star.currentY;

    // Apply fisheye hover effect (preserved from original)
    const mouseX = mousePos.x * 100;
    const mouseY = mousePos.y * 100;
    const dxMouse = displayX - mouseX;
    const dyMouse = displayY - mouseY;
    const distFromMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    // Subtle fisheye zoom effect - very gentle push away from cursor
    const hoverRadius = 30;
    const zoomStrength = Math.max(0, 1 - distFromMouse / hoverRadius) * 3;

    const normalizedDxMouse = dxMouse / (distFromMouse + 0.1);
    const normalizedDyMouse = dyMouse / (distFromMouse + 0.1);

    const finalX = displayX + normalizedDxMouse * zoomStrength;
    const finalY = displayY + normalizedDyMouse * zoomStrength;

    // Calculate progress through lifespan (0 to 1)
    const age = timeRef.current - star.spawnTime;
    const progress = Math.min(age / star.lifespan, 1);

    // Fade and scale in the last 25-30% of journey
    let opacity = star.initialOpacity;
    let scale = 1;

    if (progress > FADE_START_PERCENT) {
      // Calculate fade amount (0 to 1, where 1 means fully faded)
      const fadeAmount = (progress - FADE_START_PERCENT) / (1 - FADE_START_PERCENT);
      opacity = star.initialOpacity * (1 - fadeAmount);
      scale = 1 - fadeAmount * 0.3; // Shrink by up to 30% as it fades
    }

    return { x: finalX, y: finalY, opacity, scale };
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
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${star.size * pos.scale}px`,
                height: `${star.size * pos.scale}px`,
                backgroundColor: `hsl(210, 100%, 85%)`,
                opacity: pos.opacity,
                boxShadow: `0 0 ${star.size * pos.scale * 2}px hsl(210, 100%, 85%)`,
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
