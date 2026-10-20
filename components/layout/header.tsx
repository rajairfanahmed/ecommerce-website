'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Shop', href: '/shop' },
        { name: 'Collections', href: '/collections' },
        { name: 'About', href: '/about' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 md:h-24 transition-all duration-500',
                    isScrolled ? 'bg-surface-100/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
                )}
            >
                {/* Logo */}
                <Link href="/" className="z-50 text-2xl md:text-3xl font-display font-bold tracking-tighter mix-blend-difference text-white">
                    NEO<span className="text-brand-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="text-text-primary hover:text-brand-primary transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-text-primary hover:text-brand-primary transition-colors">
                        <User className="w-5 h-5" />
                    </button>
                    <div className="relative">
                        <button className="text-text-primary hover:text-brand-primary transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                        </button>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-black font-bold">
                            2
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4 z-50">
                    <div className="relative">
                        <button className="text-text-primary hover:text-brand-primary transition-colors">
                            <ShoppingBag className="w-6 h-6" />
                        </button>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] text-black font-bold">
                            2
                        </span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-text-primary p-1"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-surface-100 flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-display font-bold text-text-primary hover:text-brand-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex gap-6 mt-8"
                            >
                                <Button variant="outline" size="lg" className="rounded-full">Log In</Button>
                            </motion.div>
                        </nav>

                        {/* Background Texture/Gradient for Mobile Menu */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary via-surface-100 to-surface-100 -z-10" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
