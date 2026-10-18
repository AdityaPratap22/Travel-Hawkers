import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Holiday Packages | Domestic & International Tours",
  description:
    "Browse the full catalog of handcrafted travel packages by Travel Hawkers. Customizable domestic holidays across India and premium international vacations.",
  alternates: {
    canonical: "https://travelhawkers.com/packages",
  },
  openGraph: {
    title: "All Holiday Packages | Travel Hawkers",
    description: "Explore all domestic, international, and weekend travel packages.",
    url: "https://travelhawkers.com/packages",
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
