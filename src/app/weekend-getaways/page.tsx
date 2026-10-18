"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Star,
  Hotel,
  Car,
  Utensils,
  ChevronRight,
  Calendar,
} from "lucide-react";

interface WeekendGetaway {
  id: string;
  title: string;
  tagline: string;
  state: string;
  distance: string;
  driveTime: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  overview: string;
  daywise: { day: string; title: string; desc: string }[];
  highlights: string[];
}

export default function WeekendGetawaysPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedGetaway, setSelectedGetaway] = useState<string>("Chakrata Weekend Escape");
  const [activeTab, setActiveGetawayTab] = useState<string>("All");

  const getaways: WeekendGetaway[] = [
    {
      id: "chakrata",
      title: "Chakrata",
      tagline: "A Hidden Gem in the Himalayas",
      state: "Uttarakhand",
      distance: "325 km from Delhi",
      driveTime: "7-8 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹6,499",
      originalPrice: "₹8,500",
      rating: 4.92,
      reviews: 145,
      badge: "Offbeat Haven",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      overview:
        "Nestled at 2,118m altitude amidst dense deodar forests, Chakrata is a peaceful cantonment town away from crowded commercial hills. Famous for Tiger Falls, ancient Budher Caves, and golden sunsets at Chilmiri Neck.",
      highlights: [
        "Tiger Falls trek & refreshing dip in mountain spring",
        "Chilmiri Neck panoramic sunset & birdwatching",
        "Budher ancient limestone caves exploration",
        "Kanasar alpine meadow surrounded by ancient deodars",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Chakrata & Chilmiri Sunset", desc: "Early morning drive via Saharanpur/Dehradun. Evening sunset tea at Chilmiri Neck." },
        { day: "Day 2", title: "Tiger Falls & Budher Caves", desc: "Trek to Tiger Falls, one of Uttarakhand's highest natural waterfalls, followed by Budher caves." },
        { day: "Day 3", title: "Kanasar Meadow & Return to Delhi", desc: "Visit the sacred Asia's thickest deodar trees at Kanasar and drive back to Delhi NCR." },
      ],
    },
    {
      id: "kasauli",
      title: "Kasauli",
      tagline: "A Tranquil Hill Station",
      state: "Himachal Pradesh",
      distance: "290 km from Delhi",
      driveTime: "5-6 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹5,999",
      originalPrice: "₹7,500",
      rating: 4.88,
      reviews: 160,
      badge: "Quiet Retreat",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
      overview:
        "A peaceful colonial-era retreat characterized by pine-scented lanes, the quiet Gilbert Trail, Sunset Point, and the Gothic architecture of Christ Church. Perfect for couples and family resets.",
      highlights: [
        "Walk the serene Gilbert Nature Trail with singing birds",
        "Sunset Point & Lover's Lane evening stroll",
        "Heritage Christ Church built in 1853",
        "Monkey Point (Manki Point) offering Sutlej river views",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Kasauli & Mall Road Walk", desc: "Smooth drive via Himalayan Expressway. Leisurely evening stroll across Upper and Lower Mall." },
        { day: "Day 2", title: "Gilbert Nature Walk & Sunset Point", desc: "Morning nature trail, visit Christ Church, and witness spectacular dusk over the Shivalik hills." },
        { day: "Day 3", title: "Timber Trail Cable Car & Delhi Return", desc: "Optional cable car ride at Parwanoo before returning to Delhi by night." },
      ],
    },
    {
      id: "rishikesh",
      title: "Rishikesh",
      tagline: "The Yoga Capital of the World",
      state: "Uttarakhand",
      distance: "240 km from Delhi",
      driveTime: "4.5 hrs via Expressway",
      duration: "1 Night / 2 Days",
      price: "₹3,999",
      originalPrice: "₹5,200",
      rating: 4.95,
      reviews: 310,
      badge: "Adventure & Peace",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
      overview:
        "Where spirituality meets adrenaline on the holy banks of Mother Ganga. White-water river rafting over Grade III/IV rapids, riverside camping, cliff jumping, and the spellbinding Ganga Aarti at Triveni Ghat.",
      highlights: [
        "16km Shivpuri to Rishikesh river rafting with cliff jumping",
        "Soul-stirring Ganga Aarti at Parmarth Niketan or Triveni Ghat",
        "Riverside luxury camp stay with bonfire and DJ night",
        "Iconic Ram Jhula, Laxman Jhula & Beatles Ashram",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Camp, Rafting & Ganga Aarti", desc: "Arrive at campsite, gear up for exhilarating river rafting and attend evening Ganga Aarti." },
        { day: "Day 2", title: "Beatles Ashram & Return to Delhi", desc: "Morning riverside yoga, visit Beatles Ashram graffiti ruins, and drive back to Delhi." },
      ],
    },
    {
      id: "jaipur",
      title: "Jaipur",
      tagline: "The Pink City of India",
      state: "Rajasthan",
      distance: "270 km from Delhi",
      driveTime: "3.5 hrs via NE4 Expressway",
      duration: "2 Nights / 3 Days",
      price: "₹6,999",
      originalPrice: "₹8,999",
      rating: 4.9,
      reviews: 280,
      badge: "Royal Weekend",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
      overview:
        "Hop onto the Delhi-Mumbai Expressway and arrive in royal Rajasthan in under 4 hours. Explore Amber Fort, City Palace, Hawa Mahal, Nahargarh sunset views, and gorge on authentic Pyaaz Kachoris and Dal Baati.",
      highlights: [
        "Amber Fort jeep ride & Sheesh Mahal mirror work",
        "Nahargarh Fort sunset overlooking the illuminated Pink City",
        "Bapu Bazaar & Johari Bazaar authentic shopping",
        "Chokhi Dhani cultural village dinner experience",
      ],
      daywise: [
        { day: "Day 1", title: "Expressway Drive to Jaipur & City Palace", desc: "Check-in to heritage haveli, visit City Palace, Jantar Mantar and Hawa Mahal." },
        { day: "Day 2", title: "Amber Fort & Nahargarh Sunset", desc: "Morning explore Amber Fort and Jal Mahal, evening tea at Nahargarh Fort Padao cafe." },
        { day: "Day 3", title: "Bazaars & Return to Delhi", desc: "Morning shopping for blue pottery and block print textiles before easy highway drive back." },
      ],
    },
    {
      id: "shimla",
      title: "Shimla",
      tagline: "The Queen of Hills",
      state: "Himachal Pradesh",
      distance: "340 km from Delhi",
      driveTime: "6.5 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹6,999",
      originalPrice: "₹9,000",
      rating: 4.86,
      reviews: 210,
      badge: "Classic Favourite",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      overview:
        "The former summer capital of British India with its iconic Ridge, Mall Road, Christ Church, and snow-capped views from Jakhoo Hill. Enjoy horse riding and go-karting at Kufri.",
      highlights: [
        "Mall Road, Ridge & Lakkar Bazaar walking tour",
        "Jakhoo Temple giant Hanuman statue via cable car",
        "Kufri adventure park & nature park",
        "Viceregal Lodge (Indian Institute of Advanced Study)",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Shimla & Ridge Evening", desc: "Arrive in Shimla, stroll through Mall Road, cafes, and Christ Church." },
        { day: "Day 2", title: "Kufri Excursion & Jakhoo Ropeway", desc: "Excursion to Kufri for mountain fun followed by ropeway ride to Jakhoo Temple." },
        { day: "Day 3", title: "Viceregal Lodge & Return", desc: "Explore the British architectural marvel at Viceregal Lodge and return to Delhi." },
      ],
    },
    {
      id: "mussoorie",
      title: "Mussoorie",
      tagline: "The Queen of Hills",
      state: "Uttarakhand",
      distance: "290 km from Delhi",
      driveTime: "5.5 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹6,799",
      originalPrice: "₹8,800",
      rating: 4.87,
      reviews: 195,
      badge: "Romantic Charm",
      image:
        "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=900&q=80",
      overview:
        "Overlooking the Doon Valley, Mussoorie charms with misty mountain views, Kempty Falls, Gun Hill cable car, Camel's Back Road walks, and the quiet colonial allure of Landour Bakehouse.",
      highlights: [
        "Landour quiet day walk, Lal Tibba & Landour Bakehouse",
        "Kempty Falls natural mountain waterfall",
        "Gun Hill ropeway ride with 360-degree Himalayan views",
        "Mall Road shopping and bakery treats",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Mussoorie via Dehradun", desc: "Scenic uphill drive, evening stroll on Mall Road and Camel's Back Road." },
        { day: "Day 2", title: "Kempty Falls & Landour Lal Tibba", desc: "Morning splash at Kempty Falls, afternoon vintage tea and pastries in Landour." },
        { day: "Day 3", title: "Company Garden & Return", desc: "Visit Company Garden floral display and return comfortably to Delhi NCR." },
      ],
    },
    {
      id: "ranthambore",
      title: "Ranthambore National Park",
      tagline: "Royal Bengal Tiger Reserve",
      state: "Rajasthan",
      distance: "360 km from Delhi",
      driveTime: "5.5 hrs via NE4",
      duration: "2 Nights / 3 Days",
      price: "₹7,999",
      originalPrice: "₹10,500",
      rating: 4.94,
      reviews: 180,
      badge: "Big Cat Safari",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80",
      overview:
        "One of the best places in the world to spot the Royal Bengal Tiger in broad daylight. Open gypsy safaris inside dense dry deciduous forest ruins with the ancient Ranthambore Fort perched above.",
      highlights: [
        "2 Open-Top Gypsy / Canter core jungle safaris",
        "Historic 10th-century Ranthambore Fort and Trinetra Ganesha Temple",
        "Padam Talao lake tiger sightings & marsh crocodile spotting",
        "Resort stay with swimming pool and Rajasthani folk dances",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Sawai Madhopur & Resort Check-in", desc: "Drive via Expressway, relax at wildlife resort and enjoy evening cultural music." },
        { day: "Day 2", title: "Morning & Afternoon Safaris", desc: "Two thrilling safari shifts in core zones with expert forest naturalists." },
        { day: "Day 3", title: "Ranthambore Fort & Return to Delhi", desc: "Morning fort visit offering 360-degree park views and return to Delhi." },
      ],
    },
    {
      id: "jim-corbett",
      title: "Jim Corbett",
      tagline: "A Wilderness Adventure",
      state: "Uttarakhand",
      distance: "245 km from Delhi",
      driveTime: "5 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹6,499",
      originalPrice: "₹8,500",
      rating: 4.93,
      reviews: 260,
      badge: "Wildlife Adventure",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
      overview:
        "India’s oldest national park nestled in the foothills of Kumaon. Famous for wild Asian elephants, Bengal tigers, Ramganga river suspension bridges, and riverside luxury forest lodges.",
      highlights: [
        "Core Zone (Bijrani / Jhirna / Dhela) open jeep safari",
        "Garjiya Devi Temple on huge rock in Kosi River",
        "Corbett Falls & Heritage Jim Corbett Museum",
        "Riverside bonfire and nature walk with naturalists",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Ramnagar & Riverside Lodge", desc: "Check-in to jungle resort, enjoy Kosi river bank walks and evening bonfire." },
        { day: "Day 2", title: "Jeep Safari & Garjiya Temple", desc: "Early morning jeep safari into the jungle, afternoon visit to Garjiya Temple." },
        { day: "Day 3", title: "Corbett Museum & Return", desc: "Learn about the legendary conservationist and return to Delhi NCR." },
      ],
    },
    {
      id: "nainital",
      title: "Nainital",
      tagline: "The Lake District of India",
      state: "Uttarakhand",
      distance: "305 km from Delhi",
      driveTime: "6 hrs drive",
      duration: "2 Nights / 3 Days",
      price: "₹6,299",
      originalPrice: "₹8,200",
      rating: 4.89,
      reviews: 220,
      badge: "Lakes & Hills",
      image:
        "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=900&q=80",
      overview:
        "Centered around the emerald eye-shaped Naini Lake, this beloved hill town offers colorful yacht sailing, Naina Devi Temple, Snow View ropeway, Cave Garden, and the quiet beauty of Bhimtal and Naukuchiatal.",
      highlights: [
        "Boating on the shimmering waters of Naini Lake",
        "Sacred Naina Devi Temple on northern lake bank",
        "Snow View Point cable car overlooking Nanda Devi",
        "Bhimtal & Naukuchiatal day excursion with paragliding",
      ],
      daywise: [
        { day: "Day 1", title: "Delhi to Nainital & Evening Boating", desc: "Arrive in Nainital, check-in, sunset boating on Naini Lake and Mall Road shopping." },
        { day: "Day 2", title: "Lake Tour (Bhimtal, Sattal) & Snow View", desc: "Explore the surrounding lake circuit and take the ropeway to Snow View Point." },
        { day: "Day 3", title: "Eco Cave Garden & Return to Delhi", desc: "Explore interconnected animal caves and drive comfortably back to Delhi." },
      ],
    },
  ];

  const states = ["All", "Uttarakhand", "Himachal Pradesh", "Rajasthan"];

  const filteredGetaways = getaways.filter((g) => {
    if (activeTab === "All") return true;
    return g.state === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f05a28_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Weekend Getaways <br />
                <span className="text-[#f05a28]">& Road Trips from Delhi NCR</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Recharge your mind and spirit without taking extended leave.
                Handcrafted 2-Day and 3-Day escapes to serene Himalayan heights, royal heritage cities, and thrilling wildlife tiger reserves within a comfortable driving radius.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="tel:+919355486036"
                  className="bg-[#f05a28] hover:bg-[#dc4816] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 93554 86036</span>
                </a>
                <Link
                  href="/car-hire"
                  className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Car className="w-4 h-4 text-orange-400" />
                  <span>Book Outstation Cab</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* State Filter Bar */}
        <section className="sticky top-24 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setActiveGetawayTab(st)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                    activeTab === st
                      ? "bg-[#f05a28] text-white shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Getaways Grid */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGetaways.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal delay-${(idx % 6) * 75} bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover-card-elevate hover:border-orange-300 flex flex-col group hover-shine-container`}
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <div className="absolute top-3 left-3 bg-[#f05a28] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {item.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating}</span>
                    <span className="text-slate-400 font-normal">({item.reviews})</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-[#f05a28]" />
                        {item.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.duration}
                      </span>
                    </div>

                    <div>
                      <Link href={`/${item.id}`}>
                        <h2 className="text-xl font-black text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                          {item.title}
                        </h2>
                      </Link>
                      <div className="text-xs font-bold text-[#f05a28] mt-0.5">
                        {item.tagline}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.overview}
                    </p>

                    <div className="border-t border-slate-100 pt-3 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Itinerary Highlights:
                      </div>
                      {item.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f05a28] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-slate-400 line-through">{item.originalPrice}</div>
                      <div className="text-xl font-black text-slate-900">
                        {item.price} <span className="text-[10px] font-normal text-slate-500">/ person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/${item.id}`}
                        className="border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 text-xs font-bold px-3 py-2 rounded-xl transition-all"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedGetaway(item.title);
                          setEnquiryOpen(true);
                        }}
                        className="bg-[#f05a28] hover:bg-[#dc4816] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition-all flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={`Weekend Getaway Inquiry: ${selectedGetaway}`}
      />
    </div>
  );
}
