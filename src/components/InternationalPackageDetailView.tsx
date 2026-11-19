"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppIcon from "./WhatsAppIcon";
import StructuredData from "@/components/StructuredData";
import TourPhotoGallery from "./TourPhotoGallery";
import {
  InternationalPackageData,
  INTERNATIONAL_PACKAGES,
} from "@/data/internationalPackagesData";
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
  Globe2,
  FileCheck,
  Camera,
  Building2,
  Plane,
  FileText,
  Sparkles,
} from "lucide-react";

interface Props {
  pkg: InternationalPackageData;
}

export default function InternationalPackageDetailView({ pkg }: Props) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(0);

  const toggleDay = (idx: number) => {
    setOpenDay(openDay === idx ? null : idx);
  };

  const otherPackages = Object.values(INTERNATIONAL_PACKAGES).filter(
    (p) => p.id !== pkg.id
  );

  const galleryImages = Array.from(
    new Set(
      [
        pkg.image,
        ...(pkg.gallery || []),
        ...(pkg.daywise?.map((d) => d.image).filter(Boolean) as string[] || []),
        ...Object.values(INTERNATIONAL_PACKAGES)
          .filter((p) => p.country === pkg.country && p.id !== pkg.id)
          .map((p) => p.image)
          .filter(Boolean),
        ...Object.values(INTERNATIONAL_PACKAGES)
          .filter((p) => p.country === pkg.country && p.id !== pkg.id)
          .flatMap((p) => p.gallery || [])
          .filter(Boolean),
      ].filter(Boolean)
    )
  );

  const cleanPrice = parseInt(pkg.price.replace(/[^0-9]/g, ""), 10) || 29999;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: pkg.overview,
    image: pkg.image,
    brand: {
      "@type": "Brand",
      name: "Travel Hawkers",
    },
    offers: {
      "@type": "Offer",
      url: `https://travelhawkers.com/${pkg.id}`,
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
      ratingValue: pkg.rating || 4.9,
      reviewCount: pkg.reviews || 110,
    },
  };

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.overview,
    touristType: ["Family", "Couples", "Honeymooners", "International Travelers"],
    provider: {
      "@type": "TravelAgency",
      name: "Travel Hawkers",
      url: "https://travelhawkers.com",
    },
    itinerary: pkg.daywise?.map((day, idx) => ({
      "@type": "TouristTrip",
      name: day.title,
      description: day.desc,
      position: idx + 1,
    })),
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
        name: "International Packages",
        item: "https://travelhawkers.com/international-packages",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.title,
        item: `https://travelhawkers.com/${pkg.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StructuredData data={[productSchema, touristTripSchema, breadcrumbSchema]} />
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={pkg.image}
              alt={pkg.title}
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
                href="/international-packages"
                className="hover:text-white transition-colors"
              >
                International Packages
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-400 font-semibold">{pkg.title}</span>
            </div>

            {/* Title & Specs */}
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {pkg.badge && (
                  <span className="bg-[#f05a28] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Globe2 className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold">{pkg.country}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-300">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{pkg.rating}</span>
                  <span className="text-slate-300">
                    ({pkg.reviews} verified reviews)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {pkg.title}
              </h1>

              {pkg.route && (
                <div className="text-xs sm:text-sm text-slate-200">
                  <strong className="text-white">Route:</strong> {pkg.route}
                </div>
              )}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Starting Price
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {pkg.price}
                  <span className="text-xs font-normal text-slate-300">
                    {" "}
                    / person
                  </span>
                </div>
                {pkg.originalPrice ? (
                  <div className="text-[11px] text-slate-400 line-through">
                    {pkg.originalPrice}
                  </div>
                ) : null}
                <div className="text-[10px] text-amber-300 font-bold flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3 h-3 text-amber-300" />
                  <span>Price Match Guaranteed</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Duration
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {pkg.duration}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Customizable
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Visa Support
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  100% Assisted
                </div>
                <div className="text-[11px] text-slate-300">
                  Fast Documentation
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Hotel Category
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  4-Star &amp; Luxury Stays
                </div>
                <div className="text-[11px] text-slate-300">
                  Daily Breakfast
                </div>
              </div>
            </div>

            {/* Flight / Peak Season Pricing Option Banner */}
            {pkg.flightPrice && (
              <div className="bg-white/10 backdrop-blur-md border border-amber-400/40 rounded-2xl p-4 max-w-3xl flex flex-wrap items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      Peak Season Pricing (GST &amp; All Taxes Included)
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 mt-0.5">
                      <strong className="text-white">Land Only:</strong> {pkg.price}* / person &bull;{" "}
                      <strong className="text-white">With Return Flights:</strong> {pkg.flightPrice}* / person
                    </div>
                  </div>
                </div>
                {pkg.peakSeasonWindow && (
                  <span className="text-[11px] text-amber-200 bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-full font-medium">
                    Valid: {pkg.peakSeasonWindow}
                  </span>
                )}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                <span>Book / Request Free Itinerary</span>
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
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tour Photo Mosaic Showcase */}
            <div className="mb-10 sm:mb-14">
              <TourPhotoGallery
                title={pkg.title}
                images={galleryImages}
                badge={pkg.badge || `${pkg.country} Tour`}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column */}
              <div className="lg:col-span-8 space-y-12">
                {/* Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Tour Overview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {pkg.overview}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-4 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Package Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {pkg.highlights.map((highlight, idx) => (
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
                {pkg.daywise && pkg.daywise.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Day-by-Day Itinerary
                      </h2>
                      <span className="text-xs text-slate-500 font-medium">
                        {pkg.daywise.length} Days Detailed Plan
                      </span>
                    </div>

                    <div className="space-y-3">
                      {pkg.daywise.map((plan, idx) => {
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
                              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-start font-normal">
                                <div className="relative w-full sm:w-52 h-36 rounded-xl overflow-hidden shrink-0 bg-slate-100 shadow-xs border border-slate-200/80">
                                  <Image
                                    src={plan.image || galleryImages[(idx + 1) % galleryImages.length]}
                                    alt={plan.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 220px"
                                    className="object-cover"
                                  />
                                  <span className="absolute bottom-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                    {plan.day}
                                  </span>
                                </div>
                                <div className="flex-1 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                                  {plan.desc}
                                </div>
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
                      {pkg.inclusions.map((item, idx) => (
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
                      {(pkg.exclusions && pkg.exclusions.length > 0
                        ? pkg.exclusions
                        : [
                            "International flight tickets (unless specified)",
                            "Visa fees and processing charges",
                            "Personal expenses such as laundry, telephone, and minibar",
                            "Tipping for tour guide and driver",
                          ]
                      ).map((item, idx) => (
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

                {/* Accommodation Details (when specified) */}
                {pkg.accommodation && pkg.accommodation.length > 0 && (
                  <div className="bg-amber-50/40 border border-amber-200/80 rounded-3xl p-6 sm:p-7 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-amber-600" />
                        <span>Accommodation ({pkg.duration} — 4-Star Properties)</span>
                      </h3>
                      <span className="text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                        Daily Breakfast included (CP)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {pkg.accommodation.map((acc, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-amber-200/70 rounded-2xl p-5 shadow-2xs space-y-2 hover:border-amber-300 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60">
                              {acc.nights} in {acc.place}
                            </span>
                            <div className="flex items-center gap-0.5 text-amber-400">
                              {[...Array(4)].map((_, s) => (
                                <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                              ))}
                            </div>
                          </div>
                          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                            {acc.hotel}
                          </div>
                          {acc.mealPlan && (
                            <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5 pt-2 border-t border-slate-100">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{acc.mealPlan}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Peak Season Pricing Options Card */}
                {pkg.flightPrice && (
                  <div className="bg-gradient-to-br from-[#0B2724] to-slate-900 border border-amber-400/40 rounded-3xl p-6 sm:p-7 text-white space-y-5 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        <span className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                          Peak Season Package Pricing
                        </span>
                      </div>
                      {pkg.peakSeasonWindow && (
                        <span className="text-xs text-amber-200 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full font-medium">
                          Valid: {pkg.peakSeasonWindow}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 border border-white/15 rounded-2xl p-5 space-y-1.5">
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                          Land-Only Package
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-amber-400">
                          {pkg.price}*
                          <span className="text-xs font-normal text-slate-300"> / person</span>
                        </div>
                        <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Inclusive of GST &amp; all taxes</span>
                        </div>
                      </div>
                      <div className="bg-white/10 border border-white/15 rounded-2xl p-5 space-y-1.5">
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                          With Return Flights
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-white">
                          {pkg.flightPrice}*
                          <span className="text-xs font-normal text-slate-300"> / person</span>
                        </div>
                        <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Inclusive of GST &amp; all taxes</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-300 leading-relaxed font-normal pt-1 border-t border-white/10">
                      *Starting rates based on a minimum of 6 guests traveling together. Flight-inclusive rates subject to live airline seat availability at time of confirmation.
                    </div>
                  </div>
                )}

                {/* Visa Information */}
                {pkg.visaInfo && (
                  <div className="bg-blue-50/50 border border-blue-200/80 rounded-3xl p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <FileCheck className="w-5 h-5 text-blue-600" />
                      <span>Visa &amp; Entry Requirements:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {pkg.visaInfo}
                    </p>
                  </div>
                )}

                {/* Terms and Conditions (when specified) */}
                {pkg.termsAndConditions && pkg.termsAndConditions.length > 0 && (
                  <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-slate-700" />
                      <span>Important Terms &amp; Conditions</span>
                    </h3>
                    <ul className="space-y-3">
                      {pkg.termsAndConditions.map((tc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium"
                        >
                          <span className="text-[#f05a28] font-bold text-base leading-none mt-0.5 shrink-0">•</span>
                          <span>{tc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sights & Experiences Photo Gallery Strip */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                      <Camera className="w-5 h-5 text-[#f05a28]" />
                      <span>Sights &amp; Moments You&apos;ll Witness</span>
                    </h2>
                    <span className="text-xs text-slate-500 font-medium">
                      {galleryImages.length} Curated Sights
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {galleryImages.slice(0, 6).map((img, i) => (
                      <div
                        key={i}
                        className="relative h-32 sm:h-44 rounded-2xl overflow-hidden group bg-slate-100 border border-slate-200 shadow-xs"
                      >
                        <Image
                          src={img}
                          alt={`${pkg.title} sight ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Sidebar */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Starting Price
                    </div>
                    {pkg.flightPrice ? (
                      <div className="mt-2 space-y-2">
                        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 space-y-0.5">
                          <div className="text-[11px] font-bold text-amber-900 uppercase">
                            Land Only Package
                          </div>
                          <div className="text-2xl sm:text-3xl font-black text-slate-900">
                            {pkg.price}*
                            <span className="text-xs font-normal text-slate-500"> / person</span>
                          </div>
                          <div className="text-[10px] text-emerald-600 font-bold">
                            Inclusive of GST &amp; all taxes
                          </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-0.5">
                          <div className="text-[11px] font-bold text-slate-700 uppercase">
                            With Return Flights
                          </div>
                          <div className="text-2xl sm:text-3xl font-black text-[#f05a28]">
                            {pkg.flightPrice}*
                            <span className="text-xs font-normal text-slate-500"> / person</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">
                            Inclusive of GST &amp; live airline fares
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="mt-2 flex items-baseline gap-3">
                          <span className="text-3xl sm:text-4xl font-black text-slate-900">
                            {pkg.price}
                          </span>
                          {pkg.originalPrice && (
                            <span className="text-sm font-semibold text-slate-400 line-through">
                              {pkg.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Per person on twin sharing • Customizable dates &amp; hotels
                        </div>
                      </>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-xs text-amber-900 bg-amber-50/80 border border-amber-200/90 rounded-xl p-2.5 font-bold shadow-2xs">
                      <ShieldCheck className="w-4 h-4 text-[#B58238] shrink-0" />
                      <span>Price Match Guaranteed</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>100% Customized Itinerary</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Handpicked 4-Star Accommodations</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Hassle-Free Visa Consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24/7 Global On-Trip Support</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => setEnquiryOpen(true)}
                      className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-sm font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                    >
                      <span>Book Tour / Get Custom Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://wa.me/919355486036?text=Hi%20Travel%20Hawkers%2C%20I%20am%20interested%20in%20the%20international%20package%3A%20"
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
                      Speak directly with our international holiday specialist:
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

                {/* Price Match Guaranteed Badge Box */}
                <div className="bg-gradient-to-br from-amber-50 via-orange-50/40 to-stone-50 border border-amber-300/80 rounded-2xl p-4.5 shadow-sm flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-300 flex items-center justify-center text-[#B58238] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 tracking-tight">
                        Price Match Guaranteed
                      </span>
                      <span className="text-[10px] font-extrabold bg-[#B58238] text-white px-2 py-0.5 rounded-full">
                        100% Verified
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      Found a lower comparable international quote for the same itinerary and hotels? We match or beat it.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Travel Hawkers Assurance</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    Trusted by 10,000+ travelers with verified local overseas partners, seamless airport pickups, and zero hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other International Packages */}
        {otherPackages.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Explore Other International Holidays
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Unforgettable worldwide destinations curated for your perfect getaway.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPackages.slice(0, 3).map((item) => (
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
        prefilledPackage={pkg.title}
      />
    </div>
  );
}
