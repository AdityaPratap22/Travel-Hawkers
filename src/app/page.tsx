import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Travel Hawkers | Holiday Design Experts & Tour Packages India",
  description:
    "Explore handpicked holiday packages across Himachal, Kashmir, Rajasthan, Kerala, Goa, and international destinations like Dubai, Bali, and Thailand with Travel Hawkers. Verified hotels, private cabs & 24x7 support.",
  alternates: {
    canonical: "https://travelhawkers.com",
  },
  openGraph: {
    title: "Travel Hawkers | Premier Holiday Packages & Custom Travel Agency",
    description:
      "Book customized domestic and international holidays with Travel Hawkers. Transparent pricing, verified 4-star hotels, and personalized itineraries.",
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
    title: "Travel Hawkers | Premier Holiday Packages & Custom Travel Agency",
    description:
      "Book customized domestic and international holidays with Travel Hawkers.",
    images: ["/hero-bg-4k.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
