'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-4',
    'slide-up': 'opacity-0 translate-y-8',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
  };

  const animateClasses = {
    'fade-in': 'opacity-100 translate-y-0',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        animationClasses[animation],
        isIntersecting && animateClasses[animation],
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
