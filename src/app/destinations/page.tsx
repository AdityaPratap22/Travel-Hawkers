"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { Calendar, ArrowRight, Sparkles, Filter } from "lucide-react";

export default function DestinationsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Domestic India",
    "International",
    "Beach Escapes",
    "Mountain & Hills",
    "Culture & Heritage",
  ];

  // Extended destination info
  const destinationDetails = [
    {
      id: "leh-ladakh",
      name: "Leh Ladakh",
      country: "India",
      packagesCount: "25+ Packages",
      category: ["Domestic India", "Mountain & Hills", "Culture & Heritage"],
      bestTime: "May to Sep",
      priceFrom: 28999,
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
      description: "High-altitude mountain passes, serene azure Pangong Lake, and centuries-old Buddhist gompas.",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Thiksey Monastery"],
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      packagesCount: "18+ Packages",
      category: ["International", "Beach Escapes", "Culture & Heritage"],
      bestTime: "Apr to Oct",
      priceFrom: 54999,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      description: "Lush rice terraces in Ubud, mystical water temples, and world-class beachfront sunsets.",
      highlights: ["Uluwatu Temple", "Ubud Monkey Forest", "Tegalalang Rice Terraces", "Seminyak Beach"],
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "UAE",
      packagesCount: "30+ Packages",
      category: ["International"],
      bestTime: "Nov to Mar",
      priceFrom: 49999,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      description: "Futuristic skyscrapers, luxury shopping malls, thrilling desert safaris, and Arabian hospitality.",
      highlights: ["Burj Khalifa", "Desert Safari with BBQ", "Dubai Mall & Fountain", "Palm Jumeirah"],
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      packagesCount: "15+ Packages",
      category: ["Domestic India", "Beach Escapes"],
      bestTime: "Oct to Apr",
      priceFrom: 12999,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
      description: "Golden sand beaches, vibrant coastal nightlife, Portuguese architecture, and fresh seafood shacks.",
      highlights: ["Baga & Calangute Beach", "Dudhsagar Waterfalls", "Old Goa Churches", "Sunset Cruise"],
    },
    {
      id: "jaipur",
      name: "Jaipur",
      country: "India",
      packagesCount: "12+ Packages",
      category: ["Domestic India", "Culture & Heritage"],
      bestTime: "Oct to Mar",
      priceFrom: 16499,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
      description: "The Pink City featuring royal palaces, hill-top majestic forts, and rich artisan bazaars.",
      highlights: ["Hawa Mahal", "Amer Fort", "City Palace", "Chokhi Dhani Heritage Village"],
    },
    {
      id: "kerala",
      name: "Kerala",
      country: "India",
      packagesCount: "16+ Packages",
      category: ["Domestic India", "Beach Escapes", "Mountain & Hills"],
      bestTime: "Sep to Mar",
      priceFrom: 21999,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
      description: "God's Own Country with tranquil Alleppey houseboats, Munnar tea hills, and ayurvedic spas.",
      highlights: ["Alleppey Backwaters Houseboat", "Munnar Tea Plantations", "Periyar Wildlife Sanctuary", "Kovalam Beach"],
    },
    {
      id: "thailand",
      name: "Thailand",
      country: "Southeast Asia",
      packagesCount: "22+ Packages",
      category: ["International", "Beach Escapes", "Culture & Heritage"],
      bestTime: "Nov to Apr",
      priceFrom: 34999,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
      description: "Exotic islands, floating markets, ornate golden temples, and lively night markets.",
      highlights: ["Phi Phi Islands", "Bangkok Grand Palace", "Phuket Beaches", "Chiang Mai Temples"],
    },
    {
      id: "kashmir",
      name: "Kashmir",
      country: "India",
      packagesCount: "14+ Packages",
      category: ["Domestic India", "Mountain & Hills"],
      bestTime: "Year Round",
      priceFrom: 32499,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=900&q=80",
      description: "Paradise on Earth with shikara rides on Dal Lake, snow slopes of Gulmarg, and lush Pahalgam valleys.",
      highlights: ["Dal Lake Shikara & Houseboat", "Gulmarg Gondola Ride", "Pahalgam Betaab Valley", "Sonamarg Glaciers"],
    },
  ];

  const filtered = activeCategory === "All"
    ? destinationDetails
    : destinationDetails.filter((d) => d.category.includes(activeCategory));

  const handleEnquire = (destName: string) => {
    setSelectedDestination(destName);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => handleEnquire("General Destination")} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
              alt="Destinations cover"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Popular &amp; Exotic <span className="font-script text-[#f05a28] text-4xl sm:text-6xl">Destinations</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              From serene Himalayan valleys to crystal tropical waters, discover our handcrafted holiday spots curated for every traveler.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <section className="py-8 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mr-2 shrink-0">
                <Filter className="w-4 h-4 text-[#f05a28]" />
                <span>Filter By:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0 ${
                    activeCategory === cat
                      ? "bg-[#f05a28] text-white shadow-md shadow-orange-500/25"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Cards Grid */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((dest) => (
                <div
                  key={dest.id}
                  id={dest.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {dest.country}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-orange-200 transition-colors">
                          {dest.name}
                        </h3>
                        <p className="text-xs text-white/80 font-medium">
                          {dest.packagesCount}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase text-white/70">From</div>
                        <div className="text-lg font-extrabold text-white">
                          ₹ {dest.priceFrom.toLocaleString("en-IN")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {dest.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#f05a28]" />
                        <span>Best Time: <strong>{dest.bestTime}</strong></span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Top Sights
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {dest.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <Link
                        href="/packages"
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-colors"
                      >
                        View Packages
                      </Link>
                      <button
                        onClick={() => handleEnquire(dest.name)}
                        className="flex-1 bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={selectedDestination}
      />
    </div>
  );
}
