import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const works = [
  {
    client: "Frido",
    category: "Content & Performance Marketing",
    description: "Produced UGC content in high volume and launched paid campaigns that didn't look like ads.",
    image: "/placeholder.svg",
  },
  {
    client: "mCaffeine",
    category: "Product Launch",
    description: "Crafted a product launch that generated 10,000+ orders in the first 48 hours, all by influencer marketing.",
    image: "/placeholder.svg",
  },
  {
    client: "Tokyo Laundry",
    category: "E-Commerce Growth",
    description: "Repositioned a legacy retail brand for the new generation. 340% increase in online revenue under 30 days.",
    image: "/placeholder.svg",
  },
];

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
  return (
    <section className="editorial-section relative overflow-hidden">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div className="max-w-xl">
            <h2 className="text-headline">
              A few projects we’ve grown
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
              <GlassCard className="overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <motion.div
                    className={`aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-muted/40 to-primary/8 flex items-center justify-center relative overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-5xl md:text-6xl font-serif text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors duration-500">
                      {work.client}
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-20"></div>
                  </motion.div>

                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-subheadline mb-2"
                    >
                      {work.category}
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                      className="text-3xl md:text-4xl font-serif mb-6 transition-colors duration-300"
                    >
                      {work.client}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-muted-foreground text-lg leading-relaxed mb-8"
                    >
                      {work.description}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
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
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
