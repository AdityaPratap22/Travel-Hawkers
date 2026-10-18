import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domestic Tour Packages India | Himachal, Kashmir, Rajasthan, Kerala, Goa",
  description:
    "Explore India with Travel Hawkers. Handpicked domestic tour packages for Himachal Pradesh, Kashmir valley, royal Rajasthan, serene Kerala backwaters, beach escapes in Goa, and Leh Ladakh road trips.",
  keywords: [
    "Domestic tour packages",
    "Himachal tour package",
    "Kashmir packages",
    "Rajasthan tour packages",
    "Kerala backwaters",
    "Goa holiday packages",
    "Golden Triangle Delhi Agra Jaipur",
    "Travel Hawkers",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/domestic-packages",
  },
  openGraph: {
    title: "Domestic Tour Packages India | Travel Hawkers",
    description:
      "Handcrafted domestic holiday packages across Himachal, Kashmir, Rajasthan, Kerala, Goa, and Ladakh with verified stays and private cabs.",
    url: "https://travelhawkers.com/domestic-packages",
  },
};

export default function DomesticPackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
