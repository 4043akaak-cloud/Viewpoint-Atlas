import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface GenreCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  topicCount?: number;
  onClick?: () => void;
}

/**
 * GenreCard Component
 * 
 * Design Philosophy: Minimalist Knowledge Navigator
 * - Each card is a "portal" to future exploration
 * - Hover state indicates interactivity
 * - Subtle elevation and border highlight on interaction
 * - Icon + title + description + topic count (future)
 */
export default function GenreCard({
  title,
  description,
  icon: Icon,
  topicCount,
  onClick,
}: GenreCardProps) {
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
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Topic Count / Future Indicator */}
      {topicCount !== undefined ? (
        <p className="text-xs md:text-sm font-medium text-accent">
          {topicCount} topics
        </p>
      ) : (
        <p className="text-xs md:text-sm font-medium text-muted-foreground">
          Hundreds of topics await
        </p>
      )}
    </div>
  );
}
