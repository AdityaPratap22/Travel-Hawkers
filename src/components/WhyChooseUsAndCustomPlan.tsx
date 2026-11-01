"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Luggage,
  FileText,
  Headphones,
  MapPin,
  Calendar,
  CheckCircle2,
  Mail,
  ArrowRight,
} from "lucide-react";
import { submitEmailEnquiry } from "@/utils/enquiry";

export default function WhyChooseUsAndCustomPlan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await submitEmailEnquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      dates: formData.dates,
      message: formData.message,
    });

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", destination: "", dates: "", message: "" });
  };

  const features = [
    {
      icon: Users,
      title: "Expert Guidance",
      desc: "Personalised recommendations from destination specialists",
    },
    {
      icon: Luggage,
      title: "Wide Range of Packages",
      desc: "Carefully curated domestic & international itineraries",
    },
    {
      icon: FileText,
      title: "Customised Itineraries",
      desc: "Trips designed around your exact preferences & budget",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated support team with you at every step",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Why Travel With Travel Hawkers */}
          <div className="reveal-left lg:col-span-5 space-y-5 sm:space-y-6 text-left">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
                OUR PROMISE
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.12]">
                Why Travel with<br className="hidden sm:inline" /> Travel Hawkers?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md">
                We create extraordinary travel experiences with expert guidance, handpicked packages and personalised service.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 group p-1.5 sm:p-2 rounded-xl transition-all duration-300">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF5ED] border border-[#EADBCC] flex items-center justify-center text-[#B58238] shrink-0 group-hover:bg-[#B58238] group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Original Embedded Custom Plan Form */}
          <div className="reveal-right delay-150 lg:col-span-7">
            <div className="bg-white rounded-3xl p-5 sm:p-7 lg:p-10 shadow-xl border border-stone-200/80">
              <div className="text-left mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
                  TAILOR-MADE TRIPS
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                  Plan Your Custom Holiday
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  Tell us your dream destination and dates. Our team will tailor a personalised itinerary and quotation sent directly to your email.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center text-[#B58238] mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-serif">Custom Plan Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-medium">
                    Thank you! Our destination specialists are crafting your custom itinerary and will email you the full quote shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#B58238] hover:underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Where would you like to travel? *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Bali, Kashmir, Dubai"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                        />
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      When would you like to travel? *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Next month, 5 days"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all font-medium"
                      />
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Hotel preference, number of travelers, budget..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238] transition-all resize-none font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{loading ? "Submitting Custom Plan..." : "Request Custom Plan via Email"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
