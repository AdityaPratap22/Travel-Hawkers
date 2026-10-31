"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Camera,
  Car,
  Heart,
  Clock,
  Info,
} from "lucide-react";
import { PACKAGES } from "@/data/travelData";
import PackageInfoModal, { PackageInfoData } from "./PackageInfoModal";

interface TrendingPackagesProps {
  onGetQuote: (packageTitle: string) => void;
}

const PACKAGE_EXTRA_INFO: Record<string, { cities: string[]; keyPoints: string[]; slug: string }> = {
  "goa-getaway": {
    cities: ["North Goa", "Panjim", "Calangute", "Old Goa"],
    keyPoints: [
      "3 Nights stay in premium beachside 4-star resort with daily breakfast",
      "Private AC vehicle for North & South Goa sightseeing",
      "Mandovi River evening luxury sunset cruise with Goan cultural show",
      "Explore UNESCO Old Goa Basilicas, Aguada Fort & Anjuna Beach",
      "24/7 dedicated local assistance and pickup from Goa airport/railway",
    ],
    slug: "/domestic-packages/goa",
  },
  "bali-bliss": {
    cities: ["Ubud", "Kuta / Seminyak", "Nusa Penida", "Tanah Lot"],
    keyPoints: [
      "Stay in private pool villa in Ubud + 4-star beach resort in Seminyak",
      "Full day Nusa Penida speedboat tour to Kelingking Beach & Angel's Billabong",
      "Uluwatu Cliff temple sunset tour with Kecak fire dance performance",
      "Tegallalang emerald rice terraces & jungle swing experience",
      "All private airport and sightseeing transfers in AC vehicle",
    ],
    slug: "/indonesia",
  },
  "leh-ladakh-escape": {
    cities: ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La"],
    keyPoints: [
      "Camp under stars in luxury cottages by azure Pangong Tso lake",
      "Cross Khardung La Pass (17,982 ft) - world's highest motorable road",
      "Camel safari amidst the high-altitude sand dunes of Hunder in Nubra",
      "Visit Thiksey, Shey Palace, Magnetic Hill & Sangam of Indus-Zanskar",
      "Oxygen cylinder equipped private SUV with experienced mountain chauffeur",
    ],
    slug: "/domestic-packages/ladakh",
  },
  "dubai-special": {
    cities: ["Dubai City", "Downtown Dubai", "Dubai Marina", "Abu Dhabi Day Tour"],
    keyPoints: [
      "Observation deck entry to Burj Khalifa 124th floor + Dubai Mall fountains",
      "4x4 Land Cruiser desert safari with dune bashing, camel ride & BBQ dinner",
      "Luxury Marina Dhow cruise with international buffet dinner",
      "Abu Dhabi day trip with grand Sheikh Zayed Mosque & Ferrari World photo stop",
      "Private airport transfers and city sightseeing with tourist visa assistance",
    ],
    slug: "/dubai-abu-dhabi",
  },
  "kashmir-paradise": {
    cities: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    keyPoints: [
      "1 Night stay in heritage luxury houseboat on Dal Lake with Shikara ride",
      "World-famous Gulmarg Gondola cable car ride to Apharwat Peak snowline",
      "Explore Betaab Valley, Aru Valley & Chandanwari pine trails in Pahalgam",
      "Visit Mughal Gardens of Shalimar, Nishat Bagh & Chashme Shahi in Srinagar",
      "Private sanitized AC sedan/SUV with experienced local driver for entire tour",
    ],
    slug: "/domestic-packages/kashmir",
  },
};

export default function TrendingPackages({ onGetQuote }: TrendingPackagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageInfoData | null>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenInfo = (pkg: (typeof PACKAGES)[0]) => {
    const extra = PACKAGE_EXTRA_INFO[pkg.id] || {
      cities: [pkg.destination],
      keyPoints: [
        "Handpicked verified 4-star boutique hotel stay with daily breakfast",
        "Private dedicated AC chauffeur vehicle for transfers & sightseeing",
        "All entry passes, toll taxes, driver allowances & parking included",
        "24/7 Travel Hawkers ground assistance throughout the journey",
      ],
      slug: `/packages/${pkg.id}`,
    };

    setSelectedModalPackage({
      id: pkg.id,
      title: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      image: pkg.image,
      badge: pkg.badge?.label,
      category: ["bali-bliss", "dubai-special"].includes(pkg.id) ? "International" : "Domestic",
      citiesCovered: extra.cities,
      keyPoints: extra.keyPoints,
      slug: extra.slug,
    });
  };

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
    <section id="packages" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              FEATURED PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Curated Journeys for Every Traveller
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl">
              Tap any package to explore day-wise highlights, cities covered, and inclusions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#B58238] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous package"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next package"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-slate-800 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Packages Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
        >
          {PACKAGES.map((pkg, idx) => {
            const isFav = favorites[pkg.id];
            const delays = ["delay-75", "delay-150", "delay-200", "delay-250", "delay-300"];
            return (
              <div
                key={pkg.id}
                onClick={() => handleOpenInfo(pkg)}
                className={`reveal ${delays[idx] || ""} flex-none w-[270px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group snap-start cursor-pointer transform hover:-translate-y-1.5`}
              >
                {/* Image & Badges */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#B58238] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                        {pkg.badge.label}
                      </span>
                    </div>
                  )}

                  {/* Quick Info Hint Button */}
                  <div className="absolute bottom-2.5 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Tap for info
                    </span>
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(pkg.id, e)}
                    aria-label="Save to wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-rose-500 hover:bg-white transition-all shadow-xs cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : ""}`}
                    />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1 mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#B58238]" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Amenities Line */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-600 border-t border-stone-100 pt-3 mb-4">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Hotel</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Sightseeing</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-[#B58238]" />
                        <span>Transfers</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="border-t border-stone-100 pt-3">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-extrabold text-slate-900">
                          ₹ {pkg.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">/person</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#B58238] group-hover:underline">
                        View Info →
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenInfo(pkg);
                        }}
                        className="w-full bg-[#FAF5ED] hover:bg-[#F3E8D7] text-[#B58238] border border-[#EADBCC] text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onGetQuote(pkg.title);
                        }}
                        className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm hover:shadow-md flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Package Info Modal */}
      <PackageInfoModal
        isOpen={!!selectedModalPackage}
        onClose={() => setSelectedModalPackage(null)}
        pkg={selectedModalPackage}
        onBookNow={(title) => {
          setSelectedModalPackage(null);
          onGetQuote(title);
        }}
      />
    </section>
  );
}
