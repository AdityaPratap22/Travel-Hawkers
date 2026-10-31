"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  Wallet,
  ArrowRight,
  Palmtree,
  Hotel,
  Plane,
  Sparkles,
  Compass,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Mountain,
} from "lucide-react";

interface HeroProps {
  onSearch?: (params: { destination: string; budget: string; travellers: string }) => void;
  onOpenVideo?: () => void;
}

interface HeroSlide {
  id: string;
  type: "International" | "Domestic";
  badge: string;
  destination: string;
  country: string;
  tagline: string;
  price: string;
  link: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "bali",
    type: "International",
    badge: "International Escape",
    destination: "Bali",
    country: "Indonesia",
    tagline: "Tropical Clifftop Villas, Ubud Greenery & Sacred Temples",
    price: "₹ 54,999",
    link: "/international-packages#bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "kashmir",
    type: "Domestic",
    badge: "Domestic Escape",
    destination: "Kashmir",
    country: "India",
    tagline: "Dal Lake Luxury Houseboats, Gulmarg Gondola & Snow Peaks",
    price: "₹ 32,499",
    link: "/packages#kashmir-paradise",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dubai",
    type: "International",
    badge: "International Escape",
    destination: "Dubai & Abu Dhabi",
    country: "UAE",
    tagline: "Burj Khalifa, Arabian Desert Safari & Sheikh Zayed Mosque",
    price: "₹ 49,999",
    link: "/international-packages#dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "kerala",
    type: "Domestic",
    badge: "Domestic Escape",
    destination: "Kerala",
    country: "India",
    tagline: "Alleppey Houseboat Backwaters, Tea Plantations & Ayurvedic Spas",
    price: "₹ 18,999",
    link: "/packages#goa-getaway",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "vietnam",
    type: "International",
    badge: "International Escape",
    destination: "Vietnam",
    country: "Da Nang & Halong",
    tagline: "Emerald Halong Bay Cruises & Iconic Golden Hand Bridge",
    price: "₹ 44,999",
    link: "/international-packages#vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "ladakh",
    type: "Domestic",
    badge: "Domestic Escape",
    destination: "Leh Ladakh",
    country: "India",
    tagline: "Azure Pangong Tso, Khardung La Pass & Ancient Monasteries",
    price: "₹ 28,999",
    link: "/packages#leh-ladakh-escape",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function Hero({ onSearch }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"packages" | "hotels" | "flights" | "custom">("packages");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [budget, setBudget] = useState("Any budget");

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Continuous auto-slide every 4.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        destination: destination || "Popular Holiday Packages",
        budget,
        travellers,
      });
    } else {
      const el = document.getElementById("packages");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 overflow-visible">
      {/* Background Slideshow: Cross-fading High-Resolution Paradise Scenes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } transform transition-transform duration-[4500ms]`}
          >
            <Image
              src={slide.image}
              alt={`${slide.destination} ${slide.country}`}
              fill
              priority={idx === 0}
              unoptimized
              sizes="100vw"
              className="object-cover object-[center_right] sm:object-right-center"
            />
          </div>
        ))}

        {/* Seamless full-screen ambient gradient without any box/square cutoff */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-[#FAF8F5]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[420px] sm:min-h-[480px]">
          {/* Left Column: Editorial Headline & Slideshow Controls */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Slide Category & Destination Pill */}
            <div className="reveal flex items-center gap-2.5 flex-wrap">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B88434]">
                EXTRAORDINARY PLACES. MEANINGFUL JOURNEYS.
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide bg-white/95 text-[#0B2724] border border-[#B58238]/30 shadow-xs backdrop-blur-sm">
                {currentSlide.type === "International" ? (
                  <Globe2 className="w-3.5 h-3.5 text-[#B58238]" />
                ) : (
                  <Mountain className="w-3.5 h-3.5 text-[#B58238]" />
                )}
                <span className="uppercase text-[10px] tracking-wider text-[#B58238] font-extrabold mr-1">
                  {currentSlide.badge}:
                </span>
                <span className="font-semibold text-slate-800">
                  {currentSlide.destination}, {currentSlide.country}
                </span>
              </span>
            </div>

            {/* Headline with Balanced Scale */}
            <h1 className="reveal delay-100 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-bold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.08]">
              Your next great
              <br />
              <span className="font-script text-[#B58238] font-bold text-[1.2em] italic inline-block mr-3 sm:mr-4">
                escape
              </span>
              <span>starts here.</span>
            </h1>

            {/* Dynamic Slide Subtitle & Price Hook */}
            <div className="reveal delay-150 space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-xl font-normal leading-relaxed">
                {currentSlide.tagline}
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="inline-block w-2 h-2 rounded-full bg-[#B58238] animate-pulse" />
                <span>Featured Package starts at</span>
                <span className="text-sm sm:text-base font-extrabold text-[#0B2724] bg-[#FAF5ED] border border-[#B58238]/30 px-2.5 py-0.5 rounded-md">
                  {currentSlide.price}
                </span>
                <span className="text-xs text-slate-500 font-normal">/person</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="reveal delay-200 flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href={currentSlide.link}
                className="bg-[#B58238] hover:bg-[#9E6F21] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Explore {currentSlide.destination}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white/95 hover:bg-white text-slate-800 border border-stone-300 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Plan a Private Escape</span>
              </Link>
            </div>

            {/* Slideshow Controls (LuxTripper & Template style: 01 02 03 04 05 06 < >) */}
            <div className="reveal delay-250 flex items-center gap-2 sm:gap-3 pt-3 select-none">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-xs">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlideIndex(idx)}
                      title={`${slide.destination} (${slide.type})`}
                      className={`text-[11px] sm:text-xs font-bold transition-all px-2 py-0.5 rounded-full cursor-pointer ${
                        isActive
                          ? "bg-[#0B2724] text-white shadow-xs scale-105"
                          : "text-slate-500 hover:text-slate-900 hover:bg-stone-100"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  title="Previous Destination"
                  aria-label="Previous Destination"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-stone-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B2724] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  title="Next Destination"
                  aria-label="Next Destination"
                  className="w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-stone-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0B2724] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Destination badge on slider */}
              <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-600 ml-2">
                {currentSlide.type === "International" ? "✈️" : "🏔️"} {currentSlide.destination}
              </span>
            </div>
          </div>

          {/* Right Column: Floating Taj Mahal Polaroid Card & Taking-off Flight Badge */}
          <div className="reveal-right delay-200 lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-5">
            {/* Taj Mahal Luxury Polaroid Frame */}
            <div className="relative group select-none">
              <div className="bg-white p-2.5 sm:p-3 pb-5 sm:pb-6 rounded-2xl shadow-2xl border border-stone-200/60 rotate-2 hover:rotate-0 transition-all duration-500 w-64 sm:w-72 md:w-80 transform hover:-translate-y-1">
                {/* Taj Mahal Image */}
                <div className="relative h-44 sm:h-52 md:h-56 w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
                    alt="Taj Mahal Agra Wonder of the World"
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Handwritten Script Label */}
                <div className="pt-2.5 sm:pt-3 text-center">
                  <span className="font-script text-lg sm:text-xl md:text-2xl text-stone-800 font-semibold tracking-wide">
                    India: Timeless Beauty
                  </span>
                </div>
              </div>

              {/* Round Gold Compass Stamp Seal Badge */}
              <div className="absolute -top-3.5 -right-3.5 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF5ED] border-2 border-[#C59B58] p-1 shadow-xl flex items-center justify-center text-[#B58238] select-none pointer-events-none transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                <div className="w-full h-full rounded-full border border-dashed border-[#C59B58] flex flex-col items-center justify-center text-center">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B58238]" />
                  <span className="text-[6px] sm:text-[7px] font-bold uppercase tracking-wider text-[#B58238] mt-0.5">
                    HERITAGE
                  </span>
                </div>
              </div>
            </div>

            {/* Flight Trail Animation & Explore The World Badge */}
            <div className="relative group inline-flex items-center gap-3 select-none bg-slate-900/40 hover:bg-slate-900/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/30 shadow-lg transition-all duration-300">
              <div className="relative shrink-0">
                <svg
                  className="w-10 h-10 overflow-visible pointer-events-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 8 52 C 18 56, 28 50, 26 36 C 24 22, 10 22, 10 34 C 10 44, 26 44, 38 32 C 46 24, 50 16, 54 8"
                    stroke="rgba(255, 255, 255, 0.95)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    className="animate-dash-trail animate-trail-pulse"
                  />
                  <g transform="translate(54, 8)">
                    <g className="animate-plane-takeoff">
                      <g transform="rotate(-25) scale(0.85) translate(-10, -12)">
                        <path
                          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="0.5"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="font-script text-white text-xl sm:text-2xl font-bold tracking-wide leading-tight text-left">
                <span>Explore The World</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Search Widget */}
        <div className="reveal delay-300 relative z-20 mt-10 sm:mt-14 bg-white rounded-2xl shadow-xl border border-stone-200/90 p-4 sm:p-6 transition-all hover:shadow-2xl">
          {/* Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 border-b border-stone-100 pb-3 mb-4 overflow-x-auto text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("packages")}
              className={`pb-2.5 -mb-3 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "packages"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Palmtree className="w-4 h-4 text-[#B58238]" />
              <span>Holiday Packages</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hotels")}
              className={`pb-2.5 -mb-3 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "hotels"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Hotel className="w-4 h-4 text-slate-400" />
              <span>Hotels</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("flights")}
              className={`pb-2.5 -mb-3 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "flights"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Plane className="w-4 h-4 text-slate-400" />
              <span>Flights</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("custom")}
              className={`pb-2.5 -mb-3 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "custom"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Sparkles className="w-4 h-4 text-slate-400" />
              <span>Custom Trip</span>
            </button>
          </div>

          {/* Search Inputs Row */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            {/* Field 1: Destination */}
            <div className="lg:col-span-3 flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs text-slate-700 placeholder:text-slate-400 bg-transparent outline-none truncate font-medium"
                />
              </div>
            </div>

            {/* Field 2: Travel Dates */}
            <div className="lg:col-span-3 flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Travel Dates
                </label>
                <input
                  type="text"
                  placeholder="Select dates"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full text-xs text-slate-700 placeholder:text-slate-400 bg-transparent outline-none truncate font-medium"
                />
              </div>
            </div>

            {/* Field 3: Travellers */}
            <div className="lg:col-span-2 flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Travellers
                </label>
                <input
                  type="text"
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  placeholder="2 Travellers"
                  className="w-full text-xs text-slate-700 placeholder:text-slate-400 bg-transparent outline-none truncate font-medium"
                />
              </div>
            </div>

            {/* Field 4: Budget */}
            <div className="lg:col-span-2 flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0">
                <Wallet className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  Budget
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Any budget"
                  className="w-full text-xs text-slate-700 placeholder:text-slate-400 bg-transparent outline-none truncate font-medium"
                />
              </div>
            </div>

            {/* Field 5: Submit Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#0B2724] hover:bg-[#123834] text-white font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Search Holidays</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
