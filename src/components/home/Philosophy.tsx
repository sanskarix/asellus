import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";

export function Philosophy() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="editorial-section relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="editorial-container">
        <motion.div
          ref={cardRef}
          className="relative overflow-hidden group min-h-[500px] flex flex-col justify-center items-center rounded-2xl"
        >
          {/* Cinematic Spotlight Background */}
          <div className="absolute inset-0 bg-background/90 -z-20" /> {/* Dark base */}

          <motion.div
            className="pointer-events-none absolute -inset-px transition duration-300 -z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(14, 165, 233, 0.08),
                  transparent 80%
                )
              `,
            }}
          />

          {/* Film Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
            style={{ backgroundImage: 'url("/noise.png")', backgroundSize: '100px 100px' }}
          />

          {/* Just in case we don't have a noise image, use a CSS radial gradient fallback for texture */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none -z-10 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Delayed Glass Shine Effect */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "200%", opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none z-0"
            style={{ skewX: "-20deg" }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">


            <div className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
              {/* Split text for word-by-word reveal */}
              {("“The best marketing doesn’t feel like marketing.").split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(20px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <div className="inline-block mt-2">
                {("It just feels right.”").split(" ").map((word, i) => (
                  <motion.span
                    key={i + 10}
                    initial={{ opacity: 0, filter: "blur(20px)", y: 10 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.5 + i * 0.12, ease: "easeOut" }}
                    className="inline-block mr-3 text-muted-foreground/80"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
