import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Holiday Packages | Dubai, Bali, Thailand, Singapore, Vietnam",
  description:
    "Curated international vacation packages with visa assistance, luxury hotels, airport transfers, and guided excursions across Dubai, Bali, Thailand, Singapore, Malaysia, Vietnam, and Bhutan.",
  keywords: [
    "International tour packages",
    "Dubai tour package",
    "Bali holiday packages",
    "Thailand vacation package",
    "Singapore Malaysia tour",
    "Vietnam tour package",
    "Bhutan packages",
    "Travel Hawkers",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/international-packages",
  },
  openGraph: {
    title: "International Tour Packages | Travel Hawkers",
    description:
      "Explore the world with seamless visa support, 4-star and 5-star hotel stays, and custom international itineraries.",
    url: "https://travelhawkers.com/international-packages",
  },
};

export default function InternationalPackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
