import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subheadline mb-4">Let's talk</p>
              <h1 className="text-display mb-6">Start a conversation.</h1>
              <p className="text-body-large text-muted-foreground mb-12">
                No pitch decks. No lengthy proposals. Just a conversation about what 
                you're building and whether we're the right fit to help you grow.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-subheadline mb-3 group-hover:text-primary transition-colors duration-300">Email</h3>
                  <a
                    href="mailto:hello@asellus.agency"
                    className="text-xl font-serif hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    hello@asellus.agency
                    <Mail size={18} />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-subheadline mb-3 group-hover:text-primary transition-colors duration-300">Location</h3>
                  <p className="text-xl font-serif flex items-center gap-2">
                    Remote-first, globally distributed
                    <MapPin size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-subheadline mb-4 group-hover:text-primary transition-colors duration-300">Social</h3>
                  <div className="flex gap-6">
                    {[
                      { name: "LinkedIn", href: "#" },
                      { name: "Instagram", href: "#" },
                      { name: "Twitter", href: "#" },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className="text-muted-foreground hover:text-primary transition-all inline-flex items-center gap-1"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {social.name} <ArrowUpRight size={14} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="glass-panel p-8 md:p-10 group relative overflow-hidden h-full flex flex-col">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <form className="space-y-6 relative z-10 flex-1 flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="glass-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="glass-input"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="glass-input"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Monthly Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="glass-input"
                    >
                      <option value="">Select a range</option>
                      <option value="<5L">Less than ₹5L/month</option>
                      <option value="5-15L">₹5L - ₹15L/month</option>
                      <option value="15-50L">₹15L - ₹50L/month</option>
                      <option value=">50L">More than ₹50L/month</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="glass-input resize-none"
                      placeholder="What are you trying to achieve? What's your timeline?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center mt-auto"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                  >
                    Send message
                  </motion.button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
