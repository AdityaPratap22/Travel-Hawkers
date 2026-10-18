import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Vietnam Tour Package (6N/7D) - Travel Hawkers",
  description:
    "Explore Hanoi, luxury overnight cruise on Halong Bay, Golden Bridge at Ba Na Hills, and ancient Hoi An with Travel Hawkers.",
};

export default function VietnamPage() {
  const pkg = getInternationalPackageBySlug("vietnam");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
