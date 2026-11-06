import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Bhutan Cultural Odyssey & Tiger's Nest Hike (5N/6D) - Travel Hawkers",
  description: "Tiger's Nest cliffside hike, Buddha Dordenma 169ft statue, Dochula Pass 108 chortens, Punakha Dzong, and hot stone bath.",
  alternates: {
    canonical: "https://travelhawkers.com/bhutan-cultural-odyssey",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("bhutan-cultural-odyssey");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
