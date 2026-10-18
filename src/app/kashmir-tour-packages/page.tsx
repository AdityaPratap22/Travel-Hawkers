import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "../domestic-packages/[slug]/DomesticDestinationView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages - Travel Hawkers",
  description: DOMESTIC_DESTINATIONS["kashmir"].description,
};

export default function KashmirPage() {
  return <DomesticDestinationView destination={DOMESTIC_DESTINATIONS["kashmir"]} />;
}
