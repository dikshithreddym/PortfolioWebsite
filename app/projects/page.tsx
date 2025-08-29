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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring border ${
                  selectedTags.includes(tag)
                    ? 'bg-gradient-to-r from-accent to-green-400 text-background border-accent shadow-lg shadow-accent/25'
                    : 'bg-background text-foreground border-border hover:bg-muted/20 hover:border-accent/50 hover:shadow-md'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {selectedTags.length > 0 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedTags([])}
                className="px-4 py-2 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200 focus-ring"
              >
                Clear all filters
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
