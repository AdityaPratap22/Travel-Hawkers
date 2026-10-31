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
    <section className="bg-[#FAF8F5] border-b border-stone-200/60 pb-12 sm:pb-16 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const delays = ["delay-75", "delay-150", "delay-225", "delay-300"];
            return (
              <div
                key={idx}
                className={`reveal ${delays[idx] || ""} flex items-center gap-3.5 group p-2 rounded-xl transition-all duration-300 cursor-default`}
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF5ED] border border-[#EADBCC] flex items-center justify-center text-[#B58238] transition-all duration-300 shadow-xs shrink-0 group-hover:bg-[#B58238] group-hover:text-white">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
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
