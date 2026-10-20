import { Hero } from "@/components/home/hero";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { Testimonials } from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <FeaturedCategories />
      <Testimonials />

      {/* Spacer for scroll feel */}
      <section className="h-screen flex items-center justify-center bg-surface-100 border-t border-white/5">
        <div className="text-center">
          <p className="text-brand-primary mb-4">Scrolling Experience</p>
          <h2 className="text-4xl font-display font-bold">Next Section Coming Soon</h2>
        </div>
      </section>
    </div>
  );
}
