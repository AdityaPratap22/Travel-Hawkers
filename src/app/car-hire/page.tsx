"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Car,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Briefcase,
  Fuel,
  Sparkles,
  Phone,
  ArrowRight,
  ChevronRight,
  Calendar,
  Check,
} from "lucide-react";
import { openWhatsAppInquiry } from "@/utils/whatsapp";

export default function CarHirePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("Innova Crysta");
  const [pickupCity, setPickupCity] = useState("Delhi NCR");
  const [destinationCity, setDestinationCity] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split("T")[0]);
  const [mobileNumber, setMobileNumber] = useState("");
  const [tripType, setTripType] = useState("Outstation");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const fleet = [
    {
      id: "sedan",
      name: "Sedan (Swift Dzire / Toyota Etios)",
      category: "Compact & City Trips",
      capacity: "4 Passengers + 1 Driver",
      luggage: "2-3 Large Bags",
      ratePerKm: "₹12 / km",
      localPackage: "₹1,800 (8 hrs / 80 km)",
      outstationMin: "250 km / day minimum",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
      features: [
        "Air Conditioned",
        "Clean & Sanitized Daily",
        "Uniformed Chauffeur",
        "Music System & Aux",
        "Ideal for Solo / Couples / Small Family",
      ],
      popularFor: "Delhi Airport Transfers, Agra Same Day, Jaipur Trips",
    },
    {
      id: "innova",
      name: "Toyota Innova Crysta",
      category: "Premium SUV & Family Journeys",
      capacity: "6-7 Passengers + 1 Driver",
      luggage: "4-5 Large Bags",
      ratePerKm: "₹18 / km",
      localPackage: "₹3,200 (8 hrs / 80 km)",
      outstationMin: "250 km / day minimum",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
      features: [
        "Captains Seats / Reclining Comfort",
        "Dual AC & Rear Vents",
        "Ample Boot Space",
        "Top Mountain Hill Road Safety",
        "Experienced Hill Drivers",
      ],
      popularFor: "Himachal, Uttarakhand, Chardham Yatra, Rajasthan Tour",
    },
    {
      id: "ertiga",
      name: "Maruti Ertiga (Smart Hybrid)",
      category: "Affordable Family MUV",
      capacity: "5-6 Passengers + 1 Driver",
      luggage: "3 Large Bags",
      ratePerKm: "₹15 / km",
      localPackage: "₹2,600 (8 hrs / 80 km)",
      outstationMin: "250 km / day minimum",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
      features: [
        "Spacious 3-Row Seating",
        "Fuel Efficient & Budget Friendly",
        "Front & Rear AC",
        "Punctual Doorstep Pickup",
        "USB Fast Charging",
      ],
      popularFor: "Weekend Getaways, Rishikesh, Mathura, Kasauli",
    },
    {
      id: "tempo",
      name: "Luxury Tempo Traveller (12 / 17 / 26 Seater)",
      category: "Group & Corporate Expeditions",
      capacity: "12 to 26 Passengers",
      luggage: "Dedicated Roof Carrier & Boot",
      ratePerKm: "₹26 - ₹34 / km",
      localPackage: "₹5,500 (8 hrs / 80 km)",
      outstationMin: "300 km / day minimum",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
      features: [
        "Pushback Reclining Seats",
        "Individual AC Louvers & Reading Lights",
        "LCD Screen & Sound System",
        "Spacious Aisle & Legroom",
        "Commercial Permit All India",
      ],
      popularFor: "Corporate Offsites, Large Family Tours, Pilgrimages",
    },
    {
      id: "luxury",
      name: "Executive Luxury (Mercedes-Benz / BMW / Camry)",
      category: "VIP & Wedding Delegations",
      capacity: "4 Passengers",
      luggage: "3 Luxury Suitcases",
      ratePerKm: "₹45 - ₹65 / km",
      localPackage: "₹8,500 (8 hrs / 80 km)",
      outstationMin: "Custom Quote",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
      features: [
        "Executive Leather Interiors",
        "Complimentary Water & Mints",
        "White Glove English-Speaking Chauffeurs",
        "Premium Sound & Privacy Tint",
        "VIP Pickups from Airport VIP Gates",
      ],
      popularFor: "Celebrity & VIP Transfers, Luxury Weddings, Diplomats",
    },
    {
      id: "coach",
      name: "Volvo Luxury Coach Bus (35 / 45 Seater)",
      category: "Mega Tours & Conferences",
      capacity: "35 - 45 Passengers",
      luggage: "Mega Underbelly Luggage Bay",
      ratePerKm: "On Request",
      localPackage: "Custom Day Quote",
      outstationMin: "Custom Quote",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
      features: [
        "Air Suspension for Ultra-Smooth Rides",
        "Full Pushback Recliner Seats",
        "Air-Conditioned Climate Control",
        "Dual Mic PA System & Entertainment",
        "Trained 2 Drivers for Long Hauls",
      ],
      popularFor: "School/College Trips, Destination Weddings, Conventions",
    },
  ];

  const services = [
    {
      icon: Users,
      title: "Chauffeur-Driven Cars",
      desc: "Relax and enjoy the journey with our courteous, vetted, and background-verified drivers who know every highway and mountain curve.",
    },
    {
      icon: Clock,
      title: "Airport Transfers",
      desc: "Zero-wait airport pick-ups and drops at Delhi IGI Airport, Chandigarh, Jaipur, and Amritsar. Live flight tracking included.",
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      desc: "Transparent per-km billing for multi-day road trips across Himachal, Uttarakhand, Rajasthan, Punjab, and Uttar Pradesh.",
    },
    {
      icon: Briefcase,
      title: "Corporate & Event Rentals",
      desc: "Dedicated account managers, monthly billing, and luxury fleets for corporate delegations, conferences, and weddings.",
    },
  ];

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppInquiry({
      packageTitle: `Car Hire - ${tripType} (${selectedVehicle})`,
      destination: destinationCity || "Not specified",
      dates: pickupDate,
      phone: mobileNumber,
      message: `Pickup City: ${pickupCity}\nDestination: ${destinationCity}\nTrip Type: ${tripType}\nVehicle: ${selectedVehicle}\nPickup Date: ${pickupDate}`,
    });
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f05a28_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Reliable Car Hire Services <br />
                  <span className="text-[#f05a28]">For Your Journey</span>
                </h1>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Discover the freedom of exploring your destination with our premium car hire services.
                  Whether you’re planning a family vacation, a business trip, or a weekend getaway, we provide a seamless, safe, and hassle-free car rental experience tailored to your exact needs.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-xl font-black text-orange-400">100%</div>
                    <div className="text-xs text-slate-300">Clean & Sanitized</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-xl font-black text-orange-400">Zero</div>
                    <div className="text-xs text-slate-300">Hidden Charges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-xl font-black text-orange-400">24/7</div>
                    <div className="text-xs text-slate-300">Roadside Assistance</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="tel:+919355486036"
                    className="bg-[#f05a28] hover:bg-[#dc4816] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 9355486036 / 8700296047</span>
                  </a>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-bold text-sm border border-white/20 transition-all"
                  >
                    Custom Route Quote
                  </button>
                </div>
              </div>

              {/* Quick Booking Form Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Book Your Cab</h3>
                      <p className="text-xs text-slate-500">Instant confirmation & best fares</p>
                    </div>
                    <span className="bg-orange-100 text-[#f05a28] text-[11px] font-bold px-2.5 py-1 rounded-full">
                      Verified Drivers
                    </span>
                  </div>

                  {bookingSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-md">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">WhatsApp Booking Opened!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Your vehicle request details are ready. If WhatsApp didn't open automatically, chat directly with our transport desk at <strong className="text-slate-800">+91 93554 86036</strong>.
                      </p>
                      <button
                        onClick={() => setBookingSubmitted(false)}
                        className="text-xs font-bold text-[#25D366] hover:underline"
                      >
                        Book another cab
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleQuickBook} className="space-y-4">
                      {/* Trip Type Tabs */}
                      <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
                        {["Outstation", "Airport", "Local 80km"].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setTripType(type)}
                            className={`py-2 rounded-lg transition-colors ${
                              tripType === type
                                ? "bg-white text-[#25D366] shadow-xs font-bold"
                                : "hover:text-slate-900"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Vehicle
                        </label>
                        <select
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#25D366] outline-none"
                        >
                          <option>Toyota Innova Crysta (6-7 Seater)</option>
                          <option>Swift Dzire / Toyota Etios (Sedan)</option>
                          <option>Maruti Ertiga (5-6 Seater)</option>
                          <option>Luxury Tempo Traveller 12 Seater</option>
                          <option>Luxury Tempo Traveller 17 Seater</option>
                          <option>Mercedes / BMW / Luxury Car</option>
                          <option>Volvo Coach (35-45 Seater)</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Pickup City
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Delhi / Gurugram"
                            required
                            value={pickupCity}
                            onChange={(e) => setPickupCity(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#25D366] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Destination
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Manali, Agra, Jaipur"
                            required
                            value={destinationCity}
                            onChange={(e) => setDestinationCity(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#25D366] outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Pickup Date
                          </label>
                          <input
                            type="date"
                            required
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#25D366] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your WhatsApp / Mobile
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 9876543210"
                            required
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#25D366] outline-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Book Cab on WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Car Hire */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Why Choose Travel Hawkers Car Hire Services?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From compact sedans for quick city drives to spacious SUVs for Himalayan expeditions, we ensure your safety, comfort, and peace of mind on every kilometer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f05a28] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Fleet Catalog */}
        <section className="py-16 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Choose The Ideal Vehicle For Your Trip
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  All cars undergo rigorous 24-point pre-trip mechanical and sanitation audits.
                </p>
              </div>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="mt-4 md:mt-0 text-xs font-bold text-[#f05a28] hover:underline flex items-center gap-1"
              >
                <span>Need a customized multi-city quotation?</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fleet.map((car) => (
                <div
                  key={car.id}
                  className="bg-[#fafafa] rounded-3xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-all flex flex-col shadow-xs hover:shadow-lg group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-black text-lg text-slate-900">{car.name}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          {car.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          {car.luggage}
                        </span>
                      </div>

                      <div className="mt-4 space-y-1.5 border-t border-slate-200 pt-3">
                        {car.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f05a28] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 bg-orange-50/70 rounded-xl p-3 border border-orange-100 text-[11px] text-slate-700">
                        <span className="font-bold text-[#f05a28]">Recommended for: </span>
                        {car.popularFor}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-[11px] text-slate-400 font-medium">Outstation Rate</div>
                          <div className="text-lg font-black text-slate-900">{car.ratePerKm}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-slate-400 font-medium">Local 8h / 80km</div>
                          <div className="text-xs font-bold text-orange-600">{car.localPackage}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedVehicle(car.name);
                          setEnquiryOpen(true);
                        }}
                        className="w-full bg-slate-900 hover:bg-[#f05a28] text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Book {car.name.split(" ")[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Guarantees */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-[#f05a28] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black">
                Transparent Policies. No Hidden Charges. Guaranteed On-Time.
              </h2>
              <p className="text-orange-100 text-xs sm:text-sm leading-relaxed">
                We believe in straightforward pricing. Tolls, state road taxes, parking, and driver DA are clearly quoted upfront without surprise extras at the end of your trip.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-200 shrink-0" />
                  <span className="text-xs font-semibold">Commercial Registered Plates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-5 h-5 text-orange-200 shrink-0" />
                  <span className="text-xs font-semibold">Fuel & Driver DA Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-200 shrink-0" />
                  <span className="text-xs font-semibold">Doorstep Pick & Drop</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={`Car Hire Enquiry - ${selectedVehicle}`}
      />
    </div>
  );
}
