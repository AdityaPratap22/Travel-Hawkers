import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Jim Corbett National Park Safari (2N/3D) - Travel Hawkers",
  description:
    "Open jeep safari in core forest zones, riverbed walks along Kosi river, Garjiya Devi temple, and bonfire nights at Jim Corbett with Travel Hawkers.",
};

export default function JimCorbettPage() {
  const getaway = getWeekendGetawayBySlug("jim-corbett");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
