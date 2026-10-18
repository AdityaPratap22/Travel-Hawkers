"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/travelData";

export default function TravelBlogs() {
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
    <section id="blog" className="py-14 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Travel Blog & Guides
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
              Tips, travel stories and destination guides to inspire your next journey.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-[#f05a28] hover:text-[#dc4816] flex items-center gap-1 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous article"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-[#f05a28] hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#f05a28] transition-all transform hover:scale-105 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next article"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 hover:border-[#f05a28] hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#f05a28] transition-all transform hover:scale-105 shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        >
          {BLOG_POSTS.map((post, idx) => {
            const delays = ["delay-75", "delay-150", "delay-225"];
            return (
              <article
                key={post.id}
                className={`reveal ${delays[idx] || ""} group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover-card-elevate hover:border-orange-200 flex flex-col justify-between`}
              >
                <div>
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-2.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Read More link */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <a
                    href="#blog"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f05a28] hover:text-[#dc4816] group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
