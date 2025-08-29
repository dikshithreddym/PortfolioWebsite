import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

export function Tag({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className 
}: TagProps) {
  const variants = {
    default: 'bg-muted text-foreground',
    accent: 'bg-accent/20 text-accent border border-accent/30',
    muted: 'bg-background text-muted border border-border',
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
