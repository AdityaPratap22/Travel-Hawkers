"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Building2,
  Car,
  Plane,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export interface PackageInfoData {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number | string;
  originalPrice?: number | string;
  image: string;
  badge?: string;
  category?: "International" | "Domestic" | "Weekend";
  citiesCovered?: string[];
  keyPoints?: string[];
  highlights?: string[];
  inclusions?: string[];
  slug?: string;
}

interface PackageInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: PackageInfoData | null;
  onBookNow?: (title: string) => void;
}

export default function PackageInfoModal({
  isOpen,
  onClose,
  pkg,
  onBookNow,
}: PackageInfoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !pkg) return null;

  const formattedPrice =
    typeof pkg.price === "number"
      ? `₹${pkg.price.toLocaleString("en-IN")}`
      : pkg.price.startsWith("₹")
      ? pkg.price
      : `₹${pkg.price}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Travel Hawkers, I would like to know more and get an itinerary for ${pkg.title} (${pkg.duration}).`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-stone-200/80 w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col z-10 text-slate-900 animate-in zoom-in-95 duration-200">
        {/* Modal Header with Photo Banner */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-900">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          {pkg.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#B58238] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                {pkg.badge}
              </span>
            </div>
          )}

          {/* Banner Text */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 text-left">
            {pkg.category && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#DEB887] block mb-1">
                {pkg.category} Package
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug drop-shadow-sm">
              {pkg.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-200 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B58238]" />
                {pkg.destination}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B58238]" />
                {pkg.duration}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                4.9 / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-left">
          {/* Price Bar */}
          <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-2xl border border-stone-200/80">
            <div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Starting Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900 font-serif">
                  {formattedPrice}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ person</span>
                {pkg.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {typeof pkg.originalPrice === "number"
                      ? `₹${pkg.originalPrice.toLocaleString("en-IN")}`
                      : pkg.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                Best Price Guaranteed
              </span>
            </div>
          </div>

          {/* Cities Covered */}
          {pkg.citiesCovered && pkg.citiesCovered.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B88434] mb-2">
                Cities &amp; Locations Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {pkg.citiesCovered.map((city, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-white border border-stone-300 px-3 py-1.5 rounded-lg text-slate-800 shadow-2xs"
                  >
                    <MapPin className="w-3 h-3 text-[#B58238]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Points / Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B88434] mb-2.5">
              Key Package Highlights
            </h3>
            <div className="space-y-2">
              {(pkg.keyPoints || pkg.highlights || [
                "Handpicked 4-star / verified boutique stays with daily buffet breakfast",
                "Private dedicated AC chauffeur vehicle for all sightseeing & airport transfers",
                "Curated sightseeing tours with local certified English-speaking guides",
                "All monument entry tickets, tolls, driver allowances & parking included",
                "24/7 on-trip assistance from Travel Hawkers dedicated travel desk",
              ]).map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions Row */}
          <div className="pt-3 border-t border-stone-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Package Inclusions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100 text-slate-700">
                <Building2 className="w-4 h-4 text-[#B58238]" />
                <span>Hotel Stays</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100 text-slate-700">
                <Calendar className="w-4 h-4 text-[#B58238]" />
                <span>Daily Breakfast</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100 text-slate-700">
                <Car className="w-4 h-4 text-[#B58238]" />
                <span>Private Transfers</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100 text-slate-700">
                <Plane className="w-4 h-4 text-[#B58238]" />
                <span>Sightseeing Pass</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {pkg.slug ? (
            <Link
              href={pkg.slug.startsWith("/") ? pkg.slug : `/packages/${pkg.slug}`}
              onClick={onClose}
              className="text-xs font-bold text-[#B58238] hover:underline flex items-center gap-1 order-2 sm:order-1"
            >
              <span>View Full Itinerary Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div className="text-xs text-slate-500 order-2 sm:order-1">
              Customizable according to your travel dates
            </div>
          )}

          <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto order-1 sm:order-2">
            <a
              href={`https://wa.me/919355486036?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] sm:text-sm font-bold py-2.5 sm:py-3 px-3 sm:px-5 rounded-xl shadow-md flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer text-center"
            >
              <WhatsAppIcon variant="white" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Inquire on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onBookNow) onBookNow(pkg.title);
              }}
              className="flex-1 sm:flex-initial bg-[#B58238] hover:bg-[#9E6F21] text-white text-[11px] sm:text-sm font-semibold py-2.5 sm:py-3 px-3 sm:px-5 rounded-xl shadow-md flex items-center justify-center gap-1 sm:gap-1.5 transition-all cursor-pointer text-center"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
