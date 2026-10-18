import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Goa Honeymoon Tour Package (4N/5D) - Travel Hawkers",
  description:
    "Romantic Goa honeymoon package with beachfront luxury resort, Mandovi River sunset cruise, candlelight dinner, private cab, and beach leisure with Travel Hawkers.",
};

export default function GoaHoneymoonPackagePage() {
  const data = getPackageBySlug("goa-honeymoon-tour-package");
  if (!data) notFound();
  return (
    <TourPackageDetailView
      pkg={data.pkg}
      destination={data.destination}
      relatedPackages={data.destination.packages}
    />
  );
}
