import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
  variant?: 'default' | 'glass' | 'gradient';
  hover?: 'lift' | 'glow' | 'scale' | 'none';
}

export function Card({ 
  children, 
  className, 
  as: Component = 'div',
  variant = 'default',
  hover = 'lift'
}: CardProps) {
  const baseClasses = 'rounded-lg border transition-all duration-300';
  
  const variantClasses = {
    default: 'border-border bg-background',
    glass: 'glass-card',
    gradient: 'gradient-border bg-background'
  };
  
  const hoverClasses = {
    lift: 'hover:-translate-y-2 hover:shadow-lg hover:border-accent/30',
    glow: 'hover:shadow-glow hover:border-accent/50',
    scale: 'hover:scale-105 hover:shadow-lg',
    none: ''
  };

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses[hover],
        className
      )}
    >
      {children}
    </Component>
  );
}
