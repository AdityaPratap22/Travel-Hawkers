import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Travel Destinations in India & Abroad | Travel Hawkers",
  description:
    "Discover the best holiday destinations. Explore hill stations, golden beaches, desert landscapes, and world capitals with Travel Hawkers.",
  alternates: {
    canonical: "https://travelhawkers.com/destinations",
  },
  openGraph: {
    title: "Explore Popular Destinations | Travel Hawkers",
    description: "Discover holiday inspiration across India and worldwide.",
    url: "https://travelhawkers.com/destinations",
  },
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
