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
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

export function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="relative z-10 mt-auto">
      <div className="mx-4 mb-4">
        <div className="glass-panel">
          <div className="editorial-container py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              {/* Brand & CTA */}
              <div className="md:col-span-5">
                {isContactPage ? (
                  <div className="mb-8">
                    <img src="/logos/asellus_white.svg" alt="Asellus" className="h-12 w-auto" />
                  </div>
                ) : (
                  <>
                    <h2 className="text-headline text-foreground mb-8">Ready to grow?</h2>
                    <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                      Start a conversation
                      <ArrowUpRight size={16} />
                    </Link>
                  </>
                )}
              </div>

              {/* Navigation */}
              <div className="md:col-span-3 md:col-start-8">
                <p className="text-subheadline mb-4">Navigation</p>
                <ul className="space-y-3">
                  {footerLinks.navigation.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="md:col-span-2">
                <p className="text-subheadline mb-4">Connect</p>
                <ul className="space-y-3">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ArrowUpRight size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Asellus. All rights reserved.
              </p>
              <div className="text-sm text-muted-foreground flex items-center justify-end">
                {!isContactPage ? (
                  <img src="/logos/asellus_white.svg" alt="Asellus" className="h-6 w-auto opacity-80" />
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
