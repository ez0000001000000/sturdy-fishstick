"use client";

import React from 'react';
import posthog from 'posthog-js';

const BlogHeader = () => {

  return (
    <section className="bg-white">
      <div className="bg-white @container py-4 md:py-6">
        <div className="mx-auto max-w-[1152px] px-6">
        </div>
      </div>

      {/* Global Scaffolding Grid Container Start */}
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="relative">
          {/* Structural Vertical Lines */}
          <div className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x border-border/60"></div>
          
          {/* Subgrid Column Lines (Hidden on Mobile) */}
          <div className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1 border-x border-border/60 max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"></div>
          <div className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x border-border/60 max-lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
