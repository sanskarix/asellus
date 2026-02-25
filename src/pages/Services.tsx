import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    title: "Branding",
    description: "Identity that cuts through the noise. We build brands that people remember, trust, and want to be associated with.",
    capabilities: ["Visual Identity", "Voice & Tone", "Art Direction", "Brand Guidelines"],
  },
  {
    title: "Strategy",
    description: "The blueprint for your growth. We analyze the market, understand your audience, and build a roadmap that gets you from where you are to where you want to be.",
    capabilities: ["Market Analysis", "Go-to-Market", "Positioning", "Growth Roadmap"],
  },
  {
    title: "Performance Marketing",
    description: "Paid media that actually pays back. We optimize for ROAS, not reach. Every campaign is built to deliver measurable, profitable growth.",
    capabilities: ["Paid Social", "Search Engine Marketing", "Conversion Optimization", "Analytics"],
  },
  {
    title: "Content and Social Media",
    description: "Storytelling that builds community. From creative concept to distribution, we handle your entire content engine to keep your brand top-of-mind.",
    capabilities: ["Content Creation", "Social Management", "Video Production", "Copywriting"],
  },
  {
    title: "Custom Development",
    description: "Software, tools, websites – everything. We build robust digital solutions tailored to your needs. See this website for instance, isn't it good?",
    capabilities: ["Web Development", "Custom Software", "App Development", "UI/UX Design"],
  },
];

function CTACard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({ clientX, clientY }: MouseEvent) {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const ctaText = "Not sure what you need? Let's figure it out together.";

  return (
    <div className="mt-16 md:mt-24" onMouseMove={handleMouseMove}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative overflow-hidden group min-h-[300px] flex flex-col justify-center items-center rounded-2xl"
      >
        {/* Cinematic Spotlight Background */}
        <div className="absolute inset-0 bg-background/90 -z-20" />

        <motion.div
          className="pointer-events-none absolute -inset-px transition duration-300 -z-10 hidden md:block"
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

        {/* Noise SVG fallback */}
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
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none z-0"
          style={{ skewX: "-20deg" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 py-12 sm:px-12 sm:py-16">
          <p className="text-body-large text-muted-foreground mb-8">
            {ctaText}
          </p>
          <div className="md:hover:scale-[1.02] transition-transform duration-300">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ServicesPage = () => {
  return (
    <Layout>
      <section className="editorial-section pt-24 md:pt-36">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 md:mb-20 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start"
          >
            <p className="text-subheadline mb-4">What we do</p>
            <h1 className="text-display mb-6">The full growth stack.</h1>
            <p className="text-body-large text-muted-foreground">
              We do everything that is required to move the needle – executed with precision and measured by results.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <GlassCard className="p-6 md:p-8 lg:p-10 group relative overflow-hidden">
                  {/* Subtle accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-center md:text-left">
                    <div className="lg:col-span-4 md:hover:translate-x-1 transition-transform duration-300">
                      <h2 className="text-2xl md:text-3xl font-serif transition-colors duration-300">
                        {service.title}
                      </h2>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:col-span-3 flex justify-center md:justify-start">
                      <ul className="space-y-3 text-left inline-block">
                        {service.capabilities.map((cap, capIndex) => (
                          <motion.li
                            key={cap}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + capIndex * 0.05, duration: 0.4 }}
                            className="text-sm text-muted-foreground flex items-center gap-2 group/item"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary transition-all duration-300 md:group-hover/item:scale-150"
                            ></span>
                            {cap}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>

          <CTACard />
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
