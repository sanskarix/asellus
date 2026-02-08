import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    client: "Frido",
    category: "D2C Growth",
    year: "2023",
    description: "Scaled a comfort brand from ₹2Cr to ₹25Cr ARR in 18 months through performance marketing and content systems.",
    results: ["12x revenue growth", "45% reduction in CAC", "4.2x ROAS average"],
  },
  {
    client: "mCaffeine",
    category: "Launch Strategy",
    year: "2023",
    description: "Orchestrated a product launch that generated 10,000+ orders in the first 48 hours with zero paid media.",
    results: ["10,000+ orders in 48 hours", "₹2.5Cr launch revenue", "Zero paid media spend"],
  },
  {
    client: "Tokyo Laundry",
    category: "Brand Repositioning",
    year: "2022",
    description: "Repositioned a legacy retail brand for the digital-first generation. Complete brand overhaul and digital transformation.",
    results: ["340% increase in online revenue", "New customer base acquired", "Brand relevance restored"],
  },
  {
    client: "Wylo",
    category: "Community Growth",
    year: "2024",
    description: "Built a content-led growth engine for a community platform, driving organic adoption and engagement.",
    results: ["200% growth in active communities", "65% reduction in churn", "Organic-first acquisition model"],
  },
];

const WorkPage = () => {
  return (
    <Layout>
      <section className="editorial-section pt-36">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <p className="text-subheadline mb-4">Our work</p>
            <h1 className="text-display mb-6">Results, not references.</h1>
            <p className="text-body-large text-muted-foreground">
              We don't do case studies for the sake of case studies. These are real 
              results from real partnerships with brands that trusted us to deliver.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.client}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
              >
                <GlassCard className="overflow-hidden group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <motion.div
                      className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-muted/40 to-primary/8 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-5xl md:text-6xl font-serif text-muted-foreground/25 group-hover:text-muted-foreground/35 transition-colors duration-500">
                        {project.client}
                      </span>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 shimmer opacity-25"></div>
                    </motion.div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.1, duration: 0.5 }}
                        className="flex items-center gap-4 mb-4"
                      >
                        <span className="text-subheadline text-primary">{project.category}</span>
                        <span className="text-muted-foreground text-sm font-medium">/ {project.year}</span>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.15, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-serif mb-6 transition-colors duration-300"
                      >
                        {project.client}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.2, duration: 0.5 }}
                        className="text-muted-foreground text-lg leading-relaxed mb-8"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.25, duration: 0.5 }}
                        className="pt-6 border-t border-primary/10"
                      >
                        <p className="text-subheadline mb-4">Key results</p>
                        <ul className="space-y-3">
                          {project.results.map((result, resultIndex) => (
                            <motion.li
                              key={result}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.12 + resultIndex * 0.05 + 0.3, duration: 0.4 }}
                              className="flex items-center gap-3 group/result"
                            >
                              <motion.span
                                className="w-1.5 h-1.5 bg-primary/70 rounded-full group-hover/result:bg-primary transition-all duration-300"
                                whileHover={{ scale: 1.3 }}
                              ></motion.span>
                              <span className="text-foreground">{result}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkPage;
