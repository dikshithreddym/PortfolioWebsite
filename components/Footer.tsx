import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { socials } from '@/content/socials';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted">
                © 2024 Dikshith Reddy Macherla. All rights reserved.
              </p>
              <p className="text-xs text-muted mt-1">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors focus-ring p-2"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors focus-ring p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${socials.email}`}
                className="text-muted hover:text-foreground transition-colors focus-ring p-2"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href={socials.oldSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors focus-ring p-2"
                aria-label="Older site"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
