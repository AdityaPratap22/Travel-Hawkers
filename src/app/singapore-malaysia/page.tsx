import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Singapore & Malaysia Tour Package (6N/7D) - Travel Hawkers",
  description:
    "Twin country wonder: Kuala Lumpur, Genting Highlands, Universal Studios Sentosa, and Gardens by the Bay with Travel Hawkers.",
};

export default function SingaporeMalaysiaPage() {
  const pkg = getInternationalPackageBySlug("singapore-malaysia");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
