import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Ladakh Tour via Nubra Valley (6N/7D) - Travel Hawkers",
  description:
    "Cross Khardung La Pass (18,380 ft), ride Bactrian camels in Hunder sand dunes, and camp beside Pangong Lake with Travel Hawkers Ladakh Tour via Nubra Valley.",
};

export default function LadakhTourViaNubraValleyPage() {
  const data = getPackageBySlug("ladakh-tour-via-nubra-valley");

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
