import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const differentiators = [
  {
    icon: Target,
    title: "No vanity metrics",
    description: "We measure what matters. Revenue, retention, real growth—not followers and impressions that don't convert.",
    link: "/work",
  },
  {
    icon: Zap,
    title: "No endless decks",
    description: "Strategy is nothing without execution. We think fast, test faster, and iterate until it works.",
    link: "/process",
  },
  {
    icon: TrendingUp,
    title: "No agency bloat",
    description: "Lean team. Senior talent. Direct access. You work with the people who do the work.",
    link: "/about",
  },
  {
    icon: Shield,
    title: "No long-term traps",
    description: "Results speak louder than contracts. We earn your business every month.",
    link: "/process",
  },
];

export function Differentiators() {
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
          <h2 className="text-headline mb-4">A better way to grow your brand</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Marketing that respects your intelligence and delivers real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={item.link}
                className="glass-card-hover p-8 h-full flex flex-col group block"
              >
                <div className="mb-5 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <item.icon className="text-foreground" size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}