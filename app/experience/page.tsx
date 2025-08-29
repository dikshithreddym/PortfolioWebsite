import { Section } from '@/components/Section';
import { TimelineItem } from '@/components/TimelineItem';
import { Testimonials } from '@/components/Testimonials';
import { experience } from '@/content/experience';

export default function ExperiencePage() {
  return (
    <>
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

      {/* Recommendations Section */}
      <Section className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recommendations
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              What colleagues and mentors say about working with me.
            </p>
          </div>
          <Testimonials />
        </div>
      </Section>
    </>
  );
}
