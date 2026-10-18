import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Same Day Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["same-day"].description,
};

export default function SameDayPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["same-day"]} />;
}
