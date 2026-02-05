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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Differentiators() {
  return (
    <section className="editorial-section relative overflow-hidden">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-20"
        >
          <p className="text-subheadline mb-4">Why us</p>
          <h2 className="text-headline">
            What makes us different
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.number}
              variants={itemVariants}
              className="glass-card-hover p-8 group"
            >
              <motion.span
                className="text-subheadline text-primary inline-block"
                whileHover={{ scale: 1.05, x: 4 }}
                transition={{ duration: 0.3 }}
              >
                {item.number}
              </motion.span>
              <h3 className="text-2xl md:text-3xl font-serif mt-4 mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
