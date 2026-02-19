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
    logo: "/logos/frido.svg",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    client: "mCaffeine",
    category: "Product Launch",
    year: "2023",
    description: "India-first caffeinated personal care brand for young consumers. We engineered an influencer-led launch that focused on creator storytelling and social proof, driving a surge of demand in the first 48 hours.",
    results: ["10,000+ orders in the first 48 hours", "Around ₹1.2Cr in revenue in the launch week", "40%+ of sales attributed to influencer content"],
    logo: "/logos/mcaffeine.svg",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    client: "Tokyo Laundry",
    category: "E‑Commerce Growth",
    year: "2024",
    description: "Legacy fashion brand expanding from retail into D2C e-commerce. We repositioned the brand for a younger audience and rebuilt their website to convert that new positioning into revenue quickly.",
    results: ["7x more time spent on the new website.", "340% increase in online revenue within 30 days", "Increased CTR on refreshed creatives vs. old ads"],
    logo: "/logos/tokyo-laundry.svg",
    gradient: "from-orange-500/20 via-red-500/20 to-yellow-500/20",
  },
  {
    client: "Qure.ai",
    category: "AI Healthtech",
    year: "2024",
    description: "Integrates AI in healthcare for faster diagnosis. We turned their complex B2B healthtech offering into clear and simple LinkedIn and Instagram ads.",
    results: ["40+ ad variants designed for multi-market testing", "25% surge in CTR on best-performing creatives", "Clear creative system handed off to the team"],
    logo: "/logos/qure.svg",
    gradient: "from-indigo-500/20 via-blue-500/20 to-violet-500/20",
  },
  {
    client: "Goodfair",
    category: "Sustainable E‑Commerce",
    year: "2024",
    description: "We repositioned the brand around sustainability and built their ecom growth strategy across paid and organic, then launched a tag-for-tag Instagram campaign that boosted customer retention.",
    results: ["30% boost in retaining customers", "3x increase in Instagram mentions and tags", "Higher LTV from people engaged in the campaign"],
    logo: "/logos/goodfair.svg",
    gradient: "from-green-500/20 via-lime-500/20 to-emerald-500/20",
  },
  {
    client: "Smalls Sliders",
    category: "QSR Campaign",
    year: "2024",
    description: "We built a Black Friday push for this QSR using hyper-local influencer marketing, driving “slide thru” visits and a sharp spike in footfall at targeted locations.",
    results: ["2.5x increase in footfall at targeted outlets", "15+ local creators activated around key locations", "Weekend sales up by 40% of the monthly average"],
    logo: "/logos/smalls.svg",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
  },
  {
    client: "Artisaire",
    category: "Premium Stationery & Gifting",
    year: "2024",
    description: "We refreshed their visual identity through packaging, graphics, and content, then amplified the new look with Meta ads that pulled in profitable new customers and kept them coming back.",
    results: ["35% increase in returning customers post-refresh", "3.2x ROAS on Meta campaigns with new creatives", "Higher AOV on orders featuring redesigned graphics"],
    logo: "/logos/artisaire.svg",
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
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
            className="mb-20"
          >
            <p className="text-subheadline mb-4">Our work</p>
            <h1 className="text-display mb-6">What we’ve built together.</h1>
            <p className="max-w-3xl text-body-large text-muted-foreground">
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
                      className="aspect-[4/3] lg:aspect-auto relative overflow-hidden flex items-center justify-center p-8 bg-muted/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Ambient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.04),transparent_60%)]"></div>

                      {/* Drifting ambient orbs */}
                      <div className="absolute w-[70%] h-[70%] top-[-15%] left-[-10%] rounded-full ambient-drift-1 opacity-40 blur-[60px] bg-gradient-to-br from-white/8 via-white/3 to-transparent pointer-events-none"></div>
                      <div className="absolute w-[50%] h-[50%] bottom-[-10%] right-[-5%] rounded-full ambient-drift-2 opacity-30 blur-[50px] bg-gradient-to-tl from-white/6 via-white/2 to-transparent pointer-events-none"></div>
                      <div className="absolute w-[40%] h-[40%] top-[40%] left-[30%] rounded-full ambient-drift-3 opacity-25 blur-[40px] bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>

                      {/* Glass Logo Box */}
                      <motion.div
                        className="relative z-10 w-48 h-32 md:w-56 md:h-40 rounded-xl glass-card flex items-center justify-center p-6 border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40"
                        whileHover={{ y: -5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {project.logo ? (
                          <img
                            src={project.logo}
                            alt={`${project.client} logo`}
                            className="w-full h-full object-contain filter drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                        ) : (
                          <span className="text-2xl md:text-3xl font-serif text-white/80 text-center leading-tight">
                            {project.client}
                          </span>
                        )}
                        {/* Inner gloss */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                      </motion.div>
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
