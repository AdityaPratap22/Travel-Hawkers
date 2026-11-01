"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { EXPERIENCES } from "@/data/travelData";

interface TravelExperiencesProps {
  onSelectExperience?: (title: string) => void;
}

export default function TravelExperiences({ onSelectExperience }: TravelExperiencesProps) {
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
    <section id="experiences" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 lg:mb-12 gap-3 sm:gap-4 text-left">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              OUR EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Travel Experiences
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl font-medium">
              More than just holidays &mdash; experience the extraordinary.
            </p>
          </div>

          {/* Slider controls for mobile and tablet swiping */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous experience"
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next experience"
              className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Category Cards: Horizontal scroll on mobile/tablet, 6-col grid on desktop */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory no-scrollbar"
        >
          {EXPERIENCES.map((exp, idx) => {
            const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
            return (
              <div
                key={exp.id}
                onClick={() => onSelectExperience && onSelectExperience(exp.title)}
                className={`reveal ${delays[idx] || ""} group relative flex-none w-[155px] sm:w-[190px] md:w-[210px] lg:w-auto h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2.5 flex flex-col justify-end p-3 sm:p-4 hover-shine-container snap-start`}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center group-hover:scale-115 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 155px, (max-width: 1024px) 210px, 16vw"
                />

                {/* Gradient Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/80 transition-colors" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start gap-1.5 sm:gap-2 transform group-hover:-translate-y-1 transition-transform duration-300 text-left">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#DEB887] transition-colors leading-tight">
                    {exp.title}
                  </span>

                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#B58238] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
