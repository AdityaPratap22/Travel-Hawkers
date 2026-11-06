import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Dubai Highlights & Desert Safari Express (4N/5D) - Travel Hawkers",
  description: "Burj Khalifa 124th floor, 4x4 desert safari with BBQ dinner, Marina dhow cruise, and Dubai city tour.",
  alternates: {
    canonical: "https://travelhawkers.com/dubai-express",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("dubai-express");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
