import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect, MouseEvent } from "react";

const works = [
  {
    client: "Artisaire",
    category: "Brand & E-Commerce Strategy",
    description: "Built the digital presence for a luxury wax seal brand. Elevated their story from niche craft to aspirational lifestyle, driving a 4x jump in online revenue.",
    logo: "/logos/artisaire.svg",
  },
  {
    client: "mCaffeine",
    category: "Product Launch",
    description: "Crafted a product launch that generated 10,000+ orders in the first 48 hours, all driven by influencer marketing.",
    logo: "/logos/mcaffeine.svg",
  },
  {
    client: "GoodFair",
    category: "Brand Positioning & Growth",
    description: "Repositioned a sustainable thrift fashion brand for mainstream appeal. Strategic storytelling that landed them a Nordstrom partnership.",
    logo: "/logos/goodfair.svg",
  },
  {
    client: "Qure.ai",
    category: "Go-To-Market & Awareness",
    description: "Shaped the go-to-market narrative for an AI-powered radiology platform. Simplified deep tech into a story that resonated across 30+ countries.",
    logo: "/logos/qure.svg",
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
      className={`relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md md:hover:-translate-y-1 transition-transform duration-300 ${className}`}
    >
      {/* Cinematic Spotlight Background */}
      <div className="absolute inset-0 bg-background/80 -z-20" />

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

      {/* Spotlight overlay — on top of everything so it spans both panels */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition duration-300 z-30 rounded-xl hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${localX}px ${localY}px,
              rgba(14, 165, 233, 0.08),
              transparent 80%
            )
          `,
        }}
      />
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
    <section className="editorial-section relative overflow-hidden content-auto" onMouseMove={handleMouseMove}>
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left md:justify-between gap-4 md:gap-6 mb-10 md:mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-headline">
              A few projects we've grown
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
                  {/* ── Logo Panel ── */}
                  <motion.div
                    className={`aspect-[4/3] lg:aspect-auto flex items-center justify-center relative overflow-hidden md:hover:scale-[1.02] transition-transform duration-500 ${index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    style={{
                      background: "hsl(220 20% 5%)",
                    }}
                    whileInView={typeof window !== "undefined" && window.innerWidth < 768 ? { scale: 1.02 } : { scale: 1 }}
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                  >
                    {/* Breathing glow — reveals on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: "radial-gradient(ellipse at 50% 50%, hsl(210 50% 40% / 0.25) 0%, transparent 70%)",
                        animation: "logoPanelPulse 5s ease-in-out infinite",
                      }}
                      whileInView={typeof window !== "undefined" && window.innerWidth < 768 ? { opacity: 1 } : { opacity: 0 }}
                      viewport={{ margin: "-20% 0px -20% 0px" }}
                    />

                    {/* Subtle resting ambient glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none opacity-60 md:group-hover:opacity-0 transition-opacity duration-700"
                      style={{
                        background: "radial-gradient(ellipse at 50% 50%, hsl(220 15% 14%) 0%, transparent 70%)",
                        animation: "logoPanelPulse 6s ease-in-out infinite",
                      }}
                      whileInView={typeof window !== "undefined" && window.innerWidth < 768 ? { opacity: 0 } : { opacity: 0.6 }}
                      viewport={{ margin: "-20% 0px -20% 0px" }}
                    />

                    {/* Frosted glass panel */}
                    <div
                      className="relative z-10 flex items-center justify-center px-12 py-10 rounded-2xl transition-all duration-500"
                      style={{
                        background: "hsl(220 15% 10% / 0.5)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid hsl(0 0% 100% / 0.06)",
                        boxShadow: "inset 0 0.5px 0 hsl(0 0% 100% / 0.04)",
                      }}
                    >
                      <motion.img
                        src={work.logo}
                        alt={`${work.client} logo`}
                        loading="lazy"
                        decoding="async"
                        className="w-32 md:w-40 h-auto max-h-16 object-contain opacity-90 md:group-hover:opacity-100 transition-opacity duration-500"
                        whileInView={typeof window !== "undefined" && window.innerWidth < 768 ? { opacity: 1 } : { opacity: 0.9 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                      />
                    </div>

                    {/* Soft vignette */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ boxShadow: "inset 0 0 60px hsl(220 20% 3% / 0.6)" }}
                    />
                  </motion.div>

                  {/* ── Content Panel ── */}
                  <div className={`p-6 md:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-subheadline mb-2 text-center lg:text-left"
                    >
                      {work.category}
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="text-3xl md:text-4xl font-serif mb-6 transition-colors duration-300 relative z-10 text-center lg:text-left"
                    >
                      {work.client}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-muted-foreground text-lg leading-relaxed mb-8 relative z-10 text-center lg:text-left"
                    >
                      {work.description}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex justify-center lg:justify-start"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10 md:mt-16"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
