"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Camera,
  Car,
  Heart,
  Clock,
} from "lucide-react";
import { PACKAGES } from "@/data/travelData";

interface TrendingPackagesProps {
  onGetQuote: (packageTitle: string) => void;
}

export default function TrendingPackages({ onGetQuote }: TrendingPackagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
    <section id="packages" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              FEATURED PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Trending Holiday Packages
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl">
              Most loved trips by our travellers. Handpicked for the best experiences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#B58238] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous package"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next package"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Packages Carousel with original PACKAGES data */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
        >
          {PACKAGES.map((pkg, idx) => {
            const isFav = favorites[pkg.id];
            const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300"];
            return (
              <div
                key={pkg.id}
                className={`reveal ${delays[idx] || ""} flex-none w-[270px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group snap-start`}
              >
                {/* Image & Badges */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#B58238] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                        {pkg.badge.label}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Heart */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(pkg.id, e)}
                    aria-label="Save to wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-500 hover:bg-white transition-all shadow-xs"
                  >
                    <Heart
                      className={`w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : ""}`}
                    />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1 mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#B58238]" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Amenities Line */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-600 border-t border-stone-100 pt-3 mb-4">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Hotel</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Sightseeing</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Transfers</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-stone-100 pt-3">
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-lg font-extrabold text-slate-900">
                        ₹ {pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">/person</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onGetQuote(pkg.title)}
                      className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
