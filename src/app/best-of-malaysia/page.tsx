import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Best of Malaysia: Kuala Lumpur & Langkawi Island Retreat (5N/6D) - Travel Hawkers",
  description: "Petronas Twin Towers, Batu Caves, domestic flight to Langkawi, island hopping boat tour, and Langkawi SkyCab.",
  alternates: {
    canonical: "https://travelhawkers.com/best-of-malaysia",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("best-of-malaysia");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
