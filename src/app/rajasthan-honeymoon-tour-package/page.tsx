import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Rajasthan Honeymoon Tour Package (6N/7D) - Travel Hawkers",
  description:
    "Romantic 7-day honeymoon in Rajasthan. Experience royal palaces, Lake Pichola candlelight dinner, Mehrangarh Fort views, Ranakpur temples, and Pushkar lake with Travel Hawkers.",
};

export default function RajasthanHoneymoonPage() {
  const data = getPackageBySlug("rajasthan-honeymoon-tour-package");

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
