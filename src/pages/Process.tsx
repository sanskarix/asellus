import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Target, Zap, Wrench, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Discovery",
    duration: "Week 1",
    description: "We start by understanding your business—not just your marketing. Goals, constraints, landscape, psychology.",
    color: "from-blue-500/20 via-blue-600/10 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    number: "02",
    icon: Zap,
    title: "Strategy",
    duration: "Week 2",
    description: "We define the path. Clear priorities, realistic timelines, measurable milestones that fit on one page.",
    color: "from-cyan-500/20 via-cyan-600/10 to-transparent",
    iconColor: "text-cyan-400",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build",
    duration: "Weeks 3-4",
    description: "Infrastructure for growth. Tracking, attribution, systems, alignment. The foundation that enables everything.",
    color: "from-purple-500/20 via-purple-600/10 to-transparent",
    iconColor: "text-purple-400",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Launch & Learn",
    duration: "Weeks 5-8",
    description: "Execute fast, learn faster. Every campaign is a test. Every test teaches us. Optimize in real-time.",
    color: "from-green-500/20 via-green-600/10 to-transparent",
    iconColor: "text-green-400",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Scale",
    duration: "Ongoing",
    description: "Pour fuel on fire. Find what works, grow it. Kill what doesn't. Methodical, sustainable scaling.",
    color: "from-orange-500/20 via-orange-600/10 to-transparent",
    iconColor: "text-orange-400",
  },
];

const ProcessPage = () => {
  return (
    <Layout>
      <section className="editorial-section pt-36">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-24"
          >
            <p className="text-subheadline mb-4">How we work</p>
            <h1 className="text-display mb-6">Clear process. Fast execution.</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We've refined our process over years of working with growth-stage brands. It's designed to move fast without cutting corners. Clear, methodical, results-driven.
            </p>
          </motion.div>

          {/* Illustrative process visualization */}
          <div className="space-y-8 mb-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="group relative"
                >
                  {/* Connection line to next step */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-32 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:opacity-100 opacity-0"></div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Visual - Icon in gradient circle */}
                    <motion.div
                      className={`md:col-span-2 relative h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} border border-primary/20 group-hover:border-primary/40 transition-all duration-500`}
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-10 h-10 ${step.iconColor}`} />
                    </motion.div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="flex items-baseline gap-4 mb-3">
                        <motion.span
                          className="text-2xl font-bold text-primary"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.number}
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl font-serif group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-sm text-primary/70 font-medium mb-4">
                        {step.duration}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
