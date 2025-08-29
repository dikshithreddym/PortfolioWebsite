import { Section } from '@/components/Section';
import { Skills } from '@/components/Skills';

export default function SkillsPage() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skills & Technologies
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across programming languages, 
              frameworks, tools, and technologies. From machine learning to web development, 
              I&apos;ve built a diverse skill set through hands-on projects and continuous learning.
            </p>
          </div>
          
          <Skills />
        </div>
      </Section>
    </>
  );
}
