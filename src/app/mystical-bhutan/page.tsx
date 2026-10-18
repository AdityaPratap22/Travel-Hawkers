import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Mystical Bhutan Tour Package (6N/7D) - Travel Hawkers",
  description:
    "Explore the Land of the Thunder Dragon. Paro, Thimphu, Punakha, and the iconic Tiger's Nest Monastery hike with Travel Hawkers Bhutan Tour Package.",
};

export default function MysticalBhutanPage() {
  const pkg = getInternationalPackageBySlug("mystical-bhutan");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
