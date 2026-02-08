import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const differentiators = [{
  title: "Branding that feels global",
  description: "Your brand shouldn’t feel ‘local‑agency made’. We design identity and touchpoints that look at home in any market."
}, {
  title: "Strategy before tactics",
  description: "No more random hacks. We build a clear growth strategy first, then choose channels and experiments that compound."
}, {
  title: "Clear, direct communication",
  description: "No corporate theatre, no buzzword soup. You get simple language, sharp thinking, and calls that actually move work forward."
}, {
  title: "Polish in every detail",
  description: "From copy to creatives to reporting, we sweat the small stuff so your brand comes across as considered, credible, and premium."
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};
export function Differentiators() {
  return <section className="editorial-section relative overflow-hidden">
      <div className="editorial-container">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-xl mb-20">
          
          <h2 className="text-headline">
            What makes us different
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {differentiators.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <GlassCard className="p-8 h-full group">
                <h3 className="text-2xl md:text-3xl font-serif mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>;
}