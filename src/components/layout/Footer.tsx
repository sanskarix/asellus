import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "What We Do", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com/company/asellus" },
    { name: "Schedule a Call", href: "https://cal.com/asellus" },
  ],
};

export function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="relative z-10 mt-auto">
      <div className="mx-4 mb-4">
        <div className="glass-panel">
          <div className="editorial-container pt-20 pb-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              {/* Brand & CTA */}
              <div className="md:col-span-5 flex flex-col items-start text-left">
                {isContactPage ? (
                  <div className="mb-0"> {/* Removed mb-8 for tighter spacing since headers are gone */}
                    <img src="/logos/asellus_white.svg" alt="asellus" className="h-10 md:h-12 w-auto" />
                  </div>
                ) : (
                  <>
                    <h2 className="text-headline text-foreground mb-6 md:mb-8 font-medium">Ready to grow?</h2>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                      Start a conversation
                      <ArrowUpRight size={16} />
                    </Link>
                  </>
                )}
              </div>

              {/* Navigation & Social */}
              <div className="md:col-span-6 md:col-start-7 pt-12 md:pt-0">
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                  <div className="flex flex-col items-start">
                    <ul className="space-y-4 md:space-y-5">
                      {footerLinks.navigation.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.href}
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-start">
                    <ul className="space-y-4 md:space-y-5">
                      {footerLinks.social.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium inline-flex items-center gap-1"
                          >
                            {link.name}
                            <ArrowUpRight size={12} className="opacity-70" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 md:mt-16 pt-8 pb-4 md:pb-0 border-t border-border/30 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4 text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} asellus. All rights reserved.
              </p>
              <div className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
                {!isContactPage ? (
                  <img src="/logos/asellus_white.svg" alt="asellus" className="h-6 w-auto opacity-80" />
                ) : (
                  "No vanity metrics. No decks. Just growth."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
