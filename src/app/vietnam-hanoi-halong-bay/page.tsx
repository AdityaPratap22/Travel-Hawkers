import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Northern Vietnam Charms: Hanoi & Luxury Halong Cruise (4N/5D) - Travel Hawkers",
  description: "Overnight 5-star cruise on Halong Bay, kayaking & cave exploration, Hanoi Old Quarter street food walk, and water puppets.",
  alternates: {
    canonical: "https://travelhawkers.com/vietnam-hanoi-halong-bay",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("vietnam-hanoi-halong-bay");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
