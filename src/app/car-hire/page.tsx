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
  Mail,
} from "lucide-react";
import { submitEmailEnquiry } from "@/utils/enquiry";

export default function CarHirePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("Innova Crysta");
  const [pickupCity, setPickupCity] = useState("Delhi NCR");
  const [destinationCity, setDestinationCity] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split("T")[0]);
  const [customerEmail, setCustomerEmail] = useState("");
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
      image: "/cars/swift-dzire.jpg",
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
      image: "/cars/innova-crysta.jpg",
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
      image: "/cars/maruti-ertiga.jpg",
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
      image: "/cars/tempo-traveller.jpg",
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
      image: "/cars/mercedes-luxury.jpg",
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
      image: "/cars/volvo-coach.jpg",
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

  const handleQuickBook = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmailEnquiry({
      packageTitle: `Car Hire - ${tripType} (${selectedVehicle})`,
      destination: destinationCity || "Not specified",
      dates: pickupDate,
      email: customerEmail,
      phone: mobileNumber,
      message: `Pickup City: ${pickupCity}\nDestination: ${destinationCity}\nTrip Type: ${tripType}\nVehicle: ${selectedVehicle}\nPickup Date: ${pickupDate}`,
    });
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] selection:bg-[#B58238] selection:text-white">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#081E1C] via-[#0B2724] to-[#143D39] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#B58238_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#FAF5ED]/10 text-[#C59B58] border border-[#C59B58]/30 backdrop-blur-sm">
                  <Car className="w-3.5 h-3.5 text-[#C59B58]" />
                  <span>PREMIUM CHAUFFEUR-DRIVEN SERVICE</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                  Reliable Car Hire Services <br />
                  <span className="font-script text-[#C59B58] italic font-normal text-[1.1em]">For Your Journey</span>
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                  Discover the freedom of exploring India with our premium fleet and verified chauffeurs.
                  Whether you’re planning a family vacation, a business trip, or a weekend getaway, we provide a seamless, safe, and hassle-free car rental experience tailored to your exact route.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#DEB887]">100%</div>
                    <div className="text-[11px] text-stone-300">Clean & Sanitized Daily</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#DEB887]">Zero</div>
                    <div className="text-[11px] text-stone-300">Hidden Surcharges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-lg sm:text-xl font-serif font-bold text-[#DEB887]">24/7</div>
                    <div className="text-[11px] text-stone-300">Roadside Assistance</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="tel:+919355486036"
                    className="bg-[#B58238] hover:bg-[#9E6F21] text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-black/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 93554 86036</span>
                  </a>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="bg-white/15 hover:bg-white/25 text-white px-5 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
                  >
                    Custom Route Quote
                  </button>
                </div>
              </div>

              {/* Quick Booking Form Card */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200/80 text-slate-900">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-900">Book Your Cab</h3>
                      <p className="text-xs text-slate-500">Instant confirmation & transparent fares</p>
                    </div>
                    <span className="bg-[#FAF5ED] text-[#B58238] border border-[#B58238]/30 text-[11px] font-bold px-2.5 py-1 rounded-full">
                      Verified Drivers
                    </span>
                  </div>

                  {bookingSubmitted ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-3">
                      <div className="w-12 h-12 bg-white rounded-full border border-amber-200 flex items-center justify-center text-[#B58238] mx-auto shadow-xs">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-base font-serif">Cab Booking Request Received!</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Your vehicle booking details have been submitted. Our transport manager will email your vehicle confirmation and rate slip to <strong className="text-slate-800">{customerEmail || mobileNumber}</strong> shortly.
                      </p>
                      <button
                        onClick={() => setBookingSubmitted(false)}
                        className="text-xs font-bold text-[#B58238] hover:underline cursor-pointer"
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
                            className={`py-2 rounded-lg transition-colors cursor-pointer ${
                              tripType === type
                                ? "bg-white text-[#B58238] shadow-xs font-bold"
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
                          className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:ring-2 focus:ring-[#B58238] outline-none"
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
                            placeholder="e.g. Delhi NCR"
                            required
                            value={pickupCity}
                            onChange={(e) => setPickupCity(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#B58238] outline-none"
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
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#B58238] outline-none"
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
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#B58238] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 9876543210"
                            required
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#B58238] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          required
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-[#B58238] outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white font-bold text-xs py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Request Cab Booking via Email</span>
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
                  className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md transition-all space-y-3 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] text-[#B58238] border border-[#B58238]/20 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-slate-900 text-base">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Fleet Catalog */}
        <section className="py-16 sm:py-20 bg-white border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 text-left">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
                  OUR FLEET
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                  Choose The Ideal Vehicle For Your Trip
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  All cars undergo rigorous 24-point pre-trip mechanical and sanitation audits.
                </p>
              </div>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="mt-4 md:mt-0 text-xs font-bold text-[#B58238] hover:text-[#9E6F21] flex items-center gap-1 cursor-pointer"
              >
                <span>Need a customized multi-city quotation?</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fleet.map((car) => (
                <div
                  key={car.id}
                  className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B58238]/40 transition-all flex flex-col shadow-xs hover:shadow-xl group text-left"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B2724]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                      {car.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#B58238] transition-colors">{car.name}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#B58238]" />
                          {car.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-[#B58238]" />
                          {car.luggage}
                        </span>
                      </div>

                      <div className="mt-4 space-y-1.5 border-t border-stone-200/70 pt-3">
                        {car.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B58238] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 bg-[#FAF5ED] rounded-xl p-3 border border-[#B58238]/20 text-[11px] text-slate-700">
                        <span className="font-bold text-[#B58238]">Recommended for: </span>
                        {car.popularFor}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-200/70">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Outstation Rate</div>
                          <div className="text-lg font-serif font-bold text-slate-900">{car.ratePerKm}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Local 8h / 80km</div>
                          <div className="text-xs font-bold text-[#B58238]">{car.localPackage}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedVehicle(car.name);
                          setEnquiryOpen(true);
                        }}
                        className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
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
          <div className="bg-gradient-to-r from-[#081E1C] via-[#0B2724] to-[#143D39] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-[#B58238]/25 text-left">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#C59B58] block">
                OUR PROMISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Transparent Policies. No Hidden Charges. Guaranteed On-Time.
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                We believe in straightforward pricing. Tolls, state road taxes, parking, and driver DA are clearly quoted upfront without surprise extras at the end of your trip.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#C59B58] shrink-0" />
                  <span className="text-xs font-semibold text-stone-200">Commercial Registered Plates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Fuel className="w-5 h-5 text-[#C59B58] shrink-0" />
                  <span className="text-xs font-semibold text-stone-200">Fuel & Driver DA Included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#C59B58] shrink-0" />
                  <span className="text-xs font-semibold text-stone-200">Doorstep Pick & Drop</span>
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
