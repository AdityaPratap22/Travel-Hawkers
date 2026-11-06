import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Phuket & Krabi Exotic Island Hopper (5N/6D) - Travel Hawkers",
  description: "Phi Phi Islands, Maya Bay speedboat tour, Krabi 4 Islands hopping, Big Buddha, and Andaman ferry transfers.",
  alternates: {
    canonical: "https://travelhawkers.com/phuket-krabi-island-hopper",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("phuket-krabi-island-hopper");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
