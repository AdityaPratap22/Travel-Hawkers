export interface WeekendGetawayData {
  id: string;
  slug: string;
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
  highlights: string[];
  daywise: { day: string; title: string; desc: string }[];
  inclusions: string[];
  exclusions: string[];
}

export const WEEKEND_GETAWAYS: Record<string, WeekendGetawayData> = {
  chakrata: {
    id: "chakrata",
    slug: "chakrata",
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
      "Chakrata, nestled in the Dehradun district of Uttarakhand, India, is a serene hill station offering an escape from crowded tourist destinations. Positioned at an elevation of roughly 2,118 meters (6,949 feet), it provides sweeping panoramas of the Himalayan peaks, dense forests of deodar and oak trees, and a peaceful ambiance.",
    highlights: [
      "Tiger Falls trek & refreshing dip in natural mountain waterfall",
      "Chilmiri Neck panoramic sunset view & Himalayan birdwatching",
      "Budher ancient limestone caves & Moila Top meadow",
      "Kanasar alpine meadow surrounded by ancient deodar woods",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Chakrata & Chilmiri Sunset", desc: "Early morning drive via Saharanpur/Dehradun. Check-in to mountain resort and enjoy sunset tea at Chilmiri Neck." },
      { day: "Day 2", title: "Tiger Falls & Budher Caves", desc: "Trek to Tiger Falls, one of Uttarakhand's highest natural waterfalls, followed by exploring Budher limestone caves." },
      { day: "Day 3", title: "Kanasar Meadow & Return to Delhi", desc: "Visit the sacred ancient deodar trees at Kanasar and drive back to Delhi NCR." },
    ],
    inclusions: [
      "2 Nights accommodation in mountain view resort/hotel",
      "Daily breakfast and dinner",
      "Private sanitized AC cab from Delhi for the entire tour",
      "All toll taxes, parking fees, and driver allowances",
      "24X7 on-trip support",
    ],
    exclusions: [
      "Personal expenses, guide charges, and tips",
      "Entry tickets to caves or activity equipment",
      "Lunch and snacks not mentioned in plan",
    ],
  },

  kasauli: {
    id: "kasauli",
    slug: "kasauli",
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
      "Kasauli, located in the Solan district of Himachal Pradesh, India, is a serene hill station celebrated for its picturesque beauty, pleasant climate, and colonial charm. Perched at approximately 1,800 meters (5,900 feet) in the Shivalik range, it offers a peaceful respite surrounded by thick pine and cedar forests.",
    highlights: [
      "Walk the serene Gilbert Nature Trail with singing birds",
      "Sunset Point & Lover's Lane evening stroll",
      "Heritage Christ Church built in 1853 with stained glass windows",
      "Monkey Point (Manki Point) offering Sutlej river views",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Kasauli & Mall Road Walk", desc: "Smooth drive via Himalayan Expressway. Leisurely evening stroll across Upper and Lower Mall Road." },
      { day: "Day 2", title: "Gilbert Nature Walk & Sunset Point", desc: "Morning nature trail walk, visit Christ Church, and witness spectacular dusk over the Shivalik hills." },
      { day: "Day 3", title: "Timber Trail Cable Car & Delhi Return", desc: "Optional cable car ride at Parwanoo before returning comfortably to Delhi by night." },
    ],
    inclusions: [
      "2 Nights stay in boutique hotel or colonial resort",
      "Daily buffet breakfast",
      "Private AC vehicle from Delhi NCR",
      "All parking, tolls, state taxes, and fuel",
    ],
    exclusions: [
      "Timber Trail cable car ticket",
      "Personal expenses and meals other than breakfast",
    ],
  },

  rishikesh: {
    id: "rishikesh",
    slug: "rishikesh",
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
      "Rishikesh, located in the foothills of the Himalayas in Uttarakhand, India, is a renowned pilgrimage center and popular tourist destination. Known as the 'Yoga Capital of the World', it attracts seekers, adventurers, and travelers from across the globe on the banks of holy Mother Ganga.",
    highlights: [
      "16km Shivpuri to Rishikesh river rafting with cliff jumping",
      "Soul-stirring Ganga Aarti at Parmarth Niketan or Triveni Ghat",
      "Riverside luxury camp stay with bonfire and music",
      "Iconic Ram Jhula, Laxman Jhula & Beatles Ashram murals",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Camp, Rafting & Ganga Aarti", desc: "Arrive at riverside camp, gear up for exhilarating river rafting and attend evening Ganga Aarti." },
      { day: "Day 2", title: "Beatles Ashram & Return to Delhi", desc: "Morning riverside yoga, visit Beatles Ashram graffiti ruins, and drive back to Delhi." },
    ],
    inclusions: [
      "1 Night riverside luxury camp stay with swimming pool/river access",
      "All meals at camp (Lunch, Evening snacks, Dinner, Breakfast)",
      "16km White Water River Rafting with cliff jumping and body surfing",
      "Evening bonfire with light music",
    ],
    exclusions: [
      "Bungee jumping / Giant Swing (available at Mohan Chatti)",
      "Transportation unless opted with cab package",
    ],
  },

  "jaipur-the-pink-city-of-india": {
    id: "jaipur-the-pink-city-of-india",
    slug: "jaipur-the-pink-city-of-india",
    title: "Jaipur : The Pink City of India",
    tagline: "Royal Heritage & Hilltop Forts",
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
      "Jaipur, the capital city of Rajasthan, India, is famously known as the 'Pink City' because of the distinctive pink color of its buildings, painted to welcome the Prince of Wales in 1876. A city of royal palaces, vibrant bazaars, and world-heritage hilltop forts.",
    highlights: [
      "Amber Fort jeep ride & Sheesh Mahal mirror work",
      "Nahargarh Fort sunset overlooking the illuminated Pink City",
      "Bapu Bazaar & Johari Bazaar authentic shopping",
      "City Palace museum & Jantar Mantar observatory",
    ],
    daywise: [
      { day: "Day 1", title: "Expressway Drive to Jaipur & City Palace", desc: "Check-in to heritage haveli, visit City Palace, Jantar Mantar and Hawa Mahal." },
      { day: "Day 2", title: "Amber Fort & Nahargarh Sunset", desc: "Morning explore Amber Fort and Jal Mahal, evening tea at Nahargarh Fort Padao cafe." },
      { day: "Day 3", title: "Bazaars & Return to Delhi", desc: "Morning shopping for blue pottery and block print textiles before easy highway drive back." },
    ],
    inclusions: [
      "2 Nights stay in 3-star/4-star heritage hotel",
      "Daily breakfast",
      "Private AC sedan with chauffeur from Delhi NCR",
      "Expressway tolls, parking, and driver allowances",
    ],
    exclusions: [
      "Monument entrance fees",
      "Chokhi Dhani evening dinner entry",
    ],
  },

  "shimla-the-queen-of-hills": {
    id: "shimla-the-queen-of-hills",
    slug: "shimla-the-queen-of-hills",
    title: "Shimla : The Queen of Hills",
    tagline: "Colonial Charm & Himalayan Vistas",
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
      "Shimla, the capital city of Himachal Pradesh, is one of the most popular hill stations in India. Located in the foothills of the Himalayas at 2,276 meters (7,467 feet), it was once the summer capital of British India, celebrated for colonial architecture, pleasant climate, and pine-clad hills.",
    highlights: [
      "Mall Road, The Ridge & Lakkar Bazaar walking tour",
      "Jakhoo Temple giant Hanuman statue via cable car",
      "Kufri adventure park & nature horse riding",
      "Viceregal Lodge (Indian Institute of Advanced Study)",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Shimla & Ridge Evening", desc: "Arrive in Shimla, stroll through Mall Road, cafes, and Christ Church." },
      { day: "Day 2", title: "Kufri Excursion & Jakhoo Ropeway", desc: "Excursion to Kufri for mountain fun followed by ropeway ride to Jakhoo Temple." },
      { day: "Day 3", title: "Viceregal Lodge & Return", desc: "Explore the British architectural marvel at Viceregal Lodge and return to Delhi." },
    ],
    inclusions: [
      "2 Nights accommodation in Shimla hotel with valley view",
      "Daily breakfast and dinner",
      "Private chauffeur-driven AC cab from Delhi",
      "All tolls, parking, and driver DA",
    ],
    exclusions: [
      "Jakhoo ropeway tickets and Kufri pony rides",
      "Personal expenses and tips",
    ],
  },

  "nanital-the-lake-district-of-india": {
    id: "nanital-the-lake-district-of-india",
    slug: "nanital-the-lake-district-of-india",
    title: "Nainital : The Lake District of India",
    tagline: "Emerald Lakes & Mountain Magic",
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
      "Nainital, a charming hill station in the Kumaon region of Uttarakhand, India, is often called the 'Lake District of India'. Located around the eye-shaped emerald Naini Lake, it offers scenic hills, pleasant weather, yacht boating, and spiritual serenity.",
    highlights: [
      "Boating on the shimmering waters of Naini Lake",
      "Sacred Naina Devi Temple on the northern lake bank",
      "Snow View Point cable car overlooking Nanda Devi",
      "Bhimtal & Naukuchiatal day excursion with paragliding",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Nainital & Evening Boating", desc: "Arrive in Nainital, check-in, sunset boating on Naini Lake and Mall Road shopping." },
      { day: "Day 2", title: "Lake Tour (Bhimtal, Sattal) & Snow View", desc: "Explore the surrounding lake circuit and take the ropeway to Snow View Point." },
      { day: "Day 3", title: "Eco Cave Garden & Return to Delhi", desc: "Explore interconnected animal caves and drive comfortably back to Delhi." },
    ],
    inclusions: [
      "2 Nights hotel stay in Nainital",
      "Daily breakfast",
      "Private AC cab for Delhi – Nainital round trip and local lake tour",
      "All tolls, taxes, and parking",
    ],
    exclusions: [
      "Naini lake boating tickets and ropeway tickets",
      "Personal expenses",
    ],
  },

  "mussoorie-the-queen-of-hills": {
    id: "mussoorie-the-queen-of-hills",
    slug: "mussoorie-the-queen-of-hills",
    title: "Mussoorie : The Queen of Hills",
    tagline: "Cascading Falls & Colonial Charm",
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
      "Mussoorie, often referred to as the 'Queen of the Hills', is a picturesque hill station situated in the Garhwal Himalayan range of Uttarakhand, India. Elevated at 2,005 meters (6,578 feet), it is known for stunning views of the Doon Valley, lush green hills, and historic colonial heritage.",
    highlights: [
      "Landour quiet day walk, Lal Tibba & Landour Bakehouse",
      "Kempty Falls natural mountain waterfall splash",
      "Gun Hill ropeway ride with 360-degree Himalayan views",
      "Mall Road shopping and Camel's Back Road sunset stroll",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Mussoorie via Dehradun", desc: "Scenic uphill drive, evening stroll on Mall Road and Camel's Back Road." },
      { day: "Day 2", title: "Kempty Falls & Landour Lal Tibba", desc: "Morning splash at Kempty Falls, afternoon vintage tea and pastries in Landour." },
      { day: "Day 3", title: "Company Garden & Return", desc: "Visit Company Garden floral display and return comfortably to Delhi NCR." },
    ],
    inclusions: [
      "2 Nights accommodation in Mussoorie hotel",
      "Daily breakfast",
      "Private AC cab from Delhi NCR throughout the trip",
      "All tolls, driver charges, and parking fees",
    ],
    exclusions: [
      "Ropeway tickets and entrance fees",
      "Personal expenses",
    ],
  },

  "ranthambore-national-park": {
    id: "ranthambore-national-park",
    slug: "ranthambore-national-park",
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
      "Ranthambore National Park, located in the Sawai Madhopur district of Rajasthan, India, is one of the most famous and largest national parks in northern India. Known for its rich population of Royal Bengal tigers, dramatic dry deciduous forests, and ancient 10th-century hill fortress.",
    highlights: [
      "2 Open-Top Gypsy / Canter core jungle tiger safaris",
      "Historic 10th-century Ranthambore Fort and Trinetra Ganesha Temple",
      "Padam Talao lake tiger sightings & marsh crocodile spotting",
      "Resort stay with swimming pool and evening Rajasthani folk music",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Sawai Madhopur & Resort Check-in", desc: "Drive via Expressway, relax at wildlife resort and enjoy evening cultural music." },
      { day: "Day 2", title: "Morning & Afternoon Jungle Safaris", desc: "Two thrilling safari shifts in core zones with expert forest naturalists." },
      { day: "Day 3", title: "Ranthambore Fort & Return to Delhi", desc: "Morning fort visit offering 360-degree park views and return to Delhi." },
    ],
    inclusions: [
      "2 Nights stay at wildlife resort with swimming pool",
      "All meals included (Breakfast, Lunch & Dinner)",
      "1 or 2 Jungle Safaris in Canter/Gypsy with forest permit and guide",
      "Delhi NCR pickup and drop by private AC vehicle",
    ],
    exclusions: [
      "Camera fees inside national park",
      "Personal expenses and tipping",
    ],
  },

  "jim-corbett": {
    id: "jim-corbett",
    slug: "jim-corbett",
    title: "Jim Corbett : A Wilderness Adventure",
    tagline: "Wild Elephants & Bengal Tigers",
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
      "Jim Corbett National Park, located in the Nainital district of Uttarakhand, India, is the oldest national park in India, established in 1936 as Hailey National Park. Named after the legendary British hunter and naturalist Jim Corbett, it is celebrated for its wild Asian elephants, elusive tigers, and scenic Ramganga riverbanks.",
    highlights: [
      "Core Zone (Bijrani / Jhirna / Dhela) open jeep safari",
      "Garjiya Devi Temple perched on huge rock in Kosi River",
      "Corbett Falls & Heritage Jim Corbett Museum",
      "Riverside bonfire and nature walks with naturalists",
    ],
    daywise: [
      { day: "Day 1", title: "Delhi to Ramnagar & Riverside Lodge", desc: "Check-in to jungle resort, enjoy Kosi river bank walks and evening bonfire." },
      { day: "Day 2", title: "Jeep Safari & Garjiya Temple", desc: "Early morning jeep safari into the jungle, afternoon visit to Garjiya Temple." },
      { day: "Day 3", title: "Corbett Museum & Return", desc: "Learn about the legendary conservationist and return to Delhi NCR." },
    ],
    inclusions: [
      "2 Nights stay in riverside resort with pool",
      "Daily breakfast and dinner",
      "1 Open Jeep Safari into core zone with guide and forest permits",
      "Private AC cab from Delhi round trip",
    ],
    exclusions: [
      "Camera fee at forest gate",
      "Personal expenses",
    ],
  },
};

export function getWeekendGetawayBySlug(slug: string): WeekendGetawayData | null {
  return WEEKEND_GETAWAYS[slug] || null;
}
