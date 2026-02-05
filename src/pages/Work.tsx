import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

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
      <section className="editorial-section">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-display mb-4">Work</h1>
            <p className="text-body-large">
              We don't do case studies for the sake of case studies. These are real 
              results from real partnerships with brands that trusted us to deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.client}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card-hover overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-foreground/10">
                    {project.client}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-2">{project.client}</h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkPage;