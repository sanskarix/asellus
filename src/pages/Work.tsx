import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    client: "Frido",
    category: "Content & Performance Marketing",
    year: "2024",
    description: "We produced high-volume UGC and native-style creatives, then paired them with a performance funnel so ads felt like content but still scaled profitably.",
    results: ["35 UGC assets produced and iterated", "4.2x average ROAS on best-performing campaigns", "45% reduction in CAC over the engagement period"],
  },
  {
    client: "mCaffeine",
    category: "Product Launch",
    year: "2023",
    description: "India-first caffeinated personal care brand for young consumers. We engineered an influencer-led launch that focused on creator storytelling and social proof, driving a surge of demand in the first 48 hours.",
    results: ["10,000+ orders in the first 48 hours", "Around ₹1.2Cr in revenue in the launch week", "40%+ of sales attributed to influencer content"],
  },
  {
    client: "Tokyo Laundry",
    category: "E‑Commerce Growth",
    year: "2024",
    description: "Legacy fashion brand expanding from retail into D2C e-commerce. We repositioned the brand for a younger audience and rebuilt their website to convert that new positioning into revenue quickly.",
    results: ["7x more time spent on the new website.", "340% increase in online revenue within 30 days", "Increased CTR on refreshed creatives vs. old ads"],
  },
  {
    client: "Qure.ai",
    category: "AI Healthtech",
    year: "2024",
    description: "Integrates AI in healthcare for faster diagnosis. We turned their complex B2B healthtech offering into clear and simple LinkedIn and Instagram ads.",
    results: ["40+ ad variants designed for multi-market testing", "25% surge in CTR on best-performing creatives", "Clear creative system handed off to the team"],
  },
  {
    client: "Goodfair",
    category: "Sustainable E‑Commerce",
    year: "2024",
    description: "We repositioned the brand around sustainability and built their ecom growth strategy across paid and organic, then launched a tag-for-tag Instagram campaign that boosted customer retention.",
    results: ["30% boost in retaining customers", "3x increase in Instagram mentions and tags", "Higher LTV from people engaged in the campaign"],
  },
  {
    client: "Smalls Sliders",
    category: "QSR Campaign",
    year: "2024",
    description: "We built a Black Friday push for this QSR using hyper-local influencer marketing, driving “slide thru” visits and a sharp spike in footfall at targeted locations.",
    results: ["2.5x increase in footfall at targeted outlets", "15+ local creators activated around key locations", "Weekend sales up by 40% of the monthly average"],
  },
  {
    client: "Artisaire",
    category: "Premium Stationery & Gifting",
    year: "2024",
    description: "We refreshed their visual identity through packaging, graphics, and content, then amplified the new look with Meta ads that pulled in profitable new customers and kept them coming back.",
    results: ["35% increase in returning customers post-refresh", "3.2x ROAS on Meta campaigns with new creatives", "Higher AOV on orders featuring redesigned graphics"],
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
