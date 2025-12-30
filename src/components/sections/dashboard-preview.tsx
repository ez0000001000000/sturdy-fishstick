import React from 'react';
import Image from 'next/image';

const DashboardPreview = () => {
  return (
    <section className="border-b bg-background">
      <div className="relative mx-auto max-w-6xl border-x px-4 sm:px-6 md:px-12">
        {/* Intersection Anchor Dots - Corner and Inner Alignment */}
        {/* Top Left */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]" />
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
        
        {/* Top Right */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]" />
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
        
        {/* Bottom Left */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]" />
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
        
        {/* Bottom Right */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]" />
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />

        {/* Dashboard Image Container */}
        <div className="bg-linear-to-b from-transparent to-foreground/[0.025] relative border-x overflow-hidden">
          {/* Main Dashboard Background */}
          <div className="absolute inset-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d66a917a-ca90-40fa-83d2-85b56de21a43-pro-tailark-com/assets/images/images_1.png"
              alt="Dashboard main interface"
              width={1280}
              height={720}
              className="size-full object-cover"
              priority
            />
          </div>
          
          {/* Navigation/UI Overlay Layer for clean text/UI lines */}
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d66a917a-ca90-40fa-83d2-85b56de21a43-pro-tailark-com/assets/images/images_2.png"
            alt="Dashboard navigation overlay"
            width={1280}
            height={720}
            className="relative z-10 mix-blend-multiply transition-opacity duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;