import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Execution over strategy",
    description: "Ideas are cheap. Execution is everything. We'd rather test 10 things this week than perfect one plan for a month.",
  },
  {
    title: "Honesty over comfort",
    description: "We tell you what you need to hear, not what you want to hear. Uncomfortable truths now save painful failures later.",
  },
  {
    title: "Speed over perfection",
    description: "Done is better than perfect. Fast feedback loops beat slow launches. We iterate in public and learn in real-time.",
  },
  {
    title: "Results over activity",
    description: "We don't measure hours worked or decks delivered. We measure revenue generated, customers acquired, brands built.",
  },
];

const team = [
  { name: "The Strategists", description: "Former founders and brand leaders who've built what you're building." },
  { name: "The Makers", description: "Designers, writers, and producers who turn strategy into creative that converts." },
  { name: "The Scientists", description: "Data analysts and growth hackers who find the signal in the noise." },
];

const AboutPage = () => {
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
            <p className="text-subheadline mb-4">About us</p>
            <h1 className="text-display mb-6">Built for the new reality.</h1>
            <p className="text-body-large text-muted-foreground">
              We started Asellus because we were tired of agency bullshit. Slow processes. 
              Bloated teams. Vanity metrics presented as wins. There had to be a better way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32"
          >
            <motion.div
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

              <h2 className="text-headline mb-6 group-hover:text-primary transition-colors duration-300">
                The short version
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Asellus is a new-age marketing agency for brands that care about real growth.
                We focus on what actually moves the needle: clear strategies, fast experiments,
                and relentless optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not a 200-person agency with layers of account managers between you and
                the work. We're a lean team of senior practitioners who've been in the trenches—founders,
                growth leaders, creative directors who've built brands you know.
              </p>
            </motion.div>
            <motion.div
              className="glass-panel p-10 md:p-12 flex items-center justify-center relative overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-2xl font-serif text-center leading-relaxed relative z-10 group-hover:text-primary transition-colors duration-300">
                "Great marketing doesn't feel like marketing. It feels like the brand finally
                speaking its truth."
              </blockquote>
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-headline mb-12">What we believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover p-8"
                >
                  <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-headline mb-12">The team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((group, index) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover p-8"
                >
                  <h3 className="text-xl font-serif mb-3">{group.name}</h3>
                  <p className="text-muted-foreground text-sm">{group.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-12 text-center">
              <p className="text-body-large text-muted-foreground mb-6">
                Want to know more? Let's have a real conversation.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
