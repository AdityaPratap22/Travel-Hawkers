import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Articles & Expert Destination Guides | 450+ Verified Handbooks",
  description:
    "Explore 450+ in-depth travel guides (1,000–1,500 words each) covering complete day-by-day itineraries, regional cuisines, high-altitude logistics, packing tips, and secret spots.",
  keywords: [
    "Travel articles",
    "travel guides India",
    "itinerary planning",
    "Himalayan travel guides",
    "Rajasthan heritage guides",
    "solo travel tips",
    "Travel Hawkers articles",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/articles",
  },
  openGraph: {
    title: "Travel Articles & Expert Guides | Travel Hawkers",
    description:
      "Explore 450+ verified, comprehensive travel articles written by seasoned tour directors and destination architects.",
    url: "https://travelhawkers.com/articles",
  },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
