import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Mussoorie : The Queen of Hills Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Experience the vintage charm of Landour, Kempty Falls splash, Gun Hill cable car, and Camel's Back stroll in Mussoorie with Travel Hawkers.",
};

export default function MussoorieQueenOfHillsPage() {
  const getaway = getWeekendGetawayBySlug("mussoorie-the-queen-of-hills");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
