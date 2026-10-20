'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center px-6 md:px-12">

            {/* Background Abstract */}
            <div className="absolute inset-0 -z-10 bg-surface-100">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent-secondary/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-[1800px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <motion.div
                    style={{ y: y1 }}
                    className="z-10 flex flex-col items-start"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-brand-primary" />
                        <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-bold">2026 Collection</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50"
                    >
                        WEAR THE <br /> FUTURE.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-text-secondary text-lg max-w-md mb-4 leading-relaxed"
                    >
                        Engineered functionality meets pure aesthetics. The new generation of apparel designed for the digital nomad.
                    </motion.p>

                    <div className="flex gap-4 mt-2">
                        <Button size="lg" className="group">
                            Shop Collection <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg">view lookbook</Button>
                    </div>
                </motion.div>

                {/* Right: Visual */}
                <motion.div
                    style={{ y: y2 }}
                    className="relative h-full min-h-[500px] flex items-center justify-center"
                >
                    {/* Abstract 3D Card / Image Placeholder */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
                        className="relative w-full max-w-md aspect-[3/4] bg-surface-200 border border-white/10 rounded-2xl overflow-hidden glass-panel"
                    >
                        {/* Gradient Placeholder for Image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80" />

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-8 left-8 right-8 z-20 p-6 glass-panel rounded-xl border border-white/20"
                        >
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-brand-secondary uppercase tracking-wider mb-1">Featured</p>
                                    <h3 className="font-display text-2xl font-bold">Cyber Jacket V2</h3>
                                </div>
                                <span className="text-xl font-mono text-white">$450</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
