import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const works = [
  {
    client: "Frido",
    category: "D2C Growth",
    description: "Scaled a comfort brand from ₹2Cr to ₹25Cr ARR in 18 months through performance marketing and content systems.",
    metrics: ["12x revenue", "45% CAC reduction", "4.2x ROAS"],
  },
  {
    client: "mCaffeine",
    category: "Launch Strategy",
    description: "Orchestrated a product launch that generated 10,000+ orders in the first 48 hours with zero paid media.",
    metrics: ["10K+ orders", "₹2.5Cr revenue", "Zero paid media"],
  },
  {
    client: "Tokyo Laundry",
    category: "Brand Repositioning",
    description: "Repositioned a legacy retail brand for the digital-first generation. 340% increase in online revenue.",
    metrics: ["340% revenue", "New audience", "Digital-first"],
  },
];

export function SelectedWork() {
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
          <h2 className="text-headline mb-4">Results, not references</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Real results from real partnerships with brands that trusted us to deliver.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.article
              key={work.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to="/work" className="glass-card-hover overflow-hidden group block h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-foreground/10">
                    {work.client}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-2">{work.client}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}