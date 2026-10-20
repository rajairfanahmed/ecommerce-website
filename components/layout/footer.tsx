'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-black text-white py-20 md:py-32 px-6 md:px-12 overflow-hidden border-t border-white/10">
            <div className="max-w-[2000px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                                NEO.
                            </h2>
                            <p className="text-text-secondary max-w-sm text-lg">
                                Redefining the digital shopping experience with engineered luxury and future-proof design.
                            </p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <p className="text-sm text-text-tertiary">© 2026 NEO-COMMERCE Inc.</p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h3 className="font-bold mb-6 text-brand-primary uppercase tracking-widest text-xs">Shop</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Accessories</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Techwear</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-bold mb-6 text-brand-primary uppercase tracking-widest text-xs">Support</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Shipping</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Returns</Link></li>
                            <li><Link href="/" className="text-text-secondary hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-bold mb-6 text-brand-primary uppercase tracking-widest text-xs">Social</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>

                {/* Big Footer Text */}
                <div className="mt-24 md:mt-40 border-t border-white/5 pt-12">
                    <h1 className="font-display text-[12vw] leading-[0.8] font-black text-center text-white/5 select-none pointer-events-none">
                        FUTURE RETAIL
                    </h1>
                </div>
            </div>
        </footer>
    );
}
