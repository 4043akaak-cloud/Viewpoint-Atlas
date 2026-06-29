import { Compass } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Header Component
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Website name clearly displayed (Logo + "Viewpoint Atlas")
 * - Clean, minimal navigation (Topics, Concepts, Idea Archaeology, About)
 * - Strong brand identity at the top
 * - Future-ready structure for additional features
 */
export default function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <Link href="/">
            <a className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity duration-200">
              <Compass className="w-6 h-6 md:w-7 md:h-7 text-accent flex-shrink-0" />
              <span className="text-base md:text-lg font-bold text-foreground tracking-tight">
                Viewpoint Atlas
              </span>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link href="/#topics">
              <a className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                Topics
              </a>
            </Link>
            <Link href="/concepts">
              <a className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                Concepts
              </a>
            </Link>
            <Link href="/#ia">
              <a className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                Idea Archaeology
              </a>
            </Link>
            <Link href="/about">
              <a className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                About
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
