import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollObserver from "@/components/ScrollObserver";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://travelhawkers.com"),
  title: {
    default: "Travel Hawkers | Premier Holiday Packages & Custom Travel Agency India",
    template: "%s | Travel Hawkers",
  },
  description:
    "Book customized holiday packages with Travel Hawkers. We curate Himachal, Kashmir, Rajasthan, Kerala, Goa, Chardham Yatra, and international trips to Dubai, Bali, and Thailand with verified stays, chauffeur cabs, and 24x7 support.",
  keywords: [
    "Travel Hawkers",
    "travel agency India",
    "holiday packages India",
    "custom tour packages",
    "Himachal tour package",
    "Kashmir honeymoon package",
    "Rajasthan heritage tours",
    "Kerala backwaters package",
    "Goa beach vacation",
    "Chardham Yatra 2026",
    "Dubai tour package",
    "Bali holiday package",
    "Thailand vacation packages",
    "weekend getaways from Delhi",
    "luxury domestic tours",
    "international holiday packages",
  ],
  authors: [{ name: "Travel Hawkers", url: "https://travelhawkers.com" }],
  creator: "Travel Hawkers",
  publisher: "Travel Hawkers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://travelhawkers.com",
  },
  openGraph: {
    title: "Travel Hawkers | Premier Holiday Packages & Custom Travel Agency India",
    description:
      "Handcrafted holiday packages across India and top international destinations. Verified luxury hotels, dedicated private cabs, and 24x7 trip support.",
    url: "https://travelhawkers.com",
    siteName: "Travel Hawkers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-bg-4k.png",
        width: 1200,
        height: 630,
        alt: "Travel Hawkers Holiday Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Hawkers | Premier Holiday Packages & Custom Travel Agency India",
    description:
      "Handcrafted holiday packages across India and top international destinations. Verified luxury hotels, dedicated private cabs, and 24x7 trip support.",
    images: ["/hero-bg-4k.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Travel Hawkers",
  alternateName: "TravelHawkers Holiday Design Experts",
  url: "https://travelhawkers.com",
  logo: "https://travelhawkers.com/logo.png",
  image: "https://travelhawkers.com/hero-bg-4k.png",
  description:
    "Leading travel agency and holiday design experts in India providing customized domestic tour packages, international vacations, luxury stays, car hire, and flight & visa assistance.",
  telephone: "+919355486036",
  email: "info@travelhawkers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E 68, Block FA, Tagore Garden Extension",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110027",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.4190",
    longitude: "77.0396",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "₹₹ - ₹₹₹₹",
  sameAs: [
    "https://www.facebook.com/travelhawkers",
    "https://www.instagram.com/travelhawkers",
    "https://twitter.com/travelhawkers",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Travel Hawkers",
  url: "https://travelhawkers.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://travelhawkers.com/articles?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${caveat.variable} ${playfair.variable}`}
    >
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="antialiased min-h-screen bg-white text-slate-800 font-sans">
        {children}
        <WhatsAppFloatingButton />
        <ScrollObserver />
      </body>
    </html>
  );
}
