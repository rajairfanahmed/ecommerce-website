'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/lib/mock-products';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star } from 'lucide-react';

export function ProductCard({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col gap-4"
        >
            <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-surface-200 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="glass" className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        View Details
                    </Button>
                </div>

                {product.isNew && (
                    <div className="absolute top-4 left-4 bg-brand-primary text-black text-xs font-bold px-2 py-1 uppercase tracking-widest">
                        New
                    </div>
                )}
            </Link>

            <div className="flex justify-between items-start">
                <div>
                    <Link href={`/product/${product.id}`}>
                        <h3 className="font-display font-bold text-lg leading-tight mb-1 hover:text-brand-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-text-secondary text-sm">{product.category}</p>
                </div>
                <div className="text-right">
                    <p className="font-mono text-base font-medium">${product.price}</p>
                    <div className="flex items-center gap-1 text-xs text-brand-secondary mt-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{product.rating}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
