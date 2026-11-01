"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/travelData";

export default function Testimonials() {
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
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 lg:mb-12 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              REVIEWS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              What Our Travellers Say
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl font-medium">
              Real stories from happy travellers across India and abroad.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-1 sm:pt-0">
            <Link
              href="/about-us"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#B58238] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel with original TESTIMONIALS data */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
        >
          {TESTIMONIALS.map((test, idx) => {
            const delays = ["delay-75", "delay-150", "delay-225", "delay-300"];
            return (
              <div
                key={test.id}
                className={`reveal ${delays[idx] || ""} flex-none w-[270px] sm:w-[320px] md:w-[360px] bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between snap-start text-left`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed italic mb-6">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#B58238]/40">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {test.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {test.location}
                    </p>
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
