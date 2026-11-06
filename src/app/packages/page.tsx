"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import PackageInfoModal, { PackageInfoData } from "@/components/PackageInfoModal";
import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import { INTERNATIONAL_PACKAGES } from "@/data/internationalPackagesData";
import { WEEKEND_GETAWAYS } from "@/data/weekendGetawaysData";
import {
  Clock,
  Building2,
  Camera,
  Car,
  Utensils,
  ArrowRight,
  ShieldCheck,
  Check,
  Filter,
  Search,
  Sparkles,
  MapPin,
  Compass,
  Star,
  CheckCircle2,
} from "lucide-react";

export interface UnifiedPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  numericPrice: number;
  originalPrice: string;
  badge: string;
  image: string;
  overview: string;
  category: "Domestic" | "International" | "Weekend" | "Same Day";
  subCategory: string;
  highlights: string[];
  inclusions: string[];
}

function parsePriceNumber(val: string | number): number {
  if (typeof val === "number") return val;
  const num = parseInt(val.replace(/[^\d]/g, ""), 10);
  return isNaN(num) ? 0 : num;
}

function formatPriceString(val: string | number): string {
  if (typeof val === "number") return `₹${val.toLocaleString("en-IN")}`;
  if (!val) return "₹12,999";
  return val.startsWith("₹") ? val : `₹${val}`;
}

// Dedicated routes mapping for domestic & international packages
const ROUTE_LOOKUP: Record<string, string> = {
  // Himachal
  "shimla-manali-tour-package": "/shimla-manali-tour-package",
  "honeymoon-in-manali": "/honeymoon-in-manali",
  "amritsar-dharmshala-tour-package": "/amritsar-dharmshala-tour-package",
  "dharamshala-dalhousie-amritsar-tour-package": "/dharamshala-dalhousie-amritsar-tour-package",
  "complete-himachal-grand-circuit": "/domestic-packages/himachal-pradesh",
  "spiti-valley-expedition": "/domestic-packages/himachal-pradesh",
  // Kashmir
  "kashmir-paradise": "/domestic-packages/kashmir",
  "kashmir-honeymoon": "/domestic-packages/kashmir",
  "kashmir-valley-glimpse": "/domestic-packages/kashmir",
  "kashmir-sonamarg-doodhpathri": "/domestic-packages/kashmir",
  "vaishnodevi-kashmir": "/domestic-packages/kashmir",
  // Rajasthan
  "rajasthan-fort-and-places": "/rajasthan-fort-and-places",
  "rajasthan-honeymoon-tour-package": "/rajasthan-honeymoon-tour-package",
  "udaipur-mountabu-jodhpur": "/udaipur-mountabu-jodhpur",
  "jaipur-tour-package": "/jaipur-tour-package",
  "jaisalmer-desert-special": "/domestic-packages/rajasthan",
  "royal-rajasthan-grand-heritage": "/domestic-packages/rajasthan",
  // Kerala
  "kerala-tour-package": "/kerala-tour-package",
  "kerala-honeymoon-tour-package": "/kerala-honeymoon-tour-package",
  "beautiful-kerala-with-blackwaters": "/beautiful-kerala-with-blackwaters",
  "wayanad-nature-retreat": "/domestic-packages/kerala",
  "kovalam-kanyakumari-beach": "/domestic-packages/kerala",
  // Goa
  "goa-beach-delight": "/domestic-packages/goa",
  "goa-honeymoon-tour-package": "/goa-honeymoon-tour-package",
  "goa-heritage-watersports": "/domestic-packages/goa",
  "goa-dudhsagar-adventure": "/domestic-packages/goa",
  "goa-luxury-villa-retreat": "/domestic-packages/goa",
  // Ladakh
  "ladakh-tour-via-nubra-valley": "/ladakh-tour-via-nubra-valley",
  "leh-ladakh-tour-package": "/leh-ladakh-tour-package",
  "ladakh-glimpse": "/domestic-packages/ladakh",
  "ladakh-bike-safari": "/domestic-packages/ladakh",
  "ladakh-luxury-honeymoon": "/domestic-packages/ladakh",
  // Golden Triangle & Same Day
  "classic-golden-triangle": "/golden-triangle-tour-packages",
  "golden-triangle-ranthambore": "/golden-triangle-tour-packages",
  "golden-triangle-amritsar": "/golden-triangle-tour-packages",
  "express-golden-triangle": "/golden-triangle-tour-packages",
  "same-day-agra": "/same-day-tour-packages",
  "same-day-mathura": "/same-day-tour-packages",
  "same-day-jaipur": "/same-day-tour-packages",
  // International
  "dubai-abu-dhabi": "/dubai-abu-dhabi",
  "dubai-express": "/dubai-express",
  "dubai-luxury-honeymoon": "/dubai-luxury-honeymoon",
  "singapore-malaysia": "/singapore-malaysia",
  "singapore-city-gardens": "/singapore-city-gardens",
  "best-of-malaysia": "/best-of-malaysia",
  "vietnam": "/vietnam",
  "vietnam-danang-golden-bridge": "/vietnam-danang-golden-bridge",
  "vietnam-hanoi-halong-bay": "/vietnam-hanoi-halong-bay",
  "mystical-bhutan": "/mystical-bhutan",
  "bhutan-cultural-odyssey": "/bhutan-cultural-odyssey",
  "indonesia": "/indonesia",
  "bali-romantic-honeymoon": "/bali-romantic-honeymoon",
  "bali-adventure-getaway": "/bali-adventure-getaway",
  "thailand": "/thailand",
  "phuket-krabi-island-hopper": "/phuket-krabi-island-hopper",
  "complete-thailand-grand": "/complete-thailand-grand",
  "europe-grand-tour": "/europe-grand-tour",
  "maldives-luxury": "/maldives-luxury",
  // Weekend Getaways
  "chakrata": "/chakrata",
  "kasauli": "/kasauli",
  "rishikesh": "/rishikesh",
  "jaipur-the-pink-city-of-india": "/jaipur-the-pink-city-of-india",
  "shimla-the-queen-of-hills": "/shimla-the-queen-of-hills",
  "nanital-the-lake-district-of-india": "/nanital-the-lake-district-of-india",
  "mussoorie-the-queen-of-hills": "/mussoorie-the-queen-of-hills",
  "ranthambore-national-park": "/ranthambore-national-park",
  "jim-corbett": "/jim-corbett",
  // Pilgrimage
  "chardham-yatra": "/chardham-yatra",
};

// Build all travel packages collection
function getAllTravelPackages(): UnifiedPackage[] {
  const list: UnifiedPackage[] = [];

  // 1. Domestic Packages
  Object.entries(DOMESTIC_DESTINATIONS).forEach(([destKey, dest]) => {
    (dest.packages || []).forEach((p) => {
      const priceNum = parsePriceNumber(p.price);
      const origNum = p.originalPrice
        ? parsePriceNumber(p.originalPrice)
        : Math.round(priceNum * 1.25);

      list.push({
        id: p.id,
        slug: ROUTE_LOOKUP[p.id] || (p.slug ? `/${p.slug}` : `/domestic-packages/${destKey}`),
        title: p.title,
        destination: `${dest.name}, India`,
        duration: p.duration,
        price: formatPriceString(p.price),
        numericPrice: priceNum,
        originalPrice: formatPriceString(origNum),
        badge: p.badge || (destKey === "same-day" ? "Same Day Tour" : "Domestic Tour"),
        image: p.image,
        overview: p.overview,
        category: destKey === "same-day" ? "Same Day" : "Domestic",
        subCategory: dest.name,
        highlights: p.highlights || [],
        inclusions: p.inclusions || ["Hotel Stays", "Breakfast", "Private Cab", "Sightseeing"],
      });
    });
  });

  // 2. International Packages
  Object.entries(INTERNATIONAL_PACKAGES).forEach(([k, p]) => {
    const priceNum = parsePriceNumber(p.price);
    const origNum = p.originalPrice
      ? parsePriceNumber(p.originalPrice)
      : Math.round(priceNum * 1.25);

    list.push({
      id: p.id,
      slug: ROUTE_LOOKUP[p.id] || `/${p.slug}`,
      title: p.title,
      destination: p.country,
      duration: p.duration,
      price: formatPriceString(p.price),
      numericPrice: priceNum,
      originalPrice: formatPriceString(origNum),
      badge: p.badge || "International Escape",
      image: p.image,
      overview: p.overview,
      category: "International",
      subCategory: p.country,
      highlights: p.highlights || [],
      inclusions: p.inclusions || ["4-Star Hotel", "Transfers", "Sightseeing Pass", "Daily Breakfast"],
    });
  });

  // 3. Weekend Getaways
  Object.entries(WEEKEND_GETAWAYS).forEach(([k, p]) => {
    const priceNum = parsePriceNumber(p.price);
    const origNum = p.originalPrice
      ? parsePriceNumber(p.originalPrice)
      : Math.round(priceNum * 1.25);

    list.push({
      id: p.id,
      slug: ROUTE_LOOKUP[p.id] || `/${p.slug}`,
      title: p.title,
      destination: p.state ? `${p.state}, India` : "Weekend Getaway",
      duration: p.duration,
      price: formatPriceString(p.price),
      numericPrice: priceNum,
      originalPrice: formatPriceString(origNum),
      badge: p.badge || "Weekend Getaway",
      image: p.image,
      overview: p.overview,
      category: "Weekend",
      subCategory: "Weekend Getaways",
      highlights: p.highlights || [],
      inclusions: p.inclusions || ["Resort Stay", "Breakfast", "Sightseeing", "Chauffeur Cab"],
    });
  });

  // 4. Chardham Yatra Pilgrimage Package
  list.push({
    id: "chardham-yatra",
    slug: "/chardham-yatra",
    title: "Char Dham Yatra Pilgrimage Package",
    destination: "Uttarakhand, India",
    duration: "9 Nights / 10 Days",
    price: "₹28,500",
    numericPrice: 28500,
    originalPrice: "₹35,000",
    badge: "Spiritual Yatra",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    overview:
      "Embark on the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath with verified hotel stays, VIP darshan assistance and private transfers.",
    category: "Domestic",
    subCategory: "Pilgrimage",
    highlights: ["Kedarnath Helicopter/Trek", "Badrinath Temple Darshan", "Yamunotri & Gangotri", "Haridwar Ganga Aarti"],
    inclusions: ["Verified Hotel Stays", "Daily Breakfast & Dinner", "Dedicated Private Chauffeur", "VIP Darshan Support"],
  });

  return list;
}

const ALL_PACKAGES = getAllTravelPackages();

export default function PackagesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageInfoData | null>(null);

  const filterTabs = [
    { label: "All Packages", count: ALL_PACKAGES.length, value: "All" },
    {
      label: "Domestic Circuits",
      count: ALL_PACKAGES.filter((p) => p.category === "Domestic").length,
      value: "Domestic",
    },
    {
      label: "International Escapes",
      count: ALL_PACKAGES.filter((p) => p.category === "International").length,
      value: "International",
    },
    {
      label: "Weekend Getaways",
      count: ALL_PACKAGES.filter((p) => p.category === "Weekend").length,
      value: "Weekend",
    },
    {
      label: "Same Day Tours",
      count: ALL_PACKAGES.filter((p) => p.category === "Same Day").length,
      value: "Same Day",
    },
  ];

  // Filtering and sorting logic
  const filteredPackages = useMemo(() => {
    return ALL_PACKAGES.filter((pkg) => {
      // Category filter
      if (activeFilter !== "All" && pkg.category !== activeFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesDest = pkg.destination.toLowerCase().includes(query);
        const matchesSub = pkg.subCategory.toLowerCase().includes(query);
        const matchesOverview = pkg.overview.toLowerCase().includes(query);
        const matchesHighlights = pkg.highlights.some((h) => h.toLowerCase().includes(query));
        return matchesTitle || matchesDest || matchesSub || matchesOverview || matchesHighlights;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.numericPrice - b.numericPrice;
      if (sortBy === "price-desc") return b.numericPrice - a.numericPrice;
      return 0; // Default featured order
    });
  }, [activeFilter, searchQuery, sortBy]);

  const handleOpenQuote = (title: string) => {
    setSelectedPackage(title);
    setEnquiryOpen(true);
  };

  const handleOpenInfo = (pkg: UnifiedPackage) => {
    setSelectedModalPackage({
      id: pkg.id,
      title: pkg.title,
      destination: pkg.destination,
      duration: pkg.duration,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      image: pkg.image,
      badge: pkg.badge,
      category:
        pkg.category === "Same Day"
          ? "Domestic"
          : (pkg.category as "International" | "Domestic" | "Weekend"),
      keyPoints: [pkg.overview, ...pkg.highlights],
      highlights: pkg.highlights,
      inclusions: pkg.inclusions,
      slug: pkg.slug,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] selection:bg-[#B58238] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenQuote("Custom Travel Package")} />

      <main className="flex-1">
        {/* Luxury Hero Banner */}
        <section className="relative bg-[#0B2724] text-white pt-16 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute right-0 bottom-0 w-full h-80 opacity-5 pointer-events-none select-none">
            <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
              <path d="M0 400 L200 200 L350 300 L500 120 L700 320 L850 180 L1050 350 L1200 220 L1200 400 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DEB887] text-xs font-semibold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-[#DEB887]" />
              <span>HANDCRAFTED HOLIDAY PACKAGES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Curated Tour &amp; Travel Packages
            </h1>

            <p className="text-xs sm:text-base text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Explore our complete collection of verified domestic circuits, international escapes, weekend retreats, and spiritual yatras. Transparent pricing, verified 4-star stays, and 24/7 dedicated support.
            </p>
          </div>
        </section>

        {/* Filter Bar & Live Search */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none no-scrollbar">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => {
                      setActiveFilter(tab.value);
                    }}
                    className={`text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                      activeFilter === tab.value
                        ? "bg-[#0B2724] text-white shadow-md font-bold"
                        : "bg-[#FAF8F5] text-slate-700 hover:text-slate-900 hover:bg-stone-100 border border-stone-200/80"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeFilter === tab.value
                          ? "bg-[#B58238] text-white"
                          : "bg-stone-200 text-slate-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right: Search Box & Sort Selector */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Search Input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search destination, city, or package..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-700 text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl px-3 py-2 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#B58238] cursor-pointer"
                  >
                    <option value="featured">Featured Order</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Sub-bar showing count & active filters */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
              <span>
                Showing <strong className="text-slate-900">{filteredPackages.length}</strong> of{" "}
                <strong className="text-slate-900">{ALL_PACKAGES.length}</strong> travel packages
              </span>
              {searchQuery && (
                <span className="text-slate-600">
                  Filtering for &ldquo;<span className="text-[#B58238] font-bold">{searchQuery}</span>&rdquo;
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPackages.length === 0 ? (
              <div className="text-center py-16 sm:py-24 bg-white rounded-3xl border border-stone-200/80 p-8 shadow-xs">
                <div className="w-16 h-16 rounded-full bg-[#FAF5ED] border border-[#EADBCC] flex items-center justify-center text-[#B58238] mx-auto mb-4">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  No packages found matching &ldquo;{searchQuery}&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
                  Try checking your spelling, choosing a different category, or resetting the filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilter("All");
                  }}
                  className="mt-6 bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    id={pkg.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
                  >
                    {/* Package Header Photo */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-md bg-[#B58238] text-white">
                          {pkg.badge}
                        </span>
                      </div>

                      {/* Duration Pill */}
                      <div className="absolute bottom-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                        <Clock className="w-3.5 h-3.5 text-[#DEB887]" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                      <div>
                        {/* Destination Tag */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#B58238] mb-1.5 uppercase tracking-wide">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{pkg.destination}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug line-clamp-2">
                          <Link href={pkg.slug}>{pkg.title}</Link>
                        </h3>

                        {/* Overview Snippet */}
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                          {pkg.overview}
                        </p>

                        {/* Highlights Grid */}
                        <div className="mt-4 pt-4 border-t border-stone-100">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Key Highlights
                          </div>
                          <div className="space-y-1.5">
                            {pkg.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Standard Inclusions Icons */}
                        <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-[#B58238]" />
                            <span>Hotel Stays</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Camera className="w-3.5 h-3.5 text-[#B58238]" />
                            <span>Sightseeing</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Car className="w-3.5 h-3.5 text-[#B58238]" />
                            <span>Private Cab</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Utensils className="w-3.5 h-3.5 text-[#B58238]" />
                            <span>Daily Breakfast</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and Action CTAs */}
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-slate-400 line-through">
                              {pkg.originalPrice}
                            </span>
                            <span className="text-[9px] font-bold bg-amber-50 text-[#B58238] border border-amber-200 px-1.5 py-0.5 rounded">
                              SPECIAL DEAL
                            </span>
                          </div>
                          <div className="text-xl font-extrabold text-slate-900 font-serif">
                            {pkg.price}{" "}
                            <span className="text-[11px] font-normal text-slate-500 font-sans">
                              /person
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={pkg.slug}
                            className="border border-[#0B2724]/20 hover:border-[#0B2724] text-[#0B2724] text-xs font-semibold py-2 px-3 rounded-xl transition-all cursor-pointer whitespace-nowrap"
                          >
                            Details
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleOpenQuote(pkg.title)}
                            className="bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-md flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
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
            )}
          </div>
        </section>

        {/* Why Book With Travel Hawkers Promise Section */}
        <section className="bg-white py-14 sm:py-20 border-t border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434]">
              PEACE OF MIND TRAVEL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Why Book Packages with Travel Hawkers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-xs">
                <ShieldCheck className="w-8 h-8 text-[#B58238] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">100% Customized Itineraries</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Tailor any package: alter hotel dates, upgrade to luxury resorts, or add personalized private excursions.
                </p>
              </div>
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-xs">
                <Check className="w-8 h-8 text-[#B58238] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">Verified Quality Hotels</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Every boutique hotel and luxury resort is vetted for cleanliness, hospitality, food hygiene and scenic location.
                </p>
              </div>
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 shadow-xs">
                <Sparkles className="w-8 h-8 text-[#B58238] mb-3" />
                <h3 className="text-sm font-bold text-slate-900">24/7 Dedicated Support</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Direct connection with your dedicated trip manager from the moment you book until you return home safely.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
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
