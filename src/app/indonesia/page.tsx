import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Bali, Indonesia Tour Package (5N/6D) - Travel Hawkers",
  description:
    "Tropical Bali getaway with Travel Hawkers. Private pool villa in Ubud, Nusa Penida island speedboat tour, Tanah Lot, and Uluwatu Kecak fire dance.",
};

export default function IndonesiaPage() {
  const pkg = getInternationalPackageBySlug("indonesia");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
