import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect, MouseEvent } from "react";

const works = [
  {
    client: "Frido",
    category: "Content & Performance Marketing",
    description: "Produced UGC content in high volume and launched paid campaigns that didn't look like ads.",
    image: "/placeholder.svg",
  },
  {
    client: "mCaffeine",
    category: "Product Launch",
    description: "Crafted a product launch that generated 10,000+ orders in the first 48 hours, all by influencer marketing.",
    image: "/placeholder.svg",
  },
  {
    client: "Tokyo Laundry",
    category: "E-Commerce Growth",
    description: "Repositioned a legacy retail brand for the new generation. 340% increase in online revenue under 30 days.",
    image: "/placeholder.svg",
  },
];

function SpotlightCard({
  children,
  className = "",
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  mouseX: any;
  mouseY: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const updateBounds = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setBounds({ left: rect.left, top: rect.top });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds);
    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
    };
  }, []);

  const localX = useTransform(mouseX, (x: number) => x - bounds.left);
  const localY = useTransform(mouseY, (y: number) => y - bounds.top);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -3 }}
      className={`relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md ${className}`}
    >
      {/* Cinematic Spotlight Background */}
      <div className="absolute inset-0 bg-background/80 -z-20" />

      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300 -z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${localX}px ${localY}px,
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
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none -z-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function SelectedWork() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  return (
    <section className="editorial-section relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-headline">
              A few projects we’ve grown
            </h2>
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium link-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {works.map((work, index) => (
            <motion.article key={work.client} variants={itemVariants}>
              <SpotlightCard className="group" mouseX={mouseX} mouseY={mouseY}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <motion.div
                    className={`aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-muted/40 to-primary/8 flex items-center justify-center relative overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-5xl md:text-6xl font-serif text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors duration-500">
                      {work.client}
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-20"></div>
                  </motion.div>

                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-subheadline mb-2"
                    >
                      {work.category}
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="text-3xl md:text-4xl font-serif mb-6 transition-colors duration-300 relative z-10"
                    >
                      {work.client}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10"
                    >
                      {work.description}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Link
                        to="/work"
                        className="inline-flex items-center gap-2 text-sm font-medium link-underline text-muted-foreground hover:text-foreground transition-colors"
                      >
                        View case study
                        <ArrowUpRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
