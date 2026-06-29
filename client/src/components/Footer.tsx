import { Compass, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Footer Component
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Minimal footer with essential navigation only
 * - Links organized by category (Navigation, Legal)
 * - Social links for engagement
 * - Architecture ready for future features (Dictionary, Collections, Lenses)
 */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-6 h-6 text-accent" />
              <span className="font-bold text-foreground">Viewpoint Atlas</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore the architecture of ideas across history, science, culture, and beyond.
            </p>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#topics">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    Topics
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#ia">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    Idea Archaeology
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    Privacy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                    Terms
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2026 Viewpoint Atlas. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@viewpointatlas.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
