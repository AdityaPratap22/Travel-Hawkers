import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Romantic Bali Honeymoon with Private Pool Villa & Nusa Penida (6N/7D) - Travel Hawkers",
  description: "Ubud private pool villa, floating breakfast, Nusa Penida island speedboat tour, and Jimbaran candlelit seafood dinner.",
  alternates: {
    canonical: "https://travelhawkers.com/bali-romantic-honeymoon",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("bali-romantic-honeymoon");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
