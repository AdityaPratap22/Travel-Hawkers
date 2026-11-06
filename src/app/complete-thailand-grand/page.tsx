import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Complete Thailand Grand Vacation: Bangkok, Pattaya & Phuket (7N/8D) - Travel Hawkers",
  description: "Coral Island Pattaya, Alcazar VIP, Bangkok temple tour, Chao Phraya river dinner cruise, and Phi Phi Island Phuket.",
  alternates: {
    canonical: "https://travelhawkers.com/complete-thailand-grand",
  },
};

export default function PackagePage() {
  const pkg = getInternationalPackageBySlug("complete-thailand-grand");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
