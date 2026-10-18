"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { Calendar, Clock, ArrowRight, Sparkles, X } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/travelData";

export default function BlogPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const extendedBlogs = [
    ...BLOG_POSTS,
    {
      id: "dubai-family-guide",
      title: "Top 7 Things to Do in Dubai with Family",
      date: "28 Jul 2024",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      readTime: "7 min read",
      slug: "dubai-family-guide",
    },
    {
      id: "kerala-backwaters-tips",
      title: "How to Choose the Perfect Houseboat in Kerala",
      date: "19 Jul 2024",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
      readTime: "6 min read",
      slug: "kerala-backwaters-tips",
    },
    {
      id: "goa-offbeat-beaches",
      title: "Beyond Baga: The Most Peaceful Hidden Beaches in Goa",
      date: "12 Jul 2024",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
      readTime: "5 min read",
      slug: "goa-offbeat-beaches",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Travel Blog &amp; <span className="font-script text-[#f05a28] text-4xl sm:text-6xl">Guides</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Tips, travel stories, packing advice, and comprehensive destination guides to inspire your next adventure.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedBlogs.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#f05a28]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-[#f05a28]" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                        Discover insider tips, local secrets, best culinary spots, and budgeting advice written by our destination specialists.
                      </p>
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="px-6 pb-6 pt-0">
                    <button
                      onClick={() => setActiveArticle(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f05a28] hover:text-[#dc4816] group/btn"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            <button
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
              <Image src={activeArticle.image} alt={activeArticle.title} fill className="object-cover" />
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#f05a28]" />
                {activeArticle.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#f05a28]" />
                {activeArticle.readTime}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Traveling to this breathtaking destination is an experience that will stay with you forever. From the moment you land, the cultural warmth, stunning natural landscapes, and delicious cuisine take your breath away.
              </p>
              <h4 className="text-base font-bold text-slate-900 pt-2">Best Highlights &amp; Must-Try Experiences</h4>
              <p>
                Make sure you book your accommodations early, especially during the peak travel season. We recommend staying in authentic boutique villas or certified heritage hotels that offer personal concierge service and local food tastings.
              </p>
              <p>
                Our travel planners at Travel Hawkers can customize every detail of this itinerary for you &mdash; including flight bookings, VIP fast-track transfers, and private guided excursions with certified local hosts.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  setEnquiryOpen(true);
                }}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-xl shadow-md flex items-center gap-2"
              >
                <span>Plan Trip to this Destination</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
}
