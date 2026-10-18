import { ShieldCheck, Sparkles, Headphones, Compass } from "lucide-react";

export default function TrustBar() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Best Price Guaranteed",
      subtitle: "Unbeatable deals",
    },
    {
      icon: Sparkles,
      title: "Handpicked Packages",
      subtitle: "Curated by travel experts",
    },
    {
      icon: Headphones,
      title: "24/7 Travel Support",
      subtitle: "Always here for you",
    },
    {
      icon: Compass,
      title: "Customised Itineraries",
      subtitle: "Trips designed for you",
    },
  ];

  return (
    <section className="bg-slate-50/80 border-y border-slate-200/60 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-[#f05a28] flex items-center justify-center text-[#f05a28] group-hover:text-white transition-all shadow-xs shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                    {benefit.title}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {benefit.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
