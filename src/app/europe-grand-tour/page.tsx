import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Paris & Swiss Alps Dream Vacation (7N/8D) - Travel Hawkers",
  description: "Eiffel Tower top deck, Seine river cruise, high-speed TGV train, Mt. Titlis Rotair revolving cable car, and Lucerne.",
  alternates: {
    canonical: "https://travelhawkers.com/europe-grand-tour",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("europe-grand-tour");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
