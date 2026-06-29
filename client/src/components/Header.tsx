import { Compass } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Header Component
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Clean, minimal navigation
 * - Logo + brand name
 * - Navigation items for Topics, Idea Archaeology, About, Contact
 * - Future-ready structure for Dictionary, Collections, Lenses
 */
export default function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Brand */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
              <Compass className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              <span className="text-lg md:text-xl font-bold text-foreground hidden sm:inline">
                Viewpoint Atlas
              </span>
              <span className="text-lg md:text-xl font-bold text-foreground sm:hidden">
                Atlas
              </span>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="/#topics">
              <a className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                Topics
              </a>
            </Link>
            <Link href="/#ia">
              <a className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                Idea Archaeology
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-200 font-medium">
                About
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
