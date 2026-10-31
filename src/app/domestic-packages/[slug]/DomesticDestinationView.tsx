"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  DomesticDestinationData,
  DOMESTIC_DESTINATIONS,
} from "@/data/domesticPackagesData";
import {
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Calendar,
  Sparkles,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";

interface Props {
  destination: DomesticDestinationData;
}

export default function DomesticDestinationView({ destination }: Props) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>(
    destination.title
  );

  const handleOpenQuote = (title: string) => {
    setSelectedPackage(title);
    setEnquiryOpen(true);
  };

  const otherDestinations = Object.values(DOMESTIC_DESTINATIONS).filter(
    (d) => d.slug !== destination.slug
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => handleOpenQuote(destination.title)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white pt-24 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={destination.heroImage}
              alt={destination.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b252c] via-[#0b252c]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link
                href="/domestic-packages"
                className="hover:text-white transition-colors"
              >
                Domestic Packages
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-400 font-semibold">
                {destination.name}
              </span>
            </div>

            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {destination.title}
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed">
                {destination.tagline}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Starting From
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {destination.startingPrice}
                  <span className="text-xs font-normal text-slate-300">
                    {" "}
                    / person
                  </span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Ideal Duration
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {destination.idealDuration}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Best Season
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1.5 leading-snug">
                  {destination.bestTime}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Traveler Rating
                </div>
                <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black text-amber-400 mt-0.5">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>{destination.rating}</span>
                  <span className="text-xs text-slate-300 font-normal">
                    ({destination.reviewsCount})
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenQuote(`${destination.name} Custom Inquiry`)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                <span>Request Itinerary &amp; Quote</span>
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

        {/* Detailed Overview Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  About {destination.name} Tours
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {destination.fullOverview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Spots Badges */}
                <div className="pt-4 space-y-2.5">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Featured Destinations &amp; Attractions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.keySpots.map((spot) => (
                      <span
                        key={spot}
                        className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium shadow-2xs"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#f05a28]" />
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Booking Card */}
              <div className="lg:col-span-4 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs sticky top-28">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Plan Your {destination.name} Trip
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Customized itineraries tailored exclusively for you with verified stays &amp; private cabs.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% Customized Itineraries</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified 3-Star &amp; 4-Star Accommodations</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Sanitized Private Cab &amp; Local Chauffeur</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 On-Trip Customer Care Assistance</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenQuote(`${destination.name} Custom Inquiry`)}
                  className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold py-3.5 rounded-xl shadow-md transition-all text-center block"
                >
                  Enquire for Best Deals
                </button>

                <div className="text-center pt-2 border-t border-slate-200/70">
                  <span className="text-[11px] text-slate-400">
                    Speak directly with our destination specialist:
                  </span>
                  <a
                    href="tel:+919355486036"
                    className="block text-xs font-bold text-slate-800 hover:text-[#f05a28] mt-1"
                  >
                    +91 93554 86036
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Highlights Grid */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Top Experiences in {destination.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Unforgettable moments and signature attractions handpicked by our travel architects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destination.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {h.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                        {h.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Package Options */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Curated {destination.name} Packages
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                All packages can be 100% personalized according to your dates, preferences, and group size.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {destination.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-orange-200 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {pkg.badge && (
                        <span className="text-[11px] font-bold text-[#f05a28] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                          {pkg.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold ml-auto">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                      {pkg.slug ? (
                        <Link
                          href={`/${pkg.slug}`}
                          className="hover:text-[#f05a28] transition-colors"
                        >
                          {pkg.title}
                        </Link>
                      ) : (
                        pkg.title
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Package Highlights:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pkg.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#f05a28] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Inclusions:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pkg.inclusions.map((inc, i) => (
                          <span
                            key={i}
                            className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">
                        Starting From
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900">
                        {pkg.price}{" "}
                        <span className="text-xs font-normal text-slate-400 line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      {pkg.slug && (
                        <Link
                          href={`/${pkg.slug}`}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl transition-colors"
                        >
                          View Details
                        </Link>
                      )}
                      <button
                        onClick={() => handleOpenQuote(pkg.title)}
                        className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-transform transform hover:scale-105"
                      >
                        Book / Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Day-by-Day Itinerary */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Suggested Day-by-Day Itinerary
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                A sample flow crafted by our ground team for seamless travel.
              </p>
            </div>

            <div className="space-y-4">
              {destination.itinerary.map((day, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                >
                  <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-bold shrink-0">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {day.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {destination.faqs.length > 0 && (
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Common queries about visiting {destination.name}.
                </p>
              </div>

              <div className="space-y-4">
                {destination.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-2"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explore Other Domestic Destinations */}
        <section className="py-16 bg-slate-50/70 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Explore Other Domestic Destinations
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  More breathtaking holiday getaways across India.
                </p>
              </div>
              <Link
                href="/domestic-packages"
                className="text-xs font-bold text-[#f05a28] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {otherDestinations.map((d) => (
                <Link
                  key={d.slug}
                  href={`/domestic-packages/${d.slug}`}
                  className="group bg-white p-3.5 rounded-2xl border border-slate-200/80 hover:border-orange-300 hover:shadow-md transition-all text-center space-y-1 block"
                >
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors truncate">
                    {d.name}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    From {d.startingPrice}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={selectedPackage}
      />
    </div>
  );
}
