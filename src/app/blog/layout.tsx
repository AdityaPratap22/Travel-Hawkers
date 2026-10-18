import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Hawkers Blog | Tips, Seasonal Guides & Travel Stories",
  description:
    "Read inspiring travel stories, seasonal packing tips, visa guidelines, and destination advice from the Travel Hawkers team.",
  alternates: {
    canonical: "https://travelhawkers.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
