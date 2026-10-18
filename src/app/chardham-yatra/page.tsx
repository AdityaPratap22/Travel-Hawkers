"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Compass,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  ShieldCheck,
  Helicopter,
  Mountain,
  Sun,
  MapPin,
  Sparkles,
} from "lucide-react";
import { openWhatsAppInquiry } from "@/utils/whatsapp";

export default function ChardhamYatraPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Chardham Yatra 10N/11D Package");
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackPilgrims, setCallbackPilgrims] = useState(2);
  const [callbackMonth, setCallbackMonth] = useState("May 2026 (Opening Season)");
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppInquiry({
      packageTitle: "Char Dham Yatra 2026 Pilgrimage Package",
      name: callbackName,
      phone: callbackPhone,
      travellers: `${callbackPilgrims} Pilgrims`,
      dates: callbackMonth,
      message: `Preferred Travel Month: ${callbackMonth}\nTotal Pilgrims: ${callbackPilgrims}`,
    });
    setCallbackSubmitted(true);
  };

  const openModal = (planTitle?: string) => {
    if (planTitle) setSelectedPlan(planTitle);
    setEnquiryOpen(true);
  };

  const shrines = [
    {
      name: "Yamunotri",
      deity: "Goddess Yamuna",
      altitude: "3,291 m",
      desc: "The sacred origin of the Yamuna River. Pilgrims take a holy dip in the natural hot spring of Surya Kund and seek blessings at the sacred Divya Shila.",
      highlight: "Holy dip in Surya Kund hot springs & scenic mountain trek",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gangotri",
      deity: "Goddess Ganga",
      altitude: "3,100 m",
      desc: "The venerated origin seat of River Ganga on the banks of the Bhagirathi River. Surrounded by towering deodar and pine forests in the greater Himalayas.",
      highlight: "Bhagirath Shila, Submerged Shivling & peaceful prayer ghats",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kedarnath",
      deity: "Lord Shiva (Jyotirlinga)",
      altitude: "3,584 m",
      desc: "One of the 12 sacred Jyotirlingas, nestled majestically against the snow-clad Kedarnath peak and Mandakini River. Reachable by trek, pony, or helicopter.",
      highlight: "Ancient stone temple, Mandakini riverbank & evening Bhairavnath Aarti",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Badrinath",
      deity: "Lord Badri Vishal (Vishnu)",
      altitude: "3,300 m",
      desc: "The holy abode of Lord Vishnu between the Nar and Narayana mountain ranges along the Alaknanda River. Home to Tapt Kund and the last Indian village of Mana.",
      highlight: "Badrinath Temple Darshan, Tapt Kund & Vyas Gufa in Mana",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const packages = [
    {
      title: "Complete Chardham Yatra by Road",
      duration: "10 Nights / 11 Days",
      route: "Haridwar – Barkot – Yamunotri – Uttarkashi – Gangotri – Guptkashi – Kedarnath – Badrinath – Rishikesh",
      price: "₹26,999",
      tag: "Most Popular",
      inclusions: [
        "Dedicated AC vehicle for the entire circuit (ex Haridwar/Delhi)",
        "Pre-booked accommodation in all 4 dhams",
        "Pure vegetarian breakfast & dinners",
        "Biometric yatra registration & permit assistance",
        "Toll taxes, parking & hill-certified driver allowances",
      ],
    },
    {
      title: "Luxury Chardham Yatra by Helicopter",
      duration: "5 Nights / 6 Days",
      route: "Dehradun – Yamunotri (Kharsali) – Gangotri (Harsil) – Kedarnath (Sersi) – Badrinath – Dehradun",
      price: "₹1,95,000",
      tag: "VIP Helicopter",
      inclusions: [
        "Charter helicopter flights covering all 4 shrines",
        "VIP Darshan slip & priority temple entry",
        "Luxury 4/5-star mountain resort accommodations",
        "All gourmet meals, luxury local transfers & sightseeing",
        "Dedicated tour captain and medical emergency kit onboard",
      ],
    },
    {
      title: "Do Dham Yatra (Kedarnath & Badrinath)",
      duration: "6 Nights / 7 Days",
      route: "Haridwar – Guptkashi – Kedarnath – Pipalkoti – Badrinath – Rishikesh – Haridwar",
      price: "₹18,500",
      tag: "Essential Circuit",
      inclusions: [
        "Comfortable private transport for the entire route",
        "Hotel stays with MAP meal plan (Breakfast + Dinner)",
        "Kedarnath trek assistance & pony/palki booking support",
        "Driver charges, state road taxes & tolls",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => openModal()} />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=80"
              alt="Himalayan sacred mountains"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Char Dham Yatra <span className="text-[#f05a28]">2026</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Embark on the divine spiritual journey across the four holy shrines of Uttarakhand:
              Yamunotri, Gangotri, Kedarnath, and Badrinath with customized road &amp; helicopter packages.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openModal("Chardham Yatra by Road")}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Book Yatra Package
              </button>
              <button
                onClick={() => openModal("Helicopter Chardham Tour")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-bold px-7 py-3.5 rounded-full backdrop-blur-md transition-colors"
              >
                Helicopter VIP Packages
              </button>
            </div>
          </div>
        </div>

        {/* The 4 Sacred Shrines */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Four Sacred Shrines
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Nestled deep in the Garhwal Himalayas, each shrine represents immense spiritual significance,
              cleansing the soul and blessing pilgrims with inner peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {shrines.map((shrine) => (
              <div
                key={shrine.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 flex flex-col transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={shrine.image}
                    alt={shrine.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {shrine.altitude}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {shrine.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#f05a28] mb-2">
                      {shrine.deity}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {shrine.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                    <strong className="text-slate-700">Highlight:</strong> {shrine.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Yatra Packages */}
        <section className="py-16 bg-slate-50/70 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Selected Yatra Packages &amp; Pricing
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                Transparent packages with verified hotels, vegetarian meals, experienced mountain drivers, and 24/7 on-trip support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-[#f05a28]">
                        {pkg.tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 pb-4 border-b border-slate-100">
                      <strong>Route:</strong> {pkg.route}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Package Inclusions:
                      </div>
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Starting From</div>
                      <div className="text-2xl font-black text-slate-900">
                        {pkg.price} <span className="text-xs font-medium text-slate-500">/ person</span>
                      </div>
                    </div>
                    <button
                      onClick={() => openModal(pkg.title)}
                      className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Yatra With Us */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Why Thousands Choose Travel Hawkers for Char Dham
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f05a28] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Hill-Certified Commercial Fleet</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Only verified drivers with 5+ years of Garhwal high-altitude mountain experience drive our vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f05a28] flex items-center justify-center shrink-0">
                    <Helicopter className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Official Helicopter Ticketing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Direct booking for Kedarnath shuttle choppers from Phata, Guptkashi, and Sersi with priority slot assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f05a28] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24/7 Route &amp; Medical Coordinator</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Real-time weather monitoring, landslide re-routing assistance, and high-altitude health guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Box */}
            <div className="bg-[#0b252c] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-extrabold mb-2">Book Your Char Dham Yatra</h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill out the quick inquiry below or call our pilgrimage coordinators at{" "}
                <strong className="text-white">+91 93554 86036</strong>.
              </p>
              {callbackSubmitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="font-bold text-white text-base">WhatsApp Booking Opened!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your Char Dham Yatra booking inquiry details have been forwarded to WhatsApp. If the chat didn't launch automatically, chat directly with our pilgrimage coordinator at <strong className="text-white">+91 93554 86036</strong>.
                  </p>
                  <button
                    onClick={() => setCallbackSubmitted(false)}
                    className="text-xs font-bold text-[#25D366] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 outline-none focus:border-[#25D366]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 outline-none focus:border-[#25D366]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-300 uppercase">Total Pilgrims</label>
                      <input
                        type="number"
                        min={1}
                        value={callbackPilgrims}
                        onChange={(e) => setCallbackPilgrims(Number(e.target.value))}
                        className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-slate-400 outline-none focus:border-[#25D366]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-300 uppercase">Preferred Travel Month</label>
                    <select
                      value={callbackMonth}
                      onChange={(e) => setCallbackMonth(e.target.value)}
                      className="w-full mt-1 px-4 py-3 rounded-xl bg-[#10343e] border border-white/20 text-white text-xs outline-none focus:border-[#25D366]"
                    >
                      <option>May 2026 (Opening Season)</option>
                      <option>June 2026 (Summer Break)</option>
                      <option>September 2026 (Autumn Clear Skies)</option>
                      <option>October 2026 (Pre-Closing Season)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Request Yatra Itinerary on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={selectedPlan}
      />
    </div>
  );
}
