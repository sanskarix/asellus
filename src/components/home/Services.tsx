import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Branding & Strategy",
    description:
      "Strategies that adapt to market shifts and actually move your metrics.",
    accent: "linear-gradient(135deg, hsl(210 40% 55%), hsl(210 40% 45%))",
  },
  {
    title: "Performance Marketing",
    description:
      "Campaigns built to drive business, not just look good on dashboards.",
    accent: "linear-gradient(135deg, hsl(210 40% 55%), hsl(210 40% 45%))",
  },
  {
    title: "Content & Social Media",
    description:
      "Content that builds an audience and shows up where they spend time.",
    accent: "linear-gradient(135deg, hsl(210 40% 55%), hsl(210 40% 45%))",
  },
  {
    title: "Custom Development",
    description:
      "Websites, software, and tools built or redesigned to global standards.",
    accent: "linear-gradient(135deg, hsl(210 40% 55%), hsl(210 40% 45%))",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

type Service = (typeof services)[number];

export function Services() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-headline">What do we take care of</h2>
          </div>

          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium link-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              See all services
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={itemVariants}
      className="asellus-card group"
      style={
        {
          "--card-accent": service.accent,
        } as React.CSSProperties
      }
    >
      {/* ORBS REMOVED */}
      <div className="asellus-card-content">
        <h3 className="text-xl font-serif mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
