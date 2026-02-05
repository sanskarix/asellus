import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, FileText, GitBranch, Rocket, FlaskConical, Sparkles } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description: "Paid media that actually pays back. Meta, Google, TikTok—optimized for ROAS, not reach.",
  },
  {
    icon: FileText,
    title: "Content Systems",
    description: "Scalable content engines that keep your brand visible and relevant across every platform.",
  },
  {
    icon: GitBranch,
    title: "Funnel Architecture",
    description: "From awareness to conversion. We build journeys that guide, not push.",
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description: "Product launches, brand launches, campaign launches—executed with precision.",
  },
  {
    icon: FlaskConical,
    title: "Growth Experiments",
    description: "Rapid testing frameworks that find what works before budgets run dry.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Positioning that cuts through. Messaging that sticks. Identity that lasts.",
  },
];

export function Services() {
  return (
    <section className="editorial-section relative z-10">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-headline mb-4">The full growth stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Everything you need to scale, nothing you don't.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
          >
            View all solutions <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Link to="/services" className="glass-card-hover p-6 flex gap-4 group block h-full">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                  <service.icon className="text-foreground" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}