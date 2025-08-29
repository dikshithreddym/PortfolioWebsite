import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './Card';
import { Tag } from './Tag';
import { cn } from '@/lib/utils';
import type { Project } from '@/content/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn(
      'group h-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 hover:border-accent/30',
      'transform-gpu will-change-transform',
      className
    )}>
      <div className="flex h-full flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-sm mb-4 leading-relaxed group-hover:text-muted/80 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag 
                key={tag} 
                variant="muted" 
                size="sm"
                className="transition-all duration-200 group-hover:bg-accent/10 group-hover:text-accent"
              >
                {tag}
              </Tag>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-200 focus-ring p-2 rounded-md hover:bg-muted/20 group/link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
              </Link>
            )}
            
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-200 focus-ring p-2 rounded-md hover:bg-muted/20 group/link"
                aria-label={`View ${project.title} live`}
                title={project.links.live.includes('linkedin.com') ? 'View on LinkedIn' : 'View Live'}
              >
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
              </Link>
            )}
            
            {project.links.paper && (
              <Link
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 transition-all duration-200 focus-ring px-3 py-1 rounded-md hover:bg-accent/10"
                aria-label={`View ${project.title} paper`}
              >
                View Paper
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
