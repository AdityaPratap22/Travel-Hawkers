import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "4 Days Amritsar Dharamshala Tour Package - Travel Hawkers",
  description:
    "Experience spiritual solace and Himalayan vistas with 4 Days Amritsar Dharamshala tour package. Golden Temple, Wagah Border, Dalai Lama Temple, McLeod Ganj, and HPCA Stadium.",
};

export default function AmritsarDharamshalaPage() {
  const data = getPackageBySlug("amritsar-dharmshala-tour-package");

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
