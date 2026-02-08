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
  isBurst?: boolean; // Flag for click-spawned stars
}

// ========== STARFIELD CONFIGURATION ==========
// Tweak these values to adjust starfield behavior
export const STARFIELD_CONFIG = {
  // DENSITY & PERFORMANCE
  MAX_PARTICLES: 120,        // Maximum stars on screen
  SPAWN_INTERVAL: 45,        // ms between spawning new particles
  INITIAL_PARTICLE_COUNT: 120, // Stars to spawn on load (match MAX for full start)
  
  // MOVEMENT
  PARTICLE_SPEED: 0.12,      // Units per frame
  FADE_START_PERCENT: 0.7,   // Start fading at 70% of journey
  
  // VISUALS
  MIN_PARTICLE_SIZE: 0.3,
  MAX_PARTICLE_SIZE: 1.4,
  MIN_INITIAL_OPACITY: 0.4,
  MAX_INITIAL_OPACITY: 0.9,
  
  // CLICK BURST
  BURST_COUNT: 12,           // Stars per click
  BURST_RADIUS: 8,           // Spread radius from click point (in %)
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
    BURST_COUNT,
    BURST_RADIUS,
  } = STARFIELD_CONFIG;

  // Spawn a particle with optional initial progress (for mature field on load)
  const spawnParticleWithProgress = useCallback((initialProgress: number = 0, burstOrigin?: { x: number; y: number }) => {
    if (starsRef.current.length >= MAX_PARTICLES) {
      // Remove oldest non-burst star to make room
      const oldestIndex = starsRef.current.findIndex(s => !s.isBurst);
      if (oldestIndex !== -1) {
        starsRef.current.splice(oldestIndex, 1);
      } else {
        return;
      }
    }

    const centerX = 50;
    const centerY = 50;
    let spawnX: number, spawnY: number;

    if (burstOrigin) {
      // Burst stars spawn near click position with random offset
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * BURST_RADIUS;
      spawnX = burstOrigin.x + Math.cos(angle) * radius;
      spawnY = burstOrigin.y + Math.sin(angle) * radius;
    } else {
      // Regular stars spawn from edges
      const edge = Math.floor(Math.random() * 4);
      const randomOffset = Math.random() * 100;
      switch (edge) {
        case 0: spawnX = randomOffset; spawnY = -5; break;
        case 1: spawnX = 105; spawnY = randomOffset; break;
        case 2: spawnX = randomOffset; spawnY = 105; break;
        case 3: spawnX = -5; spawnY = randomOffset; break;
        default: spawnX = 50; spawnY = 50;
      }
    }

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
      lifespan: 0,
      isBurst: !!burstOrigin,
    };

    const dx = targetX - spawnX;
    const dy = targetY - spawnY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    newStar.lifespan = distance / PARTICLE_SPEED;

    if (initialProgress > 0) {
      newStar.spawnTime = timeRef.current - initialProgress * newStar.lifespan;
      const clampedProgress = Math.min(initialProgress, 1);
      newStar.currentX = spawnX + (targetX - spawnX) * clampedProgress;
      newStar.currentY = spawnY + (targetY - spawnY) * clampedProgress;
    }

    starsRef.current.push(newStar);
  }, [MAX_PARTICLES, BURST_RADIUS, PARTICLE_SPEED, MIN_PARTICLE_SIZE, MAX_PARTICLE_SIZE, MIN_INITIAL_OPACITY, MAX_INITIAL_OPACITY]);

  const spawnParticle = useCallback(() => {
    spawnParticleWithProgress(0);
  }, [spawnParticleWithProgress]);

  // Click-to-spawn burst
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    for (let i = 0; i < BURST_COUNT; i++) {
      spawnParticleWithProgress(0, { x, y });
    }
  }, [BURST_COUNT, spawnParticleWithProgress]);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let frameCount = 0;
    
    const animate = () => {
      const now = performance.now();
      timeRef.current += 1;
      frameCount++;

      // Initialize with randomized progress for steady-state appearance
      if (!initializedRef.current) {
        for (let i = 0; i < INITIAL_PARTICLE_COUNT; i++) {
          // Distribute initial particles across 0-0.85 progress range
          // This ensures continuous flow from the first frame
          const randomProgress = Math.random() * 0.85;
          spawnParticleWithProgress(randomProgress);
        }
        initializedRef.current = true;
        lastSpawnTimeRef.current = now;
      }

      // Spawn new particles at interval
      if (now - lastSpawnTimeRef.current >= SPAWN_INTERVAL) {
        spawnParticle();
        lastSpawnTimeRef.current = now;
      }

      // Update positions and remove dead particles
      let hasChanges = false;
      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const star = starsRef.current[i];
        const age = timeRef.current - star.spawnTime;
        const progress = Math.min(age / star.lifespan, 1);
        
        if (progress >= 1) {
          starsRef.current.splice(i, 1);
          hasChanges = true;
        } else {
          star.currentX = star.spawnX + (star.targetCenterX - star.spawnX) * progress;
          star.currentY = star.spawnY + (star.targetCenterY - star.spawnY) * progress;
        }
      }

      // Enforce max limit
      if (starsRef.current.length > MAX_PARTICLES) {
        starsRef.current = starsRef.current.slice(-MAX_PARTICLES);
        hasChanges = true;
      }

      if (hasChanges || frameCount % 2 === 0) {
        setStars([...starsRef.current]);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [INITIAL_PARTICLE_COUNT, SPAWN_INTERVAL, MAX_PARTICLES, spawnParticle, spawnParticleWithProgress]);

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
    if (progress > FADE_START_PERCENT) {
      const fadeAmount = (progress - FADE_START_PERCENT) / (1 - FADE_START_PERCENT);
      opacity = star.initialOpacity * (1 - fadeAmount);
      scale = 1 - fadeAmount * 0.3;
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
      className="min-h-[100vh] flex items-center justify-center relative overflow-hidden -mt-28 pt-28"
    >
      {/* Ultra-dark background - extends behind header */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[hsl(220,30%,2%)] via-[hsl(230,25%,2.5%)] to-[hsl(210,28%,2%)]" />

      {/* Starfield layer - covers full viewport including header area */}
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
                backgroundColor: `hsl(210, 100%, 85%)`,
                opacity: pos.opacity,
                boxShadow: `0 0 ${star.size * pos.scale * 2}px hsl(210, 100%, 85%)`,
              }}
            />
          );
        })}
      </motion.div>

      {/* Content */}
      <div className="editorial-container relative z-10">
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
