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
} from "lucide-react";
import { openWhatsAppInquiry } from "@/utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhyChooseUsAndCustomPlan() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      openWhatsAppInquiry({
        name: formData.name,
        phone: formData.phone,
        destination: formData.destination,
        dates: formData.dates,
        message: formData.message,
      });
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", destination: "", dates: "", message: "" });
    }, 400);
  };

  const features = [
    {
      icon: Users,
      title: "Expert Guidance",
      desc: "Personalised recommendations",
    },
    {
      icon: Luggage,
      title: "Wide Range of Packages",
      desc: "Domestic & International",
    },
    {
      icon: FileText,
      title: "Customised Itineraries",
      desc: "Trips designed for your interests",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We're with you at every step",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Why Travel With Travel Hawkers */}
          <div className="reveal-left lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Travel with<br />Travel Hawkers?
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-start gap-4 group p-2 rounded-xl hover:bg-white/80 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 border border-orange-200/50 flex items-center justify-center text-[#f05a28] shrink-0 group-hover:bg-[#f05a28] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Polaroid Photo Collage */}
          <div className="reveal-zoom delay-150 lg:col-span-4 relative flex flex-col items-center justify-center py-6">
            <div className="relative w-full max-w-[340px] h-[380px]">
              {/* Photo 1 (Tilted Left) */}
              <div className="absolute top-2 left-2 w-48 h-56 bg-white p-2.5 pb-7 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 border border-slate-100 hover:z-30 cursor-pointer">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=500&q=80"
                    alt="Travel memory 1"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Photo 2 (Tilted Right) */}
              <div className="absolute top-10 right-2 w-48 h-56 bg-white p-2.5 pb-7 rounded-xl shadow-xl transform rotate-8 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 border border-slate-100 hover:z-30 cursor-pointer">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
                    alt="Travel memory 2"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Photo 3 (Bottom Center) */}
              <div className="absolute bottom-2 left-6 w-52 h-60 bg-white p-2.5 pb-8 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-30 border border-slate-100 cursor-pointer">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80"
                    alt="Travel memory 3"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Handwritten Note at bottom */}
              <div className="absolute -bottom-6 right-0 z-40 text-right pr-2">
                <div className="font-script text-2xl sm:text-3xl text-slate-800 font-bold leading-tight rotate-3">
                  Collect Moments <br />
                  <span className="text-[#f05a28]">Not Things</span>
                </div>
                <div className="text-right text-[#f05a28] text-base -mt-1 font-bold animate-bounce">✈</div>
              </div>
            </div>
          </div>

          {/* Right Column: Plan a Custom Trip Form */}
          <div className="reveal-right delay-200 lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Plan a Custom Trip
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Tell us your travel preferences and our experts will create a personalized itinerary just for you.
              </p>

              {submitted ? (
                <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <WhatsAppIcon variant="colored" className="w-12 h-12 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">WhatsApp Chat Opened!</h4>
                  <p className="text-xs text-slate-600">
                    Your custom trip details have been pre-filled. If WhatsApp didn't open automatically, chat with our holiday experts at <strong className="text-slate-800">+91 93554 86036</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-[#25D366] hover:underline"
                  >
                    Plan another custom trip
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  {/* Your Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Destination
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Where do you want to go?"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Travel Dates
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Next month, 5 days"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
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
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <WhatsAppIcon variant="white" className="w-5 h-5" />
                    )}
                    <span>{loading ? "Opening WhatsApp..." : "Send Custom Plan on WhatsApp"}</span>
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
