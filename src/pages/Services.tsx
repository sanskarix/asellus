import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Performance Marketing",
    description: "Paid media that actually pays back. We optimize for ROAS, not reach. Every campaign is built to deliver measurable, profitable growth across Meta, Google, TikTok, and emerging platforms.",
    capabilities: ["Media Buying", "Creative Strategy", "Attribution Modeling", "Budget Optimization"],
  },
  {
    title: "Content Systems",
    description: "Scalable content engines that keep your brand visible and relevant. We build systems, not one-off posts—designed for consistency, efficiency, and compound growth.",
    capabilities: ["Content Strategy", "Production Systems", "Platform Optimization", "Creator Networks"],
  },
  {
    title: "Funnel Architecture",
    description: "From first touch to loyal customer. We design and build conversion journeys that guide, nurture, and convert—without the pushy tactics that erode trust.",
    capabilities: ["Journey Mapping", "Landing Pages", "Email Sequences", "Conversion Optimization"],
  },
  {
    title: "Launch Strategy",
    description: "Product launches, brand launches, campaign launches—executed with precision and built for impact. We plan backwards from your goals and orchestrate every touchpoint.",
    capabilities: ["Launch Planning", "Pre-Launch Hype", "Day-One Execution", "Post-Launch Momentum"],
  },
  {
    title: "Growth Experiments",
    description: "Rapid testing frameworks that find what works before budgets run dry. We treat marketing as a system of hypotheses—test, learn, scale, repeat.",
    capabilities: ["Experiment Design", "A/B Testing", "Channel Discovery", "Growth Loops"],
  },
  {
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
            className="max-w-3xl mb-20"
          >
            <p className="text-subheadline mb-4">What we do</p>
            <h1 className="text-display mb-6">The full growth stack.</h1>
            <p className="text-body-large text-muted-foreground">
              We don't do "a little bit of everything." We do the things that actually 
              move the needle—executed with precision and measured by results.
            </p>
          </motion.div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="py-12 border-t border-border group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-serif group-hover:text-olive transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="text-sm text-muted-foreground">
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
            className="mt-20 pt-12 border-t border-border text-center"
          >
            <p className="text-body-large text-muted-foreground mb-6">
              Not sure what you need? Let's figure it out together.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
