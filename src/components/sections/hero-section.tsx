import React from 'react';

/**
 * Hero component for the Tailark Quartz landing page.
 * Implements a centered layout with a large semi-bold headline, description text,
 * primary CTA button and a subtle colorful gradient glow effect.
 */
export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative mx-auto max-w-5xl px-6 pt-32 text-center overflow-visible"
    >
      {/* Subtle colorful gradient glow effect at the bottom background */}
      <div 
        className="pointer-events-none absolute inset-x-0 -bottom-16 mx-auto h-40 max-w-2xl rounded-t-full bg-gradient-to-b via-amber-50 to-purple-100 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Large semi-bold headline */}
        <h1 className="text-[#09090B] text-balance text-4xl font-semibold sm:mt-12 sm:text-6xl tracking-tight leading-[1.1]">
          Powerful Analytics for Smarter Decisions
        </h1>

        {/* Description paragraph */}
        <p className="text-[#71717A] mb-8 mt-4 text-balance text-lg sm:text-[1.125rem] leading-[1.6]">
          Our comprehensive analytics and experimentation platform empowers your team to make data-driven decisions.
        </p>

        {/* Primary CTA button with specific styling from design system */}
        <div className="flex flex-col items-center">
          <a 
            href="#"
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6366f1] disabled:pointer-events-none disabled:opacity-50 shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-[#6366f1] ring-1 ring-[#6366f1] text-white hover:bg-[#6366f1]/90 h-10 rounded-md px-6 text-sm"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            Start Testing for free
          </a>
          
          {/* Subtle micro-copy below CTA */}
          <span className="text-[#71717A] mt-3 block text-center text-sm">
            No credit card required!
          </span>
        </div>
      </div>
    </section>
  );
}
