"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Star,
  Hotel,
  Car,
  Utensils,
  Camera,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface DomesticPackage {
  id: string;
  title: string;
  region: string;
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
}

export default function DomesticPackagesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("Himachal Tour Packages");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const packages: DomesticPackage[] = [
    {
      id: "himachal",
      title: "Himachal Scenic Splendour (Shimla & Manali)",
      region: "Himachal Pradesh",
      duration: "5 Nights / 6 Days",
      price: "₹14,999",
      originalPrice: "₹18,500",
      rating: 4.9,
      reviews: 142,
      badge: "Bestseller",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
      overview:
        "Bollywood’s personal favourite and a lively winter sports destination. Experience paragliding, mountain biking, zorbing at Solang Valley, Rohtang Pass, and ancient temples like Hidimba Devi.",
      highlights: [
        "Shimla Mall Road, Kufri & Jakhoo Temple",
        "Manali Solang Valley adventure sports",
        "Atal Tunnel & Sissu Lahaul Valley excursion",
        "Historic Hidimba Devi Temple & Vashisht Hot Springs",
      ],
      inclusions: ["3-Star Hotel Stay", "Daily Breakfast & Dinner", "Private AC / Heater Cab", "Sightseeing"],
    },
    {
      id: "kashmir",
      title: "Kashmir Paradise on Earth (Srinagar, Gulmarg & Pahalgam)",
      region: "Jammu & Kashmir",
      duration: "5 Nights / 6 Days",
      price: "₹16,499",
      originalPrice: "₹21,000",
      rating: 4.95,
      reviews: 218,
      badge: "Trending",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80",
      overview:
        "Mughal Emperor Jehangir’s heaven on earth. Enjoy peaceful Shikara rides on Dal Lake, stay in a heritage cedar wood houseboat, ride the Gulmarg Gondola, and visit Betaab Valley.",
      highlights: [
        "Deluxe Dal Lake Houseboat stay with Shikara ride",
        "Gulmarg Phase 1 & 2 Gondola cable car",
        "Pahalgam Betaab Valley & Aru Valley",
        "Srinagar Mughal Gardens (Shalimar & Nishat)",
      ],
      inclusions: ["Houseboat + 4-Star Stays", "Breakfast & Dinner", "Dedicated Cab & Chauffeur", "Shikara Ride"],
    },
    {
      id: "rajasthan",
      title: "Royal Rajasthan Heritage (Jaipur, Jodhpur & Udaipur)",
      region: "Rajasthan",
      duration: "6 Nights / 7 Days",
      price: "₹18,999",
      originalPrice: "₹24,500",
      rating: 4.88,
      reviews: 164,
      badge: "Royal Special",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
      overview:
        "Immerse yourself in the grandeur of the Rajput era. Grand palaces, Thar Desert camel safaris with folk dances, vintage car collections, and colorful bazaars.",
      highlights: [
        "Amber Fort elephant/jeep ride & Nahargarh sunset",
        "Udaipur Lake Pichola boat ride & City Palace",
        "Jodhpur Mehrangarh Fort & Umaid Bhawan",
        "Rajasthani folk music, puppet shows & Dal Baati banquet",
      ],
      inclusions: ["Heritage Havelis & 4-Star Hotels", "Daily Royal Breakfast", "Private Chauffeur Sedan/SUV", "Monuments Guide"],
    },
    {
      id: "kerala",
      title: "God's Own Country (Munnar, Thekkady & Alleppey)",
      region: "Kerala",
      duration: "5 Nights / 6 Days",
      price: "₹15,499",
      originalPrice: "₹19,999",
      rating: 4.92,
      reviews: 189,
      badge: "Nature Escape",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
      overview:
        "Rolling emerald tea estates in Munnar, spice plantations and Periyar wildlife sanctuary in Thekkady, capped with an unforgettable luxury private houseboat cruise through Alleppey backwaters.",
      highlights: [
        "Exclusive Alleppey backwater houseboat with onboard chef",
        "Munnar tea gardens, Mattupetty Dam & Eravikulam",
        "Thekkady spice plantation tour & elephant junction",
        "Traditional Kathakali & Kalaripayattu martial arts show",
      ],
      inclusions: ["Private AC Houseboat", "Resort Stays", "All Meals on Houseboat", "Airport Transfers"],
    },
    {
      id: "ladakh",
      title: "Mystical Leh Ladakh High Altitude Circuit",
      region: "Ladakh",
      duration: "6 Nights / 7 Days",
      price: "₹22,999",
      originalPrice: "₹28,000",
      rating: 4.97,
      reviews: 310,
      badge: "High Altitude Thrill",
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
      overview:
        "Once-in-a-lifetime expedition to the rooftop of the world. Cross Khardung La (18,380 ft), ride double-humped camels in Hunder sand dunes, and camp beside the surreal blue waters of Pangong Tso.",
      highlights: [
        "Pangong Tso Lake luxury dome tents camping",
        "Nubra Valley via the world's highest motorable pass",
        "Magnetic Hill, Sangam River confluence & Shanti Stupa",
        "Inner Line Permits & oxygen cylinder backup included",
      ],
      inclusions: ["High Altitude Camps & Hotels", "MAP Meal Plan", "Oxygen Cylinder & 4x4 Cab", "All Inner Line Permits"],
    },
    {
      id: "goa",
      title: "Goa Beach Holiday & Catamaran Island Cruise",
      region: "Goa",
      duration: "3 Nights / 4 Days",
      price: "₹8,999",
      originalPrice: "₹11,500",
      rating: 4.85,
      reviews: 240,
      badge: "Weekend Friendly",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
      overview:
        "Unwind on golden sands, sample fresh Goan seafood curries, explore Portuguese churches in Old Goa, and dance the sunset away on a private catamaran cruise with watersports.",
      highlights: [
        "North Goa Baga, Calangute & Anjuna beach tour",
        "South Goa heritage churches & Miramar sunset",
        "Mandovi river sunset cruise with Goan folk music",
        "Optional scuba diving & watersports combo at Grand Island",
      ],
      inclusions: ["4-Star Beach Resort", "Buffet Breakfast", "Airport Pick & Drop", "Sightseeing Cab"],
    },
    {
      id: "golden-triangle",
      title: "Classic Golden Triangle (Delhi, Agra & Jaipur)",
      region: "North India",
      duration: "4 Nights / 5 Days",
      price: "₹12,999",
      originalPrice: "₹16,000",
      rating: 4.89,
      reviews: 175,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
      overview:
        "The most celebrated cultural triangle of India. Witness the immortal Taj Mahal at sunrise, Delhi’s Red Fort & Qutub Minar, and the magnificent pink sandstone architecture of Jaipur.",
      highlights: [
        "Sunrise tour of the wonder Taj Mahal & Agra Fort",
        "Jaipur Amber Fort, City Palace & Jal Mahal",
        "Delhi India Gate, Humayun Tomb & Lotus Temple",
        "Guided heritage walks with certified historians",
      ],
      inclusions: ["4-Star Accommodations", "Daily Breakfast", "Dedicated Chauffeur Cab", "Express Highway Tolls"],
    },
    {
      id: "same-day",
      title: "Same Day Express Excursions (Agra / Mathura / Jaipur)",
      region: "Day Excursions",
      duration: "Same Day (1 Day)",
      price: "₹3,499",
      originalPrice: "₹4,500",
      rating: 4.82,
      reviews: 95,
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Short on time? Board our early morning sanitized chauffeur cab from Delhi NCR, explore iconic destinations like the Taj Mahal or Mathura-Vrindavan temples, and return home comfortably by nightfall.",
      highlights: [
        "Agra Same Day: Taj Mahal, Agra Fort & Mehtab Bagh",
        "Mathura & Vrindavan: Banke Bihari, Prem Mandir light show",
        "Jaipur Express: Amber Palace & Hawa Mahal in 1 day",
        "Doorstep pickup & drop in Delhi, Gurugram, or Noida",
      ],
      inclusions: ["Private Dedicated AC Cab", "All Highway Tolls & Parking", "Experienced Driver DA", "Doorstep Pickup"],
    },
  ];

  const regions = ["All", "Himachal Pradesh", "Jammu & Kashmir", "Rajasthan", "Kerala", "Ladakh", "Goa"];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedFilter === "All") return true;
    return pkg.region === selectedFilter;
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
                Domestic Tour Packages <br />
                <span className="text-[#f05a28]">& Indian Holidays</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Atithi Devo Bhava — experience the best of India through thoughtfully designed readymade and tailor-made tour packages.
                From snow-capped Himalayan peaks to tranquil Kerala backwaters and majestic royal palaces.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="tel:+919355486036"
                  className="bg-[#f05a28] hover:bg-[#dc4816] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 93554 86036</span>
                </a>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  Customise My Itinerary
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Region Filter Bar */}
        <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedFilter(reg)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                    selectedFilter === reg
                      ? "bg-[#f05a28] text-white shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {reg}
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
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#f05a28]" />
                        {pkg.region}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                      <Link href={`/domestic-packages/${pkg.id}`}>
                        {pkg.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="border-t border-slate-100 pt-3 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Key Highlights:
                      </div>
                      {pkg.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f05a28] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 rounded-xl p-2.5 flex items-center justify-around text-[11px] text-slate-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Hotel className="w-3.5 h-3.5 text-slate-400" /> Hotel
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-slate-400" /> Meals
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-slate-400" /> Cab
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400 line-through">{pkg.originalPrice}</div>
                      <div className="text-xl font-black text-slate-900">
                        {pkg.price} <span className="text-[10px] font-normal text-slate-500">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/domestic-packages/${pkg.id}`}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded-xl transition-all"
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
                        <span>Book</span>
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
        packageTitle={`Domestic Package Inquiry: ${selectedPackage}`}
      />
    </div>
  );
}
