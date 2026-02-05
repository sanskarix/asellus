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
            className="max-w-3xl mb-16"
          >
            <h1 className="text-display mb-4">Process</h1>
            <p className="text-body-large">
              We've refined our process over years of working with growth-stage brands. 
              It's designed to move fast without cutting corners.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card-hover p-6 md:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-1">
                    <span className="text-2xl font-bold text-foreground/20">{step.number}</span>
                  </div>
                  <div className="lg:col-span-3">
                    <h2 className="text-xl font-semibold mb-1">{step.title}</h2>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-xs text-muted-foreground">
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
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="glass-panel p-10">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-headline mb-3">No long-term contracts</h3>
                <p className="text-muted-foreground mb-6">
                  We believe results should speak louder than contracts. We work on monthly 
                  retainers with a 30-day notice period. You stay because we deliver, not 
                  because you're locked in.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Let's talk about your project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessPage;