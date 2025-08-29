import { Card } from './Card';
import { Tag } from './Tag';
import type { Experience } from '@/content/experience';

interface TimelineItemProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 h-4 w-4 rounded-full border-2 border-accent bg-background" />
      
      <div className="ml-12">
        <Card className="mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {experience.title}
              </h3>
              <p className="text-accent font-medium">
                {experience.company}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span>{experience.location}</span>
                <span>•</span>
                <span>{experience.period}</span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm text-muted leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Tag key={tag} variant="accent" size="sm">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
