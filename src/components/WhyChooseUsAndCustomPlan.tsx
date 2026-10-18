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
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Travel with<br />Travel Hawkers?
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100/70 border border-orange-200/50 flex items-center justify-center text-[#f05a28] shrink-0 group-hover:bg-[#f05a28] group-hover:text-white transition-all shadow-xs">
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
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center py-6">
            <div className="relative w-full max-w-[340px] h-[380px]">
              {/* Photo 1 (Tilted Left) */}
              <div className="absolute top-2 left-2 w-48 h-56 bg-white p-2.5 pb-7 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-10 border border-slate-100">
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
              <div className="absolute top-10 right-2 w-48 h-56 bg-white p-2.5 pb-7 rounded-xl shadow-xl transform rotate-8 hover:rotate-0 transition-transform duration-300 z-20 border border-slate-100">
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
              <div className="absolute bottom-2 left-6 w-52 h-60 bg-white p-2.5 pb-8 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-30 border border-slate-100">
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
                <div className="text-right text-[#f05a28] text-base -mt-1 font-bold">✈</div>
              </div>
            </div>
          </div>

          {/* Right Column: Plan a Custom Trip Form */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Plan a Custom Trip
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Tell us your travel preferences and our experts will create a personalized itinerary just for you.
              </p>

              {submitted ? (
                <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
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
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
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
