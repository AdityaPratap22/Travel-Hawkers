import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Destinations", href: "/destinations" },
    { name: "Holiday Packages", href: "/packages" },
    { name: "Experiences", href: "/experiences" },
    { name: "Travel Blog", href: "/articles" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const popularDestinations = [
    { name: "Leh Ladakh", href: "/ladakh-tour-packages" },
    { name: "Bali", href: "/indonesia" },
    { name: "Dubai", href: "/dubai-abu-dhabi" },
    { name: "Goa", href: "/goa-tour-packages" },
    { name: "Jaipur", href: "/jaipur-tour-package" },
    { name: "Kerala", href: "/kerala-tour-packages" },
    { name: "Thailand", href: "/thailand" },
    { name: "Singapore", href: "/singapore-malaysia" },
  ];

  return (
    <footer id="contact" className="relative bg-[#081E1C] text-white pt-12 sm:pt-16 lg:pt-20 pb-8 overflow-hidden">
      {/* Decorative subtle mountain silhouette outline watermark */}
      <div className="absolute right-0 bottom-0 w-full h-80 opacity-5 pointer-events-none select-none">
        <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 400 L200 200 L350 300 L500 120 L700 320 L850 180 L1050 350 L1200 220 L1200 400 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-14 lg:pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left">
            <Link href="/" className="group inline-block">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl p-2 shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Travel Hawkers Logo"
                  fill
                  sizes="112px"
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-stone-300/85 leading-relaxed max-w-sm font-normal">
              We create unforgettable travel experiences with handpicked packages, expert guidance and personalised service. Let&apos;s explore the world together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B58238] flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B58238] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B58238] flex items-center justify-center text-white transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B58238] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 text-left">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-stone-300 hover:text-[#DEB887] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 text-left">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              Popular Destinations
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {popularDestinations.map((dest) => (
                <li key={dest.name}>
                  <Link
                    href={dest.href}
                    className="text-xs sm:text-sm text-stone-300 hover:text-[#DEB887] transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 text-left">
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <Phone className="w-4 h-4 text-[#C59B58] shrink-0 mt-0.5" />
                <a href="tel:+919355486036" className="hover:text-white transition-colors">
                  +91 93554 86036
                </a>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <WhatsAppIcon variant="green" className="w-4 h-4 shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919355486036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <Mail className="w-4 h-4 text-[#C59B58] shrink-0 mt-0.5" />
                <a href="mailto:info@travelhawkers.com" className="hover:text-white transition-colors">
                  info@travelhawkers.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="w-4 h-4 text-[#C59B58] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  E 68, Block FA, Tagore Garden, Tagore Garden Extension, New Delhi, India 110027
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-stone-400 gap-3 sm:gap-4 text-center sm:text-left">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://businessvolunteers.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white font-medium transition-colors underline-offset-4 hover:underline"
            >
              Business Volunteers
            </a>
            . All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/about-us" className="hover:text-stone-200 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/about-us" className="hover:text-stone-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-200 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
