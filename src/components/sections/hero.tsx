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
                href="mailto:hi@snowbasestudio.com"
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
          <p className="mx-auto mb-8 mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Professional web development agency creating stunning, high-performance websites. Transform your ideas into digital reality with our expert team.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#showcase"
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
              href="mailto:hi@snowbasestudio.com"
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
                  src="https://cdn.gamma.app/0q3kwkx42ofh0ga/7471ab8c8cab4178b0062d2143c0b7fc/original/Snowbase-Hero-Image.png"
                  alt="Snowbase Studio overview"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
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
