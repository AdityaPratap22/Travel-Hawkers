import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Jaipur Tour Package (2N/3D) - Travel Hawkers",
  description:
    "Explore the Pink City of Jaipur. Visit Amber Fort, Jal Mahal, City Palace, Hawa Mahal, and experience Chokhi Dhani culture with Travel Hawkers.",
};

export default function JaipurTourPackagePage() {
  const data = getPackageBySlug("jaipur-tour-package");

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
