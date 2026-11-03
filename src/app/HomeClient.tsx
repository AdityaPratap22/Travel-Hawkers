"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PopularDestinations from "@/components/PopularDestinations";
import TrendingPackages from "@/components/TrendingPackages";
import PromotionalBanners from "@/components/PromotionalBanners";
import CarHireSection from "@/components/CarHireSection";
import TravelExperiences from "@/components/TravelExperiences";
import WhyChooseUsAndCustomPlan from "@/components/WhyChooseUsAndCustomPlan";
import Testimonials from "@/components/Testimonials";
import TravelBlogs from "@/components/TravelBlogs";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import VideoModal from "@/components/VideoModal";

export default function HomeClient() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState<
    string | undefined
  >(undefined);

  const handleOpenEnquiry = (packageTitle?: string) => {
    setSelectedPackageForQuote(packageTitle);
    setEnquiryModalOpen(true);
  };

  const handleSearch = (params: {
    destination: string;
    budget: string;
    travellers: string;
  }) => {
    setSelectedPackageForQuote(`${params.destination} (${params.budget})`);
    const packagesEl = document.getElementById("packages");
    if (packagesEl) {
      packagesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] selection:bg-[#B58238] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content - Exact 9 Original Sections Preserved */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSearch={handleSearch}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* 2. Trust Bar (4 Values) */}
        <TrustBar />

        {/* 3. Popular Destinations */}
        <PopularDestinations
          onSelectDestination={(dest) => handleOpenEnquiry(dest)}
        />

        {/* 4. Trending Holiday Packages */}
        <TrendingPackages
          onGetQuote={(pkgTitle) => handleOpenEnquiry(pkgTitle)}
        />

        {/* 5. Promotional Banners (International / Domestic) */}
        <PromotionalBanners
          onSelectCategory={(category) =>
            handleOpenEnquiry(
              category === "international"
                ? "International Package"
                : "Domestic Getaway"
            )
          }
        />

        {/* 6. Car Hire & Outstation Cabs Fleet */}
        <CarHireSection
          onBookVehicle={(vehicle) => handleOpenEnquiry(`Car Hire Enquiry - ${vehicle}`)}
        />

        {/* 7. Travel Experiences */}
        <TravelExperiences
          onSelectExperience={(exp) => handleOpenEnquiry(exp)}
        />

        {/* 7. Why Travel with Us + Custom Plan Form */}
        <WhyChooseUsAndCustomPlan />

        {/* 8. What Our Travellers Say */}
        <Testimonials />

        {/* 9. Travel Blog & Guides */}
        <TravelBlogs />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        packageTitle={selectedPackageForQuote}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
