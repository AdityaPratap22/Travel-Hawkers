import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Nainital : The Lake District of India Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Enjoy boat rides on emerald Naini Lake, Snow View Point ropeway, Naina Devi temple, and Bhimtal lake tour with Travel Hawkers.",
};

export default function NainitalLakeDistrictPage() {
  const getaway = getWeekendGetawayBySlug("nanital-the-lake-district-of-india");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
