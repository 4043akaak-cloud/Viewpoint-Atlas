import { useRoute } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getConceptById } from '@/data/concepts';
import { Button } from '@/components/ui/button';

/**
 * Concept Detail Page
 * 
 * Design Philosophy: Lightweight Support Tool
 * - Concise, readable in ~1 minute
 * - Clear structure: Definition → Why it Matters → Related Topics
 * - Mobile-optimized with generous spacing
 * - Back navigation to library
 */
export default function ConceptDetail() {
  const [match, params] = useRoute('/concepts/:id');
  const concept = params?.id ? getConceptById(params.id) : null;

  if (!match || !concept) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="section-container">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center py-12">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Concept Not Found
                </h1>
                <p className="text-muted-foreground mb-8">
                  The concept you're looking for doesn't exist yet.
                </p>
                <Link href="/concepts">
                  <a>
                    <Button variant="default">Back to Concept Library</Button>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="section-container">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              {/* Back Button */}
              <Link href="/concepts">
                <a className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 mb-8 font-medium text-sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Library
                </a>
              </Link>

              {/* Concept Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                {concept.title}
              </h1>

              {/* Definition Section */}
              <section className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Definition
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  {concept.definition}
                </p>
              </section>

              {/* Why It Matters Section */}
              <section className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Why It Matters
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {concept.whyItMatters}
                </p>
              </section>

              {/* Related Topics Section */}
              <section className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Related Topics
                </h2>
                <div className="flex flex-wrap gap-3">
                  {concept.relatedTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors duration-200 cursor-default"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="border-t border-border pt-12 mt-12">
                <p className="text-sm text-muted-foreground">
                  This concept is part of the Viewpoint Atlas Concept Library.
                  It's designed to help you understand key terms while exploring topics.
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
