import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInternationalPackageBySlug } from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

export const metadata: Metadata = {
  title: "Dubai & Abu Dhabi Tour Package (6N/7D) - Travel Hawkers",
  description:
    "Burj Khalifa 124th floor, Ferrari World, Desert Safari with BBQ dinner, Marina Dhow Cruise, and Sheikh Zayed Grand Mosque with Travel Hawkers.",
};

export default function DubaiAbuDhabiPage() {
  const pkg = getInternationalPackageBySlug("dubai-abu-dhabi");
  if (!pkg) notFound();
  return <InternationalPackageDetailView pkg={pkg} />;
}
