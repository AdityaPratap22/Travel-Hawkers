"use client";

import { useState, useEffect } from "react";
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
  Car,
  Sparkles,
  Compass,
  ChevronDown,
  X,
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
    link: "/packages#leh-ladakh-escape",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function Hero({ onSearch }: HeroProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"packages" | "hotels" | "flights" | "cars" | "custom">("packages");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [isCustomTraveller, setIsCustomTraveller] = useState(false);
  const [customTravellerText, setCustomTravellerText] = useState("");
  const [budget, setBudget] = useState("Any budget");

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
    <section className="relative bg-[#FAF8F5] pt-8 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-visible">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 lg:gap-8 items-center min-h-[380px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px]">
          {/* Left Column: Editorial Headline & Slideshow Controls */}
          <div className="md:col-span-7 text-left space-y-3.5 sm:space-y-4 md:space-y-4 lg:space-y-6">
            {/* Slide Category & Destination Pill */}
            <div className="reveal flex items-center gap-2 sm:gap-2.5 flex-wrap">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B88434]">
                EXTRAORDINARY PLACES. MEANINGFUL JOURNEYS.
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide bg-white/95 text-[#0B2724] border border-[#B58238]/30 shadow-xs backdrop-blur-sm">
                {currentSlide.type === "International" ? (
                  <Globe2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#B58238]" />
                ) : (
                  <Mountain className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#B58238]" />
                )}
                <span className="uppercase text-[9px] sm:text-[10px] tracking-wider text-[#B58238] font-extrabold mr-0.5">
                  {currentSlide.badge}:
                </span>
                <span className="font-semibold text-slate-800">
                  {currentSlide.destination}, {currentSlide.country}
                </span>
              </span>
            </div>

            {/* Headline with Balanced Scale for Mobile, Tablet & Desktop */}
            <h1 className="reveal delay-100 font-serif text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-[68px] font-bold tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08]">
              Your next great
              <br />
              <span className="font-script text-[#B58238] font-bold text-[1.2em] italic inline-block mr-2 sm:mr-3 lg:mr-4">
                escape
              </span>
              <span>starts here.</span>
            </h1>

            {/* Dynamic Slide Subtitle */}
            <div className="reveal delay-150">
              <p className="text-xs sm:text-sm md:text-xs lg:text-base xl:text-lg text-slate-700 max-w-xl font-normal leading-relaxed">
                {currentSlide.tagline}
              </p>
            </div>

            {/* Primary Action Buttons: stacked full-width on mobile, inline on sm+ */}
            <div className="reveal delay-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 lg:gap-3.5 pt-1">
              <Link
                href={currentSlide.link}
                className="w-full sm:w-auto bg-[#B58238] hover:bg-[#9E6F21] text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Explore {currentSlide.destination}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-white/95 hover:bg-white text-slate-800 border border-stone-300 font-semibold text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-3 sm:py-3.5 rounded-lg shadow-xs hover:shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Plan a Private Escape</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Taj Mahal Polaroid Card & Taking-off Flight Badge */}
          <div className="reveal-right delay-200 md:col-span-5 flex flex-col items-center md:items-end justify-center gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-5 pt-4 md:pt-0">
            {/* Taj Mahal Luxury Polaroid Frame */}
            <div className="relative group select-none max-w-[270px] sm:max-w-none">
              <div className="bg-white p-2.5 sm:p-3 pb-4 sm:pb-5 lg:pb-6 rounded-2xl shadow-2xl border border-stone-200/60 rotate-2 hover:rotate-0 transition-all duration-500 w-56 sm:w-64 md:w-56 lg:w-72 xl:w-80 transform hover:-translate-y-1">
                {/* Taj Mahal Image */}
                <div className="relative h-36 sm:h-44 md:h-38 lg:h-52 xl:h-56 w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
                    alt="Taj Mahal Agra Wonder of the World"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 340px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Handwritten Script Label */}
                <div className="pt-2 sm:pt-2.5 lg:pt-3 text-center">
                  <span className="font-script text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl text-stone-800 font-semibold tracking-wide">
                    India: Timeless Beauty
                  </span>
                </div>
              </div>

              {/* Round Gold Compass Stamp Seal Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 w-11 h-11 sm:w-13 sm:h-13 lg:w-16 lg:h-16 rounded-full bg-[#FAF5ED] border-2 border-[#C59B58] p-1 shadow-xl flex items-center justify-center text-[#B58238] select-none pointer-events-none transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                <div className="w-full h-full rounded-full border border-dashed border-[#C59B58] flex flex-col items-center justify-center text-center">
                  <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-[#B58238]" />
                  <span className="text-[5.5px] sm:text-[6.5px] lg:text-[7px] font-bold uppercase tracking-wider text-[#B58238] mt-0.5">
                    HERITAGE
                  </span>
                </div>
              </div>
            </div>

            {/* Flight Trail Animation & Explore The World Badge */}
            <div className="relative group inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 select-none bg-slate-900/40 hover:bg-slate-900/50 backdrop-blur-md px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 rounded-xl border border-white/30 shadow-lg transition-all duration-300">
              <div className="relative shrink-0">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 overflow-visible pointer-events-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
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

              <div className="font-script text-white text-base sm:text-lg lg:text-2xl font-bold tracking-wide leading-tight text-left">
                <span>Explore The World</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Search Widget */}
        <div className="reveal delay-300 relative z-20 mt-8 sm:mt-12 lg:mt-14 bg-white rounded-2xl shadow-xl border border-stone-200/90 p-3.5 sm:p-5 lg:p-6 transition-all hover:shadow-2xl">
          {/* Tabs */}
          <div className="flex items-center gap-4 sm:gap-8 border-b border-stone-100 pb-2.5 mb-3 sm:mb-4 overflow-x-auto no-scrollbar scrollbar-none text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("packages")}
              className={`pb-2 -mb-2.5 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "packages"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Palmtree className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B58238]" />
              <span>Holiday Packages</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hotels")}
              className={`pb-2 -mb-2.5 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "hotels"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Hotel className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              <span>Hotels</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("flights")}
              className={`pb-2 -mb-2.5 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "flights"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              <span>Flights</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("cars");
                const el = document.getElementById("car-hire-section");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`pb-2 -mb-2.5 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "cars"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              <span>Car Hire</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("custom")}
              className={`pb-2 -mb-2.5 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "custom"
                  ? "border-b-2 border-[#B58238] text-[#B58238] font-bold"
                  : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              <span>Custom Trip</span>
            </button>
          </div>

          {/* Search Inputs Row: Dropdown menus for destination, dates, travellers, and budget */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Field 1: Destination Dropdown */}
            <div className="lg:col-span-3 flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200 group/field cursor-pointer">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 group-hover/field:scale-105 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="search-destination" className="block text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider cursor-pointer">
                    Destination
                  </label>
                  <select
                    id="search-destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-xs text-slate-700 bg-transparent outline-none font-medium py-0.5 cursor-pointer appearance-none truncate pr-2"
                  >
                    <option value="">Where do you want to go?</option>
                    <optgroup label="Popular Domestic">
                      <option value="Kashmir">Kashmir (Gulmarg, Dal Lake)</option>
                      <option value="Himachal Pradesh">Himachal (Manali, Shimla)</option>
                      <option value="Leh Ladakh">Leh Ladakh &amp; Pangong</option>
                      <option value="Kerala">Kerala Backwaters &amp; Munnar</option>
                      <option value="Goa">Goa Beaches &amp; Resorts</option>
                      <option value="Rajasthan">Rajasthan (Jaipur, Udaipur)</option>
                      <option value="Chardham Yatra">Chardham Yatra (Uttarakhand)</option>
                      <option value="Golden Triangle">Golden Triangle (Delhi-Agra-Jaipur)</option>
                      <option value="Weekend Getaways">Weekend Getaways (Rishikesh, Corbett)</option>
                    </optgroup>
                    <optgroup label="International Escapes">
                      <option value="Bali">Bali &amp; Indonesia</option>
                      <option value="Dubai">Dubai &amp; Abu Dhabi (UAE)</option>
                      <option value="Vietnam">Vietnam (Da Nang &amp; Halong)</option>
                      <option value="Thailand">Thailand (Phuket &amp; Krabi)</option>
                      <option value="Singapore & Malaysia">Singapore &amp; Malaysia</option>
                      <option value="Bhutan">Mystical Bhutan</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/field:text-[#B58238] transition-colors shrink-0 pointer-events-none" />
            </div>

            {/* Field 2: Travel Dates Dropdown */}
            <div className="lg:col-span-3 flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200 group/field cursor-pointer">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 group-hover/field:scale-105 transition-transform">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="search-dates" className="block text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider cursor-pointer">
                    Travel Dates
                  </label>
                  <select
                    id="search-dates"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full text-xs text-slate-700 bg-transparent outline-none font-medium py-0.5 cursor-pointer appearance-none truncate pr-2"
                  >
                    <option value="">Select dates</option>
                    <option value="Immediate / This Month">This Month (Immediate)</option>
                    <option value="Next Month">Next Month</option>
                    <option value="Summer (May - June)">Summer (May - June)</option>
                    <option value="Monsoon (July - August)">Monsoon (July - Aug)</option>
                    <option value="Festive Season (September - October)">Festive Season (Sep - Oct)</option>
                    <option value="Winter Escapes (November - December)">Winter Escapes (Nov - Dec)</option>
                    <option value="New Year Getaways">New Year Getaways</option>
                    <option value="Flexible Dates">Flexible / Any Dates</option>
                  </select>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/field:text-[#B58238] transition-colors shrink-0 pointer-events-none" />
            </div>

            {/* Field 3: Travellers Dropdown or Custom Input */}
            <div className="lg:col-span-2 flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200 group/field cursor-pointer">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 group-hover/field:scale-105 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <label htmlFor={isCustomTraveller ? "search-travellers-custom" : "search-travellers"} className="block text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider cursor-pointer">
                      Travellers
                    </label>
                    {isCustomTraveller && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomTraveller(false);
                          setTravellers("2 Travellers");
                        }}
                        className="text-[9px] font-bold text-[#B58238] hover:underline flex items-center gap-0.5 cursor-pointer"
                        title="Switch back to list"
                      >
                        List <X className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                  {isCustomTraveller ? (
                    <input
                      id="search-travellers-custom"
                      type="text"
                      autoFocus
                      placeholder="Type e.g. 15 adults"
                      value={customTravellerText}
                      onChange={(e) => {
                        setCustomTravellerText(e.target.value);
                        setTravellers(e.target.value || "Custom");
                      }}
                      className="w-full text-xs text-slate-800 placeholder:text-slate-400 bg-transparent outline-none font-semibold py-0.5 truncate pr-2 border-b border-[#B58238]"
                    />
                  ) : (
                    <select
                      id="search-travellers"
                      value={travellers}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "Custom") {
                          setIsCustomTraveller(true);
                          setTravellers("");
                          setCustomTravellerText("");
                        } else {
                          setIsCustomTraveller(false);
                          setTravellers(val);
                        }
                      }}
                      className="w-full text-xs text-slate-700 bg-transparent outline-none font-medium py-0.5 cursor-pointer appearance-none truncate pr-2"
                    >
                      <option value="2 Travellers">2 Travellers (Couple)</option>
                      <option value="1 Traveller (Solo)">1 Traveller (Solo)</option>
                      <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                      <option value="2 Adults + 2 Children">2 Adults + 2 Children</option>
                      <option value="3 - 4 Adults (Small Group)">3 - 4 Adults (Small Group)</option>
                      <option value="5 - 8 Adults (Family Group)">5 - 8 Adults (Family Group)</option>
                      <option value="9+ Adults (Large Group)">9+ Adults (Group Tour)</option>
                      <option value="Custom">Custom</option>
                    </select>
                  )}
                </div>
              </div>
              {!isCustomTraveller && (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/field:text-[#B58238] transition-colors shrink-0 pointer-events-none" />
              )}
            </div>

            {/* Field 4: Budget Dropdown */}
            <div className="lg:col-span-2 flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-200 group/field cursor-pointer">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 group-hover/field:scale-105 transition-transform">
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="search-budget" className="block text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider cursor-pointer">
                    Budget
                  </label>
                  <select
                    id="search-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full text-xs text-slate-700 bg-transparent outline-none font-medium py-0.5 cursor-pointer appearance-none truncate pr-2"
                  >
                    <option value="Any budget">Any budget</option>
                    <option value="Under ₹15,000 / person">Under ₹15,000 / person</option>
                    <option value="₹15,000 - ₹30,000 / person">₹15,000 - ₹30,000 / person</option>
                    <option value="₹30,000 - ₹50,000 / person">₹30,000 - ₹50,000 / person</option>
                    <option value="₹50,000 - ₹1,00,000 / person">₹50,000 - ₹1,00,000 (Premium)</option>
                    <option value="₹1,00,000+ Luxury Private">₹1,00,000+ (Luxury Private)</option>
                  </select>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/field:text-[#B58238] transition-colors shrink-0 pointer-events-none" />
            </div>

            {/* Field 5: Submit Button (Full width on tablet & mobile, 2 cols on desktop) */}
            <div className="sm:col-span-2 lg:col-span-2 pt-1 sm:pt-0">
              <button
                type="submit"
                className="w-full bg-[#0B2724] hover:bg-[#123834] text-white font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
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
