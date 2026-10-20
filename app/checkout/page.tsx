'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto">
            <Link href="/cart" className="inline-flex items-center text-text-secondary hover:text-white mb-12 transition-colors">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cart
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                {/* Form Section */}
                <div>
                    <h1 className="text-4xl font-display font-bold mb-8">CHECKOUT</h1>

                    <form className="space-y-8">
                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-secondary mb-6">Contact & Shipping</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="email" placeholder="Email" className="col-span-2 bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                <input type="text" placeholder="First Name" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                <input type="text" placeholder="Last Name" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                <input type="text" placeholder="Address" className="col-span-2 bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                <div className="grid grid-cols-2 gap-4 col-span-2">
                                    <input type="text" placeholder="City" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                    <input type="text" placeholder="Postal Code" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-secondary mb-6">Payment</h2>
                            <div className="bg-surface-200 p-6 rounded-xl border border-white/10 flex items-center gap-4 cursor-pointer hover:border-brand-primary transition-colors">
                                <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                </div>
                                <span className="font-bold">Credit Card</span>
                            </div>
                            <div className="mt-4">
                                <input type="text" placeholder="Card Number" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <input type="text" placeholder="MM / YY" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                    <input type="text" placeholder="CVC" className="bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary" />
                                </div>
                            </div>
                        </section>

                        <Button size="lg" className="w-full mt-8">Pay $627.00</Button>
                    </form>
                </div>

                {/* Summary Visual */}
                <div className="bg-surface-200 p-8 rounded-3xl h-fit sticky top-32">
                    <h3 className="font-display font-bold mb-6">YOUR ORDER</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-surface-300 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1551488852-d8042592b512?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Cyber Jacket V2</h4>
                                <p className="text-xs text-text-secondary">L / Obsidian</p>
                                <p className="text-sm font-mono mt-1">$450.00</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-surface-300 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1935&auto=format&fit=crop" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Neural Hood</h4>
                                <p className="text-xs text-text-secondary">One Size</p>
                                <p className="text-sm font-mono mt-1">$120.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-white/10 my-6" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>$627.00</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
