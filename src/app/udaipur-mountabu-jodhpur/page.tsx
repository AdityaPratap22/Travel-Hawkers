import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Udaipur Mount Abu Jodhpur Tour Package (5N/6D) - Travel Hawkers",
  description:
    "Discover Udaipur City of Lakes, Mount Abu hill station & Dilwara temples, and Jodhpur Mehrangarh blue city with Travel Hawkers. Private chauffeur cab and verified hotel stays.",
};

export default function UdaipurMountAbuJodhpurPage() {
  const data = getPackageBySlug("udaipur-mountabu-jodhpur");

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
