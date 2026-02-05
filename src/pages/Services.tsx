import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Megaphone, FileText, GitBranch, Rocket, FlaskConical, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description: "Paid media that actually pays back. We optimize for ROAS, not reach. Every campaign is built to deliver measurable, profitable growth across Meta, Google, TikTok, and emerging platforms.",
    capabilities: ["Media Buying", "Creative Strategy", "Attribution Modeling", "Budget Optimization"],
  },
  {
    icon: FileText,
    title: "Content Systems",
    description: "Scalable content engines that keep your brand visible and relevant. We build systems, not one-off posts—designed for consistency, efficiency, and compound growth.",
    capabilities: ["Content Strategy", "Production Systems", "Platform Optimization", "Creator Networks"],
  },
  {
    icon: GitBranch,
    title: "Funnel Architecture",
    description: "From first touch to loyal customer. We design and build conversion journeys that guide, nurture, and convert—without the pushy tactics that erode trust.",
    capabilities: ["Journey Mapping", "Landing Pages", "Email Sequences", "Conversion Optimization"],
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description: "Product launches, brand launches, campaign launches—executed with precision and built for impact. We plan backwards from your goals and orchestrate every touchpoint.",
    capabilities: ["Launch Planning", "Pre-Launch Hype", "Day-One Execution", "Post-Launch Momentum"],
  },
  {
    icon: FlaskConical,
    title: "Growth Experiments",
    description: "Rapid testing frameworks that find what works before budgets run dry. We treat marketing as a system of hypotheses—test, learn, scale, repeat.",
    capabilities: ["Experiment Design", "A/B Testing", "Channel Discovery", "Growth Loops"],
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Positioning that cuts through the noise. Messaging that resonates and sticks. We help you find the truth of your brand and articulate it with clarity.",
    capabilities: ["Brand Positioning", "Messaging Architecture", "Voice & Tone", "Brand Identity"],
  },
];

const ServicesPage = () => {
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
            <h1 className="text-display mb-4">Solutions</h1>
            <p className="text-body-large">
              We don't do "a little bit of everything." We do the things that actually 
              move the needle—executed with precision and measured by results.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card-hover p-8 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
                      <service.icon className="text-foreground" size={22} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {service.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="glass-panel p-10 text-center">
              <h3 className="text-headline mb-3">Not sure what you need?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let's figure it out together with a quick conversation.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;