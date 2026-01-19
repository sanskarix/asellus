import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    description: "Paid media that actually pays back. Meta, Google, TikTok—optimized for ROAS, not reach.",
  },
  {
    title: "Content Systems",
    description: "Scalable content engines that keep your brand visible and relevant across every platform.",
  },
  {
    title: "Funnel Architecture",
    description: "From awareness to conversion. We build journeys that guide, not push.",
  },
  {
    title: "Launch Strategy",
    description: "Product launches, brand launches, campaign launches—executed with precision.",
  },
  {
    title: "Growth Experiments",
    description: "Rapid testing frameworks that find what works before budgets run dry.",
  },
  {
    title: "Brand Strategy",
    description: "Positioning that cuts through. Messaging that sticks. Identity that lasts.",
  },
];

export function Services() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-subheadline mb-4">What we do</p>
            <h2 className="text-headline">
              The full growth stack
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium link-underline text-muted-foreground hover:text-foreground transition-colors"
          >
            See all services
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-card-hover p-8"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}