'use client';

import { Button } from '@/components/ui/button';
import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-12">CART <span className="text-brand-primary text-2xl align-top ml-2">(2)</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Cart Items */}
                <div className="lg:col-span-8 space-y-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="flex flex-col md:flex-row gap-8 items-center bg-surface-200/50 p-6 rounded-2xl md:bg-transparent md:p-0">
                            <div className="w-full md:w-48 aspect-[3/4] md:aspect-square bg-surface-200 rounded-xl overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1551488852-d8042592b512?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 w-full text-center md:text-left">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display font-bold text-2xl uppercase">Cyber Jacket V2</h3>
                                    <button className="text-text-tertiary hover:text-error transition-colors"><X className="w-5 h-5" /></button>
                                </div>
                                <p className="text-text-secondary mb-6">Size: L / Color: Obsidian</p>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-4 bg-surface-200 rounded-full px-4 py-2 mx-auto md:mx-0">
                                        <button className="text-text-secondary hover:text-white"><Minus className="w-4 h-4" /></button>
                                        <span className="font-mono w-4 text-center">1</span>
                                        <button className="text-text-secondary hover:text-white"><Plus className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-2xl font-mono font-medium">$450</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Checkout Summary */}
                <div className="lg:col-span-4 h-fit sticky top-32">
                    <div className="bg-surface-200 p-8 rounded-3xl border border-white/5">
                        <h3 className="font-display font-bold text-xl mb-8 uppercase tracking-widest">Order Summary</h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-text-secondary">
                                <span>Subtotal</span>
                                <span className="text-white font-mono">$570.00</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Shipping</span>
                                <span className="text-brand-primary">Calculated at next step</span>
                            </div>
                            <div className="flex justify-between text-text-secondary">
                                <span>Tax</span>
                                <span className="text-white font-mono">$57.00</span>
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-end">
                            <span className="font-bold text-lg">Total</span>
                            <span className="text-3xl font-mono font-bold">$627.00</span>
                        </div>

                        <Link href="/checkout" className="block w-full">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90">
                                Checkout <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
