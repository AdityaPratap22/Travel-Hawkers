import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goa Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["goa"].description,
};

export default function GoaPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["goa"]} />;
}
