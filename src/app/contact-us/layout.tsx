import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travel Hawkers - Get Free Holiday Quotes & Support",
  description:
    "Reach out to Travel Hawkers for customized tour planning, hotel reservations, and immediate holiday support. Call +91 93554 86036.",
  alternates: {
    canonical: "https://travelhawkers.com/contact-us",
  },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
