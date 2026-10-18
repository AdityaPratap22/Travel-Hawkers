import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajasthan Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["rajasthan"].description,
};

export default function RajasthanPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["rajasthan"]} />;
}
