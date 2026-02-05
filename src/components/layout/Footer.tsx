import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Solutions", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work", href: "/work" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="mx-4 md:mx-6 mb-4 md:mb-6">
        <div className="glass-panel">
          <div className="editorial-container py-12 md:py-16">
            {/* CTA Section */}
            <div className="text-center mb-12 pb-12 border-b border-border">
              <h2 className="text-headline text-foreground mb-4">Ready to grow?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Start your journey with a team that gets things done.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <Link to="/" className="text-xl font-bold text-foreground">
                  Asellus
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  Marketing that moves.
                </p>
              </div>

              {/* Product */}
              <div>
                <p className="font-semibold text-foreground mb-4">Product</p>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="font-semibold text-foreground mb-4">Company</p>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="font-semibold text-foreground mb-4">Connect</p>
                <ul className="space-y-3">
                  {footerLinks.social.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Asellus. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}