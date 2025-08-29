import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50';
    
    const variantClasses = {
      default: 'bg-accent text-background hover:bg-accent/90 hover:shadow-glow active:scale-95',
      outline: 'border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-accent/50 hover:text-accent',
      ghost: 'text-foreground hover:bg-muted/10 hover:text-accent',
      accent: 'bg-gradient-to-r from-accent to-accent-secondary text-background hover:shadow-glow active:scale-95',
    };
    
    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
