"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PromotionalBannersProps {
  onSelectCategory?: (category: "international" | "domestic") => void;
}

export default function PromotionalBanners({ onSelectCategory }: PromotionalBannersProps) {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* International Holidays Banner */}
          <div className="reveal-left group relative h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-shine-container transform hover:-translate-y-2 bg-[#0B2724]">
            <Image
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80"
              alt="International Holidays"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Deep rich forest gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2724] via-[#0B2724]/60 to-transparent group-hover:via-[#0B2724]/50 transition-colors" />

            <div className="absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end text-left transform group-hover:-translate-y-1 transition-transform duration-300">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#C59B58] block mb-1">
                LUXURY HOLIDAYS
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                International<br />Holidays
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-stone-200/90 max-w-md font-normal leading-relaxed">
                Explore iconic destinations across the globe with our curated international packages.
              </p>
              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  onClick={() => onSelectCategory && onSelectCategory("international")}
                  className="w-full sm:w-auto bg-[#C59B58] hover:bg-[#B58A43] text-[#0B2724] font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md inline-flex items-center justify-center gap-2 group/btn transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  <span>Explore International</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Domestic Getaways Banner */}
          <div className="reveal-right delay-150 group relative h-72 sm:h-84 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-shine-container transform hover:-translate-y-2 bg-[#0B2724]">
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80"
              alt="Domestic Getaways"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Deep rich forest gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2724] via-[#0B2724]/60 to-transparent group-hover:via-[#0B2724]/50 transition-colors" />

            <div className="absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end text-left transform group-hover:-translate-y-1 transition-transform duration-300">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#C59B58] block mb-1">
                EXPLORE INDIA
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Domestic<br />Getaways
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-stone-200/90 max-w-md font-normal leading-relaxed">
                Discover the incredible beauty of India with our handcrafted domestic trips.
              </p>
              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  onClick={() => onSelectCategory && onSelectCategory("domestic")}
                  className="w-full sm:w-auto bg-[#C59B58] hover:bg-[#B58A43] text-[#0B2724] font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md inline-flex items-center justify-center gap-2 group/btn transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  <span>Explore Domestic</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
