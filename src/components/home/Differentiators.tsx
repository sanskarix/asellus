import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "No vanity metrics",
    description: "We measure what matters. Revenue, retention, real growth—not followers and impressions that don't convert.",
  },
  {
    number: "02",
    title: "No endless decks",
    description: "Strategy is nothing without execution. We think fast, test faster, and iterate until it works.",
  },
  {
    number: "03",
    title: "No agency bloat",
    description: "Lean team. Senior talent. Direct access. You work with the people who do the work.",
  },
  {
    number: "04",
    title: "No long-term traps",
    description: "Results speak louder than contracts. We earn your business every month.",
  },
];

export function Differentiators() {
  return (
    <section className="editorial-section relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-subheadline mb-4">Why us</p>
          <h2 className="text-headline">
            What makes us different
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card-hover p-8"
            >
              <span className="text-subheadline text-primary">{item.number}</span>
              <h3 className="text-2xl md:text-3xl font-serif mt-4 mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}