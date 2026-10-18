import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Beautiful Kerala with Blackwaters (12N/13D) - Travel Hawkers",
  description:
    "Grand 13-day South India expedition. Cochin, Alleppey houseboat, Periyar wildlife sanctuary, Madurai Meenakshi temple, Trichy Rock Fort, Pondicherry, Mahabalipuram, and Chennai with Travel Hawkers.",
};

export default function BeautifulKeralaWithBlackwatersPage() {
  const data = getPackageBySlug("beautiful-kerala-with-blackwaters");

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
