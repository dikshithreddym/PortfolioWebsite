import Link from 'next/link';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Sparkles } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { Tag } from '@/components/Tag';
import { Card } from '@/components/Card';
import { TimelineItem } from '@/components/TimelineItem';

import { Testimonials } from '@/components/Testimonials';
import { socials } from '@/content/socials';
import { projects } from '@/content/projects';
import { awards } from '@/content/awards';
import { experience } from '@/content/experience';
import { talks } from '@/content/talks';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3); // Show only first 3 featured projects
  const featuredExperience = experience.slice(0, 2); // Show first 2 experiences
  const featuredTalks = talks.slice(0, 2); // Show first 2 talks

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            {/* Profile Image */}
            <div className="mb-10">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/profile.jpeg"
                  alt="Dikshith Reddy Macherla"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-accent/20 shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-shadow-lg">
              <span className="gradient-text-primary">Dikshith Reddy</span>
              <br />
              <span className="gradient-text-secondary">Macherla</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="h-4 w-4 text-accent" />
              <p className="text-sm text-muted">He/Him</p>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto animate-slide-up mb-6" style={{ animationDelay: '0.2s' }}>
              B.Sc. Computer Science @ Trent | ML & Data Science | Research Intern | Hackathon Winner | Dean&apos;s Honour Roll
            </p>
            <p className="text-muted animate-slide-up" style={{ animationDelay: '0.3s' }}>Toronto, Ontario, Canada</p>
          </div>

          {/* Achievement Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {awards.map((award) => (
              <Tag key={award.title} variant="accent" size="md" className="hover-glow">
                {award.title}
              </Tag>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="hover-glow">
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-glow">
              <Link href={socials.resume} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-muted/10 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text-primary text-shadow">
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
      <Section className="py-20" animate animation="slide-up" delay={200}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary text-shadow">
              Featured Projects
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              A selection of my recent work in machine learning, data science, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="hover-glow">
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-muted/10 py-20" animate animation="slide-up" delay={400}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary text-shadow">
              Experience
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              My professional journey in machine learning, research, and software development.
            </p>
          </div>

          <div className="relative">
            {featuredExperience.map((exp, index) => (
              <TimelineItem 
                key={exp.title} 
                experience={exp} 
                isLast={index === featuredExperience.length - 1}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="hover-glow">
              <Link href="/experience">
                View Full Experience
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20" animate animation="slide-up" delay={600}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary text-shadow">
              Recommendations
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              What colleagues and mentors say about working with me.
            </p>
          </div>
          <Testimonials />
        </div>
      </Section>

      {/* Talks Section */}
      <Section className="bg-muted/10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary text-shadow">
              Talks & Presentations
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Recent presentations and research talks on machine learning and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTalks.map((talk) => (
              <Card key={talk.title} variant="glass" hover="glow" className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {talk.title}
                    </h3>
                    <p className="text-accent font-medium text-sm">
                      {talk.venue}
                    </p>
                    <p className="text-muted text-sm">
                      {talk.date}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted leading-relaxed">
                    {talk.description}
                  </p>
                  
                  {talk.links && (
                    <div className="flex gap-3">
                      {talk.links.slides && (
                        <Button asChild size="sm" variant="outline" className="hover-glow">
                          <a href={talk.links.slides} target="_blank" rel="noopener noreferrer">
                            Slides
                          </a>
                        </Button>
                      )}
                      {talk.links.paper && (
                        <Button asChild size="sm" variant="outline" className="hover-glow">
                          <a href={talk.links.paper} target="_blank" rel="noopener noreferrer">
                            Paper
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="hover-glow">
              <Link href="/talks">
                View All Talks
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary text-shadow">
              Get In Touch
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              I&apos;m always interested in new opportunities, collaborations, and interesting conversations about ML, DS, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card variant="glass" hover="glow" className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a 
                      href={`mailto:${socials.email}`}
                      className="text-foreground hover:text-accent transition-colors focus-ring text-lg"
                    >
                      {socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-secondary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <a 
                      href={`tel:${socials.phone}`}
                      className="text-foreground hover:text-accent-secondary transition-colors focus-ring text-lg"
                    >
                      {socials.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-blue/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="text-foreground text-lg">Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card variant="glass" hover="glow" className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Connect
              </h3>
              
              <div className="space-y-6">
                <Link
                  href="/contact"
                  className="flex items-center gap-4 text-foreground hover:text-accent transition-colors focus-ring p-3 rounded-lg hover:bg-accent/5"
                >
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-lg">Send Message</span>
                </Link>
                
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-accent-secondary transition-colors focus-ring p-3 rounded-lg hover:bg-accent-secondary/5"
                >
                  <div className="p-2 bg-accent-secondary/10 rounded-lg">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="text-lg">GitHub</span>
                </a>
                
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-accent-blue transition-colors focus-ring p-3 rounded-lg hover:bg-accent-blue/5"
                >
                  <div className="p-2 bg-accent-blue/10 rounded-lg">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="text-lg">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
