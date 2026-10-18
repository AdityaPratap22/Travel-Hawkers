import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unique Travel Experiences | Honeymoon, Trekking, Wildlife & Heritage",
  description:
    "From thrilling Himalayan treks and wildlife safaris in Jim Corbett to romantic luxury beach getaways and royal palace heritage walks.",
  alternates: {
    canonical: "https://travelhawkers.com/experiences",
  },
  openGraph: {
    title: "Curated Travel Experiences | Travel Hawkers",
    description: "Explore curated travel experiences designed for every wanderer.",
    url: "https://travelhawkers.com/experiences",
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
