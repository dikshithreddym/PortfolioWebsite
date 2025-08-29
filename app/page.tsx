import Link from 'next/link';
import { Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { Tag } from '@/components/Tag';
import { Card } from '@/components/Card';
import { TimelineItem } from '@/components/TimelineItem';
import { socials } from '@/content/socials';
import { projects } from '@/content/projects';
import { awards } from '@/content/awards';
import { experience } from '@/content/experience';
import { talks } from '@/content/talks';

export default function HomePage() {
  const featuredProjects = projects.filter(project => project.featured);
  const featuredExperience = experience.slice(0, 2); // Show first 2 experiences
  const featuredTalks = talks.slice(0, 2); // Show first 2 talks

  return (
    <>
             {/* Hero Section */}
       <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
         <div className="max-w-4xl mx-auto text-center">
           <div className="mb-8">
             {/* Profile Image */}
             <div className="mb-8">
               <img
                 src="/profile.jpeg"
                 alt="Dikshith Reddy Macherla"
                 className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-accent/20 shadow-lg"
               />
             </div>
             
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
              <Link href="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={socials.resume} target="_blank" rel="noopener noreferrer" className="flex items-center">
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

                     <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
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

      {/* Experience Section */}
      <Section className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              My professional journey in machine learning, research, and software development.
            </p>
          </div>

          <div className="space-y-8">
            {featuredExperience.map((exp, index) => (
              <TimelineItem 
                key={exp.title} 
                experience={exp} 
                isLast={index === featuredExperience.length - 1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/experience">
                View Full Experience
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Talks Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Talks & Presentations
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Recent presentations and research talks on machine learning and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTalks.map((talk) => (
              <Card key={talk.title} className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
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
                    <div className="flex gap-2">
                      {talk.links.slides && (
                        <Button asChild size="sm" variant="outline">
                          <a href={talk.links.slides} target="_blank" rel="noopener noreferrer">
                            Slides
                          </a>
                        </Button>
                      )}
                      {talk.links.paper && (
                        <Button asChild size="sm" variant="outline">
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

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/talks">
                View All Talks
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities, collaborations, and interesting conversations about ML, DS, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a 
                      href={`mailto:${socials.email}`}
                      className="text-foreground hover:text-accent transition-colors focus-ring"
                    >
                      {socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <a 
                      href={`tel:${socials.phone}`}
                      className="text-foreground hover:text-accent transition-colors focus-ring"
                    >
                      {socials.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="text-foreground">Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </Card>

                         {/* Social Links */}
             <Card className="p-6">
               <h3 className="text-xl font-semibold text-foreground mb-6">
                 Connect
               </h3>
               
               <div className="space-y-4">
                 <Link
                   href="/contact"
                   className="flex items-center gap-3 text-foreground hover:text-accent transition-colors focus-ring"
                 >
                   <Mail className="h-5 w-5" />
                   <span>Send Message</span>
                 </Link>
                 
                 <a
                   href={socials.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-foreground hover:text-accent transition-colors focus-ring"
                 >
                   <Github className="h-5 w-5" />
                   <span>GitHub</span>
                 </a>
                 
                 <a
                   href={socials.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 text-foreground hover:text-accent transition-colors focus-ring"
                 >
                   <Linkedin className="h-5 w-5" />
                   <span>LinkedIn</span>
                 </a>
               </div>
             </Card>
           </div>
        </div>
      </Section>
    </>
  );
}
