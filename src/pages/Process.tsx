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
