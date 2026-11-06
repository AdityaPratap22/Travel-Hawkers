import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Maldives Overwater Luxury Villa Escape (3N/4D) - Travel Hawkers",
  description: "Overwater villa with direct lagoon access, all-inclusive gourmet dining, sunset dolphin cruise, and return speedboat transfers.",
  alternates: {
    canonical: "https://travelhawkers.com/maldives-luxury",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("maldives-luxury");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
