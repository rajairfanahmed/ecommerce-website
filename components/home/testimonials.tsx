'use client';

import { motion } from 'framer-motion';

const testimonials = [
    { id: 1, text: "A VISUAL MASTERPIECE.", author: "Design Weekly" },
    { id: 2, text: "THE FUTURE OF RETAIL.", author: "TechCrunch" },
    { id: 3, text: "FLUIDITY DEFINED.", author: "Awwwards" },
    { id: 4, text: "PURE AESTHETIC.", author: "Vogue Digital" },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-surface-100 overflow-hidden border-t border-b border-white/5">
            <div className="flex whitespace-nowrap overflow-hidden relative">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={`${t.id}-${i}`} className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                            <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-secondary to-text-primary">
                                "{t.text}"
                            </span>
                            <span className="text-sm md:text-base font-mono text-brand-primary">
                                — {t.author}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
