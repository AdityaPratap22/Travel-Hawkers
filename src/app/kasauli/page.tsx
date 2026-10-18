import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWeekendGetawayBySlug } from "@/data/weekendGetawaysData";
import WeekendGetawayDetailView from "@/components/WeekendGetawayDetailView";

export const metadata: Metadata = {
  title: "Kasauli Weekend Trip (2N/3D) - Travel Hawkers",
  description:
    "Relax in peaceful Kasauli - Gilbert Nature Trail, Sunset Point, Christ Church, and pine forests with Travel Hawkers weekend getaway package.",
};

export default function KasauliPage() {
  const getaway = getWeekendGetawayBySlug("kasauli");
  if (!getaway) notFound();
  return <WeekendGetawayDetailView getaway={getaway} />;
}
