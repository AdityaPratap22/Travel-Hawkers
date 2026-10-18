import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himachal Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["himachal"].description,
};

export default function HimachalPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["himachal"]} />;
}
