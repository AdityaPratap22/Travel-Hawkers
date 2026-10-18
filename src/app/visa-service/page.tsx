"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  FileCheck,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Clock,
  Briefcase,
  Plane,
  Building2,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";

export default function VisaServicePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState("Tourist Visa Assistance");

  const openModal = (visaType?: string) => {
    if (visaType) setSelectedVisa(visaType);
    setEnquiryOpen(true);
  };

  const visaCategories = [
    {
      type: "Tourist Visa",
      icon: Plane,
      desc: "Holiday & leisure travel visas with complete documentation review, appointment booking, and submission guidance.",
      popularDestinations: ["Thailand", "Dubai / UAE", "Singapore", "Malaysia", "Vietnam", "Schengen (Europe)", "UK", "USA (B1/B2)"],
      timeline: "3 to 15 working days",
    },
    {
      type: "Business Visa",
      icon: Briefcase,
      desc: "For corporate meetings, client conferences, expos, trade shows, and contract discussions abroad.",
      popularDestinations: ["USA", "Schengen Area", "UK", "UAE", "Singapore", "Saudi Arabia", "Japan"],
      timeline: "5 to 20 working days",
    },
    {
      type: "Transit Visa",
      icon: Globe2,
      desc: "Required for layovers exceeding specific airport limits in Dubai, Doha, Istanbul, London, or European hubs.",
      popularDestinations: ["UAE (96-hr Transit)", "Qatar", "UK Direct Airside Transit", "Schengen Airport Transit"],
      timeline: "24 to 72 hours",
    },
    {
      type: "Work & Employment Permit Support",
      icon: Building2,
      desc: "Assistance with paperwork, embassy attestation, document apostille, and appointment scheduling for employment offers.",
      popularDestinations: ["UAE (Residence/Employment)", "Saudi Arabia", "Poland", "Germany (Opportunity Card)", "Canada"],
      timeline: "Varies by country",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Document Evaluation",
      desc: "We provide an exact country-specific document checklist and verify your passport, finances, and photos.",
    },
    {
      num: "02",
      title: "Application & Forms",
      desc: "Our visa specialists accurately fill out the official consular visa forms to eliminate any rejection risks.",
    },
    {
      num: "03",
      title: "Appointment Booking",
      desc: "We secure earliest available biometrics slots at VFS, TLScontact, BLS, or embassy consular centers.",
    },
    {
      num: "04",
      title: "Dispatch & Approval",
      desc: "Track status in real-time until your passport and e-Visa/sticker visa are safely stamped and returned.",
    },
  ];

  const popularCountries = [
    { country: "Dubai / UAE", type: "30 / 60 Days E-Visa", fee: "₹6,499", time: "2-3 Days" },
    { country: "Thailand", type: "E-Visa / VoA Express", fee: "₹3,999", time: "3-5 Days" },
    { country: "Singapore", type: "30 Days Multiple Entry", fee: "₹2,899", time: "3-4 Days" },
    { country: "Vietnam", type: "E-Visa (30/90 Days)", fee: "₹2,499", time: "3 Days" },
    { country: "Schengen (Europe)", type: "Short Stay Tourist", fee: "₹9,999", time: "15 Days" },
    { country: "United Kingdom", type: "Standard Visitor (6M)", fee: "₹14,500", time: "15-20 Days" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => openModal()} />

      <main className="flex-1">
        {/* Hero Header */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
              alt="Global visa travel"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Fast, Reliable <span className="text-[#f05a28]">Visa Services</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Wherever you are traveling—from Asia to the USA, the Middle East to Europe—Travel Hawkers
              makes your visa process smooth, transparent, and completely stress-free.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openModal("Tourist Visa Consultation")}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Apply for Visa Now
              </button>
              <button
                onClick={() => openModal("Express E-Visa Support")}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-bold px-7 py-3.5 rounded-full backdrop-blur-md transition-colors"
              >
                Check Document Checklist
              </button>
            </div>
          </div>
        </div>

        {/* 4 Visa Categories */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Visa Categories
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              From quick holiday e-visas to complex long-stay business &amp; work documentation, our expert team manages the entire paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.type}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f05a28] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{cat.type}</h3>
                        <span className="text-[11px] font-semibold text-slate-400">Processing: {cat.timeline}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {cat.desc}
                    </p>
                    <div className="mb-6">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-2">
                        Popular Countries Handled:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.popularDestinations.map((dest, i) => (
                          <span
                            key={i}
                            className="bg-slate-50 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(`${cat.type} Inquiry`)}
                    className="w-full bg-slate-900 hover:bg-[#f05a28] text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Popular Country Pricing Cards */}
        <section className="py-16 bg-slate-50/70 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Popular Country E-Visas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCountries.map((c) => (
                <div
                  key={c.country}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{c.country}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{c.type}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Approx {c.time}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-slate-900">{c.fee}</div>
                    <button
                      onClick={() => openModal(`${c.country} Visa Inquiry`)}
                      className="mt-2 text-xs font-bold text-[#f05a28] hover:underline"
                    >
                      Apply Now &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Step Process */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Seamless Process
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              We eliminate visa anxiety with end-to-end guidance from document drafting to embassy stamp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative">
                <span className="text-3xl font-black text-orange-200/80 mb-2 block">{s.num}</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={selectedVisa}
      />
    </div>
  );
}
