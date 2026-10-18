"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/travelData";

interface PopularDestinationsProps {
  onSelectDestination?: (name: string) => void;
}

export default function PopularDestinations({ onSelectDestination }: PopularDestinationsProps) {
  return (
    <section id="destinations" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
              From serene mountains to exotic beaches, discover destinations that inspire.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/destinations"
              className="text-xs sm:text-sm font-bold text-[#f05a28] hover:text-[#dc4816] flex items-center gap-1 group"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <Link
                href="/destinations"
                aria-label="Previous destination"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/destinations"
                aria-label="Next destination"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Destination Cards displayed in a row on desktop matching the template */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {DESTINATIONS.slice(0, 6).map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination && onSelectDestination(dest.name)}
              className="group relative h-[210px] sm:h-[240px] md:h-[260px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Gradient Bottom Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Destination Meta */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-left">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-200 transition-colors leading-tight">
                  {dest.name}
                </h3>
                <p className="text-[11px] text-white/80 font-medium mt-0.5">
                  {dest.packagesCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
