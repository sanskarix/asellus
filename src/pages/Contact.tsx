import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, Calendar, ArrowBigRight, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Arrow } from "@radix-ui/react-tooltip";

const ContactPage = () => {
  return (
    <Layout>
      <section className="editorial-section pt-36">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-subheadline mb-4">Let's talk</p>
              <h1 className="text-display mb-6">Let's have a chat.</h1>
              <p className="text-body-large text-muted-foreground mb-12">
                No pitch decks. No lengthy proposals. Just a conversation about what
                you're building and whether we're the right fit to help you grow.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <GlassCard className="p-8 group">
                    <h3 className="text-subheadline mb-3 transition-colors duration-300">Email</h3>
                    <a
                      href="mailto:hello@asellus.in"
                      className="text-xl font-serif hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      hello@asellus.in
                      <Mail size={18} />
                    </a>
                  </GlassCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <GlassCard className="p-8 group">
                    <h3 className="text-subheadline mb-3 transition-colors duration-300">Book a Call</h3>
                    <a
                      href="https://cal.com/asellus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-serif hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      Schedule a time
                      <ArrowUpRight size={18} />
                    </a>
                  </GlassCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <GlassCard className="p-8 group">
                    <h3 className="text-subheadline mb-3 transition-colors duration-300">Location</h3>
                    <p className="text-xl font-serif flex items-center gap-2">
                      Remote-first, globally distributed
                      <MapPin size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <GlassCard className="p-8 md:p-10 group relative overflow-hidden h-full flex flex-col">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <form className="space-y-6 relative z-10 flex-1 flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="glass-input"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="glass-input"
                      defaultValue="+91 "
                      placeholder="+91 0000 00000"
                      required
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      What's on your mind?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="glass-input resize-none"
                      placeholder="Not sure? Leave it blank, we'll figure it out together."
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
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
