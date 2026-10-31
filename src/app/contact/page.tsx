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
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
      detail: "+91 93554 86036",
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
      title: "New Delhi Head Office",
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
      q: "Can you customize itineraries for groups and family celebrations?",
      a: "Yes! We specialize in crafting tailor-made itineraries for family holidays, honeymoons, anniversaries, and corporate group tours with curated stays and dedicated ground support.",
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
                    <WhatsAppIcon variant="colored" className="w-12 h-12 mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">WhatsApp Chat Opened!</h4>
                    <p className="text-xs text-slate-600">
                      Your enquiry details have been pre-filled. If WhatsApp didn&apos;t launch automatically, chat directly with our holiday desk at <strong className="text-slate-800">+91 93554 86036</strong>.
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
                        <WhatsAppIcon variant="white" className="w-5 h-5" />
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
