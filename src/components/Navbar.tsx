"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: (packageTitle?: string) => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navLinks = [
    {
      title: "Home",
      href: "/",
      isActive: pathname === "/",
      hasDropdown: false,
    },
    {
      title: "About Us",
      href: "/about-us",
      isActive: pathname.startsWith("/about"),
      hasDropdown: false,
    },
    {
      title: "Domestic Packages",
      href: "/domestic-packages",
      isActive: pathname.startsWith("/domestic-packages"),
      hasDropdown: true,
      items: [
        { name: "All Domestic Packages", href: "/domestic-packages" },
        { name: "Himachal Tour Packages", href: "/domestic-packages/himachal" },
        { name: "Kashmir Tour Packages", href: "/domestic-packages/kashmir" },
        { name: "Rajasthan Tour Packages", href: "/domestic-packages/rajasthan" },
        { name: "Kerala Tour Packages", href: "/domestic-packages/kerala" },
        { name: "Goa Tour Packages", href: "/domestic-packages/goa" },
        { name: "Ladakh Tour Packages", href: "/domestic-packages/ladakh" },
        { name: "Golden Triangle Tour", href: "/domestic-packages/golden-triangle" },
        { name: "Same Day Tour Packages", href: "/domestic-packages/same-day" },
      ],
    },
    {
      title: "International Packages",
      href: "/international-packages",
      isActive: pathname.startsWith("/international-packages"),
      hasDropdown: true,
      items: [
        { name: "All International Packages", href: "/international-packages" },
        { name: "Dubai & Abu Dhabi", href: "/dubai-abu-dhabi" },
        { name: "Singapore & Malaysia", href: "/singapore-malaysia" },
        { name: "Escape to Vietnam", href: "/vietnam" },
        { name: "Mystical Bhutan", href: "/mystical-bhutan" },
        { name: "Bali, Indonesia", href: "/indonesia" },
        { name: "Thailand Delight", href: "/thailand" },
      ],
    },
    {
      title: "Weekend getaways",
      href: "/weekend-getaways",
      isActive: pathname.startsWith("/weekend-getaways"),
      hasDropdown: true,
      items: [
        { name: "All Weekend Getaways", href: "/weekend-getaways" },
        { name: "Chakrata (Uttarakhand)", href: "/chakrata" },
        { name: "Kasauli (Himachal)", href: "/kasauli" },
        { name: "Rishikesh (Uttarakhand)", href: "/rishikesh" },
        { name: "Jaipur (Rajasthan)", href: "/jaipur-the-pink-city-of-india" },
        { name: "Shimla (Himachal)", href: "/shimla-the-queen-of-hills" },
        { name: "Mussoorie (Uttarakhand)", href: "/mussoorie-the-queen-of-hills" },
        { name: "Ranthambore Tiger Park", href: "/ranthambore-national-park" },
        { name: "Jim Corbett Wildlife", href: "/jim-corbett" },
        { name: "Nainital Lake District", href: "/nanital-the-lake-district-of-india" },
      ],
    },
    {
      title: "Chardham Yatra",
      href: "/chardham-yatra",
      isActive: pathname.startsWith("/chardham-yatra"),
      hasDropdown: false,
    },
    {
      title: "Visa Service",
      href: "/visa-service",
      isActive: pathname.startsWith("/visa-service"),
      hasDropdown: false,
    },
    {
      title: "Car Hire",
      href: "/car-hire",
      isActive: pathname.startsWith("/car-hire"),
      hasDropdown: false,
    },
    {
      title: "Articles",
      href: "/articles",
      isActive: pathname.startsWith("/articles"),
      hasDropdown: false,
    },
    {
      title: "Contact us",
      href: "/contact-us",
      isActive: pathname.startsWith("/contact"),
      hasDropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/25 shadow-xs transition-all">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-20 xl:h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1 shrink-0">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 xl:w-22 xl:h-22 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Travel Hawkers Logo"
                fill
                priority
                sizes="(max-width: 640px) 72px, (max-width: 1280px) 80px, 88px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-5.5">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[13px] xl:text-[14px] 2xl:text-[14.5px] font-semibold tracking-tight transition-all flex items-center gap-0.5 xl:gap-1 py-2 whitespace-nowrap relative group/nav ${
                    link.isActive
                      ? "text-[#f05a28]"
                      : "text-slate-700 hover:text-[#f05a28]"
                  }`}
                >
                  <span>{link.title}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#f05a28] rounded-full transition-all duration-300 ${
                      link.isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                    }`}
                  />
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                        activeDropdown === link.title ? "rotate-180 text-[#f05a28]" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.title && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50/80 hover:text-[#f05a28] transition-all transform hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Section (Search only) */}
          <div className="hidden lg:flex items-center shrink-0">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-full text-slate-600 hover:text-[#f05a28] hover:bg-white/50 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-12 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 p-3 z-50">
                  <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3.5 py-2.5 border border-slate-200">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Bali, Dubai, Chardham..."
                      className="w-full text-xs bg-transparent outline-none text-slate-800"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-white/50 px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="py-2">
            <div className="flex items-center gap-2 bg-white/80 rounded-lg px-3 py-2 border border-slate-200/80 mb-3">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search packages, destinations..."
                className="w-full text-xs bg-transparent outline-none text-slate-800"
              />
            </div>
            {navLinks.map((link) => (
              <div key={link.title} className="py-2 border-b border-slate-100/80">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-bold ${
                      link.isActive ? "text-[#f05a28]" : "text-slate-800 hover:text-[#f05a28]"
                    }`}
                  >
                    {link.title}
                  </Link>
                  {link.hasDropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.title ? null : link.title)
                      }
                      className="p-1 text-slate-400 hover:text-[#f05a28]"
                      aria-label={`Toggle ${link.title} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === link.title ? "rotate-180 text-[#f05a28]" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.hasDropdown && mobileExpanded === link.title && (
                  <div className="pl-3 mt-1.5 space-y-1 bg-slate-50/70 rounded-xl p-2">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-slate-600 hover:text-[#f05a28] py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
