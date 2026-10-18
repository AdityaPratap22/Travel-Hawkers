import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Ranthambore National Park Weekend Safari (2N/3D) - Travel Hawkers",
  description:
    "Spot Royal Bengal tigers, visit ancient Ranthambore Fort, and relax at a luxury jungle resort with Travel Hawkers wildlife safari package.",
};

export default function RanthamboreSafariPage() {
  const getaway = getWeekendGetawayBySlug("ranthambore-national-park");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
