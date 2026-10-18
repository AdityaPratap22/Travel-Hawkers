export interface InternationalPackageData {
  id: string;
  slug: string;
  title: string;
  country: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  overview: string;
  fullOverview?: string[];
  route?: string;
  highlights: string[];
  inclusions: string[];
  exclusions?: string[];
  daywise?: { day: string; title: string; desc: string }[];
  visaInfo: string;
}

export const INTERNATIONAL_PACKAGES: Record<string, InternationalPackageData> = {
  "dubai-abu-dhabi": {
    id: "dubai-abu-dhabi",
    slug: "dubai-abu-dhabi",
    title: "Dubai & Abu Dhabi Tour Package",
    country: "United Arab Emirates",
    duration: "6 Nights / 7 Days",
    price: "₹48,999",
    originalPrice: "₹59,000",
    rating: 4.96,
    reviews: 284,
    badge: "Most Popular",
    route: "Dubai – Desert Safari – Abu Dhabi – Ferrari World – Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    overview:
      "Journey Through the World’s Most Futuristic Destinations! Travel Hawker’s Dubai Abu Dhabi Tour Package invites you to experience the finest blend of modern marvels, desert adventures, and rich Arabian culture. From the towering heights of the Burj Khalifa to the thrilling rides of Ferrari World and the architectural magnificence of the Sheikh Zayed Grand Mosque, this journey promises memories of a lifetime.",
    highlights: [
      "Burj Khalifa 124th floor observation deck & Dubai Mall fountain show",
      "Ferrari World Abu Dhabi with Formula Rossa (fastest coaster)",
      "Desert Safari with 4x4 dune bashing, camel rides & BBQ dinner",
      "Marina Dhow Cruise with dinner & Sheikh Zayed Grand Mosque",
      "Dubai Frame & Miracle Garden floral displays",
    ],
    inclusions: [
      "4 Nights in Dubai + 2 Nights in Abu Dhabi in 4-Star Hotels",
      "Daily international buffet breakfast at hotels",
      "Desert Safari with dune bashing, camel rides & BBQ buffet dinner",
      "Marina Dhow Cruise with international buffet dinner",
      "Burj Khalifa 124th floor standard entry ticket",
      "Full day Abu Dhabi city tour with Sheikh Zayed Grand Mosque",
      "Ferrari World bronze general admission ticket",
      "Airport pickup and drop-off in private AC vehicle",
      "All UAE local tourism taxes & VAT",
    ],
    exclusions: [
      "International flight tickets (available upon request)",
      "UAE Tourist Visa fee (assistance provided)",
      "Tourism Dirham fee payable directly at hotels (AED 15-20/night)",
      "Personal expenses, laundry, and guide tips",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Dubai & Marina Dhow Cruise", desc: "Arrive at Dubai International Airport. Meet representative and transfer to hotel. In the evening, board a luxury Marina Dhow Cruise with dinner." },
      { day: "Day 2", title: "Dubai City Tour & Burj Khalifa", desc: "Half-day city tour covering Dubai Creek, Jumeirah Mosque, and Burj Al Arab photo stop. Evening visit to Dubai Mall and Burj Khalifa 124th floor." },
      { day: "Day 3", title: "Desert Safari with BBQ Dinner", desc: "Morning at leisure. Afternoon 4x4 Land Cruiser desert safari across golden dunes, camel ride, belly dance, Tanoura show, and BBQ dinner under the stars." },
      { day: "Day 4", title: "Dubai to Abu Dhabi & Sheikh Zayed Grand Mosque", desc: "Drive to Abu Dhabi (approx. 1.5 hrs). Visit the stunning Sheikh Zayed Grand Mosque and drive along Corniche. Check in to Abu Dhabi hotel." },
      { day: "Day 5", title: "Ferrari World Yas Island", desc: "Full day of adrenaline at Ferrari World Yas Island. Experience Formula Rossa (fastest coaster in the world) and Flying Aces." },
      { day: "Day 6", title: "Abu Dhabi to Dubai & Shopping", desc: "Drive back to Dubai. Free evening for luxury and traditional shopping at Gold Souk and Spice Souk." },
      { day: "Day 7", title: "Dubai Departure", desc: "Morning breakfast, checkout, and private airport drop for flight back to India." },
    ],
    visaInfo: "Express 30-Day UAE Tourist Visa Processed in 48-72h",
  },

  "singapore-malaysia": {
    id: "singapore-malaysia",
    slug: "singapore-malaysia",
    title: "Singapore & Malaysia Tour Package",
    country: "Singapore & Malaysia",
    duration: "6 Nights / 7 Days",
    price: "₹54,499",
    originalPrice: "₹66,000",
    rating: 4.93,
    reviews: 215,
    badge: "Family Favorite",
    route: "Kuala Lumpur – Genting Highlands – Malacca – Singapore – Sentosa",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
    overview:
      "Singapore and Malaysia offer a captivating journey through modern marvels, cultural heritage, and tropical landscapes. Marvel at Universal Studios Sentosa, Gardens by the Bay futuristic Supertrees, Genting Highlands cable car, and Petronas Twin Towers in Kuala Lumpur.",
    highlights: [
      "Full-day Universal Studios Singapore access with unlimited rides",
      "Gardens by the Bay Cloud Forest & Flower Dome",
      "Genting Highlands two-way cable car & Batu Caves golden Murugan statue",
      "Kuala Lumpur city tour & Petronas Twin Towers photo stop",
      "Sentosa Island cable car & Wings of Time laser show",
    ],
    inclusions: [
      "3 Nights 4-Star stay in Kuala Lumpur + 3 Nights 4-Star in Singapore",
      "Daily buffet breakfast at hotels",
      "Universal Studios Singapore 1-Day Pass",
      "Gardens by the Bay (Flower Dome + Cloud Forest)",
      "Genting Highlands day trip with return Awana SkyWay cable car",
      "Batu Caves stopover & KL guided city tour",
      "Inter-city AC luxury coach transfer from KL to Singapore",
      "Airport transfers in KL and Singapore",
    ],
    exclusions: [
      "International flights",
      "Singapore Visa fee & Malaysia arrival card",
      "Personal expenses, telephone, and tipping",
      "Tourism tax in Malaysia (RM 10 per room per night)",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Kuala Lumpur", desc: "Arrive at KLIA, meet chauffeur and transfer to hotel. Rest of day free to explore Bukit Bintang." },
      { day: "Day 2", title: "Batu Caves & Genting Highlands", desc: "Visit Batu Caves 140ft golden statue, ride the Awana SkyWay cable car to Genting resort world." },
      { day: "Day 3", title: "KL City Tour & Petronas Towers", desc: "Guided city tour: King's Palace, National Monument, Merdeka Square, and Petronas Twin Towers." },
      { day: "Day 4", title: "Kuala Lumpur to Singapore by AC Coach", desc: "Scenic coach journey through Johor Bahru into Singapore. Check in and evening at Clarke Quay." },
      { day: "Day 5", title: "Universal Studios Singapore (Sentosa)", desc: "Full day of thrilling rides and movie magic at Universal Studios on Sentosa Island." },
      { day: "Day 6", title: "Gardens by the Bay & Marina Bay Sands", desc: "Explore futuristic Supertrees, Cloud Forest waterfall, Flower Dome, and Marina Bay skyline." },
      { day: "Day 7", title: "Singapore Departure", desc: "Explore Jewel Changi Airport's indoor waterfall before boarding return flight." },
    ],
    visaInfo: "Singapore e-Visa & Malaysia Digital Arrival Card (MDAC)",
  },

  vietnam: {
    id: "vietnam",
    slug: "vietnam",
    title: "Vietnam Tour Package",
    country: "Vietnam",
    duration: "6 Nights / 7 Days",
    price: "₹42,999",
    originalPrice: "₹52,000",
    rating: 4.94,
    reviews: 178,
    badge: "Trending Destination",
    route: "Hanoi – Halong Bay – Da Nang – Ba Na Hills – Hoi An",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    overview:
      "Vietnam is a country that offers an extraordinary array of experiences for travelers. From the emerald waters of Halong Bay and vibrant historic streets of Hanoi to the mountain grandeur of Ba Na Hills' Golden Hand Bridge and the lantern-lit romance of Hoi An ancient town.",
    highlights: [
      "Overnight Halong Bay Luxury Cruise with kayaking & cave exploration",
      "Ba Na Hills Golden Hand Bridge suspended in misty clouds",
      "Hanoi Old Quarter walking street food tour & water puppets",
      "Hoi An ancient lantern town bicycle tour & basket boat ride",
      "Domestic flight Hanoi to Da Nang included",
    ],
    inclusions: [
      "2 Nights Hanoi, 1 Night Halong Luxury Cruise, 3 Nights Da Nang / Hoi An",
      "Daily breakfast at hotels + All meals (Lunch, Dinner, Breakfast) on Cruise",
      "Overnight Halong Bay 4-Star Cruise with kayaking & cave tours",
      "Ba Na Hills cable car & Golden Bridge entrance ticket",
      "Domestic flight from Hanoi to Da Nang",
      "All airport and sightseeing transfers in private AC vehicle",
      "English-speaking licensed local tour guide",
    ],
    exclusions: [
      "International flights to/from Vietnam",
      "Vietnam e-Visa stamping fee ($25)",
      "Drinks, personal expenses, and tips ($3-$5/day for guide/driver)",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Hanoi", desc: "Welcome to Hanoi! Transfer to hotel. Evening water puppet theater show and Old Quarter street food walk." },
      { day: "Day 2", title: "Hanoi to Halong Bay Luxury Cruise", desc: "Drive to Tuan Chau marina, board luxury cruise, sail through thousands of limestone islets, kayaking and cave visits." },
      { day: "Day 3", title: "Halong Bay to Hanoi & Fly to Da Nang", desc: "Morning Tai Chi on sundeck, disembark and transfer to Hanoi airport for flight to Da Nang." },
      { day: "Day 4", title: "Ba Na Hills & Golden Bridge", desc: "Ride world-record cable car to Ba Na Hills. Walk across the world-famous Golden Bridge held by giant stone hands." },
      { day: "Day 5", title: "Hoi An Ancient Town & Coconut Forest", desc: "Cam Thanh coconut forest basket boat ride followed by walking tour of UNESCO Hoi An lantern town." },
      { day: "Day 6", title: "Da Nang Beach & Marble Mountains", desc: "Relax on My Khe Beach and visit the sacred Marble Mountains and Linh Ung Pagoda." },
      { day: "Day 7", title: "Da Nang Departure", desc: "Transfer to Da Nang International Airport for your onward flight." },
    ],
    visaInfo: "Vietnam e-Visa Assistance within 3 Working Days",
  },

  "mystical-bhutan": {
    id: "mystical-bhutan",
    slug: "mystical-bhutan",
    title: "Mystical Bhutan Tour Package",
    country: "Bhutan",
    duration: "6 Nights / 7 Days",
    price: "₹38,500",
    originalPrice: "₹46,000",
    rating: 4.98,
    reviews: 132,
    badge: "Himalayan Serenity",
    route: "Paro – Thimphu – Punakha – Paro (Tiger's Nest)",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    overview:
      "Bhutan is a fascinating country ideally situated in the majestic Himalayas. Its pure natural beauty, ancient Buddhist dzongs, cliff-hanging monasteries, and philosophy of Gross National Happiness make it one of the most peaceful places on earth.",
    highlights: [
      "Taktsang Monastery (Tiger's Nest) iconic cliffside trek in Paro",
      "Punakha Dzong at the sacred confluence of Pho Chhu and Mo Chhu",
      "Thimphu Buddha Dordenma 169ft giant golden statue",
      "Dochula Pass (3,100m) with 108 memorial chortens and Himalayan vistas",
      "Traditional Bhutanese archer cultural demonstration",
    ],
    inclusions: [
      "6 Nights accommodation in certified 3-Star heritage Bhutanese hotels",
      "All meals included daily (Breakfast, Lunch & Dinner - AP Plan)",
      "Private dedicated SUV with licensed Bhutanese chauffeur",
      "English-speaking certified Bhutanese tour guide",
      "All internal permits and route entry charges",
      "Complimentary traditional Bhutanese hot stone bath experience",
    ],
    exclusions: [
      "Flight tickets to/from Paro",
      "Sustainable Development Fee (SDF) of ₹1,200/day for Indians (applicable at permit time)",
      "Travel insurance and personal expenses",
      "Guide & driver tipping",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Paro & Drive to Thimphu", desc: "Spectacular mountain flight into Paro. Drive to capital city Thimphu (1.5 hrs). Visit Tashichho Dzong." },
      { day: "Day 2", title: "Thimphu Cultural Sightseeing", desc: "Visit Buddha Dordenma, National Memorial Chorten, Motithang Takin Preserve, and Folk Heritage Museum." },
      { day: "Day 3", title: "Thimphu to Punakha via Dochula Pass", desc: "Cross Dochula Pass (3,100m) with 108 stupas. Tour the breathtaking 17th-century Punakha Dzong." },
      { day: "Day 4", title: "Punakha to Paro", desc: "Visit Chimi Lhakhang fertility temple and scenic drive back to Paro valley. Visit Rinpung Dzong." },
      { day: "Day 5", title: "Tiger's Nest (Taktsang Monastery) Hike", desc: "Hike up to the world-famous Tiger's Nest monastery perched on a sheer cliff 900m above Paro valley floor." },
      { day: "Day 6", title: "Chele La Pass Excursion", desc: "Drive to Chele La Pass (3,988m), the highest motorable road in Bhutan, with views of Mt. Jomolhari." },
      { day: "Day 7", title: "Paro Departure", desc: "Transfer to Paro International Airport for departure." },
    ],
    visaInfo: "No Visa Needed for Indians (Entry Permit via Voter ID / Passport)",
  },

  indonesia: {
    id: "indonesia",
    slug: "indonesia",
    title: "Bali, Indonesia Tour Package",
    country: "Indonesia",
    duration: "5 Nights / 6 Days",
    price: "₹34,999",
    originalPrice: "₹43,500",
    rating: 4.91,
    reviews: 260,
    badge: "Tropical Paradise",
    route: "Kuta – Ubud – Nusa Penida – Tanah Lot – Uluwatu",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    overview:
      "Indonesia’s Bali is a paradise filled with incredible destinations, each offering unique experiences. From the lush terraced rice fields of Ubud and sacred sea temples of Tanah Lot to the breathtaking coastal cliffs of Nusa Penida and vibrant sunset beach clubs of Seminyak.",
    highlights: [
      "Private pool villa upgrade in Ubud with floating breakfast",
      "Nusa Penida West Island tour: Kelingking Beach & Broken Beach",
      "Tanah Lot & Uluwatu Cliff Temple with Kecak fire dance",
      "Tegallalang rice terrace jungle swings & coffee plantation tasting",
      "Mount Batur volcano viewpoint & Kintamani tour",
    ],
    inclusions: [
      "3 Nights 4-Star Beach Resort + 2 Nights Ubud Private Pool Villa",
      "Daily breakfast + 1 Special floating breakfast in Ubud villa",
      "Full-day Nusa Penida island excursion with return fast boat tickets",
      "Tanah Lot sunset tour & Uluwatu Kecak dance tickets",
      "All transfers in private air-conditioned vehicle with English-speaking driver",
      "Tegallalang rice terrace & jungle swing tickets",
    ],
    exclusions: [
      "International airfare",
      "Indonesia Visa on Arrival (approx. $35 / IDR 500,000) & Bali Tourism Tax",
      "Water sports activities (available on direct payment)",
      "Personal expenses and tips",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Bali", desc: "Welcome to the Island of the Gods! Private airport transfer to your beach resort in Kuta/Seminyak. Relax by the beach." },
      { day: "Day 2", title: "Nusa Penida West Island Tour", desc: "Speedboat to Nusa Penida. Visit iconic T-Rex shaped Kelingking Beach, Angel's Billabong, and Broken Beach." },
      { day: "Day 3", title: "Uluwatu Sunset & Kecak Dance", desc: "Visit Padang Padang beach, dramatic Uluwatu cliff temple perched 70m above the ocean, and watch the Kecak fire dance." },
      { day: "Day 4", title: "Kintamani Volcano, Coffee & Ubud Villa", desc: "Visit coffee plantation, Mount Batur volcano viewpoint, and check-in to your private pool villa in Ubud." },
      { day: "Day 5", title: "Tegallalang Jungle Swings & Tanah Lot", desc: "Experience the famous Bali jungle swing over rice paddies and visit offshore sea temple Tanah Lot at sunset." },
      { day: "Day 6", title: "Ubud Market & Bali Departure", desc: "Souvenir shopping at Ubud art market and transfer to Denpasar International Airport." },
    ],
    visaInfo: "Electronic Visa on Arrival (e-VOA) Assistance",
  },

  thailand: {
    id: "thailand",
    slug: "thailand",
    title: "Thailand Tour Package",
    country: "Thailand",
    duration: "4 Nights / 5 Days",
    price: "₹24,999",
    originalPrice: "₹31,000",
    rating: 4.87,
    reviews: 320,
    badge: "Super Value",
    route: "Bangkok – Pattaya – Coral Island – Bangkok",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    overview:
      "Thailand offers the ultimate tropical escape. Bangkok is the vibrant heart where modern skyscrapers meet glittering Buddhist temples and dynamic street food, while Pattaya delights with turquoise waters, Coral Island water sports, and electrifying entertainment.",
    highlights: [
      "Coral Island speedboat ride with Indian buffet lunch",
      "Alcazar Cabaret Show VIP seating in Pattaya",
      "Bangkok Golden Buddha (Wat Traimit) & Marble Temple tour",
      "Chao Phraya Princess luxury dinner cruise with live band",
      "Shopping at Indra Square, Pratunam & MBK Center",
    ],
    inclusions: [
      "2 Nights in Pattaya + 2 Nights in Bangkok in 4-Star Hotels",
      "Daily international buffet breakfast at hotels",
      "Coral Island tour by shared speedboat with Indian lunch",
      "Alcazar Cabaret Show normal/VIP entrance ticket",
      "Bangkok temple tour (Golden Buddha & Reclining/Marble Temple)",
      "Inter-city transfers Bangkok – Pattaya – Bangkok in AC coach",
      "Airport pickup and drop transfers",
    ],
    exclusions: [
      "International flights",
      "Thailand Visa fees (Visa-Free for Indian passport holders currently)",
      "Water sports at Coral Island (parasailing, jet ski, underwater walk)",
      "Meals not mentioned, personal expenses, and tips",
    ],
    daywise: [
      { day: "Day 1", title: "Arrival in Bangkok & Drive to Pattaya", desc: "Pickup from Suvarnabhumi Airport and drive to Pattaya (approx. 2 hrs). Evening VIP entry to Alcazar Show." },
      { day: "Day 2", title: "Coral Island Speedboat Tour", desc: "Speedboat across turquoise Gulf of Thailand to Coral Island (Koh Larn). Indian buffet lunch included." },
      { day: "Day 3", title: "Pattaya to Bangkok & Temple Tour", desc: "Drive to Bangkok. City tour of Wat Traimit (Golden Buddha) and Wat Benchamabophit (Marble Temple). Check in to hotel." },
      { day: "Day 4", title: "Chao Phraya River Cruise & Shopping", desc: "Day free for shopping at Pratunam and CentralWorld. Evening luxury Chao Phraya river dinner cruise." },
      { day: "Day 5", title: "Bangkok Departure", desc: "Morning breakfast, checkout, and transfer to Bangkok Airport for flight back home." },
    ],
    visaInfo: "Visa-Free Entry for Indian Nationals",
  },
};

export function getInternationalPackageBySlug(slug: string): InternationalPackageData | null {
  return INTERNATIONAL_PACKAGES[slug] || null;
}
