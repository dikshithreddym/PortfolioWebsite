import Link from 'next/link';
import { FileText, Video } from 'lucide-react';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { talks } from '@/content/talks';

export default function TalksPage() {
  return (
    <Section className="pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Talks & Publications
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Presentations, publications, and academic contributions in machine learning and AI.
          </p>
        </div>

        <div className="space-y-6">
          {talks.map((talk) => (
            <Card key={talk.title} className="group">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {talk.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <span>{talk.venue}</span>
                    <span>•</span>
                    <span>{talk.date}</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {talk.description}
                  </p>
                </div>
                
                {talk.links && (
                  <div className="flex items-center gap-4">
                    {talk.links.slides && (
                      <Link
                        href={talk.links.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors focus-ring"
                      >
                        <FileText className="h-4 w-4" />
                        View Slides
                      </Link>
                    )}
                    {talk.links.paper && (
                      <Link
                        href={talk.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors focus-ring"
                      >
                        <FileText className="h-4 w-4" />
                        View Paper
                      </Link>
                    )}
                    {talk.links.video && (
                      <Link
                        href={talk.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors focus-ring"
                      >
                        <Video className="h-4 w-4" />
                        Watch Video
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
