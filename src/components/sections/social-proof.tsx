import React from 'react';

const SocialProof = () => {
  return (
    <section className="bg-background border-b border-border">
      <div className="mx-auto max-w-6xl border-x border-border px-6 py-8 md:py-16">
        {/* Descriptive Text Content */}
        <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
          <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            Tailark is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-y-10 sm:grid-cols-4 md:grid-cols-5">
          {/* OpenAI */}
          <div className="relative flex h-10 items-center justify-center transition-opacity hover:opacity-80">
            <svg
              width="100"
              height="24"
              viewBox="0 0 100 24"
              fill="currentColor"
              className="text-foreground"
            >
              <path d="M21.5 6.1c-1.3-1.3-3.1-2.1-5-2.1s-3.7.8-5 2.1c-.2-.5-.5-1-.9-1.4-1.3-1.3-3.1-2.1-5-2.1s-3.7.8-5 2.1S-.4 7.8-.4 9.7c0 1.9.8 3.7 2.1 5 .2.5.5 1 .9 1.4 1.3 1.3 3.1 2.1 5 2.1s3.7-.8 5-2.1c.2.5.5 1 .9 1.4 1.3 1.3 3.1 2.1 5 2.1s3.7-.8 5-2.1 2.1-3.1 2.1-5c.1-1.9-.7-3.7-2-5zm0-2zm12.3 8.3c0 4.1-2.8 6.9-6.9 6.9s-6.9-2.8-6.9-6.9 2.8-6.9 6.9-6.9 6.9 2.8 6.9 6.9zm-3.1 0c0-2.4-1.5-3.8-3.8-3.8s-3.8 1.4-3.8 3.8 1.5 3.8 3.8 3.8 3.8-1.4 3.8-3.8zm17.6-6.6h2.9v13h-2.9v-1.1c-.8.8-2 1.4-3.5 1.4-3.3 0-5.7-2.6-5.7-6.7s2.4-6.7 5.7-6.7c1.5 0 2.7.5 3.5 1.4V5.8zm-3.4 9.9c2.1 0 3.5-1.5 3.5-3.6s-1.4-3.6-3.5-3.6-3.5 1.5-3.5 3.6 1.4 3.6 3.5 3.6zm13.1-13.3h3.1v1.6H61v-1.6zm0 3.4h3.1v13.3H61V9.2zm19.6 0h2.9v13.3h-3.1v-1.1c-.8.8-2 1.4-3.5 1.4-3.3 0-5.7-2.6-5.7-6.7s2.4-6.7 5.7-6.7c1.5 0 2.7.5 3.5 1.4V9.2zm-3.4 9.9c2.1 0 3.5-1.5 3.5-3.6s-1.4-3.6-3.5-3.6-3.5 1.5-3.5 3.6 1.4 3.6 3.5 3.6zm14.1-13.3h3.1v1.6h-3.1v-1.6zm0 3.4h3.1v13.3h-3.1V9.2z" />
            </svg>
            <span className="font-semibold ml-2 text-foreground">OpenAI</span>
          </div>

          {/* Supabase */}
          <div className="relative flex h-10 items-center justify-center transition-opacity hover:opacity-80">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#3ecf8e]"
            >
              <path
                d="M13.3484 21.0503C12.9238 21.6 12.1157 21.4116 11.9566 20.7303L10.3951 14H4.51603C3.61908 14 3.19323 12.8988 3.85877 12.2982L10.6516 6.17188C11.0762 5.78917 11.751 6.07764 11.7779 6.64917L12.3951 11H18.516C19.413 11 19.8388 12.1012 19.1733 12.7018L13.3484 21.0503Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-semibold ml-1.5 text-foreground leading-none tracking-tight">supabase</span>
          </div>

          {/* PayPal */}
          <div className="relative flex h-10 items-center justify-center transition-opacity hover:opacity-80">
            <svg width="100" height="24" viewBox="0 0 100 24" fill="#003087">
               <path d="M12.4 3.4c-.4-.5-.9-.9-1.6-1.2C10.1 2 9.2 1.9 8 1.9H2.6c-.4 0-.7.3-.8.7L.1 14c0 .2.1.4.3.4h2.5L3.8 8.8c.1-.4.4-.7.8-.7h1.4c1.3 0 2.5-.2 3.5-.7.9-.5 1.7-1.1 2.2-2 .5-.9.8-1.5.8-2 .1-.5 0-.9-.1-1.3v10.2c0 .3.3.6.6.6h2.5c.3 0 .6-.3.6-.6V2.6c0-.3-.3-.6-.6-.6H12c0 .4.2.9.4 1.4z" />
               <text x="18" y="18" fontStyle="italic" fontWeight="bold" fontSize="18" fill="#003087">PayPal</text>
            </svg>
          </div>

          {/* Prime Video */}
          <div className="relative flex h-10 items-center justify-center transition-opacity hover:opacity-80">
            <div className="flex flex-col items-center">
              <span className="font-bold text-[#00A8E1] italic text-sm">prime video</span>
              <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
                <path d="M2 2C8 6 32 6 38 2" stroke="#00A8E1" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Cisco */}
          <div className="relative h-10 max-md:hidden md:flex items-center justify-center transition-opacity hover:opacity-80">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-end gap-1 px-1">
                <div className="w-0.5 h-2 bg-foreground/80"></div>
                <div className="w-0.5 h-4 bg-foreground/80"></div>
                <div className="w-0.5 h-4 bg-foreground/80"></div>
                <div className="w-0.5 h-6 bg-foreground/80"></div>
                <div className="w-0.5 h-6 bg-foreground/80"></div>
                <div className="w-0.5 h-4 bg-foreground/80"></div>
                <div className="w-0.5 h-4 bg-foreground/80"></div>
                <div className="w-0.5 h-2 bg-foreground/80"></div>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-foreground uppercase">Cisco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;