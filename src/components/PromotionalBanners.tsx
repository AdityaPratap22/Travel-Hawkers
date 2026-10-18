import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PromotionalBannersProps {
  onSelectCategory?: (category: "international" | "domestic") => void;
}

export default function PromotionalBanners({ onSelectCategory }: PromotionalBannersProps) {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* International Holidays Banner */}
          <div className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80"
              alt="International Holidays"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                International<br />Holidays
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200/90 max-w-md font-medium leading-relaxed">
                Explore iconic destinations across the globe with our curated international packages.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => onSelectCategory && onSelectCategory("international")}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md inline-flex items-center gap-2 group/btn transition-transform transform hover:translate-x-1"
                >
                  <span>Explore International</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Domestic Getaways Banner */}
          <div className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80"
              alt="Domestic Getaways"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Domestic<br />Getaways
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200/90 max-w-md font-medium leading-relaxed">
                Discover the incredible beauty of India with our handcrafted domestic trips.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => onSelectCategory && onSelectCategory("domestic")}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md inline-flex items-center gap-2 group/btn transition-transform transform hover:translate-x-1"
                >
                  <span>Explore Domestic</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
