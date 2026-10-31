"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Globe2,
  Users,
  Heart,
  Plane,
  Hotel,
  Bus,
  Compass,
  UserCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Wallet,
  Clock,
  Send,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/travelData";

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const services = [
    {
      title: "Luxury Hotel Bookings",
      desc: "Best deals and unparalleled hospitality at top hotels worldwide.",
      icon: Hotel,
      badge: "Global Stays",
    },
    {
      title: "Flight Bookings",
      desc: "Easy, hassle-free flight arrangements tailored to all budgets and travel preferences.",
      icon: Plane,
      badge: "Best Fares",
    },
    {
      title: "Family Holiday Packages",
      desc: "Fun-filled, wholesome, tailor-made vacations crafted for families of all sizes.",
      icon: Users,
      badge: "Family First",
    },
    {
      title: "Honeymoon Packages",
      desc: "Intimate and romantic getaways designed for unforgettable lifelong memories.",
      icon: Heart,
      badge: "Romance",
    },
    {
      title: "Group Tours",
      desc: "Perfectly organized tours for friends, families, community clubs, or corporate teams.",
      icon: Compass,
      badge: "Group Friendly",
    },
    {
      title: "Chardham & Pilgrimage Tours",
      desc: "Sacred and spiritually fulfilling yatras organized with priority darshan, comfortable stays, and verified transport.",
      icon: Sparkles,
      badge: "Spiritual",
    },
    {
      title: "Tailor-Made Indian Tours",
      desc: "Bespoke itineraries celebrating India’s timeless culture, heritage, and regional diversity.",
      icon: Sparkles,
      badge: "Incredible India",
    },
    {
      title: "International Tour Packages",
      desc: "Explore Thailand, Malaysia, Singapore, Sri Lanka, Dubai, Europe, and beyond.",
      icon: Globe2,
      badge: "Worldwide",
    },
    {
      title: "Government-Approved Tour Guides",
      desc: "Certified English and multi-language-speaking guides for an enriching, insightful journey.",
      icon: UserCheck,
      badge: "Certified Guides",
    },
  ];

  const pillars = [
    {
      icon: Compass,
      title: "Discover Stunning Destinations",
      desc: "Escape the ordinary and uncover extraordinary places! From golden sands of deserts to tranquil beaches and majestic mountains, we handpick unique destinations to take your breath away.",
    },
    {
      icon: Heart,
      title: "Unforgettable Experiences",
      desc: "Moments that stay in your heart forever—basking on serene beaches, trekking breathtaking trails, or exploring vibrant cityscapes. Every trip is designed with heart.",
    },
    {
      icon: Sparkles,
      title: "Turning Dreams Into Reality",
      desc: "Whether scaling towering peaks or relaxing in hidden paradises, we bridge the gap between your travel dreams and reality through thoughtful, expert planning.",
    },
    {
      icon: Wallet,
      title: "Get the Best Value",
      desc: "Budget-friendly packages with zero compromises on fun, comfort, or adventure. Flexible options, transparent pricing, and smart alternatives for every traveler.",
    },
    {
      icon: Clock,
      title: "Simple & Stress-Free Booking",
      desc: "Quick, hassle-free booking in just a few clicks. Transparent communication and seamless logistics from initial inquiry to ticket confirmation.",
    },
    {
      icon: Users,
      title: "Expert Support at Every Step",
      desc: "Experienced travel advisors assisting at every stage—from itinerary planning, excursion curation, and hotel selection to 24/7 on-the-go ground support.",
    },
  ];

  const offices = [
    {
      city: "New Delhi Head Office",
      type: "Corporate Headquarters",
      address: "E 68, Block FA, Tagore Garden, Tagore Garden Extension, New Delhi, Delhi 110027",
      phone: "+91 93554 86036",
      phoneLink: "tel:+919355486036",
      email: "info@travelhawkers.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-[#0b252c] text-white pt-24 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f05a28_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Welcome to <span className="text-[#f05a28]">Travel Hawkers</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Your trusted partner in delivering exceptional travel and tourism solutions, catering to individual travellers and corporate groups worldwide.
            </p>
          </div>
        </div>

        {/* Executive Introduction */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Crafting Personalized Experiences Tailored Exclusively for You
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Travel Hawkers is your trusted partner in delivering exceptional travel and tourism solutions, catering to individual travellers and corporate groups. Our strength lies in crafting personalized experiences tailored exclusively for you.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  With Travel Hawkers, you don’t just take a trip – you live the experience even before setting foot on your journey. We aim to delight you, ensuring your experience goes beyond mere satisfaction. Our team of experts handles every aspect of your trip, ensuring efficiency and excellence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-[#f05a28] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Unbeatable Prices &amp; Choice</div>
                      <div className="text-[11px] text-slate-500">Extensive customizable packages with zero hidden costs.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Award className="w-5 h-5 text-[#f05a28] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">End-to-End Planning</div>
                      <div className="text-[11px] text-slate-500">Inspiring your wanderlust and supporting every adventure.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                    alt="Travel Hawkers Team & Hospitality"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-orange-300">Live The Experience</div>
                    <div className="font-script text-2xl sm:text-3xl text-white">Unforgettable Journeys Await</div>
                    <p className="text-xs text-white/80">Every trip is carefully curated by our team of destination specialists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Incredible India Section - Atithi Devo Bhava */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-slate-50 border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-amber-200/80">
                  <Image
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
                    alt="Incredible India - Taj Mahal & Cultural Heritage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-lg font-bold">Atithi Devo Bhava</div>
                    <div className="text-xs text-amber-200">The Guest is Equivalent to God</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Incredible India With Travel Hawkers
                </h2>
                <div className="inline-block bg-orange-100/80 border-l-4 border-[#f05a28] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 rounded-r-lg">
                  &ldquo;Atithi Devo Bhava&rdquo; &mdash; A core value that emphasizes welcoming guests with warmth and hospitality.
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  India, known for its rich heritage, vibrant festivals, unique traditions, delectable cuisines, and stunning architecture, draws millions of tourists from around the globe every year. At Travel Hawkers, we bring you the best of India through a range of thoughtfully designed readymade and tailor-made tour packages.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Whether it’s exploring the golden sands of Rajasthan, the tranquil backwaters of Kerala, or the majestic Himalayan ranges, we ensure you embark on your dream vacation across India and its mesmerizing subcontinent.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Golden Sands of Rajasthan", "Tranquil Backwaters of Kerala", "Majestic Himalayas", "Spiritual Varanasi", "Goan Coastlines"].map((spot) => (
                    <span key={spot} className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 border border-slate-200 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f05a28]" />
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our 9 Exceptional Services */}
        <section id="services" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Exceptional Services
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                From luxury resort bookings to certified tour guides, we take care of every detail so you can focus on making memories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-[#f05a28] text-[#f05a28] group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#f05a28] bg-slate-50 group-hover:bg-orange-50 px-2.5 py-1 rounded-full transition-colors">
                          {svc.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors mb-2">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us - 6 Value Pillars */}
        <section id="why-us" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Travel Hawkers?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Leveraging our in-depth knowledge and experience to turn your holiday dreams into unforgettable realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all space-y-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#f05a28] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dual Corporate Offices & Direct Contact */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Registered Offices
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Drop by our offices or contact our dedicated teams across Delhi NCR.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#f05a28] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{office.type}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">Delhi NCR</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{office.city}</h3>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={office.phoneLink}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#f05a28] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#f05a28]" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#f05a28] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#f05a28]" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone Lines Banner */}
            <div className="mt-8 bg-gradient-to-r from-slate-900 to-[#0b252c] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Direct Customer Helpline Numbers</div>
                <div className="text-base sm:text-lg font-bold">Speak with our certified holiday planners today</div>
                <div className="text-xs text-slate-300">
                  Call: +91 9355486036, 9818707442, 9999327347, 9873462224
                </div>
              </div>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-orange-500/25 inline-flex items-center gap-2 shrink-0 transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Itinerary</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What Our Travellers Say
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Real feedback from travelers who explored the world with Travel Hawkers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      &ldquo;{t.comment}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-200">
                      <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-orange-500/25 inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Plan Your Custom Trip With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
