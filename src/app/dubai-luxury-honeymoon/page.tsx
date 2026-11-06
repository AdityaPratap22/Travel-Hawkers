import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Luxury Dubai Honeymoon with Atlantis & Private Marina Yacht (5N/6D) - Travel Hawkers",
  description: "5-star beachfront resorts, 2-hour private luxury yacht cruise, VIP desert safari, and Atlantis Aquaventure.",
  alternates: {
    canonical: "https://travelhawkers.com/dubai-luxury-honeymoon",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("dubai-luxury-honeymoon");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
