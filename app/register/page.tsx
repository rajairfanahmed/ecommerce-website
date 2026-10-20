'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center max-w-md mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-display font-bold mb-4">INITIATE</h1>
                <p className="text-text-secondary">Create your digital identity.</p>
            </div>

            <form className="w-full space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                    <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>
                <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>

                <Button size="lg" className="w-full bg-white text-black hover:bg-white/90">Create Account</Button>
            </form>

            <div className="mt-12 text-center text-text-secondary">
                Already initiated? <Link href="/login" className="text-white hover:text-brand-primary font-bold underline decoration-brand-primary/50 underline-offset-4">Log In</Link>
            </div>
        </div>
    );
}
