import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug } from "@/data/domesticPackagesData";
import TourPackageDetailView from "@/components/TourPackageDetailView";

export const metadata: Metadata = {
  title: "Rajasthan Fort and Places (6N/7D) - Travel Hawkers",
  description:
    "Explore the majestic forts and opulent palaces of Rajasthan. Tour Jaipur Amber Fort, Jodhpur Mehrangarh, Udaipur City Palace, Jaisalmer Golden Fort, Pushkar, and Bikaner with Travel Hawkers.",
};

export default function RajasthanFortAndPlacesPage() {
  const data = getPackageBySlug("rajasthan-fort-and-places");

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
