# Hero Section Code Documentation

## Overview
The hero section is the main landing section of the Snowbase Studio website. It features an announcement badge, animated headline, call-to-action buttons, and a product display mockup.

## File Structure

### Main Hero Component
**File**: `src/components/sections/hero.tsx`

```tsx
"use client";

import React from "react";
import Image from "next/image";
import posthog from "posthog-js";
import { Highlighter } from "@/components/ui/highlighter";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      {/* Main Hero Container */}
      <div className="relative mx-auto max-w-6xl border-x border-b px-3 pb-10 pt-24 md:pb-20 md:pt-36">
        {/* Announcement Badge */}
        <div className="flex justify-center">
          <div className="relative mx-auto w-fit bg-black/5 p-2">
            {/* Corner Dots - Quartz Aesthetic */}
            <div className="absolute left-1 top-1 size-[3px] rounded-full bg-black/20" />
            <div className="absolute right-1 top-1 size-[3px] rounded-full bg-black/20" />
            <div className="absolute bottom-1 left-1 size-[3px] rounded-full bg-black/20" />
            <div className="absolute bottom-1 right-1 size-[3px] rounded-full bg-black/20" />
            
            <div className="relative flex h-fit items-center gap-2 rounded-full border border-border bg-white px-3 py-1 shadow-sm">
              <span className="text-sm font-medium text-foreground">
                Snowbase Studio - Now Accepting Projects
              </span>
              <span className="block h-3 w-px bg-gray-200" />
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline transition-all"
                onClick={() => posthog.capture("cta_learn_more_clicked", {
                  location: "hero_announcement_badge",
                  cta_text: "Get Quote",
                })}
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
          <h1 className="text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
            Build <Highlighter color="#ffd1dc" animationDuration={800} isView={true}>Amazing</Highlighter> Websites with <Highlighter color="#ffb366" animationDuration={800} isView={true} strokeWidth={0.5}>Snowbase Studio</Highlighter>
          </h1>
          <p className="mx-auto mb-8 mt-4 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            Professional web development agency creating stunning, high-performance websites. Transform your ideas into digital reality with our expert team.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md ring-1 ring-[color-mix(in_oklab,var(--color-foreground)_15%,var(--color-primary))] transition-colors hover:bg-primary/90 border-t border-white/20"
              onClick={() => posthog.capture("cta_get_started_clicked", {
                location: "hero_section",
                cta_text: "See Gallery",
                cta_variant: "primary",
              })}
            >
              See Gallery
            </a>
            <a
              href="#"
              className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-transparent bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/10 transition-all hover:bg-muted/50"
              onClick={() => posthog.capture("cta_view_components_clicked", {
                location: "hero_section",
                cta_text: "Contact Now",
                cta_variant: "secondary",
              })}
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

      {/* Product Display Mockup Section */}
      <div className="border-b">
        <div className="relative mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
          {/* Structural Grid Nodes - Plus markers at intersections */}
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"></div>
          
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"></div>
          <div className="bg-white ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"></div>

          {/* Dashboard Container */}
          <div className="relative border-x bg-gradient-to-b from-white to-foreground/[0.025] overflow-hidden rounded-t-[24px]">
            <div className="relative w-full aspect-[16/9]">
              {/* Fallback pattern for mockup if image isn't available in assets */}
              <div className="absolute inset-0 bg-white">
                <Image
                  alt="Snowbase Studio overview"
                  width={1280}
                  height={720}
                  className="size-full object-cover"
                  src="https://cdn.gamma.app/0q3kwkx42ofh0ga/e03a6a36ff134d32aa2aa98aa22355c8/original/Snowbase-Hero-Image.png"
                  priority
                />
              </div>
              {/* Layered navigation elements for depth */}
              <Image
                alt="Snowbase Studio navigation"
                width={1280}
                height={720}
                className="absolute inset-0 size-full object-cover pointer-events-none"
                src="https://cdn.gamma.app/0q3kwkx42ofh0ga/e03a6a36ff134d32aa2aa98aa22355c8/original/Snowbase-Hero-Image.png"
              />
            </div>
          </div>
        </div>
      </div>

          </section>
  );
};

export default HeroSection;
```

### Highlighter Component (Dependency)
**File**: `src/components/ui/highlighter.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HighlighterProps {
  children: React.ReactNode;
  color?: string;
  animationDuration?: number;
  strokeWidth?: number;
  isView?: boolean;
  className?: string;
}

export function Highlighter({
  children,
  color = "#ffd1dc",
  animationDuration = 800,
  strokeWidth = 1,
  isView = false,
  className,
}: HighlighterProps) {
  const highlighterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!highlighterRef.current || !isView) return;

    const element = highlighterRef.current;
    const rect = element.getBoundingClientRect();

    // Create SVG overlay
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", rect.width.toString());
    svg.setAttribute("height", rect.height.toString());
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "-1";

    // Create highlight path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    // Calculate path with rounded corners
    const padding = strokeWidth * 2;
    const width = rect.width;
    const height = rect.height;
    const radius = 4;
    
    const d = `M ${padding + radius} ${padding}
              L ${width - padding - radius} ${padding}
              Q ${width - padding} ${padding} ${width - padding} ${padding + radius}
              L ${width - padding} ${height - padding - radius}
              Q ${width - padding} ${height - padding} ${width - padding - radius} ${height - padding}
              L ${padding + radius} ${height - padding}
              Q ${padding} ${height - padding} ${padding} ${height - padding - radius}
              L ${padding} ${padding + radius}
              Q ${padding} ${padding} ${padding + radius} ${padding} Z`;

    path.setAttribute("d", d);
    path.setAttribute("fill", color);
    path.setAttribute("opacity", "0.3");
    path.style.transition = `opacity ${animationDuration}ms ease-in-out`;

    svg.appendChild(path);
    element.appendChild(svg);

    // Animate in
    setTimeout(() => {
      path.setAttribute("opacity", "0.3");
    }, 100);

    return () => {
      if (element.contains(svg)) {
        element.removeChild(svg);
      }
    };
  }, [isView, color, animationDuration, strokeWidth]);

  return (
    <span
      ref={highlighterRef}
      className={cn("relative inline-block", className)}
      style={{
        backgroundColor: isView ? color : "transparent",
        opacity: isView ? 0.3 : 0,
        transition: `opacity ${animationDuration}ms ease-in-out, background-color ${animationDuration}ms ease-in-out`,
      }}
    >
      {children}
    </span>
  );
}
```

### PostHog Analytics Setup
**File**: `instrumentation-client.ts`

```typescript
import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_API_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2025-05-24",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
} else if (process.env.NODE_ENV === "development") {
  console.warn("PostHog key is missing. Analytics will be disabled.");
}
```

## Key Features

### 1. **Announcement Badge**
- Displays current status ("Now Accepting Projects")
- Decorative corner dots for visual appeal
- Integrated with PostHog analytics

### 2. **Animated Headline**
- Uses custom Highlighter component for text animation
- Two highlighted words: "Amazing" (pink) and "Snowbase Studio" (orange)
- Smooth fade-in animations

### 3. **Call-to-Action Buttons**
- Primary button: "See Gallery"
- Secondary button: "Contact Now"
- Full PostHog tracking implementation

### 4. **Product Display Mockup**
- Hero image showcase
- Structural grid nodes for design aesthetics
- Optimized Next.js Image components

### 5. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Responsive typography and spacing
- Adaptive layout for different screen sizes

## Analytics Events Tracked

1. `cta_learn_more_clicked` - Announcement badge interactions
2. `cta_get_started_clicked` - Primary CTA clicks
3. `cta_view_components_clicked` - Secondary CTA clicks

## Styling Details

- **Color Scheme**: Uses CSS custom properties for theming
- **Typography**: Responsive font sizes (4xl to 6xl)
- **Spacing**: Consistent padding and margins
- **Visual Effects**: Shadows, borders, and gradient overlays
- **Animations**: Smooth transitions and hover states

## Dependencies

- React (client component)
- Next.js Image optimization
- PostHog analytics
- Tailwind CSS for styling
- Custom Highlighter component

## Usage

The hero section is imported and used in the main page layout:

```tsx
import HeroSection from "@/components/sections/hero";

// In page component
<HeroSection />
```

This provides a complete, production-ready hero section with modern design, animations, and comprehensive analytics tracking.
