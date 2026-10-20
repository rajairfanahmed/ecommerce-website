'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', loading, children, ...props }, ref) => {

        const variants = {
            primary: 'bg-brand-primary text-surface-100 hover:bg-brand-secondary',
            secondary: 'bg-surface-300 text-text-primary hover:bg-surface-200',
            outline: 'border border-text-tertiary text-text-primary hover:border-text-primary hover:bg-surface-200',
            ghost: 'text-text-primary hover:bg-surface-200/50',
            glass: 'glass-panel text-text-primary hover:bg-white/10',
        };

        const sizes = {
            sm: 'h-9 px-4 text-xs font-medium',
            md: 'h-12 px-6 text-sm font-medium',
            lg: 'h-16 px-10 text-base font-bold tracking-wider',
            icon: 'h-10 w-10 p-0 flex items-center justify-center',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'relative inline-flex items-center justify-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden font-sans uppercase tracking-widest',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span className="relative z-10 flex items-center gap-2">{children}</span>

                {/* Shine Effect on Hover (Optional, can be added via CSS or motion) */}
            </motion.button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
