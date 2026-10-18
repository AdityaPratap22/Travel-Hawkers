import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Dharamshala Dalhousie Amritsar Tour Package (5N/6D) - Travel Hawkers",
  description:
    "Complete Northern circuit tour package covering Amritsar Golden Temple & Wagah border, Dharamshala Dalai Lama temple, Dalhousie colonial heritage, and Khajjiar Mini Switzerland.",
};

export default function DharamshalaDalhousieAmritsarPage() {
  const data = getPackageBySlug("dharamshala-dalhousie-amritsar-tour-package");

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
