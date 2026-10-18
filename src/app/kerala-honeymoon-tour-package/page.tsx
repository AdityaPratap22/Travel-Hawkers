import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Kerala Honeymoon Tour Package (3N/4D) - Travel Hawkers",
  description:
    "Romantic Kerala honeymoon vacation with Travel Hawkers. Includes romantic Munnar resort, private Alleppey backwater houseboat cruise, candlelight dinner, and private chauffeur.",
};

export default function KeralaHoneymoonPackagePage() {
  const data = getPackageBySlug("kerala-honeymoon-tour-package");

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
