import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { damping: 30, mass: 0.1 });
  const springY = useSpring(cursorY, { damping: 30, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none mix-blend-screen"
        style={{
          left: springX,
          top: springY,
          width: 30,
          height: 30,
          x: "-50%",
          y: "-50%",
          zIndex: 9999,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-xl"></div>
      </motion.div>

      {/* Subtle trailing effect */}
      <motion.div
        className="fixed pointer-events-none mix-blend-screen"
        style={{
          left: springX,
          top: springY,
          width: 50,
          height: 50,
          x: "-50%",
          y: "-50%",
          zIndex: 9998,
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
      </motion.div>
    </>
  );
}
