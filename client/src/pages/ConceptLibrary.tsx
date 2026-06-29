import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConceptSearch from '@/components/ConceptSearch';
import { getAllConcepts } from '@/data/concepts';

/**
 * Concept Library Page
 * 
 * Design Philosophy: Lightweight Support Tool
 * - Search-first navigation
 * - Minimal introduction
 * - Sample concept displayed
 * - Mobile-optimized
 */
export default function ConceptLibrary() {
  const concepts = getAllConcepts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-container bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-6">
                Concept Library
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Understand Key Concepts
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
                Quick, concise explanations of important terms and ideas.
                Designed to reduce friction while exploring topics.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="section-container">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <ConceptSearch />
            </div>
          </div>
        </section>

        {/* Sample Concepts */}
        <section className="section-container">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Sample Concepts
              </h2>

              <div className="space-y-6">
                {concepts.map((concept) => (
                  <a
                    key={concept.id}
                    href={`/concepts/${concept.id}`}
                    className="block p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200 cursor-pointer group"
                  >
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                      {concept.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {concept.definition}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="section-container bg-accent/5">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                About This Library
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Concept Library is a lightweight support tool, not a comprehensive encyclopedia.
                  Each entry is designed to be read in approximately one minute.
                </p>

                <p>
                  It exists to help you quickly understand unfamiliar terms while exploring topics.
                  Think of it as a reference guide that reduces friction, not a destination in itself.
                </p>

                <p>
                  Concepts are linked throughout the Viewpoint Atlas. When you encounter an unfamiliar term,
                  you can jump to its definition and immediately understand the context.
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
