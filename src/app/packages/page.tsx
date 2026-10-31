"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import PackageInfoModal, { PackageInfoData } from "@/components/PackageInfoModal";
import {
  Clock,
  Building2,
  Camera,
  Car,
  Utensils,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  Filter,
  Info,
} from "lucide-react";

export default function PackagesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageInfoData | null>(null);

  const packagesList = [
    {
      id: "goa-getaway",
      title: "Goa Getaway",
      destination: "Goa, India",
      duration: "3 Nights 4 Days",
      nights: 3,
      days: 4,
      badge: { label: "Bestseller", color: "bg-blue-600 text-white" },
      amenities: ["4-Star Resort", "North & South Sightseeing", "Airport Pickup & Drop", "Daily Breakfast"],
      price: 12999,
      originalPrice: 16999,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      overview: "Experience sunny golden beaches, Portuguese forts, vibrant flea markets and thrilling water sports.",
      category: "Domestic",
    },
    {
      id: "bali-bliss",
      title: "Bali Bliss",
      destination: "Bali, Indonesia",
      duration: "5 Nights 6 Days",
      nights: 5,
      days: 6,
      badge: { label: "Popular", color: "bg-rose-500 text-white" },
      amenities: ["Private Pool Villa", "Uluwatu Sunset Tour", "Kintamani Volcano", "All Transfers"],
      price: 54999,
      originalPrice: 65999,
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
      overview: "Romantic getaway with tropical greenery, ancient cliffside temples, and Balinese massage sessions.",
      category: "International",
    },
    {
      id: "leh-ladakh-escape",
      title: "Leh Ladakh Escape",
      destination: "Leh Ladakh, India",
      duration: "6 Nights 7 Days",
      nights: 6,
      days: 7,
      badge: { label: "Adventure", color: "bg-sky-600 text-white" },
      amenities: ["Deluxe Camps & Hotels", "Pangong Lake Tour", "Khardung La Pass", "Oxygen Support On-board"],
      price: 28999,
      originalPrice: 34999,
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=900&q=80",
      overview: "Ride along the highest motorable road in the world, camp by Pangong's blue waters and visit historic monasteries.",
      category: "Adventure",
    },
    {
      id: "dubai-special",
      title: "Dubai Special",
      destination: "Dubai, UAE",
      duration: "4 Nights 5 Days",
      nights: 4,
      days: 5,
      badge: { label: "Trending", color: "bg-indigo-600 text-white" },
      amenities: ["5-Star Downtown Hotel", "Desert Safari with BBQ", "Burj Khalifa 124th Floor", "Dhow Marina Cruise"],
      price: 49999,
      originalPrice: 58999,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      overview: "Glitzy city tour with futuristic architecture, traditional souks, roller coasters and luxury yacht cruises.",
      category: "International",
    },
    {
      id: "kashmir-paradise",
      title: "Kashmir Paradise",
      destination: "Kashmir, India",
      duration: "5 Nights 6 Days",
      nights: 5,
      days: 6,
      badge: { label: "Scenic", color: "bg-emerald-600 text-white" },
      amenities: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam Betaab Valley", "Private Cab & Chauffeur"],
      price: 32499,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=900&q=80",
      overview: "Surround yourself with snow peaks, alpine meadows, serene shikara rides, and warm Kashmiri hospitality.",
      category: "Domestic",
    },
    {
      id: "thailand-island-hopper",
      title: "Thailand Island Hopper",
      destination: "Phuket & Krabi, Thailand",
      duration: "5 Nights 6 Days",
      nights: 5,
      days: 6,
      badge: { label: "Tropical", color: "bg-teal-600 text-white" },
      amenities: ["Beachfront Resort", "Phi Phi Islands Speedboat", "James Bond Island", "Speedboat Transfers"],
      price: 38999,
      originalPrice: 46999,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
      overview: "Turquoise lagoons, limestone cliffs, vibrant beach clubs, and water sports in Southeast Asia.",
      category: "International",
    },
  ];

  const filterTabs = ["All", "Domestic", "International", "Adventure"];

  const filtered = activeFilter === "All"
    ? packagesList
    : packagesList.filter((p) => p.category === activeFilter);

  const handleOpenQuote = (title: string) => {
    setSelectedPackage(title);
    setEnquiryOpen(true);
  };

  const handleOpenInfo = (pkg: (typeof packagesList)[0]) => {
    setSelectedModalPackage({
      id: pkg.id,
      title: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      image: pkg.image,
      badge: pkg.badge.label,
      category: pkg.category as "International" | "Domestic" | "Weekend",
      keyPoints: [pkg.overview, ...pkg.amenities],
      highlights: pkg.amenities,
      slug: `/packages/${pkg.id}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => handleOpenQuote("Custom Package")} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Trending &amp; Curated <span className="font-script text-[#f05a28] text-4xl sm:text-6xl">Packages</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Travel stress-free with all-inclusive packages: verified 4 &amp; 5-star accommodations, private transfers, guided excursions, and on-trip assistance.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <section className="py-6 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#f05a28]" />
                Filter:
              </span>
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                    activeFilter === tab
                      ? "bg-[#f05a28] text-white shadow-md shadow-orange-500/25"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {tab} Packages
                </button>
              ))}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Showing <strong>{filtered.length}</strong> verified holiday packages
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((pkg) => (
                <div
                  key={pkg.id}
                  id={pkg.id}
                  onClick={() => handleOpenInfo(pkg)}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3.5 right-3.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${pkg.badge.color}`}>
                        {pkg.badge.label}
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#f05a28]" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#f05a28] mt-1">
                        {pkg.destination}
                      </div>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                        {pkg.overview}
                      </p>

                      {/* Amenities Icons */}
                      <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Package Inclusions
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-[#f05a28]" />
                            <span>Hotel Stay</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Camera className="w-3.5 h-3.5 text-[#f05a28]" />
                            <span>Sightseeing</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Car className="w-3.5 h-3.5 text-[#f05a28]" />
                            <span>Transfers</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Utensils className="w-3.5 h-3.5 text-[#f05a28]" />
                            <span>Daily Meals</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-slate-400 line-through">
                            ₹ {pkg.originalPrice.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                            SAVE ₹{(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
                          </span>
                        </div>
                        <div className="text-xl font-extrabold text-slate-900">
                          ₹ {pkg.price.toLocaleString("en-IN")}{" "}
                          <span className="text-xs font-normal text-slate-500">/person</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenInfo(pkg);
                          }}
                          className="border border-[#0B2724]/20 hover:border-[#0B2724] text-[#0B2724] text-xs font-semibold py-2 px-3 rounded-xl transition-all"
                        >
                          View Info
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenQuote(pkg.title);
                          }}
                          className="bg-[#B58238] hover:bg-[#9c6e2e] text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5"
                        >
                          <span>Get Quote</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Assurance Strip */}
        <section className="bg-slate-50 py-12 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Book Packages With Travel Hawkers?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-[#B58238] mb-3" />
                <h4 className="text-sm font-bold text-slate-900">100% Customized Trips</h4>
                <p className="text-xs text-slate-600 mt-1">Alter hotel dates, add extra excursions, or upgrade to luxury suites easily.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <Check className="w-8 h-8 text-[#B58238] mb-3" />
                <h4 className="text-sm font-bold text-slate-900">Verified Quality Hotels</h4>
                <p className="text-xs text-slate-600 mt-1">Every resort and hotel is inspected for cleanliness, service, and traveler safety.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <Sparkles className="w-8 h-8 text-[#B58238] mb-3" />
                <h4 className="text-sm font-bold text-slate-900">24/7 Dedicated Support</h4>
                <p className="text-xs text-slate-600 mt-1">Direct contact with your dedicated travel manager throughout your journey.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <PackageInfoModal
        isOpen={!!selectedModalPackage}
        onClose={() => setSelectedModalPackage(null)}
        pkg={selectedModalPackage}
        onBookNow={(title) => handleOpenQuote(title)}
      />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={selectedPackage}
      />
    </div>
  );
}
