'use client';

import { products } from '@/lib/mock-products';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id);
    const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'reviews'>('details');

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="min-h-screen pt-12 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                {/* Left: Sticky Image Gallery */}
                <div className="relative h-fit md:sticky md:top-32">
                    <div className="aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden bg-surface-200 relative group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-surface-200 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                <div className="w-full h-full bg-white/5" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col h-full justify-center">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            {product.isNew && <span className="bg-brand-primary text-black text-xs font-bold px-2 py-0.5 uppercase">New Season</span>}
                            <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{product.category}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[0.9]">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-3xl font-mono text-white">${product.price}</span>
                            <div className="h-6 w-[1px] bg-white/20" />
                            <div className="flex items-center gap-1 text-brand-secondary">
                                <Star className="fill-current w-4 h-4" />
                                <span className="text-sm font-bold">{product.rating} (128 Reviews)</span>
                            </div>
                        </div>

                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            Engineered for the demands of the modern urban environment.
                            Features adaptive fabric technology that responds to your body temperature.
                            Seamless construction for zero-friction movement.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 mb-12">
                            <div className="flex gap-4">
                                <Button size="lg" className="flex-1 w-full bg-white text-black hover:bg-white/90">Add to Cart</Button>
                                <Button size="lg" variant="outline" className="px-8"><ArrowRight /></Button>
                            </div>
                            <p className="text-xs text-center text-text-tertiary">Free shipping on all orders over $500. Global delivery.</p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6 py-8 border-t border-white/10">
                            <div className="flex gap-3 items-start">
                                <Truck className="w-5 h-5 text-brand-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Instant Delivery</h4>
                                    <p className="text-xs text-text-secondary">Drone-deployed within 2 hours in metro areas.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Lifetime Warranty</h4>
                                    <p className="text-xs text-text-secondary">Guaranteed against digital decay.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Environment */}
                        <div className="mt-12">
                            <div className="flex gap-8 border-b border-white/10 mb-6">
                                {['details', 'specs', 'reviews'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as 'details' | 'specs' | 'reviews')}
                                        className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === tab ? 'text-white' : 'text-text-tertiary hover:text-white'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary" />}
                                    </button>
                                ))}
                            </div>
                            <div className="min-h-[100px] text-text-secondary text-sm">
                                {activeTab === 'details' && <p>Detailed composition and care instructions coming soon.</p>}
                                {activeTab === 'specs' && <p>Technical specifications loaded from the cloud.</p>}
                                {activeTab === 'reviews' && <p>Verified purchase reviews.</p>}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
