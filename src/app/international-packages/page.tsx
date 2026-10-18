"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Globe2,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Star,
  Hotel,
  Plane,
  FileCheck,
  ShieldCheck,
  ChevronRight,
  Compass,
} from "lucide-react";

interface InternationalPackage {
  id: string;
  title: string;
  country: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  visaInfo: string;
}

export default function InternationalPackagesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("Dubai & Abu Dhabi Tour");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const packages: InternationalPackage[] = [
    {
      id: "dubai-abu-dhabi",
      title: "Dubai & Abu Dhabi Futuristic Grandeur",
      country: "United Arab Emirates",
      duration: "6 Nights / 7 Days",
      price: "₹48,999",
      originalPrice: "₹59,000",
      rating: 4.96,
      reviews: 284,
      badge: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      overview:
        "Journey through the world’s most futuristic destinations! Dubai 4 Nights & Abu Dhabi 2 Nights. Enjoy 360-degree views from Burj Khalifa 124th floor, Ferrari World, Desert Safari dune bashing, and Sheikh Zayed Grand Mosque.",
      highlights: [
        "Burj Khalifa 124th floor observation deck & Dubai Mall",
        "Ferrari World Abu Dhabi with Formula Rossa (fastest coaster)",
        "Desert Safari with 4x4 dune bashing, camel rides & BBQ dinner",
        "Marina Dhow Cruise & Sheikh Zayed Grand Mosque",
      ],
      inclusions: ["4-Star City Hotels", "Daily Buffet Breakfast", "All Entry Tickets", "Airport Transfers in AC Coach"],
      visaInfo: "Express 30-Day UAE Tourist Visa Processed in 48-72h",
    },
    {
      id: "singapore-malaysia",
      title: "Singapore & Malaysia Twin Country Wonder",
      country: "Singapore & Malaysia",
      duration: "6 Nights / 7 Days",
      price: "₹54,499",
      originalPrice: "₹66,000",
      rating: 4.93,
      reviews: 215,
      badge: "Family Favorite",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
      overview:
        "Kuala Lumpur 3 Nights & Singapore 3 Nights. Marvel at Universal Studios Sentosa, Gardens by the Bay futuristic Supertrees, Genting Highlands cable car, and Petronas Twin Towers.",
      highlights: [
        "Full-day Universal Studios Singapore access with unlimited rides",
        "Gardens by the Bay Cloud Forest & Flower Dome",
        "Genting Highlands cable car & Batu Caves Murugan statue",
        "Kuala Lumpur city tour & Petronas Twin Towers photo stop",
      ],
      inclusions: ["4-Star Stays in KL & Singapore", "Daily Buffet Breakfast", "Universal & Gardens Tickets", "Inter-City Coach Transfer"],
      visaInfo: "Singapore e-Visa & Malaysia Digital Arrival Card (MDAC)",
    },
    {
      id: "vietnam",
      title: "Escape to Vietnam (Hanoi, Halong Bay & Da Nang)",
      country: "Vietnam",
      duration: "6 Nights / 7 Days",
      price: "₹42,999",
      originalPrice: "₹52,000",
      rating: 4.94,
      reviews: 178,
      badge: "Trending Destination",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      overview:
        "2 Days Hanoi, 1 Day Halong Bay Cruise, 2 Days Da Nang & 2 Days Hoi An. Cruise through Halong Bay limestone karsts, marvel at the Golden Hand Bridge in Ba Na Hills, and stroll lantern-lit Hoi An.",
      highlights: [
        "Overnight Halong Bay Luxury Cruise with kayaking & cave exploration",
        "Ba Na Hills Golden Hand Bridge suspended in misty clouds",
        "Hanoi Old Quarter walking street food tour & water puppets",
        "Hoi An ancient lantern town bicycle tour",
      ],
      inclusions: ["Overnight Halong Cruise", "4-Star Hotels", "All Meals on Cruise", "Internal Flights Included"],
      visaInfo: "Vietnam e-Visa Assistance within 3 Working Days",
    },
    {
      id: "mystical-bhutan",
      title: "Mystical Bhutan (Paro, Thimphu & Punakha)",
      country: "Bhutan",
      duration: "6 Nights / 7 Days",
      price: "₹38,500",
      originalPrice: "₹46,000",
      rating: 4.98,
      reviews: 132,
      badge: "Himalayan Serenity",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
      overview:
        "Gross National Happiness in the majestic Eastern Himalayas. Paro 2N, Thimphu 2N, Punakha 2N. Trek to the iconic Tiger’s Nest (Taktsang Monastery) perched 900m above the valley floor.",
      highlights: [
        "Taktsang Monastery (Tiger's Nest) cliffside trek",
        "Punakha Dzong at the confluence of Pho Chhu and Mo Chhu",
        "Thimphu Buddha Dordenma 169ft giant golden statue",
        "Traditional Bhutanese archer cultural demonstration",
      ],
      inclusions: ["3-Star Heritage Bhutanese Hotels", "All Meals (AP Plan)", "English-speaking Bhutan Guide", "Sustainable Dev Fee (SDF) Advice"],
      visaInfo: "No Visa Needed for Indians (Entry Permit via Voter ID / Passport)",
    },
    {
      id: "indonesia",
      title: "Bali Tropical Paradise (Ubud, Kuta & Nusa Penida)",
      country: "Indonesia",
      duration: "5 Nights / 6 Days",
      price: "₹34,999",
      originalPrice: "₹43,500",
      rating: 4.91,
      reviews: 260,
      badge: "Honeymoon Special",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      overview:
        "Ubud private pool villa stays, Tegallalang rice terrace jungle swings, sacred Tanah Lot sunset temple, and an exhilarating speedboat island excursion to Nusa Penida's Kelingking T-Rex cliff.",
      highlights: [
        "Private pool villa upgrade in Ubud with floating breakfast",
        "Nusa Penida West Island tour: Kelingking Beach & Broken Beach",
        "Tanah Lot & Uluwatu Cliff Temple with Kecak fire dance",
        "Mount Batur volcano viewpoint & coffee plantation tasting",
      ],
      inclusions: ["Private Pool Villa + 4-Star Resort", "Daily Breakfast", "Fast Boat to Nusa Penida", "Private Dedicated Cab"],
      visaInfo: "Electronic Visa on Arrival (e-VOA) Assistance",
    },
    {
      id: "thailand",
      title: "Thailand Delight (Bangkok, Pattaya & Coral Island)",
      country: "Thailand",
      duration: "4 Nights / 5 Days",
      price: "₹24,999",
      originalPrice: "₹31,000",
      rating: 4.87,
      reviews: 320,
      badge: "Super Value",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
      overview:
        "Thailand offers the ultimate tropical escape. Speedboat to Coral Island Pattaya with parasailing and undersea walk, followed by Bangkok’s glittering Golden Buddha temples and Chao Phraya dinner cruise.",
      highlights: [
        "Coral Island speedboat ride with Indian buffet lunch",
        "Alcazar Cabaret Show VIP seating in Pattaya",
        "Bangkok Golden Buddha & Marble Temple tour",
        "Chao Phraya Princess luxury dinner cruise with live band",
      ],
      inclusions: ["4-Star Hotels in Pattaya & Bangkok", "Daily Breakfast", "Coral Island Speedboat Tour", "All Airport & Inter-City Transfers"],
      visaInfo: "Visa-Free Exemption for Indian Passport Holders",
    },
  ];

  const countries = ["All", "United Arab Emirates", "Singapore & Malaysia", "Vietnam", "Bhutan", "Indonesia", "Thailand"];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedFilter === "All") return true;
    return pkg.country === selectedFilter;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f05a28_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                International Tour Packages <br />
                <span className="text-[#f05a28]">& Exotic Holidays</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Step outside borders with seamless visa assistance, handpicked 4-star hotels, authentic Indian dining options abroad, and private transfers.
                Explore Dubai, Singapore, Vietnam, Bali, Thailand, and Bhutan with total confidence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="tel:+919355486036"
                  className="bg-[#f05a28] hover:bg-[#dc4816] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 93554 86036</span>
                </a>
                <Link
                  href="/visa-service"
                  className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <FileCheck className="w-4 h-4 text-orange-400" />
                  <span>Explore Visa Services</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {countries.map((cntry) => (
                <button
                  key={cntry}
                  onClick={() => setSelectedFilter(cntry)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                    selectedFilter === cntry
                      ? "bg-[#f05a28] text-white shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cntry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`reveal delay-${(idx % 6) * 75} bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover-card-elevate hover:border-orange-300 flex flex-col group hover-shine-container`}
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {pkg.badge && (
                    <div className="absolute top-3 left-3 bg-[#f05a28] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400 font-normal">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Globe2 className="w-3.5 h-3.5 text-[#f05a28]" />
                        {pkg.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    <Link href={`/${pkg.id}`}>
                      <h2 className="text-lg font-black text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                        {pkg.title}
                      </h2>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="bg-emerald-50 rounded-xl p-2.5 border border-emerald-100 text-[11px] text-emerald-800 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold">{pkg.visaInfo}</span>
                    </div>

                    <div className="border-t border-slate-100 pt-3 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Trip Highlights:
                      </div>
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f05a28] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-slate-400 line-through">{pkg.originalPrice}</div>
                      <div className="text-xl font-black text-slate-900">
                        {pkg.price} <span className="text-[10px] font-normal text-slate-500">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/${pkg.id}`}
                        className="border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 text-xs font-bold px-3 py-2 rounded-xl transition-all"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedPackage(pkg.title);
                          setEnquiryOpen(true);
                        }}
                        className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition-all flex items-center gap-1"
                      >
                        <span>Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={`International Package Inquiry: ${selectedPackage}`}
      />
    </div>
  );
}
