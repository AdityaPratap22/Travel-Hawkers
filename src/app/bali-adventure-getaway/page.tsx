import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Bali Volcano, River Rafting & Water Sports Escape (4N/5D) - Travel Hawkers",
  description: "Ayung river white water rafting, Mount Batur 4x4 sunrise jeep safari, and Tanjung Benoa water sports combo.",
  alternates: {
    canonical: "https://travelhawkers.com/bali-adventure-getaway",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("bali-adventure-getaway");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
