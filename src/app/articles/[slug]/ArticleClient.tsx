"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { ArticleContent, ArticleMeta } from "@/data/articlesData";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check,
  Compass,
  MapPin,
  FileText,
  ListOrdered,
  Sparkles,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface ArticleClientProps {
  article: ArticleContent;
  relatedArticles: ArticleMeta[];
}

export default function ArticleClient({
  article,
  relatedArticles,
}: ArticleClientProps) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Article Hero Banner */}
        <div className="relative bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 space-y-6">
            {/* Back link */}
            <div>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Travel Articles</span>
              </Link>
            </div>

            {/* Title - NO eyebrow badge above */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Metadata bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
              <span className="bg-[#f05a28] text-white font-bold px-3 py-1 rounded-full text-xs">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-400" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-orange-400" />
                {article.wordCount} words
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400" />
                {article.destination}, {article.region}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Summary Lead Card */}
              <div className="bg-orange-50/70 border-l-4 border-[#f05a28] p-6 rounded-2xl text-slate-800 text-sm sm:text-base leading-relaxed italic shadow-xs">
                &ldquo;{article.summary}&rdquo;
              </div>

              {/* Quick Table of Contents */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ListOrdered className="w-4 h-4 text-[#f05a28]" />
                  <span>Table of Contents</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {article.sections.map((section, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      className="text-slate-600 hover:text-[#f05a28] hover:underline truncate"
                    >
                      {section.heading}
                    </a>
                  ))}
                </div>
              </div>

              {/* Article Structured Sections */}
              <div className="space-y-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
                {article.sections.map((section, idx) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="scroll-mt-24 space-y-4 border-b border-slate-100 pb-8 last:border-b-0 last:pb-0"
                  >
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {section.heading}
                    </h2>

                    <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Tags & Share */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-xs font-bold text-[#f05a28] hover:text-[#dc4816] bg-orange-50 px-4 py-2 rounded-xl transition-all border border-orange-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share Guide</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mid-page Trip CTA */}
              <div className="bg-gradient-to-r from-slate-900 to-orange-950 text-white rounded-3xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-black">
                    Ready to visit {article.destination}?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Book customized private packages with luxury stays, verified drivers, and 24x7 support.
                  </p>
                </div>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="shrink-0 bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-all"
                >
                  <span>Enquire For {article.destination}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Booking Assistant Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-5 sticky top-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#f05a28]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      Customize Your Trip
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tailor-made itineraries for {article.destination}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% verified hotels & homestays</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Experienced mountain chauffeurs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent pricing with zero hidden fees</span>
                  </div>
                </div>

                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Plan My {article.destination} Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-400">Written by</div>
                    <div className="font-bold text-slate-800">{article.author}</div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-black text-slate-900">
                    Related {article.category} Guides
                  </h3>

                  <div className="space-y-4">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/articles/${rel.slug}`}
                        className="group flex items-start gap-3 p-2 rounded-2xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#f05a28] line-clamp-2 leading-snug">
                            {rel.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                            <span>{rel.readTime}</span>
                            <span>•</span>
                            <span>{rel.destination}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/articles"
                    className="block text-center text-xs font-bold text-[#f05a28] hover:underline pt-2"
                  >
                    View All 450+ Articles &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={`Article: ${article.title}`}
      />
    </div>
  );
}
