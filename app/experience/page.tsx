import { Section } from '@/components/Section';
import { TimelineItem } from '@/components/TimelineItem';
import { experience } from '@/content/experience';

export default function ExperiencePage() {
  return (
    <Section className="pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Experience
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            My professional journey in machine learning, data science, and software development.
          </p>
        </div>

        <div className="relative">
          {experience.map((exp, index) => (
            <TimelineItem 
              key={`${exp.company}-${exp.period}`}
              experience={exp}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
