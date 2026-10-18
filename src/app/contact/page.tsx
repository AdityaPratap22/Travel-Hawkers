"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { openWhatsAppInquiry } from "@/utils/whatsapp";

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const contactCards = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      detail: "+91 93554 86036 / 87002 96047",
      subtext: "Mon-Sun: 24/7 Dedicated Support",
      href: "tel:+919355486036",
      cta: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Our Team",
      detail: "info@travelhawkers.com",
      subtext: "saless@travelhawkers.com",
      href: "mailto:info@travelhawkers.com",
      cta: "Send Email",
    },
    {
      icon: MapPin,
      title: "Gurugram Office",
      detail: "504, 5th Floor, Vipul Business Park",
      subtext: "Sector 48, Central Park II, Gurugram, Haryana 122018",
      href: "https://maps.google.com/?q=Vipul+Business+Park+Sector+48+Gurugram",
      cta: "Get Directions",
    },
    {
      icon: MapPin,
      title: "New Delhi Office",
      detail: "E 68, Block FA, Tagore Garden",
      subtext: "Tagore Garden Extension, New Delhi 110027",
      href: "https://maps.google.com/?q=Tagore+Garden+New+Delhi",
      cta: "Get Directions",
    },
  ];

  const faqs = [
    {
      q: "Can I customize the hotels, dates, or sightseeing in any package?",
      a: "Yes! Every single package on Travel Hawkers is 100% customizable. You can change your flight timings, choose between 4-star and 5-star hotels, add private transfers, or include special dinners and adventure activities.",
    },
    {
      q: "How does the booking and payment process work?",
      a: "To reserve your holiday, a small initial deposit (usually 20-25%) is required. The balance can be paid in convenient installments before your travel date. We accept all major credit/debit cards, UPI, and bank transfers.",
    },
    {
      q: "Do you help with visas and travel insurance?",
      a: "Yes, our visa assistance desk provides complete document verification, appointment scheduling, and guidance for international destinations including Dubai, Bali, Thailand, Europe, and more.",
    },
    {
      q: "What if I need assistance during my vacation?",
      a: "You will be assigned a dedicated personal travel manager who will be connected with you on WhatsApp and phone 24/7 throughout your trip to assist with anything you need.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      openWhatsAppInquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        destination: formData.destination,
        dates: formData.dates,
        message: formData.message,
      });
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", destination: "", dates: "", message: "" });
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact <span className="font-script text-[#f05a28] text-4xl sm:text-6xl">Travel Hawkers</span>
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Have questions about a holiday package or want a custom quote? Talk to our holiday design specialists today.
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <section className="py-12 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f05a28] flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
                      <p className="text-xs sm:text-sm font-extrabold text-[#f05a28] mt-1 break-words">{card.detail}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{card.subtext}</p>
                    </div>
                    <a
                      href={card.href}
                      className="text-xs font-bold text-slate-800 hover:text-[#f05a28] pt-3 border-t border-slate-100 flex items-center gap-1 transition-colors"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form + FAQ Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Plan Your Custom Vacation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your travel preferences and our experts will design a customized itinerary for you.
                </p>

                {submitted ? (
                  <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">WhatsApp Chat Opened!</h4>
                    <p className="text-xs text-slate-600">
                      Your enquiry details have been pre-filled. If WhatsApp didn't launch automatically, chat directly with our holiday desk at <strong className="text-slate-800">+91 93554 86036</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-[#25D366] hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Aditya Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="aditya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Dream Destination
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Bali, Leh Ladakh, Dubai..."
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Approximate Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Next month or Nov 2026"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Special Requests or Preferences
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about number of adults/kids, budget preference, or hotel choices..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      )}
                      <span>{loading ? "Opening WhatsApp..." : "Send Custom Trip Request on WhatsApp"}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* FAQ Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Everything you need to know about booking with Travel Hawkers.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#f05a28] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                            openFaq === i ? "rotate-180 text-[#f05a28]" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
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
      />
    </div>
  );
}
