"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppIcon from "./WhatsAppIcon";
import StructuredData from "@/components/StructuredData";
import {
  WeekendGetawayData,
  WEEKEND_GETAWAYS,
} from "@/data/weekendGetawaysData";
import {
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  MapPin,
  Car,
} from "lucide-react";

interface Props {
  getaway: WeekendGetawayData;
}

export default function WeekendGetawayDetailView({ getaway }: Props) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(0);

  const toggleDay = (idx: number) => {
    setOpenDay(openDay === idx ? null : idx);
  };

  const otherGetaways = Object.values(WEEKEND_GETAWAYS).filter(
    (g) => g.id !== getaway.id
  );

  const cleanPrice = parseInt(getaway.price.replace(/[^0-9]/g, ""), 10) || 5999;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: getaway.title,
    description: getaway.overview,
    image: getaway.image,
    brand: {
      "@type": "Brand",
      name: "Travel Hawkers",
    },
    offers: {
      "@type": "Offer",
      url: `https://travelhawkers.com/${getaway.id}`,
      priceCurrency: "INR",
      price: cleanPrice,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Travel Hawkers",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getaway.rating || 4.85,
      reviewCount: getaway.reviews || 90,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://travelhawkers.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Weekend Getaways",
        item: "https://travelhawkers.com/weekend-getaways",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: getaway.title,
        item: `https://travelhawkers.com/${getaway.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StructuredData data={[productSchema, breadcrumbSchema]} />
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={getaway.image}
              alt={getaway.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b252c] via-[#0b252c]/85 to-[#0b252c]/50" />

          <div className="relative z-10 max-w-7xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link
                href="/weekend-getaways"
                className="hover:text-white transition-colors"
              >
                Weekend Getaways
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-400 font-semibold">{getaway.title}</span>
            </div>

            {/* Title & Badge */}
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {getaway.badge && (
                  <span className="bg-[#f05a28] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                    {getaway.badge}
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold">{getaway.state}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold">{getaway.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-300">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{getaway.rating}</span>
                  <span className="text-slate-300">
                    ({getaway.reviews} verified reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {getaway.title}
              </h1>

              <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed">
                {getaway.tagline} • {getaway.distance} ({getaway.driveTime})
              </p>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Starting Price
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {getaway.price}
                  <span className="text-xs font-normal text-slate-300">
                    {" "}
                    / person
                  </span>
                </div>
                {getaway.originalPrice && (
                  <div className="text-[11px] text-slate-400 line-through">
                    {getaway.originalPrice}
                  </div>
                )}
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Trip Duration
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {getaway.duration}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Customizable
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Distance from Delhi
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  {getaway.distance}
                </div>
                <div className="text-[11px] text-slate-300">
                  {getaway.driveTime}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Travel Mode
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  Private Cab / SUV
                </div>
                <div className="text-[11px] text-slate-300">
                  Doorstep Pickup
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                <span>Book / Customize This Weekend</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919355486036"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full backdrop-blur-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Expert: +91 93554 86036</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-12">
                {/* Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Getaway Overview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {getaway.overview}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-4 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Key Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {getaway.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#f05a28] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day-by-Day Itinerary */}
                {getaway.daywise && getaway.daywise.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Suggested Itinerary
                      </h2>
                      <span className="text-xs text-slate-500 font-medium">
                        {getaway.daywise.length} Days Plan
                      </span>
                    </div>

                    <div className="space-y-3">
                      {getaway.daywise.map((plan, idx) => {
                        const isOpen = openDay === idx;
                        return (
                          <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                              isOpen
                                ? "border-orange-300 bg-orange-50/20 shadow-sm"
                                : "border-slate-200 bg-white hover:border-slate-300"
                            }`}
                          >
                            <button
                              onClick={() => toggleDay(idx)}
                              className="w-full flex items-center justify-between p-5 text-left gap-4"
                            >
                              <div className="flex items-center gap-3 sm:gap-4">
                                <span className="bg-[#0b252c] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0">
                                  {plan.day}
                                </span>
                                <span className="text-sm sm:text-base font-bold text-slate-900">
                                  {plan.title}
                                </span>
                              </div>
                              <ChevronDown
                                className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                                  isOpen ? "rotate-180 text-[#f05a28]" : ""
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                                {plan.desc}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Inclusions and Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-3xl p-6 sm:p-7 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>What&apos;s Included</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {getaway.inclusions.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50/40 border border-rose-200/70 rounded-3xl p-6 sm:p-7 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-500" />
                      <span>What&apos;s Excluded</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {getaway.exclusions.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Booking Card */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Starting Price
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">
                        {getaway.price}
                      </span>
                      {getaway.originalPrice && (
                        <span className="text-sm font-semibold text-slate-400 line-through">
                          {getaway.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Per person • Includes verified stay, private cab &amp; breakfast
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Delhi NCR Doorstep Pickup &amp; Drop</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Sanitized Private Cab (Sedan / SUV)</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Verified Resort with Mountain / River Views</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24/7 Road &amp; Trip Assistance</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => setEnquiryOpen(true)}
                      className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-sm font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                    >
                      <span>Book Weekend / Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://wa.me/919355486036?text=Hi%20Travel%20Hawkers%2C%20I%20am%20interested%20in%20the%20weekend%20getaway%3A%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                    >
                      <WhatsAppIcon variant="white" className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-center">
                    <div className="text-[11px] text-slate-500">
                      Need custom vehicle or group pricing?
                    </div>
                    <a
                      href="tel:+919355486036"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#f05a28] mt-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#f05a28]" />
                      <span>+91 93554 86036</span>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Travel Hawkers Assurance</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    Transparent pricing with all highway expressway tolls, state entry permits, and driver DA included upfront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Weekend Getaways */}
        {otherGetaways.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  More Weekend Trips from Delhi
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Quick rejuvenating road trips within 4 to 8 hours driving distance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherGetaways.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#f05a28] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
                          {item.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-400" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 font-normal">
                          {item.overview}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase font-semibold">
                            Starting from
                          </div>
                          <div className="text-base font-extrabold text-slate-900">
                            {item.price}
                          </div>
                        </div>

                        <Link
                          href={`/${item.slug}`}
                          className="bg-slate-900 hover:bg-[#f05a28] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <span>View Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={getaway.title}
      />
    </div>
  );
}
