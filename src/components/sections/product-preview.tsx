import React from 'react';
import Image from 'next/image';

const ProductPreview = () => {
  // Asset references based on provided list
  const mainMockupUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d66a917a-ca90-40fa-83d2-85b56de21a43-pro-tailark-com/assets/images/images_1.png";
  const overlayMockupUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d66a917a-ca90-40fa-83d2-85b56de21a43-pro-tailark-com/assets/images/images_2.png";

  return (
    <section className="relative bg-background border-b border-border">
      {/* Decorative corner accents and container */}
      <div className="relative mx-auto max-w-6xl border-x border-border px-4 sm:px-6 md:px-12">
        {/* Accent Square Markers - Top */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -left-[3.5px] -top-[3.5px]"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -right-[3.5px] -top-[3.5px]"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"></div>

        {/* Accent Square Markers - Bottom */}
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -left-[3.5px]"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] -right-[3.5px]"></div>
        <div className="bg-card ring-foreground/10 pointer-events-none absolute z-20 size-1.5 border border-transparent shadow-sm ring-1 -bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11"></div>

        {/* Main Dashboard Preview Wrapper */}
        <div className="bg-linear-to-b from-transparent to-foreground/[0.025] relative border-x border-border overflow-hidden">
          <div className="relative w-full aspect-[16/9] min-h-[300px] md:min-h-[500px] lg:min-h-[640px]">
            {/* Background Dashboard Layer */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={mainMockupUrl}
                alt="Oxymor dashboard background" 
                fill
                priority
                className="object-cover object-top opacity-50 grayscale-[20%]"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
            
            {/* Main Interactive Dashboard Interface Layer */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Image 
                src={overlayMockupUrl}
                alt="Oxymor interactive dashboard preview" 
                width={1280}
                height={720}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Social Proof (Logo Cloud) Section */}
      <div className="mx-auto max-w-6xl border-x border-border px-6 py-8 md:py-16">
        <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
          <p className="text-muted-foreground mt-4 text-base md:text-lg font-normal">
            Tailark is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers
          </p>
        </div>
        
        {/* Logos Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-12 sm:grid-cols-4 md:grid-cols-5 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="flex justify-center">
            {/* OpenAI Placeholder SVG based on content */}
            <span className="font-semibold text-foreground flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
                <path d="M22.2819 9.8211C23.0805 9.17223 23.3603 8.16335 22.9804 7.29172C22.6001 6.42008 21.6366 5.86178 20.5714 5.86178C20.3344 5.86178 20.0913 5.88909 19.8519 5.94314C19.1451 4.54512 17.6749 3.66558 16.0353 3.66558C14.7352 3.66558 13.562 4.21855 12.754 5.11186C11.946 4.21855 10.7728 3.66558 9.47266 3.66558C7.83307 3.66558 6.36287 4.54512 5.65603 5.94314C5.41662 5.88909 5.17351 5.86178 4.93655 5.86178C3.87129 5.86178 2.90779 6.42008 2.52755 7.29172C2.1476 8.16335 2.42738 9.17223 3.22602 9.8211C2.61053 10.5186 2.25415 11.4111 2.25415 12.3847C2.25415 13.3582 2.61053 14.2507 3.22602 14.9482C2.42738 15.5971 2.1476 16.606 2.52755 17.4776C2.90779 18.3493 3.87129 18.9076 4.93655 18.9076C5.17351 18.9076 5.41662 18.8803 5.65603 18.8262C6.36287 20.2243 7.83307 21.1038 9.47266 21.1038C10.7728 21.1038 11.946 20.5508 12.754 19.6575C13.562 20.5508 14.7352 21.1038 16.0353 21.1038C17.6749 21.1038 19.1451 20.2243 19.8519 18.8262C20.0913 18.8803 20.3344 18.9076 20.5714 18.9076C21.6366 18.9076 22.6001 18.3493 22.9804 17.4776C23.3603 16.606 23.0805 15.5971 22.2819 14.9482C22.8974 14.2507 23.2538 13.3582 23.2538 12.3847C23.2538 11.4111 22.8974 10.5186 22.2819 9.8211Z" fill="currentColor"/>
              </svg>
              OpenAI
            </span>
          </div>
          <div className="flex justify-center grayscale">
            <span className="font-semibold text-foreground flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 fill-[#3ECF8E]">
                <path d="M11.95 2L10 12h8l-8.05 10L12 12h-8l8-10z" />
              </svg>
              supabase
            </span>
          </div>
          <div className="flex justify-center grayscale">
            <span className="font-bold text-foreground text-xl italic tracking-tighter">PayPal</span>
          </div>
          <div className="flex justify-center grayscale">
            <span className="font-bold text-foreground flex flex-col items-center leading-none">
              <span className="text-sm">prime video</span>
              <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary translate-y-[-2px]">
                <path d="M2 2C10 8 30 8 38 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </div>
          <div className="flex justify-center grayscale max-md:hidden">
            <span className="font-bold text-foreground text-lg tracking-tighter uppercase">Cisco</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;