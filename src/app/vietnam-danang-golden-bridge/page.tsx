import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Gems of Central Vietnam: Da Nang, Ba Na Hills & Hoi An (5N/6D) - Travel Hawkers",
  description: "Ba Na Hills cable car & Golden Hand Bridge, UNESCO Hoi An ancient lantern town, and Cam Thanh basket boat ride.",
  alternates: {
    canonical: "https://travelhawkers.com/vietnam-danang-golden-bridge",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("vietnam-danang-golden-bridge");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
