import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Chakrata Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Explore Chakrata - Tiger Falls, Chilmiri Neck, Budher Caves, and ancient deodar forests with Travel Hawkers weekend getaway package.",
};

export default function ChakrataPage() {
  const getaway = getWeekendGetawayBySlug("chakrata");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
