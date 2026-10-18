"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { ArrowRight, Compass, Heart, Users, Flame, Binoculars, Landmark, Sparkles, CheckCircle2 } from "lucide-react";

export default function ExperiencesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<string | undefined>(undefined);

  const experiences = [
    {
      id: "trekking-adventure",
      title: "Trekking & Adventure",
      tagline: "Conquer scenic ridges, glacial passes, and untamed mountain trails.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Leh Ladakh", "Manali", "Rishikesh", "Spiti Valley", "Nepal"],
      features: [
        "Certified mountaineering guides & medical oxygen backup",
        "Quality alpine camping equipment & bonfires",
        "Rafting, paragliding, and high-altitude mountain biking",
      ],
      startingFrom: "₹ 18,500",
    },
    {
      id: "honeymoon-holidays",
      title: "Honeymoon Holidays",
      tagline: "Celebrate your love in secluded villas, private beaches, and romantic hideaways.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Bali", "Maldives", "Kashmir", "Switzerland", "Goa"],
      features: [
        "Private pool villas with flower bed decor & champagne",
        "Candlelight beach dinners with ocean view",
        "Couple spa sessions & private sunset yacht cruises",
      ],
      startingFrom: "₹ 45,000",
    },
    {
      id: "family-vacations",
      title: "Family Vacations",
      tagline: "Pre-planned comfort, kid-friendly theme parks, and spacious resorts.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Dubai", "Singapore", "Kerala", "Thailand", "Andaman"],
      features: [
        "Child-friendly resorts with swimming pools & recreational clubs",
        "Private AC coach transport throughout the trip",
        "Flexible day itineraries without rushed schedules",
      ],
      startingFrom: "₹ 24,999",
    },
    {
      id: "group-tours",
      title: "Group Tours",
      tagline: "Unforgettable group adventures for friends, college groups, and corporate teams.",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Goa", "Thailand", "Kasol", "Dubai", "Rajasthan"],
      features: [
        "Dedicated tour captain to coordinate all logistics",
        "Group discounts on flights, stays, and activities",
        "Pub crawls, music nights, and team bonding events",
      ],
      startingFrom: "₹ 11,999",
    },
    {
      id: "wildlife-tours",
      title: "Wildlife Tours",
      tagline: "Get up-close with Bengal tigers, wild elephants, and exotic bird species.",
      icon: Binoculars,
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Ranthambore", "Jim Corbett", "Kaziranga", "Gir", "Masai Mara"],
      features: [
        "Exclusive open-top 4x4 Gypsy jungle safaris",
        "Expert naturalists & wildlife trackers",
        "Luxury eco-resorts nestled right beside national parks",
      ],
      startingFrom: "₹ 19,500",
    },
    {
      id: "pilgrimage-tours",
      title: "Pilgrimage Tours",
      tagline: "Sacred journeys, ancient architectural temples, and inner spiritual peace.",
      icon: Landmark,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
      topDestinations: ["Varanasi", "Char Dham", "Amritsar", "Tirupati", "Rameshwaram"],
      features: [
        "VIP Darshan arrangements where permitted",
        "Senior citizen-friendly transport & hotel assistance",
        "Pure vegetarian and satvik dining options",
      ],
      startingFrom: "₹ 14,000",
    },
  ];

  const handleEnquire = (expTitle: string) => {
    setSelectedExperience(expTitle);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => handleEnquire("Custom Experience")} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Extraordinary Travel <span className="font-script text-[#f05a28] text-4xl sm:text-6xl">Experiences</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Whether you are craving adrenaline-pumping mountain treks, romantic beachfront bliss, or sacred heritage trails, we curate every detail for you.
            </p>
          </div>
        </div>

        {/* Experiences List */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={exp.id}
                  id={exp.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`lg:col-span-5 relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow-lg ${
                    isEven ? "lg:order-2" : ""
                  }`}>
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Icon className="w-4 h-4 text-[#f05a28]" />
                      <span>{exp.title}</span>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                        {exp.tagline}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-2">
                      {exp.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Top Destinations */}
                    <div className="pt-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Popular Destinations for this Experience:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.topDestinations.map((d) => (
                          <span
                            key={d}
                            className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow-2xs"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Packages starting from</div>
                        <div className="text-xl font-extrabold text-slate-900">{exp.startingFrom} <span className="text-xs font-normal text-slate-500">/person</span></div>
                      </div>

                      <button
                        onClick={() => handleEnquire(exp.title)}
                        className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold py-3 px-6 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                      >
                        <span>Plan This Experience</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={selectedExperience}
      />
    </div>
  );
}
