import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Triangle Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["golden-triangle"].description,
};

export default function GoldenTrianglePage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["golden-triangle"]} />;
}
