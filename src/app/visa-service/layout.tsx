import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tourist Visa Assistance & Documentation Support | Travel Hawkers",
  description:
    "Hassle-free tourist visa assistance for Dubai, Singapore, Thailand, Malaysia, Vietnam, Schengen, and UK. Expert documentation review, slot booking, and fast approvals.",
  keywords: [
    "Tourist visa service",
    "Dubai visa India",
    "Schengen visa assistance",
    "Singapore visa",
    "Thailand visa",
    "Travel Hawkers visa service",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/visa-service",
  },
  openGraph: {
    title: "Tourist Visa Assistance | Travel Hawkers",
    description: "Expert tourist visa services and documentation support for Indian travelers.",
    url: "https://travelhawkers.com/visa-service",
  },
};

export default function VisaServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
