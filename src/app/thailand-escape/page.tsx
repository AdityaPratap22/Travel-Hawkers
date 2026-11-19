import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Thailand Escape — 5N/6D (Phuket & Bangkok) | Travel Hawkers",
  description:
    "Thailand Escape (5 Nights / 6 Days) in Phuket & Bangkok. Stay in 4-star properties, Phi Phi Islands premium catamaran tour, Bangkok temples, Chao Phraya dinner cruise, and private airport transfers.",
  keywords: [
    "Thailand Escape",
    "Phuket and Bangkok Tour",
    "Thailand 5 Nights 6 Days",
    "Phi Phi Islands Catamaran",
    "Patong Resort Phuket",
    "Ramada Wyndham Bangkok Sukhumvit 11",
    "Chao Phraya Dinner Cruise",
    "Thailand holiday package",
    "Travel Hawkers",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/thailand-escape",
  },
  openGraph: {
    title: "Thailand Escape — 5N/6D (Phuket & Bangkok) | Travel Hawkers",
    description:
      "Peak season luxury Thai holiday with 4-star hotels in Phuket & Bangkok, Phi Phi catamaran tour, Bangkok temples, and Chao Phraya cruise.",
    url: "https://travelhawkers.com/thailand-escape",
    siteName: "Travel Hawkers",
    images: [
      {
        url: "/images/international/thailand_phuket.webp",
        width: 1200,
        height: 630,
        alt: "Thailand Escape Phuket and Bangkok",
      },
    ],
  },
};

export default function ThailandEscapePage() {
  const pkg = getInternationalPackageBySlug("thailand-escape");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
