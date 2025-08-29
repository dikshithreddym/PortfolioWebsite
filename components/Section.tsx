import { cn } from '@/lib/utils';
import { AnimatedSection } from './AnimatedSection';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export function Section({ 
  children, 
  className, 
  id, 
  animate = false,
  animation = 'fade-in',
  delay = 0
}: SectionProps) {
  const content = (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );

  if (animate) {
    return (
      <AnimatedSection animation={animation} delay={delay}>
        {content}
      </AnimatedSection>
    );
  }

  return content;
}
