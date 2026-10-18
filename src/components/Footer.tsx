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
    { name: "Domestic Packages", href: "/domestic-packages" },
    { name: "International Packages", href: "/international-packages" },
    { name: "Weekend Getaways", href: "/weekend-getaways" },
    { name: "Chardham Yatra", href: "/chardham-yatra" },
    { name: "Visa Service", href: "/visa-service" },
    { name: "Car Hire", href: "/car-hire" },
    { name: "Articles", href: "/articles" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const popularDestinations = [
    { name: "Himachal Packages", href: "/domestic-packages/himachal" },
    { name: "Rajasthan Heritage", href: "/domestic-packages/rajasthan" },
    { name: "Kerala Backwaters", href: "/domestic-packages/kerala" },
    { name: "Dubai & Abu Dhabi", href: "/dubai-abu-dhabi" },
    { name: "Bali, Indonesia", href: "/indonesia" },
    { name: "Singapore & Malaysia", href: "/singapore-malaysia" },
    { name: "Jim Corbett Safari", href: "/jim-corbett" },
  ];

  return (
    <footer id="contact" className="relative bg-[#0b252c] text-white pt-16 sm:pt-20 pb-8 overflow-hidden">
      {/* Decorative compass/dotted route lines */}
      <div className="absolute right-12 bottom-20 w-80 h-80 opacity-5 pointer-events-none border border-dashed border-white rounded-full" />
      <div className="absolute right-24 bottom-32 text-white/5 text-9xl pointer-events-none select-none">
        ✈
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="group inline-block">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-2xl p-2 shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Travel Hawkers Logo"
                  fill
                  sizes="128px"
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
              We create unforgettable travel experiences with handpicked packages, expert guidance and personalized service. Let&apos;s explore the world together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f05a28] flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f05a28] flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f05a28] flex items-center justify-center text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f05a28] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#f05a28] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Popular Destinations
            </h4>
            <ul className="space-y-2.5">
              {popularDestinations.map((dest) => (
                <li key={dest.name}>
                  <Link
                    href={dest.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#f05a28] transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#f05a28] shrink-0 mt-0.5" />
                <a href="tel:+919355486036" className="hover:text-white transition-colors">
                  +91 93554 86036 / +91 87002 96047
                </a>
              </div>
              <div className="flex items-start gap-3">
                <WhatsAppIcon variant="green" className="w-4 h-4 shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919355486036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp (+91 93554 86036)</span>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#f05a28] shrink-0 mt-0.5" />
                <a href="mailto:info@travelhawkers.com" className="hover:text-white transition-colors">
                  info@travelhawkers.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f05a28] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  504, 5th Floor, Vipul Business Park, Sector 48, Central Park II, Gurugram, Haryana 122018
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Travel Hawkers. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
