'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center max-w-md mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-display font-bold mb-4">WELCOME BACK</h1>
                <p className="text-text-secondary">Enter the system.</p>
            </div>

            <form className="w-full space-y-6">
                <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>
                <div>
                    <input type="password" placeholder="Password" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-brand-primary focus:outline-none transition-colors placeholder:text-text-tertiary text-lg" />
                </div>

                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 cursor-pointer text-text-secondary hover:text-white">
                        <input type="checkbox" className="rounded-sm bg-surface-200 border-white/20" />
                        Remember me
                    </label>
                    <a href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Forgot Password?</a>
                </div>

                <Button size="lg" className="w-full bg-white text-black hover:bg-white/90">Sign In</Button>
            </form>

            <div className="mt-12 text-center text-text-secondary">
                Don't have an ID? <Link href="/register" className="text-white hover:text-brand-primary font-bold underline decoration-brand-primary/50 underline-offset-4">Register Now</Link>
            </div>
        </div>
    );
}
