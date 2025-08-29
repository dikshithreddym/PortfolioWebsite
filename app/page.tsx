import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { Tag } from '@/components/Tag';
import { socials } from '@/content/socials';
import { projects } from '@/content/projects';
import { awards } from '@/content/awards';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Dikshith Reddy Macherla
            </h1>
            <p className="text-sm text-muted mb-2">He/Him</p>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto">
              B.Sc. Computer Science @ Trent | ML & Data Science | Research Intern | Hackathon Winner | Dean&apos;s Honour Roll
            </p>
            <p className="text-muted mt-4">Toronto, Ontario, Canada</p>
          </div>

          {/* Achievement Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {awards.map((award) => (
              <Tag key={award.title} variant="accent" size="md">
                {award.title}
              </Tag>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={socials.resume} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            About
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted leading-relaxed text-center max-w-3xl mx-auto">
              I&apos;m a Computer Science undergrad at Trent University focused on Machine Learning and Data Science. 
              I&apos;ve built research-grade forecasting models and award-winning AI apps—from high-frequency stock 
              prediction to EcoSort AI, a Databricks-powered waste-sorting project. I care about practical ML, 
              clear communication, and shipping minimal, useful products.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A selection of my recent work in machine learning, data science, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
