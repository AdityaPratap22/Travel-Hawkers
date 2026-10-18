import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Getaways from Delhi NCR | Rishikesh, Mussoorie, Nainital, Jim Corbett",
  description:
    "Quick 2-day and 3-day road trip escapes from Delhi NCR. Explore quiet hills in Chakrata and Kasauli, river rafting in Rishikesh, jungle safaris in Corbett, and royal forts in Jaipur.",
  keywords: [
    "Weekend getaways from Delhi",
    "Delhi NCR road trips",
    "Rishikesh river rafting",
    "Mussoorie weekend tour",
    "Jim Corbett safari",
    "Nainital lake tour",
    "Chakrata weekend trip",
    "Travel Hawkers",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/weekend-getaways",
  },
  openGraph: {
    title: "Weekend Getaways from Delhi NCR | Travel Hawkers",
    description:
      "Handpicked 2 to 3-day weekend road trips from Delhi NCR with private sanitized cabs and boutique resort stays.",
    url: "https://travelhawkers.com/weekend-getaways",
  },
};

export default function WeekendGetawaysLayout({ children }: { children: React.ReactNode }) {
  return children;
}
