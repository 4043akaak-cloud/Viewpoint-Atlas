import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * About Page (Placeholder)
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Placeholder for future About content
 * - Maintains consistent design with homepage
 * - Ready for expansion
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="section-container">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-balance mb-8">About Viewpoint Atlas</h1>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Viewpoint Atlas is a knowledge platform designed to map the interconnected world of human ideas.
                </p>

                <p>
                  Our mission is to help you understand how ideas evolve, connect, and shape our understanding of history, science, culture, and beyond.
                </p>

                <p>
                  This MVP is the beginning of a larger vision. We're building the architecture first—validating the structure that will eventually support hundreds of topics, multiple perspectives, and rich connections across domains.
                </p>

                <p>
                  More content coming soon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
