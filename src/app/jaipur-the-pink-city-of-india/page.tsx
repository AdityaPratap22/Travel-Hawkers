import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Jaipur : The Pink City of India Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Explore royal palaces, Amber Fort, Nahargarh sunset, and vibrant bazaars of Jaipur with Travel Hawkers weekend getaway package.",
};

export default function JaipurPinkCityPage() {
  const getaway = getWeekendGetawayBySlug("jaipur-the-pink-city-of-india");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
