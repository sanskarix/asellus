import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    description: "We start by understanding your business—not just your marketing. Goals, constraints, competitive landscape, customer psychology. No assumptions.",
    details: "Stakeholder interviews, data audit, competitive analysis, customer research synthesis.",
  },
  {
    number: "02",
    title: "Strategy",
    duration: "Week 2",
    description: "We define the path from here to there. Clear priorities, realistic timelines, measurable milestones. Strategy should fit on one page.",
    details: "Channel strategy, messaging framework, content pillars, growth model, success metrics.",
  },
  {
    number: "03",
    title: "Foundation",
    duration: "Weeks 3-4",
    description: "We build the infrastructure for growth. Tracking, attribution, creative systems, team alignment. The boring stuff that makes everything else work.",
    details: "Analytics setup, campaign structure, creative production, team onboarding, process documentation.",
  },
  {
    number: "04",
    title: "Launch & Learn",
    duration: "Weeks 5-8",
    description: "We execute fast and learn faster. Every campaign is a test. Every test teaches us something. We optimize in real-time.",
    details: "Campaign launch, A/B testing, performance monitoring, weekly optimization, learning documentation.",
  },
  {
    number: "05",
    title: "Scale",
    duration: "Ongoing",
    description: "Once we find what works, we pour fuel on the fire. Methodically. Sustainably. We grow what's working and kill what isn't.",
    details: "Budget scaling, channel expansion, team growth support, strategic pivots, quarterly reviews.",
  },
];

const ProcessPage = () => {
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
            <p className="text-subheadline mb-4">How we work</p>
            <h1 className="text-display mb-6">Clear process. Fast execution.</h1>
            <p className="text-body-large text-muted-foreground">
              We've refined our process over years of working with growth-stage brands. 
              It's designed to move fast without cutting corners.
            </p>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="glass-card-hover p-8 lg:p-10 group relative overflow-hidden"
              >
                {/* Subtle accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <motion.div
                    className="lg:col-span-1"
                    whileHover={{ scale: 1.1, x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-subheadline text-primary font-bold">{step.number}</span>
                  </motion.div>
                  <div className="lg:col-span-3">
                    <h2 className="text-2xl md:text-3xl font-serif mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h2>
                    <motion.span
                      className="text-sm text-primary/70 font-medium block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.duration}
                    </motion.span>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-sm text-muted-foreground/70 italic leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-24"
          >
            <div className="glass-panel p-12 md:p-16 group relative overflow-hidden">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="max-w-2xl relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-primary transition-colors duration-300">
                  No long-term contracts
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We believe results should speak louder than contracts. We work on monthly
                  retainers with a 30-day notice period. You stay because we deliver, not
                  because you're locked in.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Let's talk about your project
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessPage;
