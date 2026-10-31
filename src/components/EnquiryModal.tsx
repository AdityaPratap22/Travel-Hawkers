"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { openWhatsAppInquiry } from "@/utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackage?: string;
  packageTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  prefilledPackage,
  packageTitle,
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [customDestination, setCustomDestination] = useState<string | null>(null);
  const [travellers, setTravellers] = useState("2 Adults (Couple)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentDestination =
    customDestination !== null
      ? customDestination
      : prefilledPackage || packageTitle || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    openWhatsAppInquiry({
      packageTitle: currentDestination,
      name,
      phone,
      email,
      travellers,
      message: notes,
    });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setCustomDestination(null);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto shadow-xs">
              <WhatsAppIcon variant="colored" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              WhatsApp Chat Opened!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Your inquiry details for <strong className="text-slate-900">{currentDestination || "your vacation"}</strong> have been prepared in WhatsApp. Our travel specialist will assist you immediately.
            </p>
            <div className="pt-2">
              <button
                onClick={handleModalClose}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all"
              >
                Close &amp; Explore More
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {prefilledPackage ? `Get a Quote: ${prefilledPackage}` : "Enquire for Your Dream Holiday"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us your plans &mdash; our destination experts craft packages with verified hotels &amp; private transfers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bali, Leh, Dubai"
                    value={currentDestination}
                    onChange={(e) => setCustomDestination(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Travellers
                  </label>
                  <select
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#B58238]"
                  >
                    <option value="1 Solo Traveller">1 Solo</option>
                    <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                    <option value="Family (3-4 People)">Family (3-4 People)</option>
                    <option value="Group (5+ People)">Group (5+ People)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Dates, budget or hotel preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-[#B58238] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                >
                  <WhatsAppIcon variant="white" className="w-4 h-4" />
                  <span>{loading ? "Opening WhatsApp..." : "Get Free Quote on WhatsApp"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-[10px] text-slate-400">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Privacy Protected</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B58238]" />
                  <span>Instant Call Back</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
