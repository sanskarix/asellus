import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "What We Do", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="editorial-container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand & CTA */}
          <div className="md:col-span-5">
            <h2 className="text-headline mb-6">Let's build something real.</h2>
            <Link to="/contact" className="btn-secondary border-background text-background hover:bg-background hover:text-foreground inline-flex items-center gap-2">
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-8">
            <p className="text-subheadline text-background/60 mb-4">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-subheadline text-background/60 mb-4">Connect</p>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors inline-flex items-center gap-1"
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
        <div className="mt-20 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Asellus. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            No vanity metrics. No decks. Just growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
