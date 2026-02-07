import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const services = [
  {
    title: "Strategy & Growth Marketing",
    description:
      "Strategies that adapt to market shifts and actually move your metrics.",
    accent: "hsl(210 50% 45%)",
  },
  {
    title: "Performance Marketing & Paid Ads",
    description:
      "Campaigns built to convert, not just look good on dashboards.",
    accent: "hsl(215 45% 45%)",
  },
  {
    title: "Content Creation & Social Media",
    description:
      "Content that builds an audience and shows up where they actually spend time.",
    accent: "hsl(205 55% 45%)",
  },
  {
    title: "Branding & Launch",
    description:
      "Branding and launches designed to be commercially useful, not just pretty.",
    accent: "hsl(210 50% 45%)",
  },
  {
    title: "Custom Development",
    description:
      "Websites, software, and tools built to global standards.",
    accent: "hsl(215 45% 45%)",
  },
];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15
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
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
export function Services() {
  return <section className="editorial-section">
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
      }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="max-w-xl">
            
            <h2 className="text-headline">What do we take care of</h2>
          </div>
          <motion.div whileHover={{
          x: 4
        }} transition={{
          duration: 0.3
        }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium link-underline text-muted-foreground hover:text-foreground transition-colors">
              See all services
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {services.map((service, index) => <motion.div key={service.title} variants={itemVariants} className="glass-card-hover p-8 group relative overflow-hidden">
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
            background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`
          }}></div>

              <h3 className="text-xl font-serif mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}