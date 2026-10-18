import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Leh Ladakh Tour Package (4N/5D) - Travel Hawkers",
  description:
    "Essential Leh Ladakh 5-day tour with Travel Hawkers. Includes Pangong Lake day excursion, Khardungla Top, Magnetic Hill, and Indus-Zanskar confluence.",
};

export default function LehLadakhTourPackagePage() {
  const data = getPackageBySlug("leh-ladakh-tour-package");

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
