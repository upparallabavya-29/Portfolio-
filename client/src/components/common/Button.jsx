import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? motion.slot : motion.button;

    const variants = {
        primary: 'bg-primary text-rich-black hover:bg-white',
        secondary: 'bg-subtle-gray text-primary hover:bg-opacity-80',
        outline: 'border border-subtle-gray text-primary hover:border-primary',
        ghost: 'hover:bg-subtle-gray text-primary',
        accent: 'bg-accent text-rich-black hover:bg-opacity-90',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
    };

    return (
        <Comp
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
});

Button.displayName = "Button";

export { Button };
