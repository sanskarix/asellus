import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, ArrowRight } from "lucide-react";

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
              <h1 className="text-display mb-4">Contact</h1>
              <p className="text-body-large mb-10">
                No pitch decks. No lengthy proposals. Just a conversation about what 
                you're building and whether we're the right fit to help you grow.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:hello@asellus.agency" 
                    className="text-lg font-semibold hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
                  >
                    hello@asellus.agency
                    <Mail size={18} />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Location</h3>
                  <p className="text-lg font-semibold flex items-center gap-2">
                    Remote-first, globally distributed
                    <MapPin size={18} className="text-muted-foreground" />
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Social</h3>
                  <div className="flex gap-6">
                    <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                      Instagram
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-panel p-8 md:p-10">
                <form className="space-y-6">
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

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send message
                  </button>

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