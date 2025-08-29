'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { socials } from '@/content/socials';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/talks', label: 'Talks' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold gradient-text-primary hover:scale-105 transition-transform focus-ring"
            onClick={closeMobileMenu}
          >
            DRM
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 focus-ring px-3 py-2 rounded-lg ${
                  pathname === item.href
                    ? 'text-accent bg-accent/10 border border-accent/20'
                    : 'text-muted hover:text-foreground hover:bg-muted/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-2 rounded-lg hover:bg-accent/10 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-2 rounded-lg hover:bg-accent-secondary/10 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${socials.email}`}
              className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-2 rounded-lg hover:bg-accent-blue/10 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-muted hover:text-foreground transition-all duration-300 focus-ring p-2 rounded-lg hover:bg-muted/10"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <Link 
                href="/" 
                className="text-xl font-bold gradient-text-primary"
                onClick={closeMobileMenu}
              >
                DRM
              </Link>
              <button
                onClick={closeMobileMenu}
                className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-2 rounded-lg hover:bg-muted/10"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-4 py-8">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block text-lg font-medium transition-all duration-300 focus-ring py-4 px-4 rounded-lg ${
                      pathname === item.href
                        ? 'text-accent bg-accent/10 border border-accent/20'
                        : 'text-muted hover:text-foreground hover:bg-muted/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="p-4 border-t border-border/50">
              <div className="flex items-center justify-center space-x-4">
                <Link
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-3 rounded-lg hover:bg-accent/10 hover:scale-110"
                  aria-label="GitHub"
                  onClick={closeMobileMenu}
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-3 rounded-lg hover:bg-accent-secondary/10 hover:scale-110"
                  aria-label="LinkedIn"
                  onClick={closeMobileMenu}
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href={`mailto:${socials.email}`}
                  className="text-muted hover:text-foreground transition-all duration-300 focus-ring p-3 rounded-lg hover:bg-accent-blue/10 hover:scale-110"
                  aria-label="Email"
                  onClick={closeMobileMenu}
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
