"use client";

import Image from "next/image";

interface HeroProps {
  onSearch?: (params: { destination: string; budget: string; travellers: string }) => void;
  onOpenVideo?: () => void;
}

export default function Hero({}: HeroProps) {
  return (
    <section className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] flex items-center justify-center -mt-24 pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image - 4K Ultra-HD Scene */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-4k.png"
          alt="Tropical island sunset paradise"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
        />
        {/* Soft morning light vignette for pristine typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent w-full lg:w-3/5 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 text-left space-y-6">
            {/* Headline - Significantly increased size */}
            <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-bold tracking-tight text-slate-900 leading-[1.06]">
              Your next great
              <br />
              <span className="font-script text-[#f05a28] font-bold text-[1.22em] italic inline-block mr-3 sm:mr-5">
                escape
              </span>
              <span>starts here.</span>
            </h1>

            {/* Subtitle - Increased size */}
            <p className="reveal delay-100 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 max-w-2xl font-normal leading-relaxed">
              Explore handpicked holiday packages, popular destinations and
              unforgettable experiences &mdash; all in one place.
            </p>
          </div>

          {/* Right Floating: Airplane Trail on Left + Explore The World Shifted to the Right */}
          <div className="reveal-right delay-200 lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="relative group inline-flex items-center gap-3.5 select-none">
              {/* Animated Dashed Loop Flight Trail & Taking-off Plane */}
              <div className="relative shrink-0">
                <svg
                  className="w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] overflow-visible pointer-events-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Animated Dashed Loop Flight Trail */}
                  <path
                    d="M 8 52 C 18 56, 28 50, 26 36 C 24 22, 10 22, 10 34 C 10 44, 26 44, 38 32 C 46 24, 50 16, 54 8"
                    stroke="rgba(255, 255, 255, 0.95)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    className="animate-dash-trail animate-trail-pulse"
                  />
                  {/* Contrail Origin Sparkles */}
                  <circle cx="8" cy="52" r="1.8" fill="white" className="opacity-80" />
                  <circle cx="14" cy="54" r="1.2" fill="white" className="opacity-60" />

                  {/* Taking-off Plane ascending towards top-right */}
                  <g transform="translate(54, 8)">
                    <g className="animate-plane-takeoff group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <g transform="rotate(-25) scale(0.85) translate(-10, -12)">
                        <path
                          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="0.5"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Shifted to the right of the airplane trail */}
              <div className="font-script text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold tracking-wide leading-[1.08] text-left">
                <span className="block">Explore</span>
                <span className="block">The World</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
