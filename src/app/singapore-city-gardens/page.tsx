import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Singapore Universal Studios & Marina Bay Fantasy (4N/5D) - Travel Hawkers",
  description: "Universal Studios Sentosa, Gardens by the Bay double conservatories, Night Safari tram, and Marina Bay Sands.",
  alternates: {
    canonical: "https://travelhawkers.com/singapore-city-gardens",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("singapore-city-gardens");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
