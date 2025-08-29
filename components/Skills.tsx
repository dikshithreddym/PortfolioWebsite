'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { skills, skillCategories, type Skill } from '@/content/skills';

const levelColors = {
  beginner: 'bg-red-500/20 text-red-400 border-red-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  expert: 'bg-green-500/20 text-green-400 border-green-500/30',
};

const levelLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const groupedSkills = skillCategories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
            selectedCategory === 'all'
              ? 'bg-accent text-background'
              : 'bg-muted/20 text-muted hover:text-foreground hover:bg-muted/40'
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
              selectedCategory === category
                ? 'bg-accent text-background'
                : 'bg-muted/20 text-muted hover:text-foreground hover:bg-muted/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      {selectedCategory === 'all' ? (
        // Show all skills grouped by category
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {groupedSkills[category].map((skill) => (
                  <Card 
                    key={skill.name} 
                    className="p-4 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 transform-gpu"
                  >
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">{skill.name}</h4>
                      <Tag 
                        variant="default" 
                        size="sm"
                        className={`${levelColors[skill.level]} border`}
                      >
                        {levelLabels[skill.level]}
                      </Tag>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show filtered skills
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <Card 
              key={skill.name} 
              className="p-4 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1 transform-gpu"
            >
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">{skill.name}</h4>
                                 <Tag 
                   variant="default" 
                   size="sm"
                   className={`${levelColors[skill.level]} border`}
                 >
                  {levelLabels[skill.level]}
                </Tag>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Skills Summary */}
      <Card className="p-6 bg-muted/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-accent">
              {skills.filter(s => s.level === 'expert').length}
            </div>
            <div className="text-sm text-muted">Expert</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {skills.filter(s => s.level === 'advanced').length}
            </div>
            <div className="text-sm text-muted">Advanced</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">
              {skills.filter(s => s.level === 'intermediate').length}
            </div>
            <div className="text-sm text-muted">Intermediate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400">
              {skills.filter(s => s.level === 'beginner').length}
            </div>
            <div className="text-sm text-muted">Beginner</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
