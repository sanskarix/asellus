import { useEffect, useRef, useState, useCallback } from "react";
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
  isSpark?: boolean; // Spark burst particles (smaller, faster fade)
}

// ========== STARFIELD CONFIGURATION ==========
// Tweak these values to adjust starfield behavior
export const STARFIELD_CONFIG = {
  // DENSITY & PERFORMANCE
  MAX_PARTICLES: 150,        // Maximum stars on screen
  SPAWN_INTERVAL: 50,        // ms between spawning new particles
  INITIAL_PARTICLE_COUNT: 100, // Stars to spawn on load with randomized progress
  
  // MOVEMENT
  PARTICLE_SPEED: 0.12,      // Units per frame (edge→center journey)
  FADE_START_PERCENT: 0.7,   // Start fading at 70% of journey
  
  // VISUALS
  MIN_PARTICLE_SIZE: 0.4,
  MAX_PARTICLE_SIZE: 1.5,
  MIN_INITIAL_OPACITY: 0.4,
  MAX_INITIAL_OPACITY: 0.9,
  
  // CLICK BURST - Spark effect
  SPARK_COUNT: 14,           // Sparks per click
  SPARK_RADIUS: 6,           // Initial spread radius (in %)
  SPARK_SIZE_MULT: 0.6,      // Smaller than regular stars
  SPARK_LIFESPAN_MULT: 0.4,  // Shorter lifespan for quick fade
};
// =============================================

export function Hero() {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);
  const { scrollY } = useScroll();
  const starOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const starsRef = useRef<Star[]>([]);
  const nextStarId = useRef(0);
  const lastSpawnTimeRef = useRef(0);
  const initializedRef = useRef(false);

  const {
    MAX_PARTICLES,
    SPAWN_INTERVAL,
    INITIAL_PARTICLE_COUNT,
    PARTICLE_SPEED,
    FADE_START_PERCENT,
    MIN_PARTICLE_SIZE,
    MAX_PARTICLE_SIZE,
    MIN_INITIAL_OPACITY,
    MAX_INITIAL_OPACITY,
    SPARK_COUNT,
    SPARK_RADIUS,
    SPARK_SIZE_MULT,
    SPARK_LIFESPAN_MULT,
  } = STARFIELD_CONFIG;

  // Spawn a regular background star with optional initial progress
  const spawnBackgroundStar = useCallback((initialProgress: number = 0) => {
    const centerX = 50;
    const centerY = 50;
    
    // Spawn from edges
    const edge = Math.floor(Math.random() * 4);
    const randomOffset = Math.random() * 100;
    let spawnX: number, spawnY: number;
    
    switch (edge) {
      case 0: spawnX = randomOffset; spawnY = -5; break;
      case 1: spawnX = 105; spawnY = randomOffset; break;
      case 2: spawnX = randomOffset; spawnY = 105; break;
      case 3: spawnX = -5; spawnY = randomOffset; break;
      default: spawnX = 50; spawnY = 50;
    }

    const targetX = centerX + (Math.random() - 0.5) * 10;
    const targetY = centerY + (Math.random() - 0.5) * 10;
    
    const dx = targetX - spawnX;
    const dy = targetY - spawnY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const lifespan = distance / PARTICLE_SPEED;

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
      lifespan,
      isSpark: false,
    };

    // Apply initial progress for steady-state initialization
    if (initialProgress > 0) {
      newStar.spawnTime = timeRef.current - initialProgress * lifespan;
      const clampedProgress = Math.min(initialProgress, 1);
      newStar.currentX = spawnX + (targetX - spawnX) * clampedProgress;
      newStar.currentY = spawnY + (targetY - spawnY) * clampedProgress;
    }

    starsRef.current.push(newStar);
  }, [PARTICLE_SPEED, MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE, MIN_INITIAL_OPACITY, MAX_INITIAL_OPACITY]);

  // Spawn spark burst particles at click position
  const spawnSparkBurst = useCallback((clickX: number, clickY: number) => {
    for (let i = 0; i < SPARK_COUNT; i++) {
      // Radiate outward from click position
      const angle = (i / SPARK_COUNT) * Math.PI * 2 + Math.random() * 0.3;
      const radiusOffset = Math.random() * SPARK_RADIUS;
      
      const spawnX = clickX + Math.cos(angle) * radiusOffset;
      const spawnY = clickY + Math.sin(angle) * radiusOffset;
      
      // Sparks move outward, away from click point
      const outwardDistance = 15 + Math.random() * 10;
      const targetX = clickX + Math.cos(angle) * outwardDistance;
      const targetY = clickY + Math.sin(angle) * outwardDistance;
      
      const dx = targetX - spawnX;
      const dy = targetY - spawnY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const lifespan = (distance / PARTICLE_SPEED) * SPARK_LIFESPAN_MULT;

      const spark: Star = {
        id: nextStarId.current++,
        spawnX,
        spawnY,
        currentX: spawnX,
        currentY: spawnY,
        targetCenterX: targetX,
        targetCenterY: targetY,
        size: (Math.random() * (MAX_PARTICLE_SIZE - MIN_PARTICLE_SIZE) + MIN_PARTICLE_SIZE) * SPARK_SIZE_MULT,
        initialOpacity: 0.8 + Math.random() * 0.2, // Bright initial burst
        spawnTime: timeRef.current,
        lifespan,
        isSpark: true,
      };

      starsRef.current.push(spark);
    }
  }, [SPARK_COUNT, SPARK_RADIUS, SPARK_LIFESPAN_MULT, SPARK_SIZE_MULT, PARTICLE_SPEED, MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE]);

  // Click handler - adds sparks without removing existing stars
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    spawnSparkBurst(x, y);
    
    // Only trim if over max, and only remove oldest non-spark background stars
    if (starsRef.current.length > MAX_PARTICLES) {
      const excess = starsRef.current.length - MAX_PARTICLES;
      let removed = 0;
      starsRef.current = starsRef.current.filter(star => {
        if (removed >= excess) return true;
        if (!star.isSpark) {
          removed++;
          return false;
        }
        return true;
      });
    }
  }, [spawnSparkBurst, MAX_PARTICLES]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let frameCount = 0;
    
    const animate = () => {
      const now = performance.now();
      timeRef.current += 1;
      frameCount++;

      // Initialize with randomized progress for immediate steady-state
      if (!initializedRef.current) {
        for (let i = 0; i < INITIAL_PARTICLE_COUNT; i++) {
          const randomProgress = Math.random() * 0.85;
          spawnBackgroundStar(randomProgress);
        }
        initializedRef.current = true;
        lastSpawnTimeRef.current = now;
      }

      // Spawn new background particles at interval
      if (now - lastSpawnTimeRef.current >= SPAWN_INTERVAL) {
        // Only spawn if under soft limit for background stars
        const bgCount = starsRef.current.filter(s => !s.isSpark).length;
        if (bgCount < MAX_PARTICLES - 20) {
          spawnBackgroundStar();
        }
        lastSpawnTimeRef.current = now;
      }

      // Update positions and remove completed particles
      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const star = starsRef.current[i];
        const age = timeRef.current - star.spawnTime;
        const progress = Math.min(age / star.lifespan, 1);
        
        if (progress >= 1) {
          starsRef.current.splice(i, 1);
        } else {
          star.currentX = star.spawnX + (star.targetCenterX - star.spawnX) * progress;
          star.currentY = star.spawnY + (star.targetCenterY - star.spawnY) * progress;
        }
      }

      // Update state every 2 frames for performance
      if (frameCount % 2 === 0) {
        setStars([...starsRef.current]);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [INITIAL_PARTICLE_COUNT, SPAWN_INTERVAL, MAX_PARTICLES, spawnBackgroundStar]);

  // Mouse tracking for fisheye effect
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

  // Calculate star position with fisheye effect and fade
  const getStarPos = (star: Star) => {
    let displayX = star.currentX;
    let displayY = star.currentY;

    // Fisheye hover effect
    const mouseX = mousePos.x * 100;
    const mouseY = mousePos.y * 100;
    const dxMouse = displayX - mouseX;
    const dyMouse = displayY - mouseY;
    const distFromMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    const hoverRadius = 30;
    const zoomStrength = Math.max(0, 1 - distFromMouse / hoverRadius) * 3;
    const normalizedDxMouse = dxMouse / (distFromMouse + 0.1);
    const normalizedDyMouse = dyMouse / (distFromMouse + 0.1);
    const finalX = displayX + normalizedDxMouse * zoomStrength;
    const finalY = displayY + normalizedDyMouse * zoomStrength;

    // Fade and scale near end of journey
    const age = timeRef.current - star.spawnTime;
    const progress = Math.min(age / star.lifespan, 1);

    let opacity = star.initialOpacity;
    let scale = 1;
    
    // Sparks fade faster
    const fadeStart = star.isSpark ? 0.3 : FADE_START_PERCENT;
    if (progress > fadeStart) {
      const fadeAmount = (progress - fadeStart) / (1 - fadeStart);
      opacity = star.initialOpacity * (1 - fadeAmount);
      scale = 1 - fadeAmount * 0.5;
    }

    return { x: finalX, y: finalY, opacity, scale };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={containerRef}
      onClick={handleClick}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ultra-dark background - extends full viewport */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(230,25%,2.5%)] to-[hsl(210,28%,2%)]" />

      {/* Starfield layer - covers full viewport including behind header */}
      <motion.div
        style={{ opacity: starOpacity }}
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
                backgroundColor: star.isSpark 
                  ? `hsl(200, 100%, 90%)` 
                  : `hsl(210, 100%, 85%)`,
                opacity: pos.opacity,
                boxShadow: star.isSpark
                  ? `0 0 ${star.size * pos.scale * 3}px hsl(200, 100%, 90%)`
                  : `0 0 ${star.size * pos.scale * 2}px hsl(210, 100%, 85%)`,
              }}
            />
          );
        })}
      </motion.div>

      {/* Content - centered with header offset compensation */}
      <div className="editorial-container relative z-10 pt-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-display mb-10 leading-[1.05]"
          >
            We don't do hype.
            <br />
            <span className="text-muted-foreground">We do growth.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-14 leading-relaxed"
          >
            New-age marketing for brands that care about ROI.
            We build systems, test aggressively, and scale what works.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
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
    </section>
  );
}
