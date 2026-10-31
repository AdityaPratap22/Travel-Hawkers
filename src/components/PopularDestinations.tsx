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
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              EXPLORE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl">
              From serene mountains to exotic beaches, discover destinations that inspire.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/destinations"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#B58238] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider arrows */}
            <div className="flex items-center gap-1.5">
              <Link
                href="/destinations"
                aria-label="Previous destination"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/destinations"
                aria-label="Next destination"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Destination Cards using original DESTINATIONS data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {DESTINATIONS.slice(0, 6).map((dest, idx) => {
            const delays = ["delay-75", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination && onSelectDestination(dest.name)}
                className={`reveal ${delays[idx] || ""} group relative h-[220px] sm:h-[250px] md:h-[270px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-shine-container`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:from-slate-950/80 transition-colors" />

                {/* Text overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-left transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#DEB887] transition-colors leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-[11px] text-stone-300 font-medium mt-0.5 group-hover:text-white transition-colors">
                    {dest.packagesCount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
