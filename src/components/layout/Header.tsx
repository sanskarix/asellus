import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-6 md:mx-8 lg:mx-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {/* Glass header with starfield showing through */}
        <nav
          className="flex items-center justify-between py-4 px-6 md:px-8 max-w-full rounded-xl border transition-all duration-300"
          style={{
            background: 'hsl(220 25% 5% / 0.4)',
            backdropFilter: 'blur(16px)',
            borderColor: 'hsl(210 25% 20% / 0.15)',
            boxShadow: '0 4px 24px hsl(220 30% 3% / 0.4), inset 0 1px 0 hsl(210 30% 40% / 0.05)',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="text-lg font-serif font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-opacity duration-300"
            >
              <img src="/logos/asellus_white.svg" alt="Asellus" className="h-8 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-foreground/30"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-1.5 text-foreground/70 hover:text-foreground transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            className="md:hidden mt-2 rounded-xl border"
            style={{
              background: 'hsl(220 25% 5% / 0.85)',
              backdropFilter: 'blur(16px)',
              borderColor: 'hsl(210 25% 20% / 0.15)',
            }}
          >
            <div className="py-4 px-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 block ${location.pathname === item.href
                        ? "text-foreground bg-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/3"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
