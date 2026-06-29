import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

/**
 * Conspiracy Topic Page
 * 
 * Design Philosophy: Intellectual Gateway
 * - Completely neutral – no truth judgments, no ranking
 * - Explores how conspiracy theories emerge, evolve, and change
 * - Encourages critical thinking and better questions
 * - Embodies Viewpoint Atlas principle: deeper curiosity, not certainty
 * 
 * Structure:
 * 1. Hero – Title + Headline + Introduction
 * 2. What is a Conspiracy? – Definitions and terminology
 * 3. A Brief History – Historical context
 * 4. Why Do Conspiracy Theories Emerge? – Causes and psychology
 * 5. How Do Conspiracy Theories Evolve? – Evolution patterns (flowcharts)
 * 6. Historical Examples – Case studies (cards)
 * 7. How Should We Think? – Critical thinking framework
 * 8. Questions Worth Asking – Open-ended questions
 */
export default function ConspiracyTopic() {
  // Historical examples for Section 5
  const examples = [
    { title: '9/11', year: '2001' },
    { title: 'Watergate', year: '1972' },
    { title: 'MKUltra', year: '1950s' },
    { title: 'Snowden', year: '2013' },
    { title: 'Epstein', year: '2019' },
    { title: 'COVID-19 Origin', year: '2020' },
    { title: 'UFO / UAP', year: 'Ongoing' },
    { title: 'JFK', year: '1963' },
  ];

  // Concept links for internal linking
  const conceptLinks = [
    'Military-Industrial Complex',
    'CIA',
    'FBI',
    'NSA',
    'Whistleblower',
    'FOIA',
    'Declassified Documents',
    'Confirmation Bias',
    'Echo Chamber',
    'Propaganda',
    'Information Warfare',
    'Critical Thinking',
    'Government Secrecy',
    'Pattern Recognition',
  ];

  const renderConceptLink = (text: string) => {
    const isConcept = conceptLinks.some(
      (concept) => text.toLowerCase().includes(concept.toLowerCase())
    );
    if (isConcept) {
      return (
        <a href={`/concepts/${text.toLowerCase().replace(/\s+/g, '-')}`} className="text-accent hover:underline">
          {text}
        </a>
      );
    }
    return text;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <section className="section-container bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs md:text-sm font-semibold text-accent tracking-widest uppercase mb-6">
                Featured Topic
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Conspiracy
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Why do some ideas become accepted history while others remain conspiracy theories?
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                This page explores how humans investigate uncertain claims. It examines how conspiracy theories emerge, evolve, gain evidence, lose support, or remain unresolved over time. The goal is not to decide what is true or false, but to understand the social, historical, and psychological phenomenon of conspiracy theories themselves.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 1: WHAT IS A CONSPIRACY? ===== */}
        <section className="section-container section-divider">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                What is a Conspiracy?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Conspiracy</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A conspiracy is a secret plan or agreement between two or more people to do something unlawful or harmful. Conspiracies are real and documented throughout history. Governments, corporations, and organizations do keep secrets and make hidden agreements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Conspiracy Theory</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A conspiracy theory is an explanation of events that attributes them to a secret conspiracy. Not all conspiracy theories are false, and not all are true. The term itself does not determine whether a claim is accurate or inaccurate.
                  </p>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <strong>Key distinction:</strong> The terms "conspiracy" and "conspiracy theory" are descriptive labels, not verdicts. A conspiracy theory might be historically accurate (like Watergate) or false (like many debunked claims). The label tells us nothing about truth value—only about the claim's structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: A BRIEF HISTORY ===== */}
        <section className="section-container section-divider bg-accent/2">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                A Brief History
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Origins of the Word</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The term "conspiracy theory" emerged in the 20th century as a way to describe explanations that attributed events to secret plots. Before this, such explanations were simply called theories or hypotheses.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Historical Use</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Throughout history, powerful actors have indeed conspired in secret. The Gunpowder Plot, the Dreyfus Affair, and countless political conspiracies were real. Skepticism toward official narratives has sometimes revealed hidden truths.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Government Secrecy</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Governments maintain classified information for national security, diplomatic, and strategic reasons. Some secrets are later declassified, revealing that certain conspiracy theories were partially or entirely accurate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">The Information Age</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The internet and social media have changed how conspiracy theories spread. Information travels faster, reaches more people, and creates feedback loops that can amplify both accurate investigations and false claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: WHY DO CONSPIRACY THEORIES EMERGE? ===== */}
        <section className="section-container section-divider">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Do Conspiracy Theories Emerge?
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Missing Information</h3>
                  <p className="text-base text-muted-foreground">
                    When official explanations feel incomplete or contradictory, people fill gaps with alternative theories.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Government Secrecy</h3>
                  <p className="text-base text-muted-foreground">
                    Classified information and redacted documents fuel speculation about what is being hidden.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Distrust</h3>
                  <p className="text-base text-muted-foreground">
                    When institutions lose credibility through past lies or failures, people become skeptical of their current statements.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Human Pattern Recognition</h3>
                  <p className="text-base text-muted-foreground">
                    Our brains are wired to find patterns. Sometimes we see connections that don't exist.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Political Conflict</h3>
                  <p className="text-base text-muted-foreground">
                    During times of political tension, conspiracy theories often flourish as groups blame opponents for hidden agendas.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Social Media & Echo Chambers</h3>
                  <p className="text-base text-muted-foreground">
                    Algorithms amplify content that engages users. Conspiracy theories are often engaging, leading to rapid spread.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Psychological Bias</h3>
                  <p className="text-base text-muted-foreground">
                    Confirmation bias leads us to seek information that supports what we already believe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: HOW DO CONSPIRACY THEORIES EVOLVE? ===== */}
        <section className="section-container section-divider bg-accent/2">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                How Do Conspiracy Theories Evolve?
              </h2>

              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Different conspiracy theories follow different paths. Here are three common patterns:
              </p>

              {/* Pattern 1 */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-6">Pattern 1: Investigation → Evidence → Acceptance</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hypothesis</p>
                      <p className="text-sm text-muted-foreground">A claim emerges about hidden events</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Investigation</p>
                      <p className="text-sm text-muted-foreground">Researchers, journalists, or historians investigate</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">More Evidence</p>
                      <p className="text-sm text-muted-foreground">Documents, testimonies, or declassifications emerge</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Historical Acceptance</p>
                      <p className="text-sm text-muted-foreground">The claim becomes accepted as historical fact</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Example: Watergate was initially dismissed as a conspiracy theory before becoming documented history.
                </p>
              </div>

              {/* Pattern 2 */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-6">Pattern 2: Limited Evidence → Declining Support</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hypothesis</p>
                      <p className="text-sm text-muted-foreground">A claim emerges</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Little Supporting Evidence</p>
                      <p className="text-sm text-muted-foreground">Investigation finds no credible evidence</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Declining Support</p>
                      <p className="text-sm text-muted-foreground">Public interest fades as evidence doesn't materialize</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Note: Some theories persist despite lack of evidence, often within specific communities.
                </p>
              </div>

              {/* Pattern 3 */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-6">Pattern 3: Ongoing Debate → Unresolved</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hypothesis</p>
                      <p className="text-sm text-muted-foreground">A claim emerges</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Ongoing Debate</p>
                      <p className="text-sm text-muted-foreground">Evidence exists on multiple sides; experts disagree</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-accent">↓</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Still Unresolved</p>
                      <p className="text-sm text-muted-foreground">The question remains open as new evidence emerges</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Example: Many historical questions remain genuinely unresolved due to missing documents or conflicting evidence.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong>Important:</strong> History is often revised as new evidence becomes available. Declassified documents, newly discovered archives, and technological advances can change our understanding of past events. This means that today's "settled" history might be tomorrow's revised understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: HISTORICAL EXAMPLES ===== */}
        <section className="section-container section-divider">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Historical Examples
              </h2>

              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                These cases illustrate different paths that conspiracy theories can take. Each card links to a dedicated Viewpoint Atlas topic.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {examples.map((example) => (
                  <a
                    key={example.title}
                    href={`/topics/${example.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                          {example.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{example.year}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-200 flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: HOW SHOULD WE THINK? ===== */}
        <section className="section-container section-divider bg-accent/2">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                How Should We Think?
              </h2>

              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Rather than telling you what to believe, here are frameworks for thoughtful investigation:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Evidence</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    What evidence exists? Is it credible? Has it been verified by independent sources? How strong is the evidence compared to alternative explanations?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Primary Sources</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Original documents, testimonies, and recordings are more reliable than secondhand accounts. Can you trace claims back to their source?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Whistleblowers & Declassified Documents</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Official revelations often come from insiders. Declassified documents can confirm or refute conspiracy theories. How credible is the source?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Critical Thinking</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Question everything—including your own assumptions. What would prove the theory wrong? What alternative explanations exist?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Skepticism</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Healthy skepticism applies to all claims—official narratives and alternative theories alike. Don't accept anything without evidence.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Confirmation Bias</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We naturally seek information that confirms what we already believe. Actively seek out credible counterarguments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Open-Mindedness</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    History has shown that some dismissed theories were later proven true. Remain open to evidence while maintaining standards for what counts as evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: QUESTIONS WORTH ASKING ===== */}
        <section className="section-container section-divider">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Questions Worth Asking
              </h2>

              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Rather than providing answers, this page ends with questions. The goal of Viewpoint Atlas is not certainty, but deeper curiosity. When you leave this page, you should have better questions than when you arrived.
              </p>

              <div className="space-y-4">
                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    When does a conspiracy theory stop being a conspiracy theory and become accepted history?
                  </p>
                </div>

                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    Can governments keep secrets? For how long?
                  </p>
                </div>

                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    How much evidence is enough to change your mind?
                  </p>
                </div>

                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    What role does media play in spreading or debunking conspiracy theories?
                  </p>
                </div>

                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    What makes evidence convincing? Who decides?
                  </p>
                </div>

                <div className="p-6 border-l-4 border-accent bg-accent/5 rounded-r-lg">
                  <p className="text-base text-foreground font-medium">
                    Can history change? Should it?
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-base text-muted-foreground leading-relaxed">
                  This page embodies the philosophy of Viewpoint Atlas: we do not tell you what to think. Instead, we help you understand how different viewpoints emerge, interact, evolve, and change over time. The goal is not certainty. The goal is deeper curiosity.
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
