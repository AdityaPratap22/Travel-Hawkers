import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug, DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Shimla Manali Tour Package (5N/6D) - Travel Hawkers",
  description:
    "Book Shimla Manali Tour Package with Travel Hawkers. Includes Rohtang Pass, Solang Valley, Hidimba Devi Temple, Kufri horse riding, private chauffeur cab, and verified hotel stays.",
};

export default function ShimlaManaliTourPage() {
  const data = getPackageBySlug("shimla-manali-tour-package");

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
