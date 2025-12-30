"use client";

import React from "react";
import { Check } from "lucide-react";


export default function PricingSection() {

  return (
    <div className="scheme-light bg-background font-sans">
      <section className="bg-background">
        <div className="relative py-16 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            {/* Header Content */}
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl lg:tracking-tight text-foreground">
               21Labs
              </h2>
              <p className="text-muted-foreground mt-8 text-balance text-lg lg:text-xl">
                Professional web development services for businesses of all sizes
              </p>

              <div className="mt-16"></div>

            </div>

            {/* Main Pricing Card & Features Grid */}
            <div className="mx-auto max-w-md space-y-8">
              {/* Pricing Card */}
              <div className="ring-foreground/10 bg-card space-y-6 rounded-2xl border-transparent p-8 md:p-10 text-center shadow-xl ring-1">
                <div>
                  <div className="tracking-tight text-lg font-medium text-foreground">
                    Web Development Services
                  </div>
                  <div className="text-muted-foreground mx-auto mt-1 max-w-xs text-balance text-sm">
                    Custom websites tailored to your needs
                  </div>
                </div>

                <div className="mx-auto grid w-fit grid-cols-[auto_1fr] items-center gap-3">
                  <span className="text-5xl font-semibold text-foreground tracking-tight">
                    $0
                  </span>
                  <div className="text-left">
                    <span className="text-sm text-foreground">Per month</span>
                    <div className="text-muted-foreground text-xs">
                      Billed annually 😃
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 w-full max-w-[200px] mx-auto"
                >
                  Get Started
                </a>

                {/* Dotted Divider */}
              </div>

              {/* Features List */}
              <ul
                role="list"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-foreground/90 px-8 md:px-16"
              >
                <li className="flex items-center gap-2">
                  <Check className="text-muted-foreground size-3 shrink-0" />
                  Custom Websites
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-muted-foreground size-3 shrink-0" />
                  E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-muted-foreground size-3 shrink-0" />
                  Web Applications
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-muted-foreground size-3 shrink-0" />
                  SEO Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
