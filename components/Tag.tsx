import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Tag({ children, variant = 'default', size = 'md', className }: TagProps) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-muted/20 text-muted border border-muted/30',
    accent: 'bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 hover:border-accent/50',
    muted: 'bg-muted/10 text-muted border border-muted/20 hover:bg-muted/20 hover:text-foreground',
    secondary: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30 hover:bg-accent-secondary/20',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
