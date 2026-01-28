import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/common/Button';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const scrolled = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b',
                scrolled ? 'bg-rich-black/80 border-subtle-gray py-4' : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
                    DEV<span className="text-accent">.</span> Portfolio
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="outline" size="sm" onClick={() => window.open('/resume.pdf')}>
                        Resume
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 top-16 z-40 bg-rich-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={toggleMenu}
                                className="text-2xl font-bold text-primary hover:text-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="accent" size="lg" onClick={() => window.open('/resume.pdf')}>
                            Download Resume
                        </Button>

                        <div className="flex space-x-6 mt-8">
                            <a href="#" className="text-secondary hover:text-accent"><Github size={24} /></a>
                            <a href="#" className="text-secondary hover:text-accent"><Linkedin size={24} /></a>
                            <a href="#" className="text-secondary hover:text-accent"><Mail size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
