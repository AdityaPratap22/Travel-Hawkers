"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Mail } from "lucide-react";
import { submitEmailEnquiry } from "@/utils/enquiry";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await submitEmailEnquiry({
      packageTitle: currentDestination,
      destination: currentDestination,
      name,
      phone,
      email,
      travellers,
      message: notes,
    });

    setLoading(false);
    setSubmitted(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 md:p-8 relative shadow-2xl border border-slate-100 text-left">
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-[#B58238] border border-amber-200 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Enquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-slate-900">{name}</strong>! Your inquiry for <strong className="text-slate-900">{currentDestination || "your vacation"}</strong> has been sent to our travel desk.
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Our destination specialist will review your preferences and email a customized itinerary &amp; quotation to <strong className="text-slate-800">{email}</strong> within 2-4 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={handleModalClose}
                className="bg-[#0B2724] hover:bg-[#123834] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                Close &amp; Explore More
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B58238] block mb-1">
                CUSTOM VACATION QUOTE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
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
                  className="w-full bg-[#B58238] hover:bg-[#9E6F21] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{loading ? "Sending Enquiry..." : "Send Email Enquiry"}</span>
                  <ArrowRight className="w-4 h-4" />
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
                  <span>Quick Email Response</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
