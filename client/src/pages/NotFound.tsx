import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * NotFound Page (404)
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Clear error message
 * - Navigation back to home
 * - Consistent with overall design
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container py-20">
          <div className="max-w-md mx-auto text-center">
            {/* Error Icon */}
            <AlertCircle className="w-16 h-16 md:w-20 md:h-20 text-accent mx-auto mb-6" />

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>

            {/* Message */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* CTA */}
            <Link href="/">
              <Button size="lg" className="px-8 py-6 text-base font-semibold">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
