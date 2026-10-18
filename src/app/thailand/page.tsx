import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Thailand Tour Package (4N/5D) - Travel Hawkers",
  description:
    "Experience Bangkok and Pattaya with Travel Hawkers. Coral Island speedboat excursion, Alcazar Cabaret Show, Golden Buddha temples, and Chao Phraya dinner cruise.",
};

export default function ThailandPage() {
  const pkg = getInternationalPackageBySlug("thailand");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
