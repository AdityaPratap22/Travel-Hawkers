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
  DestinationPackageItem,
  DomesticDestinationData,
} from "@/data/domesticPackagesData";
import {
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Calendar,
  Sparkles,
  MapPin,
  Car,
  Hotel,
  Coffee,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

interface Props {
  pkg: DestinationPackageItem;
  destination: DomesticDestinationData;
  relatedPackages?: DestinationPackageItem[];
}

export default function TourPackageDetailView({
  pkg,
  destination,
  relatedPackages = [],
}: Props) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(0); // First day open by default
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleDay = (idx: number) => {
    setOpenDay(openDay === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const otherPackages = relatedPackages.filter((p) => p.id !== pkg.id);

  // SEO Schemas
  const cleanPrice = parseInt(pkg.price.replace(/[^0-9]/g, ""), 10) || 9999;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: pkg.overview,
    image: pkg.image || destination.heroImage,
    brand: {
      "@type": "Brand",
      name: "Travel Hawkers",
    },
    offers: {
      "@type": "Offer",
      url: `https://travelhawkers.com/${pkg.slug || ""}`,
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
      ratingValue: pkg.rating || 4.88,
      reviewCount: pkg.reviews || 140,
    },
  };

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.overview,
    touristType: ["Family", "Couples", "Honeymooners", "Adventure"],
    provider: {
      "@type": "TravelAgency",
      name: "Travel Hawkers",
      url: "https://travelhawkers.com",
    },
    itinerary: pkg.fullItinerary?.map((day, idx) => ({
      "@type": "TouristTrip",
      name: day.title,
      description: day.description,
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
        name: "Domestic Packages",
        item: "https://travelhawkers.com/domestic-packages",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: destination.name,
        item: `https://travelhawkers.com/domestic-packages/${destination.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: pkg.title,
        item: `https://travelhawkers.com/${pkg.slug || ""}`,
      },
    ],
  };

  const faqSchema =
    destination.faqs && destination.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: destination.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const schemas: Record<string, unknown>[] = [
    productSchema,
    touristTripSchema,
    breadcrumbSchema,
  ];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <StructuredData data={schemas} />
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={pkg.image || destination.heroImage}
              alt={pkg.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b252c] via-[#0b252c]/85 to-[#0b252c]/50" />

          <div className="relative z-10 max-w-7xl mx-auto space-y-6">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
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
              <Link
                href={`/domestic-packages/${destination.slug}`}
                className="hover:text-white transition-colors"
              >
                {destination.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-orange-400 font-semibold">{pkg.title}</span>
            </div>

            {/* Title & Badge */}
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {pkg.badge && (
                  <span className="bg-[#f05a28] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                    {pkg.badge}
                  </span>
                )}
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
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-[#f05a28] shrink-0" />
                  <span className="font-medium">
                    <strong className="text-white">Route:</strong> {pkg.route}
                  </span>
                </div>
              )}
            </div>

            {/* Hero Quick Highlights Bar */}
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
                {pkg.originalPrice && (
                  <div className="text-[11px] text-slate-400 line-through">
                    {pkg.originalPrice}
                  </div>
                )}
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Tour Duration
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
                  Transport
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  Private Dedicated Cab
                </div>
                <div className="text-[11px] text-slate-300">
                  Chauffeur driven
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                <div className="text-[11px] text-slate-300 font-medium">
                  Hotels &amp; Meals
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                  Handpicked Stays
                </div>
                <div className="text-[11px] text-slate-300">
                  Daily Breakfast
                </div>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                <span>Book This Tour / Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+918700296047"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full backdrop-blur-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Specialist: +91 87002 96047</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Itinerary, Overview, Inclusions */}
              <div className="lg:col-span-8 space-y-12">
                {/* Trip Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Tour Overview
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {pkg.overview}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-4 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Key Highlights
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

                {/* Day by Day Itinerary */}
                {pkg.fullItinerary && pkg.fullItinerary.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Day-by-Day Itinerary
                      </h2>
                      <span className="text-xs text-slate-500 font-medium">
                        {pkg.fullItinerary.length} Days Detailed Plan
                      </span>
                    </div>

                    <div className="space-y-3">
                      {pkg.fullItinerary.map((plan, idx) => {
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
                                {plan.description}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Inclusions and Exclusions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Inclusions */}
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

                  {/* Exclusions */}
                  <div className="bg-rose-50/40 border border-rose-200/70 rounded-3xl p-6 sm:p-7 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-500" />
                      <span>What&apos;s Excluded</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {(pkg.exclusions && pkg.exclusions.length > 0
                        ? pkg.exclusions
                        : [
                            "Airfare / Train tickets to and from destination",
                            "Monument entry charges & optional adventure activities",
                            "Personal expenses such as laundry, phone calls & tips",
                            "Rohtang Pass special permits or green taxi fees if applicable",
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

                {/* Trip Advisory / Good to Know */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#f05a28]" />
                    <span>Important Information &amp; Travel Tips</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
                    <div className="space-y-1">
                      <strong className="text-slate-800 block">
                        Identity Proof:
                      </strong>
                      <span>
                        Valid government-issued photo ID (Aadhaar Card, Voter
                        ID, or Passport) is required for all travelers during
                        check-in and permits.
                      </span>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-slate-800 block">
                        Clothing &amp; Weather:
                      </strong>
                      <span>
                        Pack heavy woolens, gloves, and snow boots from October
                        to March; light jackets/sweaters are recommended even
                        during summer evenings.
                      </span>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-slate-800 block">
                        Rohtang Pass Permits:
                      </strong>
                      <span>
                        Rohtang Pass access requires NGT permits subject to
                        daily vehicle caps. Our team assists with timely
                        applications.
                      </span>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-slate-800 block">
                        Vehicle Guidelines:
                      </strong>
                      <span>
                        Air-conditioning will be switched off on uphill hill
                        roads to preserve engine safety, as standard throughout
                        Himachal.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Booking & Support Card */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
                  {/* Price Block */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Special Package Deal
                      </span>
                      {pkg.badge && (
                        <span className="text-[11px] font-bold text-[#f05a28] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
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
                      Per person on twin/double sharing • Includes taxes &amp;
                      cab
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>100% Customized Itinerary</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Sanitized Private Cab with Pilot Driver</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Handpicked Verified Hotels</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24/7 Dedicated Trip Concierge</span>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => setEnquiryOpen(true)}
                      className="w-full bg-[#f05a28] hover:bg-[#dc4816] text-white text-sm font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                    >
                      <span>Book Tour / Get Custom Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://wa.me/918700296047?text=Hi%20Travel%20Hawkers%2C%20I%20am%20interested%20in%20booking%20the%20package%3A%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                    >
                      <WhatsAppIcon variant="white" className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Call Direct Box */}
                  <div className="pt-3 border-t border-slate-100 text-center">
                    <div className="text-[11px] text-slate-500">
                      Need help customized specifically for you?
                    </div>
                    <a
                      href="tel:+918700296047"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#f05a28] mt-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#f05a28]" />
                      <span>+91 87002 96047 / 93554 86036</span>
                    </a>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Travel Hawkers Assurance</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    Over 10,000+ happy travelers served across India with
                    transparent pricing, verified drivers, and zero hidden
                    surcharges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Related Packages in this Destination */}
        {otherPackages.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  More {destination.name} Packages
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Explore other handpicked itineraries across Himachal Pradesh.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPackages.map((item) => (
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
                          href={item.slug ? `/${item.slug}` : `/domestic-packages/${destination.slug}`}
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

        {/* FAQs Section */}
        {destination.faqs && destination.faqs.length > 0 && (
          <section className="py-16 bg-white border-t border-slate-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Got questions? We have answers to help you plan with confidence.
                </p>
              </div>

              <div className="space-y-3">
                {destination.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 bg-slate-50/50 hover:bg-slate-50"
                      >
                        <span className="text-sm sm:text-base font-bold text-slate-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180 text-[#f05a28]" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-white border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        prefilledPackage={pkg.title}
      />
    </div>
  );
}
