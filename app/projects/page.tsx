'use client';

import { useState } from 'react';
import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/content/projects';

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTags.some(tag => project.tags.includes(tag))
      );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <Section className="pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of my work in machine learning, data science, and software development.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-ring ${
                  selectedTags.includes(tag)
                    ? 'bg-accent text-background'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {selectedTags.length > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-accent hover:text-accent/80 transition-colors focus-ring"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted">No projects match the selected filters.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
