import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Shimla : The Queen of Hills Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Discover colonial charm, Mall Road, Kufri snow adventure, and Jakhoo ropeway in Shimla with Travel Hawkers weekend getaway package.",
};

export default function ShimlaQueenOfHillsPage() {
  const getaway = getWeekendGetawayBySlug("shimla-the-queen-of-hills");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
