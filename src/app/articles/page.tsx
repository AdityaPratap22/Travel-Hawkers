"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { articlesMetadata } from "@/data/articlesData";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Compass,
  FileText,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Domestic",
  "International",
  "Weekend Getaways",
  "Pilgrimage",
  "Heritage",
  "Wildlife",
  "Adventure",
  "Travel Tips",
];

const ITEMS_PER_PAGE = 24;

export default function ArticlesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredArticles = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return articlesMetadata.filter((art) => {
      const matchCat =
        selectedCategory === "All" || art.category === selectedCategory;
      if (!matchCat) return false;

      if (!q) return true;

      return (
        art.title.toLowerCase().includes(q) ||
        art.destination.toLowerCase().includes(q) ||
        art.region.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section - strictly NO eyebrow badge */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f05a28_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Travel Articles & <br />
              <span className="text-[#f05a28]">Expert Destination Insights</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              Explore {articlesMetadata.length}+ verified, in-depth travel guides (1,000–1,500 words each) covering curated itineraries, local food specialties, high-altitude logistics, and cultural etiquette.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles on Shimla, Kedarnath, Bali, Tiger Safaris, Dubai..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f05a28] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                    selectedCategory === cat
                      ? "bg-[#f05a28] text-white shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Stats Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 text-xs text-slate-600">
            <div className="font-semibold">
              Showing{" "}
              <span className="text-slate-900 font-bold">
                {filteredArticles.length === 0 ? 0 : startIndex + 1}–
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length)}
              </span>{" "}
              of <span className="text-slate-900 font-bold">{filteredArticles.length}</span> articles
              {selectedCategory !== "All" && (
                <span> in <strong className="text-[#f05a28]">{selectedCategory}</strong></span>
              )}
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <FileText className="w-3.5 h-3.5 text-[#f05a28]" />
              <span>Comprehensive 1,000–1,500 word handbooks with day-by-day itineraries</span>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article, idx) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className={`reveal delay-${(idx % 6) * 75} bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover-card-elevate hover:border-orange-300 flex flex-col group hover-shine-container`}
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-[#f05a28]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 truncate text-slate-500">
                          <MapPin className="w-3 h-3 text-[#f05a28]" />
                          {article.destination}, {article.region}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#f05a28] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-md"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-[#f05a28] pt-1">
                        <span className="text-[11px] text-slate-500 font-normal">
                          {article.wordCount} words
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No travel articles found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                No articles match &ldquo;{searchQuery}&rdquo;. Try another destination like &ldquo;Manali&rdquo;, &ldquo;Jaipur&rdquo;, &ldquo;Corbett&rdquo;, or &ldquo;Bali&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 text-xs font-bold bg-[#f05a28] hover:bg-[#dc4816] text-white px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                Reset Search & Show All Articles
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="p-2 sm:px-4 sm:py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-1">
                  {getPageNumbers().map((num, idx) =>
                    typeof num === "number" ? (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentPage(num);
                          window.scrollTo({ top: 400, behavior: "smooth" });
                        }}
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition-all ${
                          currentPage === num
                            ? "bg-[#f05a28] text-white shadow-md shadow-orange-500/30"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {num}
                      </button>
                    ) : (
                      <span
                        key={idx}
                        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs text-slate-400"
                      >
                        ...
                      </span>
                    )
                  )}
                </div>

                <button
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  disabled={currentPage === totalPages}
                  className="p-2 sm:px-4 sm:py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 shadow-xs"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-slate-500">
                Page <strong className="text-slate-800">{currentPage}</strong> of{" "}
                <strong className="text-slate-800">{totalPages}</strong>
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Callout */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-orange-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black">
                Plan Your Next Adventure with Travel Hawkers
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Get custom itineraries, hotel reservations, and 24x7 on-trip assistance from our destination specialists.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full sm:w-auto bg-[#f05a28] hover:bg-[#dc4816] text-white px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Enquire For Custom Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle="Articles / Custom Trip Inquiry"
      />
    </div>
  );
}
