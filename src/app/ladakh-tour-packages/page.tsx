import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ladakh Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["ladakh"].description,
};

export default function LadakhPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["ladakh"]} />;
}
