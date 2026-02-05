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
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card-hover overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-muted/30 to-primary/10 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl md:text-6xl font-serif text-foreground/20">
                      {project.client}
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-30"></div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-subheadline">{project.category}</span>
                      <span className="text-muted-foreground text-sm">/ {project.year}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">{project.client}</h2>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="pt-6 border-t border-border/30">
                      <p className="text-subheadline mb-4">Key results</p>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            <span className="text-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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