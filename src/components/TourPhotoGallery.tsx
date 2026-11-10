"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";

interface TourPhotoGalleryProps {
  title: string;
  images: string[];
  badge?: string;
}

export default function TourPhotoGallery({
  title,
  images,
  badge = "Tour Photos",
}: TourPhotoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter out any duplicates or empty strings
  const validImages = Array.from(new Set(images.filter(Boolean)));

  // Ensure we have at least 5 images by reusing if needed
  const displayImages = validImages.length > 0 ? validImages : [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  ];

  const primaryImage = displayImages[0];
  const sideImages = displayImages.slice(1, 5);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
        {/* Desktop 5-image mosaic layout */}
        <div className="hidden sm:grid grid-cols-12 gap-2 p-2 h-[380px] md:h-[440px] lg:h-[480px]">
          {/* Main Large Image (Left 7 cols) */}
          <div
            onClick={() => openLightbox(0)}
            className="col-span-7 relative h-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={primaryImage}
              alt={`${title} main view`}
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 800px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {badge && (
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>{badge}</span>
              </div>
            )}

            <div className="absolute bottom-3.5 left-3.5 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 font-medium">
              <Eye className="w-3.5 h-3.5 text-orange-400" />
              <span>Click to preview photo</span>
            </div>
          </div>

          {/* Right 5 cols (2x2 grid) */}
          <div className="col-span-5 grid grid-cols-2 gap-2 h-full">
            {sideImages.map((img, idx) => {
              const actualIdx = idx + 1;
              const isLast = idx === 3 || actualIdx === displayImages.length - 1;
              const remainingCount = displayImages.length - 5;

              return (
                <div
                  key={idx}
                  onClick={() => openLightbox(actualIdx)}
                  className="relative h-full rounded-xl overflow-hidden cursor-pointer group bg-slate-800"
                >
                  <Image
                    src={img}
                    alt={`${title} photo ${actualIdx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 25vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                  {isLast && remainingCount > 0 ? (
                    <div className="absolute inset-0 bg-black/65 backdrop-blur-2xs flex flex-col items-center justify-center text-white text-center p-2 group-hover:bg-black/75 transition-colors">
                      <Camera className="w-5 h-5 text-orange-400 mb-1" />
                      <span className="text-xs font-bold">+{remainingCount} more</span>
                      <span className="text-[10px] text-slate-300">View All</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Single Hero with thumbnail counter */}
        <div className="sm:hidden relative h-64 w-full cursor-pointer group" onClick={() => openLightbox(0)}>
          <Image
            src={primaryImage}
            alt={`${title} main view`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openLightbox(0);
            }}
            className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-md"
          >
            <Camera className="w-3.5 h-3.5 text-orange-400" />
            <span>View all {displayImages.length} photos</span>
          </button>
        </div>

        {/* Floating View All Button on Desktop */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="hidden sm:flex absolute bottom-4 right-4 bg-white/95 hover:bg-white text-slate-900 text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 items-center gap-2 backdrop-blur-md transition-all hover:scale-105 cursor-pointer z-10"
        >
          <Camera className="w-4 h-4 text-[#f05a28]" />
          <span>Show all {displayImages.length} photos</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-orange-400">
                {title}
              </span>
              <span className="text-xs text-slate-400">
                • Photo {currentIndex + 1} of {displayImages.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close photo gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Photo Viewing Area */}
          <div className="relative flex-1 flex items-center justify-center my-3 sm:my-4 select-none">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-20 bg-black/60 hover:bg-black/90 text-white p-2.5 sm:p-3 rounded-full border border-white/20 transition-all hover:scale-110 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Current Image */}
            <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
              <Image
                src={displayImages[currentIndex]}
                alt={`${title} - Photo ${currentIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-2.5 sm:p-3 rounded-full border border-white/20 transition-all hover:scale-110 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Thumbnail Strip at Bottom */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 shrink-0 scrollbar-none">
            {displayImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "border-orange-500 scale-105 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
