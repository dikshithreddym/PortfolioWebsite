import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export function Card({ children, className, as: Component = 'div' }: CardProps) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-border bg-background p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-lg',
        className
      )}
    >
      {children}
    </Component>
  );
}
