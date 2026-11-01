"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/travelData";

const DESTINATION_ROUTES: Record<string, string> = {
  "leh-ladakh": "/domestic-packages/ladakh",
  "bali": "/indonesia",
  "dubai": "/dubai-abu-dhabi",
  "goa": "/domestic-packages/goa",
  "jaipur": "/domestic-packages/rajasthan",
  "kerala": "/domestic-packages/kerala",
  "thailand": "/thailand",
  "kashmir": "/domestic-packages/kashmir",
};

interface PopularDestinationsProps {
  onSelectDestination?: (name: string) => void;
}

export default function PopularDestinations({ onSelectDestination }: PopularDestinationsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="destinations" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 lg:mb-10 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              EXPLORE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Popular Destinations
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl font-medium">
              From serene mountains to exotic beaches, discover destinations that inspire.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-1 sm:pt-0">
            <Link
              href="/destinations"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#B58238] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Functional Slider arrows for small & medium touch navigation */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous destination"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next destination"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Destination Cards:
            - Small & Medium screens (< lg): smooth horizontal swipe with snap points and peek
            - Desktop (>= lg): exact 6-column grid side-by-side matching desktop screenshot
        */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory no-scrollbar"
        >
          {DESTINATIONS.slice(0, 6).map((dest, idx) => {
            const delays = ["delay-75", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
            const targetUrl = DESTINATION_ROUTES[dest.id] || `/domestic-packages/${dest.id}`;
            return (
              <Link
                key={dest.id}
                href={targetUrl}
                className={`reveal ${delays[idx] || ""} group relative flex-none w-[165px] sm:w-[210px] md:w-[230px] lg:w-auto h-[210px] sm:h-[240px] md:h-[260px] lg:h-[270px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-shine-container block snap-start`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 165px, (max-width: 1024px) 230px, 16vw"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:from-slate-950/80 transition-colors" />

                {/* Text overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 md:p-4 text-left transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-[#DEB887] transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-300 font-medium mt-0.5 group-hover:text-white transition-colors">
                    {dest.packagesCount}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
