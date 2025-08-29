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
    <Card 
      variant="glass" 
      hover="glow" 
      className={cn(
        'group h-full p-8',
        'transform-gpu will-change-transform',
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text-primary transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted text-base mb-6 leading-relaxed group-hover:text-muted/90 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Tag 
                key={tag} 
                variant="muted" 
                size="md"
                className="transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/30"
              >
                {tag}
              </Tag>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-3 rounded-lg hover:bg-accent/10 group/link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5 transition-transform duration-300 group-hover/link:scale-110" />
              </Link>
            )}
            
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-3 rounded-lg hover:bg-accent-secondary/10 group/link"
                aria-label={`View ${project.title} live`}
                title={project.links.live.includes('linkedin.com') ? 'View on LinkedIn' : 'View Live'}
              >
                <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover/link:scale-110" />
              </Link>
            )}
            
            {project.links.paper && (
              <Link
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 transition-all duration-300 focus-ring px-4 py-2 rounded-lg hover:bg-accent/10 border border-accent/20 hover:border-accent/40"
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
