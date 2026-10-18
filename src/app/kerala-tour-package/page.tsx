import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Kerala Tour Package (4N/5D) - Travel Hawkers",
  description:
    "Explore Kerala with Travel Hawkers. Includes Cochin city tour, Munnar tea hills, and an overnight private houseboat cruise in the Alleppey backwaters.",
};

export default function KeralaTourPackagePage() {
  const data = getPackageBySlug("kerala-tour-package");

  if (!data) {
    notFound();
  }

  return (
    <TourPackageDetailView
      pkg={data.pkg}
      destination={data.destination}
      relatedPackages={data.destination.packages}
    />
  );
}
