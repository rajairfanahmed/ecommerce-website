'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/mock-products';
import { ProductCard } from '@/components/shop/product-card';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Accessories', 'Footwear'];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen px-6 md:px-12 py-12 md:py-24 max-w-[1800px] mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-4">
                        SHOP
                    </h1>
                    <p className="text-text-secondary max-w-sm">
                        Explore the complete 2026 collection. Engineered for the new world.
                    </p>
                </div>

                {/* Mobile Filter Toggle (Visible on mobile only, ideally) */}
                <div className="md:hidden">
                    <Button variant="outline" size="sm">
                        <SlidersHorizontal className="mr-2 w-4 h-4" /> Filters
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0 hidden md:block sticky top-32 h-fit">
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filters
                    </h3>

                    <div className="space-y-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`block w-full text-left py-2 text-sm transition-colors ${selectedCategory === cat
                                        ? 'text-brand-primary font-bold pl-2 border-l-2 border-brand-primary'
                                        : 'text-text-secondary hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
                        >
                            {filteredProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProducts.length === 0 && (
                        <div className="py-24 text-center text-text-secondary">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
