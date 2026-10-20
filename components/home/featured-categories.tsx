'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        name: 'Cybernetic Wear',
        description: 'Next-gen fabrics for grid runners.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
        colSpan: 'md:col-span-8',
        rowSpan: 'md:row-span-2',
    },
    {
        id: 2,
        name: 'Neural Accessories',
        description: 'Interface directly.',
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1957&auto=format&fit=crop',
        colSpan: 'md:col-span-4',
        rowSpan: 'md:row-span-1',
    },
    {
        id: 3,
        name: 'Footwear',
        description: 'Gravity-defying treads.',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop',
        colSpan: 'md:col-span-4',
        rowSpan: 'md:row-span-1',
    },
];

export function FeaturedCategories() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-between items-end mb-16"
            >
                <div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">COLLECTIONS</h2>
                    <div className="h-1 w-24 bg-brand-primary" />
                </div>
                <p className="hidden md:block text-text-secondary max-w-xs text-right">
                    Curated selection of high-performance gear aimed at the modern vanguard.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
                {categories.map((cat, i) => (
                    <Link
                        key={cat.id}
                        href={`/shop`}
                        className={`group relative overflow-hidden rounded-2xl block bg-surface-200 ${cat.colSpan} ${cat.rowSpan}`}
                    >
                        <motion.div
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="absolute inset-0 z-0"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url(${cat.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        </motion.div>

                        <div className="absolute bottom-0 left-0 p-8 z-10 w-full flex justify-between items-end">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {cat.name}
                                </h3>
                                <p className="text-text-secondary translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {cat.description}
                                </p>
                            </div>
                            <div className="bg-brand-primary rounded-full p-3 text-black transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                <ArrowUpRight strokeWidth={2.5} />
                            </div>
                        </div>

                        {/* Always visible label for mobile or non-hover state guidance */}
                        <div className="absolute top-6 right-6 z-20 md:hidden">
                            <span className="text-white font-bold uppercase tracking-widest text-sm">{cat.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
