import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kerala Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["kerala"].description,
};

export default function KeralaPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["kerala"]} />;
}
