import { Button } from '@/components/ui/button';
import GenreCard from '@/components/GenreCard';
import IACard from '@/components/IACard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  BookOpen,
  Microscope,
  Zap,
  TrendingUp,
  Briefcase,
  Brain,
  Palette,
  Lightbulb,
  Compass,
  Layers,
  GitBranch,
  Zap as ZapIcon,
} from 'lucide-react';

/**
 * Home Page – Viewpoint Atlas MVP
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Architecture-first approach
 * - Four sections: Hero, Topic Genres, Idea Archaeology, Footer
 * - Each section is designed as a future container
 * - Navigation is self-explanatory
 * 
 * Structure:
 * 1. Hero Section – Headline + description + CTA
 * 2. Topic Genres – 10 major genres of knowledge
 * 3. Idea Archaeology – 3 core pillars
 * 4. Footer – Navigation + links
 */
export default function Home() {
  // Topic Genres Data
  const genres = [
    {
      title: 'History',
      description: 'The evolution of human civilization, events, and ideas that shaped our world.',
      icon: BookOpen,
    },
    {
      title: 'Science',
      description: 'Discoveries, theories, and principles that explain the natural world.',
      icon: Microscope,
    },
    {
      title: 'Technology',
      description: 'Innovations, tools, and systems that transform how we live and work.',
      icon: Zap,
    },
    {
      title: 'Economics',
      description: 'Systems, markets, and principles governing production and trade.',
      icon: TrendingUp,
    },
    {
      title: 'Politics',
      description: 'Governance, power structures, and systems of social organization.',
      icon: Briefcase,
    },
    {
      title: 'Psychology',
      description: 'Human behavior, cognition, and the workings of the mind.',
      icon: Brain,
    },
    {
      title: 'Culture',
      description: 'Art, literature, music, and the creative expressions of societies.',
      icon: Palette,
    },
    {
      title: 'Philosophy',
      description: 'Fundamental questions about existence, knowledge, and values.',
      icon: Lightbulb,
    },
    {
      title: 'Society',
      description: 'Social structures, institutions, and the dynamics of human communities.',
      icon: Compass,
    },
    {
      title: 'Media',
      description: 'Communication systems, journalism, and the evolution of information.',
      icon: Layers,
    },
  ];

  // Idea Archaeology Categories
  const iaCategories = [
    {
      title: 'Reverse Engineering Breakthroughs',
      description: 'Deconstruct major innovations to understand the principles and decisions that made them possible.',
      icon: GitBranch,
    },
    {
      title: 'Evolution of Solutions',
      description: 'Trace how problems have been solved across different eras and domains, revealing patterns and progress.',
      icon: TrendingUp,
    },
    {
      title: 'Future Bottlenecks',
      description: 'Identify the constraints and challenges that will shape the next generation of breakthroughs.',
      icon: ZapIcon,
    },
  ];

  const handleComingSoon = () => {
    alert('Feature coming soon');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* ===== HERO SECTION ===== */}
        <section className="section-container bg-gradient-to-br from-background via-background to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Headline */}
              <h1 className="text-balance mb-6">
                Explore the Architecture of Ideas
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Viewpoint Atlas maps the interconnected world of human knowledge. Understand how ideas evolve, connect, and shape our understanding of history, science, culture, and beyond.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-base font-semibold"
              >
                Enter Topics
              </Button>
            </div>
          </div>
        </section>

        {/* ===== TOPIC GENRES SECTION ===== */}
        <section id="topics" className="section-container section-divider">
          <div className="container">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-balance mb-4">Topic Genres</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore knowledge organized by major domains. Each genre contains hundreds of interconnected topics waiting to be discovered.
              </p>
            </div>

            {/* Genre Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {genres.map((genre) => (
                <GenreCard
                  key={genre.title}
                  title={genre.title}
                  description={genre.description}
                  icon={genre.icon}
                  onClick={handleComingSoon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== IDEA ARCHAEOLOGY SECTION ===== */}
        <section id="ia" className="section-container section-divider bg-accent/2">
          <div className="container">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-balance mb-4">Idea Archaeology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A unique lens for exploring how ideas emerge, evolve, and shape the future. Idea Archaeology reveals the hidden architecture beneath human progress.
              </p>
            </div>

            {/* IA Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {iaCategories.map((category) => (
                <IACard
                  key={category.title}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  onClick={handleComingSoon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
