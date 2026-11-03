"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Users,
  Briefcase,
  ShieldCheck,
  Fuel,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface CarHireSectionProps {
  onBookVehicle?: (vehicleName: string) => void;
}

const FEATURED_FLEET = [
  {
    id: "sedan",
    name: "Swift Dzire / Toyota Etios",
    badge: "City & Quick Escapes",
    category: "Executive Sedan",
    capacity: "4 Passengers",
    luggage: "2-3 Bags",
    outstationRate: "₹12 / km",
    localRate: "₹1,800 (8h / 80km)",
    image: "/cars/swift-dzire.jpg",
    features: ["Air Conditioned", "Daily Sanitized", "Uniformed Chauffeur"],
    popularFor: "Delhi Airport Transfers, Agra Same Day, Jaipur",
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    badge: "Most Popular",
    category: "Luxury Mountain SUV",
    capacity: "6-7 Passengers",
    luggage: "4-5 Bags",
    outstationRate: "₹18 / km",
    localRate: "₹3,200 (8h / 80km)",
    image: "/cars/innova-crysta.jpg",
    features: ["Reclining Captain Seats", "Dual AC Vents", "Master Hill Driver"],
    popularFor: "Himachal, Uttarakhand, Chardham Yatra, Rajasthan",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga (Hybrid)",
    badge: "Family Value",
    category: "Spacious MUV",
    capacity: "5-6 Passengers",
    luggage: "3 Bags",
    outstationRate: "₹15 / km",
    localRate: "₹2,600 (8h / 80km)",
    image: "/cars/maruti-ertiga.jpg",
    features: ["3-Row Flexible Seating", "Punctual Doorstep Pickup", "USB Charging"],
    popularFor: "Weekend Getaways, Rishikesh, Mathura, Kasauli",
  },
  {
    id: "tempo",
    name: "Luxury Tempo / Urbania",
    badge: "Group Touring",
    category: "12-16 Seater Coach",
    capacity: "12-16 Passengers",
    luggage: "10-12 Bags",
    outstationRate: "₹26 / km",
    localRate: "₹5,200 (8h / 80km)",
    image: "/cars/tempo-traveller.jpg",
    features: ["Pushback Luxury Seats", "Surround AC & Audio", "Ample Boot Storage"],
    popularFor: "Family Groups, Corporate Retreats, Pilgrimage Yatras",
  },
];

export default function CarHireSection({ onBookVehicle }: CarHireSectionProps) {
  return (
    <section id="car-hire-section" className="py-14 sm:py-18 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B58238]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434]">
                CHAUFFEUR-DRIVEN FLEET
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-[#FAF5ED] text-[#B58238] border border-[#B58238]/30">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Pan-India Permits</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
              Premium Car Hire & Outstation Cabs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-normal leading-relaxed">
              Experience effortless road journeys with verified, courteous chauffeurs, daily sanitized vehicles, and straightforward transparent tariffs with zero hidden surcharges.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/car-hire"
              className="text-xs sm:text-sm font-semibold text-[#0B2724] hover:text-[#B58238] inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              <span>View Full Fleet & Tariff</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform text-[#B58238]" />
            </Link>
          </div>
        </div>

        {/* Fleet Grid: 4 Cards on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURED_FLEET.map((car, idx) => {
            const delays = ["delay-75", "delay-150", "delay-225", "delay-300"];
            return (
              <div
                key={car.id}
                className={`reveal ${delays[idx]} bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group transform hover:-translate-y-1.5`}
              >
                {/* Vehicle Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B2724]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 shadow-xs">
                    {car.badge}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-2.5 left-3 text-white">
                    <span className="text-[11px] font-medium text-stone-200 uppercase tracking-wider block">
                      {car.category}
                    </span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
                      {car.name}
                    </h3>

                    {/* Passenger & Luggage Specs */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-600 font-medium mt-2 pt-2 border-t border-stone-100">
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#B58238]" />
                        {car.capacity}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-[#B58238]" />
                        {car.luggage}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <ul className="mt-3 space-y-1.5">
                      {car.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-[#B58238] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Recommended for snippet */}
                    <div className="mt-3.5 bg-[#FAF5ED] rounded-xl p-2.5 border border-[#B58238]/20 text-[10.5px] text-slate-700 leading-snug">
                      <span className="font-bold text-[#B58238]">Best For: </span>
                      {car.popularFor}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-[9.5px] uppercase font-bold tracking-wider text-slate-400">
                          Outstation Rate
                        </div>
                        <div className="text-base font-bold text-slate-900 font-serif">
                          {car.outstationRate}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9.5px] uppercase font-bold tracking-wider text-slate-400">
                          Local 8h / 80km
                        </div>
                        <div className="text-xs font-bold text-[#B58238]">
                          {car.localRate}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onBookVehicle && onBookVehicle(car.name)}
                        className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white text-[11px] font-bold py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-center cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Book Cab
                      </button>
                      <Link
                        href="/car-hire"
                        className="w-full bg-stone-100 hover:bg-stone-200 text-slate-800 text-[11px] font-semibold py-2.5 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3 text-slate-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Strip */}
        <div className="reveal delay-300 mt-10 sm:mt-12 bg-white rounded-2xl p-5 sm:p-7 border border-stone-200/80 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 border border-[#B58238]/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Commercial Yellow Plates</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">100% authorized Pan-India tourist permits</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 border border-[#B58238]/20">
                <Fuel className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Zero Hidden Surcharges</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Tolls, parking, and driver DA quoted upfront</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 border border-[#B58238]/20">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">Doorstep Pickup</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Punctual pick & drop anywhere in Delhi NCR</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] flex items-center justify-center text-[#B58238] shrink-0 border border-[#B58238]/20">
                <Car className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-900">24/7 Roadside Backup</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">Instant support and replacement guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
