import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hire & Outstation Cabs Delhi NCR | Sanitized Chauffeur-Driven Cars",
  description:
    "Hire premium outstation cabs and local car rentals from Delhi NCR with experienced chauffeurs. Sedans, Ertiga, Innova Crysta, and luxury tempo travellers with all-inclusive pricing.",
  keywords: [
    "Car hire Delhi NCR",
    "Outstation cab booking",
    "Innova Crysta rental Delhi",
    "Tempo traveller rental",
    "Delhi to Agra cab",
    "Delhi to Shimla cab",
    "Travel Hawkers car hire",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/car-hire",
  },
  openGraph: {
    title: "Car Hire & Outstation Cabs | Travel Hawkers",
    description:
      "Reliable, verified chauffeur-driven car rentals in Delhi NCR for outstation tours and airport transfers.",
    url: "https://travelhawkers.com/car-hire",
  },
};

export default function CarHireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
