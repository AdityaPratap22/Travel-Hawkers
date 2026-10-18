import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Rishikesh Adventure Weekend (1N/2D) - Travel Hawkers",
  description:
    "Experience white water rafting, riverside camping, cliff jumping, and soul-stirring Ganga Aarti in Rishikesh with Travel Hawkers.",
};

export default function RishikeshPage() {
  const getaway = getWeekendGetawayBySlug("rishikesh");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
