import { LucideIcon } from 'lucide-react';

interface IACardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

/**
 * IACard Component (Idea Archaeology)
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Distinct visual block separate from genres
 * - Three-column layout (1 col mobile, 3 col desktop)
 * - Consistent card design with genre cards
 * - Emphasizes the three pillars of Idea Archaeology
 */
export default function IACard({
  title,
  description,
  icon: Icon,
  onClick,
}: IACardProps) {
  return (
    <div
      onClick={onClick}
      className="card-hover p-6 md:p-8 rounded-lg cursor-pointer group"
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent transition-colors duration-200 group-hover:text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
