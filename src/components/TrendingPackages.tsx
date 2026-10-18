"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Camera,
  Car,
  Clock,
} from "lucide-react";
import { PACKAGES } from "@/data/travelData";

interface TrendingPackagesProps {
  onGetQuote: (packageTitle: string) => void;
}

export default function TrendingPackages({ onGetQuote }: TrendingPackagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="packages" className="py-14 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trending Holiday Packages
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
              Most loved trips by our travellers. Handpicked for the best experiences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-bold text-[#f05a28] hover:text-[#dc4816] flex items-center gap-1 group"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous package"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-[#f05a28] hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#f05a28] transition-all transform hover:scale-105 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next package"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-[#f05a28] hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#f05a28] transition-all transform hover:scale-105 shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid / Carousel */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        >
          {PACKAGES.slice(0, 4).map((pkg, idx) => {
            const delays = ["delay-75", "delay-150", "delay-225", "delay-300"];
            return (
              <div
                key={pkg.id}
                className={`reveal ${delays[idx] || ""} group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover-card-elevate hover:border-orange-200 flex flex-col justify-between`}
              >
                {/* Card Image with badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Badge Top Right */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm interactive-badge inline-block ${pkg.badge.color}`}
                    >
                      {pkg.badge.label}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                        {pkg.title}
                      </h3>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Amenities */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-600 border-t border-slate-100 pt-3 mb-4">
                      <div className="flex items-center gap-1 group-hover:text-slate-900 transition-colors">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#f05a28] transition-colors" />
                        <span>Hotel</span>
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-slate-900 transition-colors">
                        <Camera className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#f05a28] transition-colors" />
                        <span>Sightseeing</span>
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-slate-900 transition-colors">
                        <Car className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#f05a28] transition-colors" />
                        <span>Transfers</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-slate-100 pt-3">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-lg font-extrabold text-slate-900 group-hover:text-[#f05a28] transition-colors">
                        ₹ {pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">/person</span>
                    </div>

                    <button
                      onClick={() => onGetQuote(pkg.title)}
                      className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 hover-glow-orange"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
