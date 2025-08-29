'use client';

import React, { forwardRef, isValidElement, cloneElement } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  /** When true, render styles/props onto the single child element */
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size = 'md', asChild = false, ...rest }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50';

    const variantClasses = {
      default: 'bg-accent text-background hover:bg-accent/90 hover:shadow-glow active:scale-95',
      outline:
        'border border-border bg-transparent text-foreground hover:bg-muted/10 hover:border-accent/50 hover:text-accent',
      ghost: 'text-foreground hover:bg-muted/10 hover:text-accent',
      accent: 'bg-gradient-to-r from-accent to-accent-secondary text-background hover:shadow-glow active:scale-95',
    };

    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
    };

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    // If asChild=true and child is a valid element, clone it with merged classes/props.
    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return cloneElement(child, {
        ...rest, // pass events/aria/etc to the child
        className: cn(child.props?.className, classes),
        ref, // works if child forwards ref; otherwise ignored safely
      });
    }

    // Default: render a <button>
    return (
      <button className={classes} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
