"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EXPERIENCES } from "@/data/travelData";

interface TravelExperiencesProps {
  onSelectExperience?: (title: string) => void;
}

export default function TravelExperiences({ onSelectExperience }: TravelExperiencesProps) {
  return (
    <section id="experiences" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal mb-8 sm:mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Travel Experiences
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
            More than just holidays &mdash; experience the extraordinary.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {EXPERIENCES.map((exp, idx) => {
            const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300", "delay-400"];
            return (
              <div
                key={exp.id}
                onClick={() => onSelectExperience && onSelectExperience(exp.title)}
                className={`reveal ${delays[idx] || ""} group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2.5 flex flex-col justify-end p-3.5 sm:p-4 hover-shine-container`}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center group-hover:scale-115 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />

                {/* Gradient Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/80 transition-colors" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start gap-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-300 transition-colors leading-tight">
                    {exp.title}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#f05a28] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
