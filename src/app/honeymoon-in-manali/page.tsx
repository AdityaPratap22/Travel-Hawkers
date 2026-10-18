import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Honeymoon in Manali (3N/4D) - Travel Hawkers",
  description:
    "Romantic Honeymoon in Manali with Travel Hawkers. Includes romantic resort stay, candlelight dinner, flower bed decoration, honeymoon cake, Solang snow point, and private cab from Delhi.",
};

export default function HoneymoonInManaliPage() {
  const data = getPackageBySlug("honeymoon-in-manali");

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
