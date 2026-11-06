export interface DestinationPackageItem {
  id: string;
  slug?: string;
  title: string;
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions?: string[];
  fullItinerary?: DayPlan[];
  route?: string;
}

export interface DayPlan {
  day: string;
  title: string;
  description: string;
}

export interface DomesticDestinationData {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  fullOverview: string[];
  bestTime: string;
  startingPrice: string;
  idealDuration: string;
  rating: number;
  reviewsCount: number;
  keySpots: string[];
  highlights: {
    title: string;
    description: string;
    image: string;
  }[];
  itinerary: DayPlan[];
  packages: DestinationPackageItem[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const DOMESTIC_DESTINATIONS: Record<string, DomesticDestinationData> = {
  himachal: {
    slug: "himachal",
    name: "Himachal Pradesh",
    title: "Himachal Tour Packages",
    tagline: "The Best Of Himachal Tour Packages & Holidays",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=80",
    description:
      "The region full of picturesque, popular, and yet offbeat places lies in this mystical land, full of flawless natural treasures. Bollywood’s personal favourite and a lively winter sports destination, it is the dearest choice of every travel enthusiast.",
    fullOverview: [
      "The region full of picturesque, popular, and yet offbeat places lies in this mystical land, full of flawless natural treasures. Bollywood’s personal favourite and a lively winter sports destination, it is the dearest choice of every travel enthusiast.",
      "The world of new experiences awaits you! Experience adventure with thrilling sports like horse riding, paragliding, mountain biking, zorbing at Solang Valley, and equally enchanting sightseeing experiences at Shimla and Rohtang Pass.",
      "The land of divinity with the two most ancient temples in India, namely the Hidimba Devi Temple and Vashisht Kund Temple along with the residence of His Holiness Dalai Lama, Dharamshala are the star highlights of our Himachal tour packages. The northern part of India, a pure delight for the mountain and nature lovers, has inspired some of our well-assorted Himachal Pradesh tour packages.",
    ],
    bestTime: "March to June (Pleasant) & Oct to Feb (Snowfall)",
    startingPrice: "₹14,999",
    idealDuration: "5 Nights / 6 Days",
    rating: 4.9,
    reviewsCount: 320,
    keySpots: ["Shimla", "Manali", "Solang Valley", "Rohtang Pass", "Atal Tunnel", "Dharamshala", "Dalhousie", "Kullu"],
    highlights: [
      {
        title: "Solang Valley & Rohtang Pass Adventure",
        description: "Experience paragliding, zorbing, snow scooter rides, and crossing the legendary Atal Tunnel into Lahaul Valley.",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Shimla Mall Road & Kufri",
        description: "Colonial architecture, Christ Church, horseback riding in Kufri, and panoramic Himalayan vistas from Jakhoo Hill.",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Spiritual Temples & Hot Springs",
        description: "Pay homage at the 500-year-old Hidimba Devi Temple nestled in cedar woods and soak in the natural sulphur baths of Vashisht.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi / Chandigarh to Shimla", description: "Scenic uphill drive via Himalayan Expressway, evening stroll along Shimla Mall Road and Ridge." },
      { day: "Day 2", title: "Shimla & Kufri Excursion", description: "Visit green valley, Kufri adventure amusement park, Jakhoo Temple ropeway, and Christ Church." },
      { day: "Day 3", title: "Shimla to Manali via Kullu Valley", description: "Drive along the gushing Beas River, stop at Kullu shawl factories, river rafting, and check-in to Manali resort." },
      { day: "Day 4", title: "Solang Valley & Atal Tunnel", description: "Thrilling day at Solang Valley, snow sports, drive through Atal Tunnel to North Portal / Sissu waterfall." },
      { day: "Day 5", title: "Manali Local Sightseeing", description: "Visit Hidimba Devi Temple, Manu Temple, Tibetan Monastery, and relaxing dip at Vashisht hot springs." },
      { day: "Day 6", title: "Manali to Delhi Departure", description: "Morning breakfast, checkout, and comfortable drop back to Delhi / Chandigarh airport or railway station." },
    ],
    packages: [
      {
        id: "shimla-manali-tour-package",
        slug: "shimla-manali-tour-package",
        title: "Shimla Manali Tour Package",
        duration: "5 Nights / 6 Days",
        price: "₹14,999",
        originalPrice: "₹18,500",
        rating: 4.93,
        reviews: 184,
        badge: "Bestseller",
        route: "Chandigarh – Manali – Solang/Rohtang – Kullu – Shimla – Kufri – Chandigarh",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        overview:
          "The signature Himachal vacation. Explore Manali's ancient temples, Solang Valley and Rohtang Pass snow point, Beas River rafting in Kullu, and colonial charm in Shimla and Kufri.",
        highlights: [
          "Hidimba Devi Temple & 500-year-old Manu Temple in Old Manali",
          "Rohtang Pass & Solang Valley snow sports (paragliding, zorbing, ATV)",
          "Scenic drive via Pandoh Dam, fruit orchards & Kullu river rafting",
          "Shimla Mall Road, The Ridge, Christ Church & Kufri horse riding",
        ],
        inclusions: [
          "5 Nights accommodation on twin/double sharing basis",
          "Daily buffet breakfast at hotels",
          "Private transportation by AC chauffeur-driven vehicle (AC on plains)",
          "24x7 on-trip assistance",
          "All requisite airport / railway station transfers",
          "Road taxes, parking fee, fuel charges & interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fee and video camera charges",
          "Any activities / optional adventure sports",
          "Any flight fare / train fare",
          "Rohtang Pass vehicle/permit (direct payment & subject to operation)",
          "Early check-in / late check-out at hotels",
          "Tipping to guide, driver, etc.",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Chandigarh – Manali",
            description:
              "Warm greetings on arrival at Chandigarh airport or railway station to enjoy your pre-booked Shimla Manali tour package. Drive towards Manali (approx. 8 hrs journey). Late evening arrival in Manali and night stay.",
          },
          {
            day: "Day 2",
            title: "Temple and Monastery (Manali Local)",
            description:
              "Morning after breakfast proceed for local sightseeing of Manali. First visit the Hidimba Devi Temple in dense deodar forest, followed by the ancient Manu Temple in Old Manali. Visit the Buddhist Monastery, enjoy lunch at Mall Road, and visit Vashisht natural sulphur hot springs. Evening free for shopping on Mall Road for shawls and woolens. Dinner and night stay.",
          },
          {
            day: "Day 3",
            title: "Manali Snow Point (Rohtang Pass & Solang Valley)",
            description:
              "Explore snow point areas of Manali. Visit Rohtang Pass (approx. 3,978m above sea level) to enjoy skating, paragliding, and ATV rides. If Rohtang Pass is closed, visit Solang Valley for zorbing, paragliding, and snow activities, with optional excursion to Sissu Village via the engineering marvel Atal Tunnel. Evening return to hotel for dinner and night stay.",
          },
          {
            day: "Day 4",
            title: "Manali - Kullu - Shimla",
            description:
              "Early morning drive towards Shimla. En route visit Pandoh Dam, lush orchards of apple, cherry, and plum, and enjoy river rafting at Beas River in Kullu. Explore Kullu shawl market and continue to Shimla. Evening check into hotel/resort for dinner and overnight stay.",
          },
          {
            day: "Day 5",
            title: "Shimla & Kufri Sightseeing",
            description:
              "After breakfast head to the famous hill spot of Kufri (17 km from Shimla) for scenic beauty and horse riding. Evening explore pedestrian Shimla town: The Ridge, Christ Church, Lakkar Bazaar, Scandal Point, and Kali Bari Temple. Dinner and night stay.",
          },
          {
            day: "Day 6",
            title: "Shimla - Chandigarh Departure",
            description:
              "Breakfast and say goodbye to the beautiful mountains of Himachal after completing your Shimla Manali tour package. Drive towards Chandigarh airport or railway station for onward journey.",
          },
        ],
      },
      {
        id: "honeymoon-in-manali",
        slug: "honeymoon-in-manali",
        title: "Honeymoon in Manali",
        duration: "3 Nights / 4 Days",
        price: "₹16,499",
        originalPrice: "₹20,000",
        rating: 4.96,
        reviews: 135,
        badge: "Couples Special",
        route: "Delhi – Kullu – Manali – Solang Valley – Delhi",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        overview:
          "A romantic escape designed for newlyweds. Scenic drive via Kullu along the Beas River, thrilling snow activities at Solang Valley, local Manali temples, Van Vihar walks, plus romantic candlelight dinner and flower bed decoration.",
        highlights: [
          "Special honeymoon inclusions: flower bed decor, cake & candlelight dinner",
          "Solang Valley snow point adventure sports (paragliding & snow rides)",
          "Manali Club House, peaceful Van Vihar & Hadimba Devi Temple",
          "Private chauffeur-driven vehicle from Delhi throughout the trip",
        ],
        inclusions: [
          "3 Nights accommodation in romantic deluxe resort / hotel",
          "Daily breakfast & dinner (including 1 romantic candlelight dinner)",
          "Special honeymoon inclusion (flower bed decor, honeymoon cake)",
          "Private chauffeur-driven vehicle from Delhi",
          "All tolls, parking fees, driver allowance & fuel charges",
          "24x7 on-trip customer care assistance",
        ],
        exclusions: [
          "Adventure activities (paragliding, zorbing, skiing)",
          "Rohtang Pass vehicle / permit on direct payment basis",
          "Personal expenses, laundry, and guide tips",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Delhi – Manali by Drive",
            description:
              "On arrival at Delhi airport or railway station meet with Travel Hawkers representative, who will introduce you with your Pilot driver and brief you about your tour. Proceed to Manali by drive (13 hrs approx.), enroute visit Kullu located on the banks of Beas River ('Kulant Peeth' - end of the habitable world). On arrival check-in at romantic resort. Overnight at hotel in Manali.",
          },
          {
            day: "Day 2",
            title: "Solang Valley Snow Point",
            description:
              "Post breakfast proceed to visit Solang Valley Snow Point. Enjoy activities of paragliding, horse riding, and snow activities amidst majestic Himalayan panoramas. Transfer back to hotel for a special romantic candlelight dinner and overnight stay.",
          },
          {
            day: "Day 3",
            title: "Manali Local Sightseeing Tour",
            description:
              "Post breakfast enjoy local sightseeing visiting Manali Club House, peaceful Van Vihar deodar forest, Hadimba Devi Temple, and Mall Road shopping for local shawls and handicrafts. Transfer back to hotel. Overnight in Manali.",
          },
          {
            day: "Day 4",
            title: "Manali – Delhi by Drive Departure",
            description:
              "Post breakfast check out from hotel and drive early morning back to Delhi. On arrival, transfer to Delhi airport or railway station to board your flight / train for onward journey.",
          },
        ],
      },
      {
        id: "amritsar-dharmshala-tour-package",
        slug: "amritsar-dharmshala-tour-package",
        title: "4 Days Amritsar Dharamshala Tour Package",
        duration: "3 Nights / 4 Days",
        price: "₹12,499",
        originalPrice: "₹15,500",
        rating: 4.89,
        reviews: 95,
        badge: "Spiritual & Mountain",
        route: "Amritsar – Dharamshala – McLeod Ganj – Amritsar",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        overview:
          "Experience spiritual solace and mountain majesty. Visit the Golden Temple, Jallianwala Bagh, and Wagah Border ceremony in Amritsar, then ascend to the serene Dhauladhar pine forests, Dalai Lama's residence, and HPCA Stadium in Dharamshala.",
        highlights: [
          "Amritsar Golden Temple (Harmandir Sahib) & Jallianwala Bagh memorial",
          "Indo-Pak Wagah Border ceremonial changing of guard & patriotic parade",
          "Official residence of Dalai Lama, Bhagsunath Temple & waterfall",
          "McLeod Ganj Tibetan bazaar & Dharamshala International Cricket Stadium",
        ],
        inclusions: [
          "3 Nights accommodation on twin/double sharing basis (1N Amritsar + 2N Dharamshala)",
          "Daily breakfast at hotels",
          "Private AC vehicle with dedicated chauffeur throughout the tour",
          "All intercity transfers & sightseeing tours as per itinerary",
          "Toll taxes, parking fees, fuel, and driver allowances",
          "24x7 on-trip customer support",
        ],
        exclusions: [
          "Monument entrance fees and camera charges",
          "Train / flight tickets to and from Amritsar",
          "Personal expenses, lunch/dinner not mentioned, and tips",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrive Amritsar (Golden Temple & Wagah Border)",
            description:
              "On arrival at Amritsar airport or railway station, meet Travel Hawkers representative and pilot driver. Transfer to hotel for check-in. Visit the Golden Temple situated in the heart of the city and Jallianwala Bagh memorial. In the evening proceed to the Wagah Border to watch the ceremonial changing of guard and patriotic retreat parade. Overnight at hotel in Amritsar.",
          },
          {
            day: "Day 2",
            title: "Amritsar to Dharamshala by Drive",
            description:
              "Post breakfast leave for Dharamshala by road (approx. 4 hrs). Dharamshala lies on a spur of the Dhauladhar range with serene surroundings and pleasant climate, dense pine and deodar forests. Reach by afternoon and check-in to hotel. In the evening visit Kotwali Bazaar. Overnight at hotel in Dharamshala.",
          },
          {
            day: "Day 3",
            title: "Dharamshala & McLeod Ganj Tour",
            description:
              "Post breakfast explore the beautiful Kangra Valley. Visit the official residence of His Holiness Dalai Lama, Bhagsunath Temple, McLeod Ganj Tibetan handicraft bazaar, and Dharamshala International Cricket Stadium. Transfer back to hotel, overnight in Dharamshala.",
          },
          {
            day: "Day 4",
            title: "Dharamshala – Amritsar Departure",
            description:
              "Post breakfast check out from hotel and drive back to Amritsar (approx. 4 hrs) for on-time drop at Amritsar airport or railway station for onward flight / train.",
          },
        ],
      },
      {
        id: "dharamshala-dalhousie-amritsar-tour-package",
        slug: "dharamshala-dalhousie-amritsar-tour-package",
        title: "Dharamshala Dalhousie Amritsar Tour Package",
        duration: "5 Nights / 6 Days",
        price: "₹17,999",
        originalPrice: "₹22,500",
        rating: 4.91,
        reviews: 120,
        badge: "Complete Circuit",
        route: "Amritsar – Dharamshala – Dalhousie – Khajjiar – Amritsar",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
        overview:
          "A comprehensive northern circuit from the spiritual heritage of Amritsar to Tibetan Buddhist serenity in Dharamshala, and onward to the colonial architecture and pine meadows of Khajjiar (India's Mini Switzerland) in Dalhousie.",
        highlights: [
          "Dharamshala Namgyal Monastery, Dalai Lama Temple & Buddha idols",
          "Dalhousie colonial architecture, St. John's Church & Subhash Baoli",
          "Khajjiar (India's Mini Switzerland) meadow & 12th-century Khajji Nag Temple",
          "Amritsar Golden Temple, Jallianwala Bagh & Wagah Border ceremony",
        ],
        inclusions: [
          "5 Nights accommodation on twin/double sharing basis (2N Dharamshala + 2N Dalhousie + 1N Amritsar)",
          "Daily breakfast at hotels",
          "Private transportation by air-conditioned chauffeur-driven vehicle (AC on plains)",
          "24x7 on-trip assistance",
          "All requisite airport / railway transfers",
          "Road taxes, parking fees, fuel charges & interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fees and video camera charges",
          "Any optional adventure activities or pony rides at Khajjiar",
          "Any flight / train fare",
          "Early check-in / late check-out at hotels",
          "Tipping to guide, driver, etc.",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Amritsar - Dharamshala by Drive",
            description:
              "On arrival at Amritsar airport or railway station, meet Travel Hawkers representative and pilot driver. Proceed to Dharamshala by drive (approx. 4 hrs). On arrival check-in at hotel. Day at leisure to soak in the Dhauladhar vistas. Overnight at hotel in Dharamshala.",
          },
          {
            day: "Day 2",
            title: "Dharamshala Sightseeing Tour",
            description:
              "Post breakfast explore the scenic valley. Visit vibrant small bazaars for Tibetan handicrafts, Namgyal Monastery, large idols of Lord Buddha, Dalai Lama Temple, and Chamunda Devi / Brijeshwari temples. Overnight at hotel in Dharamshala.",
          },
          {
            day: "Day 3",
            title: "Dharamshala - Dalhousie by Drive",
            description:
              "Post breakfast check out from hotel and drive to colonial hill station Dalhousie (approx. 4 hrs). On arrival check in at hotel. Evening explore local surroundings, churches, and Mall Road. Overnight at hotel in Dalhousie.",
          },
          {
            day: "Day 4",
            title: "Dalhousie - Khajjiar Excursion",
            description:
              "Post breakfast move out for local sightseeing and excursion to Khajjiar — known as India’s Mini Switzerland. Located within the Kalatop-Khajjiar sanctuary, visit the 12th-century Khajji Nag Temple and saucer-shaped lake surrounded by thick cedar forests. Return to Dalhousie for overnight stay.",
          },
          {
            day: "Day 5",
            title: "Dalhousie - Amritsar by Drive",
            description:
              "Post breakfast check out from hotel and drive to Amritsar (approx. 5 hrs). On arrival check in at hotel. Evening free at leisure to explore local markets and savor authentic Punjabi cuisine. Overnight at hotel in Amritsar.",
          },
          {
            day: "Day 6",
            title: "Amritsar Sightseeing & Departure",
            description:
              "Post breakfast check out from hotel and visit the famous attractions of the city: Golden Temple, Jallianwala Bagh, and Wagah Border ceremony. On-time drop at Amritsar airport or railway station to board flight / train back home.",
          },
        ],
      },
      {
        id: "complete-himachal-grand-circuit",
        title: "Complete Himachal Grand Circuit (Shimla, Manali, Dharamshala & Dalhousie)",
        duration: "8 Nights / 9 Days",
        price: "₹27,999",
        originalPrice: "₹35,000",
        rating: 4.96,
        reviews: 148,
        badge: "Grand Explorer",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        overview: "The definitive Himachal journey covering British summer capital Shimla, snow paradise Manali, Tibetan cultural center Dharamshala, and Mini Switzerland Khajjiar in Dalhousie.",
        highlights: ["2N Shimla, 3N Manali, 2N Dharamshala, 1N Dalhousie", "Kufri snow point & Solang Valley adventure", "Dalai Lama Temple & McLeod Ganj", "Khajjiar meadow & Kalatop Sanctuary"],
        inclusions: ["8 Nights Luxury Hotel Accommodations", "Daily Breakfast & Dinner", "Dedicated Private Chauffeur Cab for Entire Circuit", "All Interstate Road Taxes, Tolls & Parking"],
      },
      {
        id: "spiti-valley-expedition",
        title: "Mystical Spiti Valley 4x4 High-Altitude Road Expedition",
        duration: "7 Nights / 8 Days",
        price: "₹29,999",
        originalPrice: "₹38,000",
        rating: 4.98,
        reviews: 96,
        badge: "Adventure Special",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
        overview: "Venture into the raw landscapes of the Middle Land. Visit 1000-year-old Tabo Monastery, Key Gompa, high-altitude Chandratal Lake, and the world's highest post office at Hikkim.",
        highlights: ["Chitkul - last village on Indo-Tibetan border", "Key Monastery & Tabo UNESCO heritage", "Chandratal Lake camping under billion stars", "Kunzum Pass (15,060 ft) crossing"],
        inclusions: ["7 Nights Homestays & Luxury Camps", "All Meals (Breakfast & Dinner)", "Dedicated 4x4 Scorpio / Innova with Expert Mountain Pilot", "Inner Line Permits & Oxygen Support"],
      },
    ],
    faqs: [
      { question: "What is the best time to see snow in Manali\?", answer: "Solang Valley, Rohtang Pass, and Sissu typically experience snowfall from late November through March." },
      { question: "Is Rohtang Pass permit included?", answer: "Rohtang Pass permits are subject to National Green Tribunal daily quotas. We assist with booking the permit and private green cab." },
      { question: "Are heating facilities provided in hotels?", answer: "Yes, our selected 3-star and 4-star hotels in Shimla and Manali provide room heaters during cold winter months." },
    ],
  },

  kashmir: {
    slug: "kashmir",
    name: "Jammu & Kashmir",
    title: "Kashmir Tour Packages",
    tagline: "Paradise on Earth - The Crown of India",
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=80",
    description:
      "Kashmir, known as the Crown of India, is truly a Paradise on Earth. As Mughal Emperor Jehangir once said, 'If there is a heaven on earth, it’s here, it’s here, it’s here.' Every traveler dreams of visiting this beautiful land at least once in their lifetime.",
    fullOverview: [
      "Kashmir, known as the Crown of India, is truly a Paradise on Earth. As Mughal Emperor Jehangir once said, 'If there is a heaven on earth, it’s here, it’s here, it’s here.' Every traveler dreams of visiting this beautiful land at least once in their lifetime. No matter the season, Kashmir is always a perfect holiday destination.",
      "With Travel Hawkers, explore the magic of Kashmir—tall Chinar trees, thick deodar forests, fresh apple orchards, golden saffron fields, and snow-covered mountains.",
      "Enjoy peaceful rides on Shikaras, stay in charming houseboats on Dal Lake, see the colorful Tulip gardens in spring, and experience the winter wonderland of Gulmarg. Discover the beauty, culture, and hospitality of Kashmir with us!",
    ],
    bestTime: "April to October (Gardens & Lakes) & Dec to Feb (Gulmarg Skiing)",
    startingPrice: "₹16,499",
    idealDuration: "5 Nights / 6 Days",
    rating: 4.95,
    reviewsCount: 410,
    keySpots: ["Srinagar", "Dal Lake", "Gulmarg", "Pahalgam", "Betaab Valley", "Sonamarg", "Doodhpathri", "Shankaracharya Temple"],
    highlights: [
      {
        title: "Dal Lake Shikara & Heritage Houseboat",
        description: "Cruise peacefully past floating flower gardens and stay in intricately hand-carved cedarwood houseboats.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Gulmarg Gondola Ride",
        description: "Ascend to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak at 13,780 ft) on Asia's highest cable car.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Pahalgam Valleys & Saffron Fields",
        description: "Meander along the Lidder River, visit Betaab Valley, Aru Valley, and sample pure Kashmiri saffron in Pampore.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar & Dal Lake Shikara", description: "Airport pickup, check-in to heritage Dal Lake houseboat, sunset 1-hour Shikara ride, and Mughal gardens tour." },
      { day: "Day 2", title: "Srinagar to Gulmarg Day Tour", description: "Drive through pine meadows, board Gulmarg Gondola Phase 1 & 2 to Apharwat snow peak, evening return to Srinagar." },
      { day: "Day 3", title: "Srinagar to Pahalgam (Valley of Shepherds)", description: "Drive past Pampore saffron fields and Awantipora ruins. Check-in to Pahalgam riverside hotel." },
      { day: "Day 4", title: "Pahalgam Sightseeing (Betaab & Aru Valley)", description: "Explore Betaab Valley, Chandanwari, and Aru Valley by local union cab, stroll along Lidder River." },
      { day: "Day 5", title: "Pahalgam to Sonamarg (Meadow of Gold)", description: "Drive to Sonamarg, enjoy pony ride or union taxi to Thajiwas Glacier, evening return to Srinagar luxury hotel." },
      { day: "Day 6", title: "Srinagar Airport Departure", description: "Visit Shankaracharya Temple overlooking the city, shop for Kashmiri Pashmina shawls, and drop at Srinagar airport." },
    ],
    packages: [
      {
        id: "kashmir-paradise",
        title: "Kashmir Paradise Circuit (Srinagar, Gulmarg & Pahalgam)",
        duration: "5 Nights / 6 Days",
        price: "₹16,499",
        originalPrice: "₹21,000",
        rating: 4.96,
        reviews: 218,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        overview: "Complete Kashmir experience with 1 Night Deluxe Houseboat and 4 Nights in luxury 4-star hotels.",
        highlights: ["1N Houseboat + 4N Hotel", "Gulmarg Gondola support", "Shikara ride included", "Pahalgam Lidder valley"],
        inclusions: ["Deluxe Houseboat + 4-Star Stays", "Breakfast & Dinner", "Dedicated Cab & Chauffeur", "Shikara Ride"],
      },
      {
        id: "kashmir-honeymoon",
        title: "Romantic Kashmir Honeymoon with Houseboat Stay",
        duration: "6 Nights / 7 Days",
        price: "₹21,999",
        originalPrice: "₹27,500",
        rating: 4.98,
        reviews: 135,
        badge: "Honeymoon Special",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        overview: "Special romantic holiday featuring candlelight dinner on Dal Lake, flower decoration, and private transfers.",
        highlights: ["Candlelight dinner on houseboat", "Pahalgam riverside resort", "Gulmarg snow experience", "Special gift hamper"],
        inclusions: ["Luxury Accommodations", "Daily Breakfast & Dinner", "Honeymoon Special Inclusions", "Private Chauffeur"],
      },
      {
        id: "kashmir-valley-glimpse",
        title: "Glimpse of Kashmir (Short Srinagar & Gulmarg Break)",
        duration: "3 Nights / 4 Days",
        price: "₹11,999",
        originalPrice: "₹15,500",
        rating: 4.88,
        reviews: 112,
        badge: "Weekend Escape",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
        overview: "A refreshing short holiday to Srinagar and Gulmarg with a luxury Dal Lake Shikara ride and Gulmarg snow meadows.",
        highlights: ["1N Dal Lake Houseboat stay", "Gulmarg Gondola snow ride", "Sunset Shikara ride on Dal Lake", "Mughal Gardens (Nishat & Shalimar)"],
        inclusions: ["1N Houseboat + 2N Hotel", "Daily Breakfast & Dinner", "Private AC Cab & Chauffeur", "Shikara Ride Ticket"],
      },
      {
        id: "kashmir-sonamarg-doodhpathri",
        title: "Exotic Kashmir with Sonamarg & Doodhpathri Meadows",
        duration: "6 Nights / 7 Days",
        price: "₹21,999",
        originalPrice: "₹28,000",
        rating: 4.97,
        reviews: 148,
        badge: "Explorer Choice",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        overview: "Comprehensive Kashmir journey exploring Sonamarg's Thajiwas Glacier, Doodhpathri's lush meadows of milk, Pahalgam's valleys, and Gulmarg.",
        highlights: ["Doodhpathri offbeat meadow exploration", "Sonamarg Thajiwas Glacier pony excursion", "Pahalgam Betaab Valley & Aru Valley", "Gulmarg Apharwat Peak cable car"],
        inclusions: ["6 Nights Deluxe Accommodations", "Daily Breakfast & Dinner", "All Internal Transfers by Dedicated Cab", "1-Hour Dal Lake Shikara Ride"],
      },
      {
        id: "vaishnodevi-kashmir",
        title: "Divine Vaishno Devi with Kashmir Valley Pilgrimage & Tour",
        duration: "7 Nights / 8 Days",
        price: "₹24,999",
        originalPrice: "₹31,500",
        rating: 4.95,
        reviews: 189,
        badge: "Spiritual & Scenic",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        overview: "Combine the sacred darshan of Mata Vaishno Devi at Katra with the picturesque lakes, houseboats, and snow peaks of Kashmir.",
        highlights: ["Katra Mata Vaishno Devi Bhawan Darshan assistance", "Scenic drive via Patnitop & Chenani-Nashri Tunnel", "Dal Lake Deluxe Houseboat stay", "Gulmarg & Pahalgam sightseeing"],
        inclusions: ["2N Katra + 1N Houseboat + 4N Hotels", "Daily MAP Meals (Breakfast & Dinner)", "All Tolls, Parking & Private Chauffeur Cab", "Assistance for Vaishno Devi Yatra Registration"],
      },
    ],
    faqs: [
      { question: "Is Kashmir safe for families and solo travelers?", answer: "Yes, Kashmir welcomes millions of tourists every year. Tourist corridors in Srinagar, Gulmarg, and Pahalgam are safe, hospitable, and well-managed." },
      { question: "How do we book Gondola tickets in Gulmarg?", answer: "We advise booking Gondola tickets online at least 3 weeks in advance due to high demand. Our team assists clients with ticket reservations." },
      { question: "Are postpaid mobile connections required in Kashmir?", answer: "Yes, only postpaid SIM cards (Jio, Airtel, BSNL) work in Jammu & Kashmir. Prepaid SIMs from other states do not have roaming access here." },
    ],
  },

  rajasthan: {
    slug: "rajasthan",
    name: "Rajasthan",
    title: "Rajasthan Tour Packages",
    tagline: "Royal Heritage, Desert Dunes & Majestic Palaces",
    heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2000&q=80",
    description:
      "Discover the enchanting land of Rajasthan, where grand palaces, vibrant culture, intricate handicrafts, and mouthwatering cuisine come together to create an unforgettable experience. Set against the backdrop of vast deserts, Rajasthan embodies the spirit of romance and valor.",
    fullOverview: [
      "Discover the enchanting land of Rajasthan, where grand palaces, vibrant culture, intricate handicrafts, and mouthwatering cuisine come together to create an unforgettable experience. Set against the backdrop of vast deserts, Rajasthan embodies the spirit of romance and valor.",
      "At Travel Hawkers, we take pride in curating exceptional journeys that let you explore the true essence of royalty. With our meticulously designed Rajasthan tour packages, step back in time and immerse yourself in the grandeur of the Rajput era.",
      "Experience Rajasthan like never before! Our all-inclusive packages offer a diverse range of experiences—from exploring opulent palaces and witnessing vintage car collections to thrilling camel safaris on golden dunes, vibrant shopping sprees in Jaipur’s bustling bazaars, and exhilarating tiger safaris in the wild. Delight in the magic of Rajasthani folk music, mesmerizing dances, authentic cuisine, and traditional puppet shows like Katputhli.",
    ],
    bestTime: "October to March (Pleasant winter weather)",
    startingPrice: "₹18,999",
    idealDuration: "6 Nights / 7 Days",
    rating: 4.88,
    reviewsCount: 290,
    keySpots: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Ranthambore", "Mount Abu", "Bikaner"],
    highlights: [
      {
        title: "Grand Rajput Forts & Palaces",
        description: "Explore Amber Fort in Jaipur, Mehrangarh Fort in Jodhpur, and Udaipur City Palace overlooking Lake Pichola.",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sam Sand Dunes Camel Safari",
        description: "Sunset camel rides in the Thar Desert, overnight luxury Swiss tent camping, and traditional Kalbelia folk performances.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Lake Pichola Boat Cruise",
        description: "Sunset boat ride in Udaipur past the floating Lake Palace and Jag Mandir against the Aravali hills.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Jaipur (The Pink City)", description: "Pickup and check-in to heritage hotel. Evening visit to Birla Temple, Chokhi Dhani ethnic village for cultural dance and dinner." },
      { day: "Day 2", title: "Jaipur Heritage Forts", description: "Visit Amber Fort with elephant/jeep ride, photo stop at Jal Mahal, City Palace, Jantar Mantar, and Hawa Mahal." },
      { day: "Day 3", title: "Jaipur to Jodhpur (The Blue City)", description: "Drive to Jodhpur via Ajmer Dargah and holy Pushkar Lake. Check-in to Jodhpur hotel." },
      { day: "Day 4", title: "Jodhpur to Udaipur via Ranakpur", description: "Visit majestic Mehrangarh Fort and Jaswant Thada. Drive to Udaipur with visit to famous Ranakpur Jain marble temples." },
      { day: "Day 5", title: "Udaipur City of Lakes Sightseeing", description: "Visit City Palace, Saheliyon Ki Bari, Jagdish Temple, and evening scenic boat cruise on Lake Pichola." },
      { day: "Day 6", title: "Udaipur Departure / Return", description: "Breakfast, visit Sajjangarh Monsoon Palace, souvenir shopping for miniature paintings, and drop at airport/station." },
    ],
    packages: [
      {
        id: "rajasthan-fort-and-places",
        slug: "rajasthan-fort-and-places",
        title: "Rajasthan Fort and Places",
        duration: "6 Nights / 7 Days",
        price: "₹18,999",
        originalPrice: "₹24,500",
        rating: 4.92,
        reviews: 178,
        badge: "Heritage Circuit",
        route: "Jaipur – Jodhpur – Udaipur – Jaisalmer – Pushkar – Bikaner – Ajmer",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        overview:
          "A Forts and Palaces tour in Rajasthan is a popular and fascinating way to explore the rich history and architectural marvels of the region. Rajasthan, known as the 'Land of Kings', is renowned for its majestic forts, opulent palaces, and vibrant culture.",
        highlights: [
          "Jaipur Amber Fort, City Palace museum & Hawa Mahal",
          "Jodhpur Mehrangarh Fort & Jaswant Thada marble cenotaph",
          "Udaipur City Palace & Lake Pichola scenic boat ride",
          "Jaisalmer Golden Fort & Patwon Ki Haveli in the Thar Desert",
          "Pushkar sacred lake, Brahma Temple & Bikaner Junagarh Fort",
          "Ajmer Sharif Dargah spiritual blessings",
        ],
        inclusions: [
          "Accommodation in verified Hotels/Resorts as per itinerary",
          "24X7 on-trip assistance during the tour",
          "Daily breakfast at hotels",
          "Private transportation by AC chauffeur-driven vehicle (airport transfers & sightseeing)",
          "Sightseeing tours as per itinerary",
          "Road taxes, parking fee, fuel charges, and interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fee and video camera charges",
          "Flights / train tickets (unless specified)",
          "Personal expenses (shopping, tips, laundry, drinks)",
          "Early check-in / late check-out at hotels",
          "Extra adventure activities / optional tours",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Jaipur Arrival & Sightseeing",
            description:
              "Start your tour in the capital city of Rajasthan, Jaipur. Visit the iconic Amber Fort, known for its stunning architecture and panoramic views of the surrounding hills. Explore the City Palace, which houses a museum showcasing royal artifacts and art. Don’t miss the Hawa Mahal (Palace of Winds), a unique five-story palace with intricately designed windows.",
          },
          {
            day: "Day 2",
            title: "Jaipur to Jodhpur (The Blue City)",
            description:
              "Travel to Jodhpur, known as the 'Blue City' for its blue-painted houses. Explore the imposing Mehrangarh Fort, one of the largest forts in India, offering breathtaking views of the city. Visit the Jaswant Thada, a beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II.",
          },
          {
            day: "Day 3",
            title: "Jodhpur to Udaipur (City of Lakes)",
            description:
              "Head to Udaipur, often called the 'Venice of the East.' Explore the City Palace, a grand complex overlooking Lake Pichola, which showcases a fusion of Rajasthani and Mughal architecture. Enjoy a boat ride on Lake Pichola and visit the famous Lake Palace, a magnificent white marble palace located in the middle of the lake.",
          },
          {
            day: "Day 4",
            title: "Udaipur to Jaisalmer (The Golden City)",
            description:
              "Travel to the enchanting desert city of Jaisalmer. Explore the stunning Jaisalmer Fort, a UNESCO World Heritage Site that rises from the golden sands of the Thar Desert. Discover intricately carved havelis like Patwon Ki Haveli and Nathmal Ki Haveli, showcasing exquisite craftsmanship.",
          },
          {
            day: "Day 5",
            title: "Jaisalmer to Pushkar",
            description:
              "Visit the holy city of Pushkar, known for its sacred lake and the Brahma Temple. Take part in the religious rituals and explore the bustling streets filled with colorful markets.",
          },
          {
            day: "Day 6",
            title: "Pushkar to Bikaner",
            description:
              "Proceed to Bikaner and explore Junagarh Fort, a magnificent fortification famous for its ornate palaces, temples, and pavilions. Don’t miss the Karni Mata Temple, also known as the 'Rat Temple,' where rats are considered sacred and worshipped.",
          },
          {
            day: "Day 7",
            title: "Bikaner – Ajmer & Departure",
            description:
              "Conclude your tour in Ajmer and visit the Ajmer Sharif Dargah, a renowned Sufi shrine dedicated to the Sufi saint Khwaja Moinuddin Chishti. Seek blessings and experience the spiritual atmosphere before your onward journey.",
          },
        ],
      },
      {
        id: "rajasthan-honeymoon-tour-package",
        slug: "rajasthan-honeymoon-tour-package",
        title: "Rajasthan Honeymoon Tour Package",
        duration: "6 Nights / 7 Days",
        price: "₹21,499",
        originalPrice: "₹26,999",
        rating: 4.97,
        reviews: 142,
        badge: "Couples Special",
        route: "Jaipur – Jodhpur – Ranakpur – Udaipur – Pushkar – Jaipur",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        overview:
          "A 7-day honeymoon tour in Rajasthan, India, offers the perfect blend of romance, history, culture, and adventure. Rajasthan is known for its stunning palaces, forts, vibrant bazaars, and rich cultural heritage.",
        highlights: [
          "Jaipur Birla Temple evening aarti & romantic candlelit dinners",
          "Amber Fort, City Palace, Jantar Mantar & Hawa Mahal",
          "Jodhpur Mehrangarh Fort sunset vistas & blue alleys",
          "Ranakpur marble Jain Temples architectural marvel",
          "Udaipur romantic Lake Pichola boat ride & Jag Mandir island palace",
          "Bagore Ki Haveli folk music/dance & Pushkar sacred lake evening aarti",
        ],
        inclusions: [
          "6 Nights accommodation in romantic heritage & luxury resorts",
          "Daily breakfast & romantic candlelight dinners",
          "Private AC chauffeur-driven vehicle throughout the tour",
          "Romantic boat ride on Lake Pichola in Udaipur",
          "24X7 on-trip concierge assistance",
          "All toll taxes, parking fees, fuel & interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fees & camera charges",
          "Flight / train fare to/from Jaipur",
          "Elephant ride at Amber Fort (optional)",
          "Personal expenses (shopping, spa, laundry)",
          "Travel insurance",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrival in Jaipur",
            description:
              "Arrive in Jaipur, the capital city of Rajasthan, also known as the 'Pink City'. Check-in to your hotel and freshen up. In the evening, visit the Birla Temple to witness the mesmerizing evening aarti ceremony. Enjoy a romantic dinner at a local restaurant.",
          },
          {
            day: "Day 2",
            title: "Explore Jaipur",
            description:
              "After breakfast, visit the Amber Fort. Take an elephant or jeep ride to the fort for a unique experience. Explore the City Palace, Jantar Mantar (astronomical observatory), and Hawa Mahal (Palace of Winds). Stroll through the vibrant markets of Jaipur and shop for traditional Rajasthani handicrafts and jewellery. Have dinner at a rooftop restaurant overlooking the city.",
          },
          {
            day: "Day 3",
            title: "Jaipur to Jodhpur (Drive)",
            description:
              "After breakfast, drive to Jodhpur, the 'Blue City' of Rajasthan. Check-in to your hotel and relax. In the evening, visit the majestic Mehrangarh Fort and enjoy panoramic views of the city. Explore the markets of Jodhpur and try some local cuisine for dinner.",
          },
          {
            day: "Day 4",
            title: "Jodhpur to Udaipur via Ranakpur (Drive)",
            description:
              "En route to Udaipur, visit the famous Jain Temples in Ranakpur, known for their intricate marble architecture. Continue your journey to Udaipur, the 'City of Lakes.' Check-in to your hotel, which may offer stunning lake views. Enjoy a romantic boat ride on Lake Pichola in the evening.",
          },
          {
            day: "Day 5",
            title: "Explore Udaipur",
            description:
              "After breakfast, explore the City Palace, Jagdish Temple, and Saheliyon Ki Bari (Garden of the Maids of Honor). Visit the mesmerizing Jag Mandir Island Palace in the middle of Lake Pichola. In the evening, watch a cultural performance at Bagore Ki Haveli. Enjoy a candlelit dinner by the lakeside.",
          },
          {
            day: "Day 6",
            title: "Udaipur to Pushkar (Drive)",
            description:
              "Drive to Pushkar, a sacred town known for its Brahma Temple and serene Pushkar Lake. Explore the temples and ghats around the lake. Enjoy a peaceful evening by the lake and attend the evening Aarti at Pushkar Ghats.",
          },
          {
            day: "Day 7",
            title: "Pushkar to Jaipur (Drive) and Departure",
            description:
              "Drive back to Jaipur. Depending on your departure time, you can visit some remaining attractions or do some last-minute shopping. Depart from Jaipur airport or railway station as per your schedule.",
          },
        ],
      },
      {
        id: "udaipur-mountabu-jodhpur",
        slug: "udaipur-mountabu-jodhpur",
        title: "Udaipur Mount Abu Jodhpur Tour Package",
        duration: "5 Nights / 6 Days",
        price: "₹17,499",
        originalPrice: "₹22,000",
        rating: 4.91,
        reviews: 119,
        badge: "Lakes & Hills",
        route: "Udaipur – Mount Abu – Jodhpur – Jaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        overview:
          "Rajasthan is known for preserving royal monuments and dedication to folk art. Each city retains its own unique beauty—from the romantic lakes and palaces of Udaipur to the misty green folds of Mount Abu (Rajasthan's only hill station) and the towering sandstone bastions of Jodhpur.",
        highlights: [
          "Udaipur City Palace, Lake Pichola boat ride & Jag Niwas Lake Palace",
          "Bagore Ki Haveli Rajput antique museum & evening folk dance show",
          "Vintage car collection at Garden Hotel & Shilpgram arts center",
          "Mount Abu Nakki Lake boating, Achalgarh Fort & Guru Shikhar",
          "Dilwara Temple white marble carvings of supreme spiritual significance",
          "Jodhpur Mehrangarh Fort 410 ft above city, Desert Rock Park & Jaswant Thada",
        ],
        inclusions: [
          "5 Nights accommodation on twin/double sharing basis",
          "Daily breakfast at hotels",
          "Private transportation using air-conditioned chauffeur-driven vehicle (AC on plains)",
          "24X7 assistance during the tour",
          "All requisite airport and railway station transfers",
          "Road taxes, parking fee, fuel charges, and interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fee and video camera charges",
          "Any optional activities or zip-lining at Mehrangarh Fort",
          "Any flight fare / train fare",
          "Early check-in / late check-out at hotels",
          "Tipping to guide, driver, etc.",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrival at Udaipur",
            description:
              "Udaipur, known as the 'Venice of the East', offers a captivating experience. Its charming manmade lakes, magnificent palaces that reflect the city's royal history, and lush greenery create a serene atmosphere that connects you with nature. Shielded by the Aravalli Hills, Udaipur effortlessly immerses you in its vibrant culture. Overnight stay in Udaipur.",
          },
          {
            day: "Day 2",
            title: "Udaipur Sightseeing",
            description:
              "Explore the splendid Udaipur City Palace standing tall above Lake Pichola, showcasing balconies, cupolas, and towers. Follow with a boat ride across Lake Pichola viewing the famous Jag Niwas Lake Palace. Visit Bagore Ki Haveli with its antique Rajput collections and evening folk music/dance performances. Tour the vintage car museum at Garden Hotel and conclude at Shilpgram crafts village.",
          },
          {
            day: "Day 3",
            title: "Drive to Mount Abu (3 Hours / 160 Kms Approx)",
            description:
              "Drive towards Mount Abu, the only hill station in Rajasthan adorned with lakes, waterfalls, rock formations, and ancient colonial bungalows. Stroll around Nakki Lake, explore the world-renowned Dilwara marble Jain Temples, Achalgarh Fort, Guru Shikhar peak, and witness sunset at Sunset Point. Overnight in Mount Abu.",
          },
          {
            day: "Day 4",
            title: "Mount Abu to Jodhpur (4 Hours / 260 Kms Approx)",
            description:
              "Drive through scenic desert roads to Jodhpur, the second-largest city in Rajasthan located at the edge of the Thar Desert. Check in to your hotel and take a leisurely walk through the iconic blue-painted Brahmin streets and vibrant local bazaars. Overnight in Jodhpur.",
          },
          {
            day: "Day 5",
            title: "Jodhpur Sightseeing",
            description:
              "Visit the magnificent Mehrangarh Fort perched 410 feet above the blue city, built by Rao Jodha in 1460. Explore its museum shops, palanquins, howdahs, and optional zip-lining on the north side. Walk through Rao Jodha Desert Rock Park, visit the famous Clock Tower market, and admire the sparkling white marble cenotaph at Jaswant Thada.",
          },
          {
            day: "Day 6",
            title: "Departure Jodhpur / Jaipur",
            description:
              "After breakfast, check out from the hotel. Chauffeur transfer provided to Jodhpur or Jaipur airport or railway station for onward flight or train back home.",
          },
        ],
      },
      {
        id: "jaipur-tour-package",
        slug: "jaipur-tour-package",
        title: "Jaipur Tour Package",
        duration: "2 Nights / 3 Days",
        price: "₹7,999",
        originalPrice: "₹10,500",
        rating: 4.89,
        reviews: 205,
        badge: "Weekend Special",
        route: "Jaipur – Amber Fort – City Palace – Nahargarh – Jaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        overview:
          "Jaipur, renowned for its architectural splendour and historical significance, is a true gem of Rajasthan. Over the years, this city has captivated countless tourists with its allure, pink sandstone facade, majestic hilltop forts, and rich heritage.",
        highlights: [
          "Amber Fort ancient capital with elephant/jeep ride & Sheesh Mahal",
          "Jal Mahal photo stop in Man Sagar Lake",
          "Maharaja’s City Palace, royal museum & Jantar Mantar UNESCO Observatory",
          "Sisodiya Rani Temple & Laxmi Narayan Temple (Birla Temple)",
          "Hawa Mahal photo stop and Johari Bazaar traditional shopping",
          "Optional Chokhi Dhani ethnic resort cultural evening",
        ],
        inclusions: [
          "2 Nights accommodation in 3-Star / 4-Star hotel",
          "Daily buffet breakfast at hotel",
          "Private AC vehicle with dedicated chauffeur for all sightseeing & transfers",
          "24X7 on-trip assistance",
          "All road taxes, parking fees, fuel charges, and interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fees and camera charges",
          "Elephant ride / jeep ride at Amber Fort",
          "Chokhi Dhani evening entry and dinner tickets",
          "Flight / train fare to/from Jaipur",
          "Personal expenses and driver tips",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrive Jaipur & Pink City Tour",
            description:
              "Arrive at Jaipur Railway Station or Airport and proceed to your hotel for check-in. In the afternoon, embark on a guided tour of the Pink City, founded by Maharaja Jai Singh 260 years ago. Visit Sisodiya Rani Temple, Laxmi Narayan Temple (Birla Temple), and photo stop at Hawa Mahal. In the evening, optional excursion to Chokhi Dhani ethnic resort for camel rides, puppet shows, and traditional Rajasthani dinner. Overnight in Jaipur.",
          },
          {
            day: "Day 2",
            title: "Jaipur Forts & Palaces Sightseeing",
            description:
              "In the morning, embark on a visit to the historic Amber Fort with optional elephant or jeep ride up to the main ramparts. Marvel at the sparkling Sheesh Mahal (Hall of Victory). Enjoy a photo stop at Jal Mahal in the middle of Man Sagar Lake, followed by Maharaja's City Palace and Jantar Mantar Observatory. Free evening for shopping colorful textiles, gemstones, and handicrafts at Johari Bazaar.",
          },
          {
            day: "Day 3",
            title: "Jaipur Drop & Departure",
            description:
              "After breakfast, check out from the hotel. Complete any remaining souvenir shopping or visit local craft centers, followed by on-time drop at Jaipur Airport or Railway Station for onward journey.",
          },
        ],
      },
      {
        id: "jaisalmer-desert-special",
        title: "Golden Sands of Jaisalmer & Sam Sand Dunes Safari",
        duration: "3 Nights / 4 Days",
        price: "₹11,499",
        originalPrice: "₹14,999",
        rating: 4.90,
        reviews: 138,
        badge: "Desert Magic",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        overview: "Experience the living golden fortress of Jaisalmer, intricately carved Patwon ki Haveli, and thrilling dune bashing under star-studded Thar desert skies.",
        highlights: ["1N Luxury Swiss Desert Camp with Campfire", "Thar Desert camel & 4x4 Jeep Safari", "Jaisalmer Golden Fort & Kuldhara ghost village", "Kalbelia traditional folk dance & buffet"],
        inclusions: ["2N Hotel + 1N Swiss Tent in Sam Dunes", "Breakfast, Dinner & Evening High Tea at Camp", "Camel Ride & Folk Entertainment", "Private Chauffeur Sedan/SUV"],
      },
      {
        id: "royal-rajasthan-grand-heritage",
        title: "Royal Rajasthan Grand Heritage Circuit (Jaipur, Pushkar, Jodhpur, Jaisalmer & Udaipur)",
        duration: "9 Nights / 10 Days",
        price: "₹36,999",
        originalPrice: "₹46,000",
        rating: 4.97,
        reviews: 210,
        badge: "Royal Grandeur",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        overview: "The ultimate royal voyage across the Land of Kings. Marvel at Jaipur's Amer Fort, holy Pushkar Lake, Jodhpur's blue Mehrangarh, golden Jaisalmer, and Udaipur's romantic Lake Pichola.",
        highlights: ["Comprehensive 5-city royal circuit", "Mehrangarh Fort & Jaswant Thada", "Lake Pichola sunset boat cruise in Udaipur", "Sam Sand Dunes royal camping experience", "Ranakpur 1444-pillar marble Jain Temple"],
        inclusions: ["9 Nights Luxury Accommodations", "Daily Buffet Breakfast & Dinners", "Private AC Cab for Complete 10-Day Road Journey", "All State Taxes, Tolls & Parking"],
      },
    ],
    faqs: [
      { question: "Is vegetarian food easily available in Rajasthan\?", answer: "Yes, Rajasthan has some of the richest vegetarian culinary traditions in India, including Dal Baati Churma, Ker Sangri, and Gatte ki Sabzi." },
      { question: "What is included in the Desert Camp experience?", answer: "Desert camp packages include welcome with dhol, evening tea & snacks, cultural Rajasthani dance, buffet dinner, camel ride, and private luxury Swiss tent stay." },
    ],
  },

  kerala: {
    slug: "kerala",
    name: "Kerala",
    title: "Kerala Tour Packages",
    tagline: "God's Own Country - Backwaters, Tea Hills & Ayurveda",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80",
    description:
      "Kerala, known as God’s Own Country, is a place that amazes every visitor. It was the first place in India where Vasco da Gama arrived, opening India to the western world. Every year, travelers visit Kerala to enjoy its natural beauty, peaceful backwaters, and relaxing atmosphere.",
    fullOverview: [
      "Kerala, known as God’s Own Country, is a place that amazes every visitor. It was the first place in India where Vasco da Gama arrived, opening India to the western world. Every year, more and more people visit Kerala to enjoy its natural beauty, peaceful backwaters, and relaxing atmosphere.",
      "With Travel Hawkers’ Kerala tour packages, you can explore famous places like Cochin, Munnar, Periyar, and Thiruvananthapuram.",
      "If you love offbeat destinations, we also take you to Kottayam and the sacred town of Guruvayoor, one of India’s most important pilgrimage sites. Enjoy the best travel deals and experience the serene beauty of Kerala with us!",
    ],
    bestTime: "September to March (Pleasant) & June to August (Monsoon Ayurveda)",
    startingPrice: "₹15,499",
    idealDuration: "5 Nights / 6 Days",
    rating: 4.92,
    reviewsCount: 340,
    keySpots: ["Munnar", "Alleppey", "Thekkady", "Kochi", "Kovalam", "Wayanad", "Varkala", "Guruvayoor"],
    highlights: [
      {
        title: "Exclusive Alleppey Houseboat Cruise",
        description: "Sail past palm-fringed canals, lush paddy fields, and enjoy fresh Karimeen fish prepared by your personal onboard chef.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Munnar Tea Plantations & Waterfalls",
        description: "Rolling emerald hills, Mattupetty Dam, tea factory museum, and spotting endangered Nilgiri Tahr at Eravikulam.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Thekkady Spice Plantation & Periyar Lake",
        description: "Guided spice garden walk discovering cardamom and cinnamon, boat safari in Periyar Tiger Reserve, and Kathakali show.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Cochin Arrival & Drive to Munnar", description: "Pickup from Cochin airport/railway station, scenic drive past Cheeyappara waterfalls, check-in to Munnar resort." },
      { day: "Day 2", title: "Munnar Tea Gardens & Eravikulam", description: "Visit Eravikulam National Park, Mattupetty Dam boating, Echo Point, and Tata Tea Museum." },
      { day: "Day 3", title: "Munnar to Thekkady (Periyar)", description: "Drive to Thekkady, spice plantation tour, elephant interaction, and boat ride in Periyar Lake wildlife sanctuary." },
      { day: "Day 4", title: "Thekkady to Alleppey Houseboat", description: "Board private AC deluxe houseboat at 12 PM. Cruise serene backwaters with traditional Kerala meals on board." },
      { day: "Day 5", title: "Alleppey to Cochin Sightseeing", description: "Disembark after breakfast. Drive to Fort Kochi to see Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue." },
      { day: "Day 6", title: "Cochin Airport Drop", description: "Souvenir shopping for Kerala banana chips and spices, transfer to Cochin International Airport for return flight." },
    ],
    packages: [
      {
        id: "kerala-tour-package",
        slug: "kerala-tour-package",
        title: "Kerala Tour Package",
        duration: "4 Nights / 5 Days",
        price: "₹14,499",
        originalPrice: "₹18,500",
        rating: 4.93,
        reviews: 167,
        badge: "Bestseller",
        route: "Cochin – Munnar – Alleppey – Cochin",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        overview:
          "Explore the signature highlights of Kerala. From Cochin's historic Jewish Synagogue and Dutch Palace to Munnar's rolling tea estates and an unforgettable overnight cruise on an authentic Kerala style houseboat in Alleppey.",
        highlights: [
          "Cochin Jewish Synagogue, Dutch Palace & Chinese Fishing Nets",
          "Scenic drive to Munnar past Cheeyappara tea gardens",
          "Eravikulam National Park Nilgiri Tahr habitat & Mattupetty Dam",
          "Alleppey traditional Kerala houseboat cruise with all onboard meals",
        ],
        inclusions: [
          "4 Nights accommodation on twin/double sharing (including Houseboat)",
          "Meals – Daily breakfast at hotels and all meals on Houseboat",
          "Private transportation using AC chauffeur-driven vehicle",
          "24X7 assistance during the tour",
          "All requisite airport and railway station transfers",
          "Road taxes, parking fees, fuel charges, and interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fee and video camera charges",
          "Any optional adventure activities",
          "Any flight fare / train fare",
          "Early check-in / late check-out at hotels",
          "Tipping to guide, driver, etc.",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrive Cochin",
            description:
              "On arrival meet and assist at Cochin airport by our representative and proceed to hotel, get a smooth check-in. In the afternoon, enjoy a city tour covering the Jewish Synagogue (built in 1568 with hand-painted Chinese blue-and-white tiles), St. Francis Church, Dutch Palace (Mattancherry Palace), and the famous cantilevered Chinese Fishing Nets. Overnight at hotel in Cochin.",
          },
          {
            day: "Day 2",
            title: "Cochin to Munnar by Drive",
            description:
              "Post breakfast check out from hotel and drive to Munnar (approx. 5.5 hrs). On the way marvel at lush green tea estates and Cheeyappara waterfalls. Reach Munnar, often celebrated as the Switzerland of India, and check-in to your scenic hill resort. Rest of the day free for leisure. Overnight at hotel in Munnar.",
          },
          {
            day: "Day 3",
            title: "Munnar Sightseeing Tour",
            description:
              "Post breakfast enjoy Munnar sightseeing. Start with the exotic Eravikulam National Park to spot rare mountain goats (Nilgiri Tahr). Visit Mattupetty Dam, Eco Point, and the Tata Tea Museum. In the evening explore the charming old town market of Munnar. Overnight at hotel in Munnar.",
          },
          {
            day: "Day 4",
            title: "Munnar to Alleppey Houseboat",
            description:
              "Post breakfast check out and drive to Alleppey (approx. 4.5 hrs), the 'Venice of the East'. Check-in to a traditional Kerala style Houseboat. Embark on a scenic cruise along vast stretches of palm-fringed backwaters and witness local village life. Freshly prepared lunch, evening tea with snacks, and candlelit dinner served on board. Overnight in houseboat.",
          },
          {
            day: "Day 5",
            title: "Alleppey to Cochin Departure",
            description:
              "Post breakfast disembark from houseboat and drive back to Cochin (approx. 1.5 hrs). Transfer on time to Cochin International Airport or Railway Station to board flight/train for onward journey.",
          },
        ],
      },
      {
        id: "kerala-honeymoon-tour-package",
        slug: "kerala-honeymoon-tour-package",
        title: "Kerala Honeymoon Tour Package",
        duration: "3 Nights / 4 Days",
        price: "₹16,499",
        originalPrice: "₹21,000",
        rating: 4.96,
        reviews: 138,
        badge: "Couples Special",
        route: "Cochin – Munnar – Alleppey – Cochin",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        overview:
          "The premier romantic escape in South India. Surrounded by mist-covered hills and emerald tea plantations in Munnar, followed by a romantic private houseboat cruise through the palm-fringed backwaters of Alleppey.",
        highlights: [
          "Romantic Munnar tea hill resort stay & Mattupetty Dam",
          "Eravikulam National Park & scenic Echo Point",
          "Private traditional Kerala houseboat in Alleppey with onboard meals",
          "Fort Kochi Dutch Palace & Chinese Fishing Nets sunset",
        ],
        inclusions: [
          "3 Nights accommodation on twin/double sharing (resort + houseboat)",
          "Meals – Daily breakfast & all meals on Houseboat",
          "Special honeymoon inclusions & private cab throughout",
          "24X7 assistance during the tour",
          "All airport / station transfers",
          "Tolls, parking fees, fuel & interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entry & camera fees",
          "Flight / train fare to/from Cochin",
          "Optional activities & personal expenses",
          "Driver/guide tips",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Cochin to Munnar by Drive",
            description:
              "On arrival meet our representative at Cochin airport and proceed to Munnar by drive (approx. 5 hrs). Munnar is surrounded by hills and lush tea plantations. Check-in at your romantic hill resort and unwind amidst fresh mountain air. Overnight at resort in Munnar.",
          },
          {
            day: "Day 2",
            title: "Munnar Sightseeing Tour",
            description:
              "Post breakfast enjoy Munnar sightseeing starting with Eravikulam National Park, home to the endangered Nilgiri Tahr. Visit Mattupetty Dam, Eco Point, and Tea Museum, followed by a romantic stroll in Munnar old town market. Overnight at hotel in Munnar.",
          },
          {
            day: "Day 3",
            title: "Munnar to Alleppey Houseboat",
            description:
              "Post breakfast drive to Alleppey (approx. 4.5 hrs). Check-in to your private traditional Kerala Houseboat. Enjoy an enchanting cruise along palm-fringed canals. Delicious Kerala lunch, evening tea/snacks, and dinner served on board. Overnight in houseboat.",
          },
          {
            day: "Day 4",
            title: "Alleppey to Cochin Sightseeing & Departure",
            description:
              "Post breakfast disembark from houseboat and proceed to Cochin (approx. 1.5 hrs). Enjoy a brief city tour of Fort Kochi: Jewish Synagogue, St. Francis Church, Dutch Palace, and Chinese Fishing Nets. On-time drop at Cochin airport or railway station.",
          },
        ],
      },
      {
        id: "beautiful-kerala-with-blackwaters",
        slug: "beautiful-kerala-with-blackwaters",
        title: "Beautiful Kerala with Blackwaters (Grand South India Circuit)",
        duration: "12 Nights / 13 Days",
        price: "₹38,999",
        originalPrice: "₹48,500",
        rating: 4.95,
        reviews: 92,
        badge: "Grand Circuit",
        route: "Cochin – Alleppey – Periyar – Madurai – Trichy – Pondicherry – Mahabalipuram – Chennai",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        overview:
          "The ultimate 13-day Grand South India expedition. Journey from Kerala's tranquil backwaters and Periyar wildlife sanctuary into Tamil Nadu's architectural wonders—Madurai Meenakshi temple, Trichy Rock Fort, French colonial Pondicherry, Mahabalipuram UNESCO shore temples, and Chennai.",
        highlights: [
          "Cochin Dutch Palace, Jewish Synagogue & Chinese fishing nets",
          "Alleppey private houseboat cruise with traditional Kerala cuisine",
          "Periyar Wildlife Sanctuary boat safari & spice plantations",
          "Madurai Meenakshi Amman Temple & Thirumalai Nayak Palace",
          "Trichy Rock Fort & Sri Ranganathaswamy Temple",
          "Pondicherry French quarter, Sri Aurobindo Ashram & Auroville Matrimandir",
          "Mahabalipuram UNESCO Shore Temple, Five Rathas & Arjuna's Penance",
          "Kanchipuram heritage silk temples & Chennai Marina Beach",
        ],
        inclusions: [
          "12 Nights accommodation on twin/double sharing basis",
          "Daily breakfast at all hotels and all meals on Alleppey houseboat",
          "Private transportation using AC chauffeur-driven vehicle throughout",
          "24X7 assistance during the tour",
          "All airport transfers (Cochin pickup and Chennai drop)",
          "Road taxes, parking fees, fuel charges, and interstate taxes",
          "All applicable Government taxes",
        ],
        exclusions: [
          "Monument entrance fees and camera charges",
          "Kathakali show and Periyar boat safari tickets (direct payment)",
          "Flight / train tickets",
          "Personal expenses and tips",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrive Cochin",
            description:
              "Meet and assist upon arrival at Cochin airport by Travel Hawkers representative and transfer to your hotel. Complete check-in formalities and relax at leisure. Overnight in Cochin.",
          },
          {
            day: "Day 2",
            title: "Cochin Sightseeing Tour",
            description:
              "Post breakfast visit the Jewish Synagogue, Dutch Palace (Mattancherry), spice market, St. Francis Church, and Chinese fishing nets. Evening optional Kathakali classical dance show. Overnight at hotel in Cochin.",
          },
          {
            day: "Day 3",
            title: "Cochin to Alleppey Houseboat",
            description:
              "Post breakfast drive to Alleppey backwaters (approx. 5 hrs). Check-in to your private houseboat and cruise through serene lagoons and canals with full onboard meals and stunning sunset views. Overnight in houseboat.",
          },
          {
            day: "Day 4",
            title: "Alleppey to Periyar / Thekkady",
            description:
              "Disembark after breakfast and drive to Periyar / Thekkady (approx. 5 hrs), the renowned Elephant and Tiger reserve. Enjoy an afternoon boat ride in Periyar Lake spotting wildlife and visit local spice plantations. Overnight in Periyar.",
          },
          {
            day: "Day 5",
            title: "Periyar to Madurai",
            description:
              "Drive across the Western Ghats to the ancient heritage city of Madurai on the Vaigai River (approx. 4 hrs). Check-in to hotel and relax. Overnight in Madurai.",
          },
          {
            day: "Day 6",
            title: "Madurai to Trichy",
            description:
              "Visit the world-renowned Meenakshi Amman Temple and Thirumalai Nayak Palace. Drive onward to Trichy (approx. 3 hrs). Check-in to hotel. Overnight in Trichy.",
          },
          {
            day: "Day 7",
            title: "Trichy Sightseeing",
            description:
              "Explore the magnificent Ranganathaswamy Temple on the Cauvery River, climb the 437 stone steps of the 83m high Rock Fort Temple, and visit Jambukeshwara temple. Overnight in Trichy.",
          },
          {
            day: "Day 8",
            title: "Trichy to Pondicherry via Thanjavur",
            description:
              "Drive to Pondicherry, en route visiting Thanjavur's 11th-century Chola masterpiece Brihadeeswarar Temple and royal palace. Arrive in the French colonial coastal town of Pondicherry. Overnight in Pondicherry.",
          },
          {
            day: "Day 9",
            title: "Pondicherry to Mahabalipuram",
            description:
              "Tour French quarter avenues, Sri Aurobindo Ashram, and Matrimandir at Auroville. Drive along the East Coast Road to Mahabalipuram (approx. 2 hrs). Overnight in Mahabalipuram.",
          },
          {
            day: "Day 10",
            title: "Mahabalipuram UNESCO Monuments",
            description:
              "Explore 7th-century Pallava rock-cut architecture: Shore Temple by the Bay of Bengal, Five Rathas, Krishna's Butterball, and Arjuna's Penance bas-relief. Overnight in Mahabalipuram.",
          },
          {
            day: "Day 11",
            title: "Mahabalipuram to Chennai via Kanchipuram",
            description:
              "Drive to Chennai via Kanchipuram silk city, visiting Ekambareswarar, Kamakshi Amman, and Varadharaja Perumal temples. Arrive in Chennai and check-in to hotel. Overnight in Chennai.",
          },
          {
            day: "Day 12",
            title: "Chennai City Tour",
            description:
              "Visit San Thome Cathedral Basilica, ancient Kapaleeshwarar Temple in Mylapore, and take an evening stroll along Marina Beach. Overnight in Chennai.",
          },
          {
            day: "Day 13",
            title: "Chennai Departure",
            description:
              "Post breakfast check out from hotel and transfer to Chennai International Airport for onward flight back home.",
          },
        ],
      },
      {
        id: "wayanad-nature-retreat",
        title: "Wayanad Wilderness & Coffee Plantation Retreat",
        duration: "3 Nights / 4 Days",
        price: "₹11,999",
        originalPrice: "₹15,000",
        rating: 4.89,
        reviews: 95,
        badge: "Nature Escape",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
        overview: "Nestled in the lush Western Ghats, unwind amidst mist-covered coffee estates, prehistoric Edakkal rock caves, and serene Banasura Sagar dam.",
        highlights: ["Stay in serene plantation eco-resort", "Edakkal Caves ancient rock petroglyphs", "Banasura Sagar Dam speedboating", "Soochipara cascading waterfalls"],
        inclusions: ["3 Nights Plantation Resort Stay", "Daily Breakfast & Dinner", "Dedicated AC Chauffeur Cab", "Calicut Airport / Railway Station Transfers"],
      },
      {
        id: "kovalam-kanyakumari-beach",
        title: "Exotic Kovalam Beach & Kanyakumari Sunset Tour",
        duration: "4 Nights / 5 Days",
        price: "₹15,999",
        originalPrice: "₹19,999",
        rating: 4.92,
        reviews: 130,
        badge: "Coastal Sunsets",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        overview: "Bask in the golden sunsets of Kovalam Lighthouse Beach, cruise the mangrove backwaters of Poovar Island, and witness the confluence of three oceans at Kanyakumari.",
        highlights: ["Kovalam crescent beach & Lighthouse viewpoint", "Poovar Golden Sand Beach mangrove boat cruise", "Kanyakumari Vivekananda Rock Memorial & sunset", "Padmanabhaswamy Temple Trivandrum visit"],
        inclusions: ["3N Kovalam + 1N Kanyakumari Beachfront Resorts", "Daily Buffet Breakfast", "Private AC Cab for All Sightseeing", "Trivandrum Airport Transfers"],
      },
    ],
    faqs: [
      { question: "What is the difference between Day Cruise and Overnight Houseboat\?", answer: "An overnight houseboat lets you sleep on the water in a private AC bedroom, enjoy candlelit dinner under the stars, and witness misty morning sunrises over the canals." },
      { question: "Is Kerala suitable for elderly travelers?", answer: "Yes, Kerala offers gentle travel with leisurely boat cruises, accessible hill stations, and world-renowned wellness rejuvenation." },
    ],
  },

  goa: {
    slug: "goa",
    name: "Goa",
    title: "Goa Tour Packages",
    tagline: "Sun-Kissed Beaches, Island Cruises & Portuguese Heritage",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=80",
    description:
      "Goa has been an active and popular travel destination for ages now. With time, the place itself has gained a lot of popularity, making it a hotspot for young travellers and newly married folks who are always on the lookout for Goa packages for couples.",
    fullOverview: [
      "Goa has been an active and popular travel destination for ages now. With time, the place itself has gained a lot of popularity, making it a hotspot for young travellers and newly married folks who are always on the lookout for Goa packages for couples.",
      "If you are planning on visiting the place, you can simply opt for Goa honeymoon packages or Goa vacation packages available online at the best prices at Travel Hawkers to have a comfortable and memorable vacation in this coastal state of India.",
      "From buzzing North Goa beaches with thrilling water sports to the tranquil golden sands of South Goa, historic UNESCO churches in Old Goa, and luxury catamaran cruises along the Mandovi River, we craft your dream coastal escape.",
    ],
    bestTime: "October to April (Beach Weather & Parties)",
    startingPrice: "₹8,999",
    idealDuration: "3 Nights / 4 Days",
    rating: 4.85,
    reviewsCount: 380,
    keySpots: ["Baga Beach", "Calangute", "Anjuna", "Panaji", "Old Goa Churches", "Dudhsagar Falls", "Grand Island", "Palolem"],
    highlights: [
      {
        title: "North Goa Beach Circuit & Water Sports",
        description: "Parasailing, jet skiing, banana rides at Calangute and Baga beach, followed by sunset vibes at Curlies Anjuna.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Mandovi River Sunset Cruise & Latin Quarter",
        description: "Evening music cruise on Mandovi River and photo walk through the colorful Portuguese villas of Fontainhas Panaji.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Grand Island Scuba & Snorkeling Excursion",
        description: "Boat ride with dolphin spotting, snorkeling, guided scuba diving with underwater video, and beach barbecue.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Goa & Beach Leisure", description: "Airport / Madgaon station pickup, check-in to 4-star resort near the beach, relax by pool, and evening sunset stroll at Calangute." },
      { day: "Day 2", title: "North Goa Sightseeing & Water Sports", description: "Visit historic Fort Aguada lighthouse, Baga beach water sports, Anjuna flea market, and Vagator cliff viewpoint." },
      { day: "Day 3", title: "South Goa Heritage & Sunset Cruise", description: "Visit Basilica of Bom Jesus and Se Cathedral in Old Goa, Mangueshi Temple, Miramar beach, and Mandovi river cruise." },
      { day: "Day 4", title: "Souvenir Shopping & Airport Drop", description: "Enjoy hearty buffet breakfast, shop for cashews and feni at Panaji market, and drop at Dabolim / MOPA airport." },
    ],
    packages: [
      {
        id: "goa-beach-delight",
        title: "Goa Beach Delight & Island Sightseeing",
        duration: "3 Nights / 4 Days",
        price: "₹8,999",
        originalPrice: "₹11,500",
        rating: 4.85,
        reviews: 240,
        badge: "Top Value",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        overview: "Stay in 4-star resort with swimming pool, North & South Goa sightseeing, and airport transfers.",
        highlights: ["4-Star beachside resort", "North & South Goa tours", "Mandovi sunset cruise", "Airport pick & drop"],
        inclusions: ["Resort with Swimming Pool", "Buffet Breakfast", "Private AC Cab for Sightseeing", "Airport Transfers"],
      },
      {
        id: "goa-honeymoon-tour-package",
        slug: "goa-honeymoon-tour-package",
        title: "Goa Honeymoon Tour Package",
        duration: "4 Nights / 5 Days",
        price: "₹18,499",
        originalPrice: "₹24,000",
        rating: 4.94,
        reviews: 145,
        badge: "Honeymoon Special",
        route: "North Goa – South Goa – Mandovi River – Grand Island",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        overview: "Celebrate love in India's coastal paradise! Beachfront luxury resort stay, romantic sunset cruise on the Mandovi River, private candlelight beach dinner with wine, couples photo sessions, and water sports.",
        highlights: [
          "Beachfront 4-star / 5-star resort with private beach access",
          "Candlelight beach dinner with complimentary cake and wine",
          "Mandovi River luxury sunset cruise with live Goan music",
          "North Goa romantic beaches: Vagator, Anjuna, and Baga",
          "South Goa Portuguese heritage: Basilica of Bom Jesus and Fontainhas",
          "Private AC sedan with dedicated chauffeur for all sightseeing",
        ],
        inclusions: [
          "4 Nights accommodation in deluxe sea-view resort room",
          "Daily buffet breakfast and 1 romantic candlelight dinner",
          "Special honeymoon inclusions: floral bed decoration, honeymoon cake & wine",
          "Private AC cab for full-day North Goa & South Goa sightseeing",
          "Tickets for Mandovi River 1-hour evening sunset music cruise",
          "Airport / Madgaon railway station pickup and drop by private AC vehicle",
          "All toll taxes, parking fees, and driver allowances",
        ],
        exclusions: [
          "Airfare / train tickets",
          "Water sports equipment & scuba diving charges",
          "Monument entry fees & personal expenses",
          "Lunch and beverages not specified in plan",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrival in Goa & Romantic Beach Welcome",
            description: "Meet and assist upon arrival at Goa Airport / Railway Station. Transfer to your luxury beachfront resort in private AC car. Check-in and relax. Enjoy romantic evening sunset walk along the beach followed by a special candlelight dinner.",
          },
          {
            day: "Day 2",
            title: "North Goa Beaches & Fort Aguada Sunset",
            description: "Post breakfast, explore North Goa: visit historic 17th-century Fort Aguada and lighthouse overlooking the Arabian Sea, Sinquerim beach, bustling Calangute, and vibrant Baga beach. Watch the sunset from the cliff tops of Vagator.",
          },
          {
            day: "Day 3",
            title: "South Goa Heritage & Mandovi River Sunset Cruise",
            description: "Visit the UNESCO World Heritage Basilica of Bom Jesus, Se Cathedral, and Mangueshi Temple. Stroll through the charming Latin Quarter of Fontainhas in Panaji. In the evening, board a luxury cruise on the Mandovi River with Goan folk dances and music.",
          },
          {
            day: "Day 4",
            title: "Dolphin Trip, Water Sports or Leisure Day",
            description: "Optional morning boat safari for dolphin spotting and water sports at Coco beach. Spend a relaxed afternoon together at the resort pool, beach shacks, or indulge in a rejuvenating couples Ayurvedic spa massage.",
          },
          {
            day: "Day 5",
            title: "Souvenir Shopping & Airport Departure",
            description: "Enjoy breakfast with ocean views. Check-out and take some time to shop for cashew nuts, feni, and Goan handicrafts in Panaji market. Transfer to Goa Airport (GOI/GOX) for onward flight with sweet memories.",
          },
        ],
      },
      {
        id: "goa-heritage-watersports",
        title: "Exotic North & South Goa Heritage & Grand Island Scuba",
        duration: "5 Nights / 6 Days",
        price: "₹17,499",
        originalPrice: "₹22,500",
        rating: 4.91,
        reviews: 165,
        badge: "Adventure & Island",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        overview: "The complete Goa vacation covering Grand Island scuba diving with underwater video, historic Old Goa churches, vibrant beach shacks, and Mandovi river cruise.",
        highlights: ["Grande Island boat trip with Scuba Diving & Dolphin sighting", "Fontainhas colorful Portuguese Latin Quarter photowalk", "North Goa Baga, Anjuna & Vagator sunset cliff", "Mandovi luxury river cruise ticket"],
        inclusions: ["5 Nights 4-Star Resort with Swimming Pool", "Daily Buffet Breakfast", "Grand Island Scuba Diving with Equipment & Video", "Private AC Cab for Transfers & Tours"],
      },
      {
        id: "goa-dudhsagar-adventure",
        title: "Goa Adventure & Dudhsagar Waterfalls Jungle Safari",
        duration: "4 Nights / 5 Days",
        price: "₹15,499",
        originalPrice: "₹19,500",
        rating: 4.88,
        reviews: 124,
        badge: "Jungle & Waterfalls",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        overview: "Head into the lush Western Ghats on a thrilling 4x4 open-top jeep safari to the cascading Dudhsagar Waterfalls, followed by authentic Goan spice plantation tour and beach relaxation.",
        highlights: ["4x4 Jeep Safari across Bhagwan Mahaveer Wildlife Sanctuary", "Swim at base of Dudhsagar 4-tiered waterfalls", "Traditional Goan buffet lunch at organic spice plantation", "Aguada Fort & Calangute beach leisure"],
        inclusions: ["4 Nights 4-Star Resort Accommodation", "Daily Breakfast + Spice Plantation Buffet Lunch", "Dudhsagar Jeep Safari & Forest Permits", "Airport Pick and Drop by Private AC Cab"],
      },
      {
        id: "goa-luxury-villa-retreat",
        title: "Goa Luxury Private Pool Villa & Yacht Experience",
        duration: "3 Nights / 4 Days",
        price: "₹28,999",
        originalPrice: "₹38,000",
        rating: 4.98,
        reviews: 82,
        badge: "Ultra Luxury",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        overview: "Indulge in an exclusive coastal getaway featuring a private luxury villa with private plunge pool, personal concierge, and a 2-hour private yacht cruise along the Arabian Sea.",
        highlights: ["Exclusive Private Luxury Villa with Swimming Pool", "2-Hour Private Yacht Charter with Champagne & Canapes", "Quiet pristine beaches of Morjim & Ashwem", "VIP reservations at top beach clubs"],
        inclusions: ["3 Nights Private Luxury Villa Stay", "Chef-prepared daily gourmet breakfast", "Private Yacht Sailing Charter in Arabian Sea", "Chauffeur-driven Innova Crysta for entire stay"],
      },
    ],
    faqs: [
      { question: "Which airport should we fly into: Dabolim or MOPA\?", answer: "Both airports are well connected. MOPA (GOX) is closer to North Goa (Baga, Calangute, Morjim), while Dabolim (GOI) is centrally located between North and South Goa." },
      { question: "Can we rent self-drive cars or scooters through Travel Hawkers?", answer: "Yes, we arrange verified self-drive hatchbacks, sedans, Thar 4x4s, and scooters delivered directly to your resort." },
    ],
  },

  ladakh: {
    slug: "ladakh",
    name: "Ladakh",
    title: "Ladakh Tour Packages",
    tagline: "The Land of High Mountain Passes & Azure Lakes",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=2000&q=80",
    description:
      "A trip to Leh Ladakh is a once-in-a-lifetime experience! This breathtaking destination has won the hearts of travelers and Bollywood alike, making it a dream place to visit. With its untouched beauty and stunning landscapes, Ladakh remains one of India’s most special travel spots.",
    fullOverview: [
      "A trip to Leh Ladakh is a once-in-a-lifetime experience! This breathtaking destination has won the hearts of travelers and even Bollywood, making it a dream place to visit. With its untouched beauty and stunning landscapes, Ladakh remains one of India’s most special travel spots.",
      "With Travel Hawkers’ Ladakh tour packages, explore the best of this magical land. From high mountain passes to clear blue lakes and ancient monasteries, Ladakh is a paradise for adventure lovers and nature seekers.",
      "Cross the world's highest motorable pass at Khardung La (18,380 ft), ride double-humped Bactrian camels on Hunder sand dunes, and camp beside the ever-changing shades of blue at Pangong Tso.",
    ],
    bestTime: "May to September (Roads open & pleasant daytime temperatures)",
    startingPrice: "₹22,999",
    idealDuration: "6 Nights / 7 Days",
    rating: 4.97,
    reviewsCount: 310,
    keySpots: ["Leh", "Pangong Tso", "Nubra Valley", "Khardung La", "Diskit Monastery", "Magnetic Hill", "Sangam", "Shanti Stupa"],
    highlights: [
      {
        title: "Pangong Tso Lake Camping",
        description: "Overnight stay in luxury dome tents beside the world's highest saltwater lake at 14,270 ft.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Nubra Valley & Hunder Sand Dunes",
        description: "Ride rare double-humped Bactrian camels across cold mountain sand dunes surrounded by snow peaks.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Khardung La Pass Crossing",
        description: "Cross one of the highest motorable mountain passes in the world at 18,380 ft with breathtaking vistas.",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Leh & Full Day Acclimatization", description: "Flight into Kushok Bakula Rimpochee Airport. Rest completely to adapt to high altitude. Evening visit to Shanti Stupa." },
      { day: "Day 2", title: "Sham Valley Sightseeing (Hall of Fame & Sangam)", description: "Visit Hall of Fame museum, Magnetic Hill gravity phenomenon, Gurudwara Pathar Sahib, and Indus-Zanskar confluence." },
      { day: "Day 3", title: "Leh to Nubra Valley via Khardung La", description: "Drive over Khardung La (18,380 ft). Visit giant Maitreya Buddha at Diskit Monastery and camel ride in Hunder dunes." },
      { day: "Day 4", title: "Nubra Valley to Pangong Tso via Shyok", description: "Scenic offbeat drive along the Shyok River. Arrive at surreal Pangong Tso, check-in to luxury lakeside dome tents." },
      { day: "Day 5", title: "Pangong Tso to Leh via Chang La", description: "Witness magical sunrise over the lake, cross Chang La (17,590 ft), visit Thiksey Monastery, return to Leh." },
      { day: "Day 6", title: "Leh Local Shopping & Departure Preparation", description: "Visit Leh Palace, shop for Ladakhi apricots, prayer wheels, and pashmina shawls in the main bazaar." },
      { day: "Day 7", title: "Leh Airport Drop", description: "Morning checkout and transfer to Leh airport for early morning scenic flight back to Delhi." },
    ],
    packages: [
      {
        id: "ladakh-tour-via-nubra-valley",
        slug: "ladakh-tour-via-nubra-valley",
        title: "Ladakh Tour via Nubra Valley",
        duration: "6 Nights / 7 Days",
        price: "₹24,999",
        originalPrice: "₹31,000",
        rating: 4.98,
        reviews: 184,
        badge: "Top Rated",
        route: "Leh – Sangam – Magnetic Hill – Nubra Valley – Pangong Lake – Leh",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
        overview:
          "A once-in-a-lifetime Himalayan adventure. Cross the world's highest motorable road at Khardung La (18,380 ft), ride double-humped Bactrian camels in Hunder sand dunes, camp beside the crystal waters of Pangong Lake, and explore ancient Buddhist monasteries.",
        highlights: [
          "Khardung La Pass (18,380 ft) world's highest motorable pass crossing",
          "Nubra Valley white sand dunes & Bactrian double-humped camel safari",
          "Pangong Tso Lake magical lakeside camp stay under starry skies",
          "Indus & Zanskar River Sangam, Magnetic Hill & Gurudwara Patthar Sahib",
          "Indian Army Hall of Fame, Leh Palace & Shanti Stupa sunset panorama",
        ],
        inclusions: [
          "Dedicated private SUV (Xylo / Scorpio / Tempo Traveler) throughout",
          "Daily breakfast & dinner in all hotels and luxury camps",
          "24X7 assistance during the tour",
          "All sightseeing spots covered as per itinerary",
          "Driver beta/toll/parking/road tax/fuel charges",
          "Basic first aid kit with emergency oxygen support guidance",
        ],
        exclusions: [
          "Airfare / Train tickets to/from Leh",
          "Ladakh Environment Fee & Wildlife Permit (INR 600 per person)",
          "Camel ride at Hunder sand dunes",
          "Personal shopping, heater charges, and tips",
          "Cost arising from landslides / weather delays",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrival In Leh & Full Day Acclimatization",
            description:
              "On arrival at Leh airport meet our representative who will transfer you to your hotel in Leh. Since you are reaching an altitude of 4000 meters from plains, complete rest is strictly advised for full body acclimatization. Dinner and overnight stay at hotel in Leh.",
          },
          {
            day: "Day 2",
            title: "Sangam, Gurudwara Patthar Sahib, Hall of Fame & Magnetic Hill",
            description:
              "Post breakfast drive to Sangam (confluence of Indus and Zanskar rivers). Experience the gravity-defying phenomenon at Magnetic Hill. Visit the sacred Gurudwara Patthar Sahib (built in 1517 celebrating Guru Nanak Dev's visit). On return, pay homage at the Indian Army Hall of Fame museum. Dinner and overnight in Leh.",
          },
          {
            day: "Day 3",
            title: "Leh to Nubra Valley via Khardungla Pass (140 Kms / 5-6 Hrs)",
            description:
              "Drive over Khardungla Pass (18,380 ft above sea level) - the world's highest motorable road. Arrive in the scenic Nubra Valley and explore the white sand dunes at Hunder. Enjoy optional Bactrian double-humped camel rides. Check-in to comfortable camp or hotel. Dinner and overnight stay.",
          },
          {
            day: "Day 4",
            title: "Nubra Valley to Pangong Lake via Shyok (150 Kms / 5-6 Hrs)",
            description:
              "Visit Diskit Monastery with its majestic Maitreya Buddha statue. Proceed on the scenic offbeat route to Pangong Lake via Shyok. Arrive at the breathtaking turquoise lake surrounded by rugged mountains. Check-in to lakeside camps. Dinner and overnight stay under the stars.",
          },
          {
            day: "Day 5",
            title: "Pangong Lake to Leh",
            description:
              "Witness mesmerizing sunrise reflections over Pangong Lake. After breakfast, journey back to Leh across Chang La Pass (17,590 ft). Evening free at leisure to stroll through Leh town. Dinner and overnight stay at hotel in Leh.",
          },
          {
            day: "Day 6",
            title: "Leh Palace, Shanti Stupa & Local Market",
            description:
              "Morning at leisure. After lunch, visit Japanese Peace Pagoda (Shanti Stupa) offering panoramic 360-degree views of Leh town and snow peaks. Explore 17th-century nine-storied Leh Palace (Lechen Palkhar) and shop for Tibetan silver, pashmina, and dried fruits. Overnight in Leh.",
          },
          {
            day: "Day 7",
            title: "Leh Departure",
            description:
              "Early morning checkout and transfer to Kushok Bakula Rimpochee Airport for onward flight back to Delhi.",
          },
        ],
      },
      {
        id: "leh-ladakh-tour-package",
        slug: "leh-ladakh-tour-package",
        title: "Leh Ladakh Tour Package",
        duration: "4 Nights / 5 Days",
        price: "₹18,499",
        originalPrice: "₹23,500",
        rating: 4.92,
        reviews: 126,
        badge: "Essential Ladakh",
        route: "Leh – Sangam – Pangong Lake – Khardungla Top – Leh",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
        overview:
          "An ideal short Himalayan escape to experience the premier highlights of Ladakh. Visit the sacred Indus-Zanskar confluence, mysterious Magnetic Hill, take a full-day excursion to Pangong Lake across Changla Pass, and ascend Khardungla Top.",
        highlights: [
          "Day trip to Pangong Lake via Changla Pass (17,590 ft)",
          "Excursion to Khardungla Top (18,380 ft) Guinness World Record pass",
          "Indus & Zanskar Sangam, Magnetic Hill & Gurudwara Patthar Sahib",
          "Indian Army Hall of Fame museum & Leh local market",
        ],
        inclusions: [
          "4 Nights hotel accommodation in Leh",
          "Daily breakfast & dinner in all hotels",
          "Dedicated private SUV (Xylo / Scorpio) for all sightseeing",
          "24X7 on-trip assistance",
          "All toll taxes, parking fees, driver DA, and fuel",
          "Basic first aid kit",
        ],
        exclusions: [
          "Airfare / train charges",
          "Ladakh Environment Fee (INR 600 per person)",
          "Personal expenses, heater charges & shopping",
          "Unforeseen costs due to weather delays",
        ],
        fullItinerary: [
          {
            day: "Day 1",
            title: "Arrival In Leh",
            description:
              "Transfer from Leh airport to hotel. Full day rest for body acclimatization to high altitude (11,500 ft). Dinner and overnight stay at hotel in Leh.",
          },
          {
            day: "Day 2",
            title: "Sangam, Magnetic Hill, Gurudwara Patthar Sahib & Hall of Fame",
            description:
              "Excursion to the scenic Indus-Zanskar confluence at Nimu. Test the gravitational pull at Magnetic Hill, pray at Gurudwara Patthar Sahib, and tour the Indian Army Hall of Fame museum. Return to Leh for dinner and overnight.",
          },
          {
            day: "Day 3",
            title: "Excursion to Pangong Lake (140 Kms one way)",
            description:
              "Early morning drive to the world-famous Pangong Lake across Changla Pass (17,590 ft). Spend hours soaking in the breathtaking changing shades of blue. Return in the evening to Leh for dinner and overnight stay.",
          },
          {
            day: "Day 4",
            title: "Trip to Khardungla Top",
            description:
              "Ascend to Khardungla Top (18,380 ft) - the world's highest motorable pass recorded in the Guinness Book of Records. Enjoy pristine snow views. Return in afternoon to Leh for market exploration, dinner, and overnight.",
          },
          {
            day: "Day 5",
            title: "Leh Departure",
            description:
              "Transfer on time to Leh airport to board flight back to Delhi.",
          },
        ],
      },
      {
        id: "ladakh-glimpse",
        title: "Glimpse of Ladakh (Leh City & Sham Valley Special)",
        duration: "4 Nights / 5 Days",
        price: "₹16,999",
        originalPrice: "₹21,500",
        rating: 4.89,
        reviews: 98,
        badge: "Short Circuit",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
        overview: "Ideal for travelers with limited days who want to experience the spiritual serenity, Indus-Zanskar confluence, Magnetic Hill, and high-altitude mountain air of Leh.",
        highlights: ["Leh Palace & Shanti Stupa panoramic sunsets", "Indus & Zanskar river confluence at Sangam", "Gravity-defying Magnetic Hill & Gurudwara Pathar Sahib", "Tibetan handicraft shopping in Leh Main Bazaar"],
        inclusions: ["4 Nights in Premium Leh Hotel", "Daily Breakfast & Dinner", "Dedicated Private SUV for All Sightseeing", "Airport Pick & Drop with Oxygen Cylinder Support"],
      },
      {
        id: "ladakh-bike-safari",
        title: "Ultimate Ladakh Himalayan Bike Safari (Royal Enfield)",
        duration: "7 Nights / 8 Days",
        price: "₹34,999",
        originalPrice: "₹42,000",
        rating: 4.98,
        reviews: 140,
        badge: "Royal Enfield Safari",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
        overview: "Ride the highest motorable passes in the world on a 500cc Royal Enfield Himalayan. Traverse Khardung La, Chang La, Nubra Valley sand dunes, and the turquoise shores of Pangong Tso.",
        highlights: ["Royal Enfield 500cc / Himalayan with Fuel Included", "Dedicated Support Truck with Marshall & Mechanic", "Crossing Khardung La (18,380 ft) & Chang La", "Turtuk - northernmost Balti border village"],
        inclusions: ["7 Nights Stays (Hotels & Swiss Camps)", "Daily Breakfast & Dinner", "Royal Enfield Bike + Helmet + Riding Gear", "Backup Support Vehicle with Spare Parts & Oxygen"],
      },
      {
        id: "ladakh-luxury-honeymoon",
        title: "Romantic Ladakh Honeymoon with Luxury Nubra Camps",
        duration: "6 Nights / 7 Days",
        price: "₹32,500",
        originalPrice: "₹40,000",
        rating: 4.97,
        reviews: 86,
        badge: "Luxury Glamping",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
        overview: "A romantic high-altitude escape with heated luxury glamping tents in Nubra Valley, candlelight dinner under a canopy of stars, and private cottage stay by Pangong Lake.",
        highlights: ["Luxury heated glamping tents in Hunder Nubra", "Pangong Lake sunrise view from private cottage", "Private chauffeur Innova Crysta for exclusive travel", "Special candlelight dinner with Kashmiri wine"],
        inclusions: ["6 Nights Luxury Accommodations & Camps", "Daily Gourmet Breakfast & Dinner", "Dedicated Private Innova Crysta throughout", "Inner Line Permits & Wildlife Fees Included"],
      },
    ],
    faqs: [
      { question: "Why is acclimatization necessary in Leh?", answer: "Leh is situated at 11,500 ft above sea level. Taking 24 to 36 hours of complete rest on Day 1 helps prevent Acute Mountain Sickness (AMS)." },
      { question: "Is oxygen support provided during the tour?", answer: "Yes, all Travel Hawkers private vehicles in Ladakh carry emergency oxygen cylinders and first-aid kits at all times." },
    ],
  },

  "golden-triangle": {
    slug: "golden-triangle",
    name: "Golden Triangle",
    title: "Golden Triangle Tour Packages",
    tagline: "Delhi, Agra & Jaipur - India's Premier Heritage Circuit",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=80",
    description:
      "The Golden Triangle is one of India’s most famous travel routes, covering three amazing cities—Delhi, Agra, and Jaipur. This tour gives you a glimpse of India’s rich history, culture, and architectural beauty.",
    fullOverview: [
      "The Golden Triangle is one of India’s most famous travel routes, covering three amazing cities—Delhi, Agra, and Jaipur. This tour gives you a glimpse of India’s rich history, culture, and beauty.",
      "Delhi, the capital of India, is a mix of old and new, with historic monuments like Qutub Minar and modern attractions.",
      "Agra is home to the world-famous Taj Mahal, a symbol of eternal love from the Mughal era, and the imposing red sandstone Agra Fort.",
      "Jaipur, the capital of Rajasthan, is known for its royal palaces, colorful markets, and grand hill forts.",
      "India is a land of many cultures and traditions. The Golden Triangle Tour is designed to show you the best parts of the country while capturing its diversity. Let Travel Hawkers take you on this unforgettable journey!",
    ],
    bestTime: "October to March (Ideal sightseeing weather)",
    startingPrice: "₹12,999",
    idealDuration: "4 Nights / 5 Days",
    rating: 4.89,
    reviewsCount: 220,
    keySpots: ["Delhi (Qutub Minar, India Gate)", "Agra (Taj Mahal, Agra Fort)", "Fatehpur Sikri", "Jaipur (Amer Fort, Hawa Mahal, City Palace)"],
    highlights: [
      {
        title: "Sunrise at the Immortal Taj Mahal",
        description: "Witness the morning sun illuminate the pristine white marble of the world's greatest monument of love.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Amber Palace & Hawa Mahal in Jaipur",
        description: "Ride up to the hilltop Amer Fort, photograph the honeycomb facade of Hawa Mahal, and visit Jantar Mantar observatory.",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Old & New Delhi City Tour",
        description: "Drive past Rashtrapati Bhavan, India Gate, visit Qutub Minar, and experience the historic lanes of Chandni Chowk.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing & Drive to Agra", description: "Pickup from Delhi hotel/airport. Visit Qutub Minar, India Gate, Lotus Temple. Afternoon smooth drive to Agra via Yamuna Expressway." },
      { day: "Day 2", title: "Taj Mahal Sunrise & Agra Fort", description: "Early morning sunrise tour of Taj Mahal. Visit Agra Fort, Mehtab Bagh sunset viewpoint, and marble inlay workshops." },
      { day: "Day 3", title: "Agra to Jaipur via Fatehpur Sikri", description: "Drive to Jaipur stopping at UNESCO world heritage city of Fatehpur Sikri (Buland Darwaza). Check-in to Jaipur hotel." },
      { day: "Day 4", title: "Jaipur Royal Heritage Tour", description: "Full day tour: Amber Fort jeep ride, Jal Mahal, City Palace museum, Jantar Mantar observatory, and photo stop at Hawa Mahal." },
      { day: "Day 5", title: "Jaipur to Delhi Return Drop", description: "Breakfast, visit Birla Temple, souvenir shopping for gems and textiles, and comfortable return drive to Delhi airport." },
    ],
    packages: [
      {
        id: "classic-golden-triangle",
        title: "Classic Golden Triangle (Delhi, Agra & Jaipur)",
        duration: "4 Nights / 5 Days",
        price: "₹12,999",
        originalPrice: "₹16,000",
        rating: 4.89,
        reviews: 175,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        overview: "2N Jaipur, 1N Agra, 1N Delhi with dedicated English-speaking guides and private AC cab.",
        highlights: ["Taj Mahal sunrise tour", "Amer Fort jeep ride", "Yamuna & NE4 expressways", "Certified monument guides"],
        inclusions: ["4-Star Hotel Accommodations", "Daily Buffet Breakfast", "Private AC Chauffeur Cab", "All Expressway Tolls"],
      },
      {
        id: "golden-triangle-ranthambore",
        title: "Golden Triangle with Ranthambore Royal Bengal Tiger Safari",
        duration: "6 Nights / 7 Days",
        price: "₹24,500",
        originalPrice: "₹31,000",
        rating: 4.94,
        reviews: 142,
        badge: "Heritage & Wildlife",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        overview: "Combine India's legendary architectural circuit with thrilling wildlife safaris in Ranthambore National Park, home to the elusive Royal Bengal Tiger.",
        highlights: ["Taj Mahal sunrise & Agra Fort UNESCO heritage", "2 Open-Top Canter/Gypsy Jungle Safaris in Ranthambore", "Jaipur Amer Fort jeep ascent & City Palace", "Fatehpur Sikri Buland Darwaza visit"],
        inclusions: ["6 Nights 4-Star Stays (Delhi, Agra, Ranthambore, Jaipur)", "Daily Buffet Breakfast & All Meals in Ranthambore", "2 Tiger Safaris with Forest Permits & Naturalist Guide", "Private AC Cab with Chauffeur for Entire Circuit"],
      },
      {
        id: "golden-triangle-amritsar",
        title: "Golden Triangle with Amritsar Golden Temple & Wagah Border",
        duration: "6 Nights / 7 Days",
        price: "₹22,999",
        originalPrice: "₹28,500",
        rating: 4.93,
        reviews: 118,
        badge: "Spiritual Heritage",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
        overview: "Witness the magnificent Taj Mahal and royal forts of Rajasthan, complemented by the spiritual aura of Amritsar's Golden Temple and the patriotic energy of Wagah Border.",
        highlights: ["Golden Temple night Palki Sahib ceremony", "High-energy Wagah Border Indo-Pak retreat ceremony", "Taj Mahal sunrise & Amer Fort jeep ride", "Qutub Minar & Delhi monuments"],
        inclusions: ["6 Nights Accommodations in 4-Star Hotels", "Daily Buffet Breakfast", "AC Express Train / Private Cab to Amritsar", "Private AC Chauffeur Cab for All Sightseeing"],
      },
      {
        id: "express-golden-triangle",
        title: "Express Golden Triangle Tour (Delhi, Agra & Jaipur)",
        duration: "3 Nights / 4 Days",
        price: "₹11,999",
        originalPrice: "₹15,000",
        rating: 4.87,
        reviews: 160,
        badge: "Fast Track",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        overview: "A perfectly paced express tour for travelers wanting to see the Taj Mahal, Agra Fort, and the Pink City of Jaipur via modern expressways in just 4 days.",
        highlights: ["Speedy travel via Yamuna & NE4 Expressways", "Taj Mahal & Agra Fort UNESCO tours", "Amber Fort, Hawa Mahal & City Palace in Jaipur", "Door-to-door private AC cab pickup from Delhi"],
        inclusions: ["3 Nights Hotel Stays (1N Agra + 2N Jaipur)", "Daily Breakfast at Hotels", "Private AC Chauffeur Cab for All Travel", "All Expressway Tolls, Parking & Driver DA"],
      },
    ],
    faqs: [
      { question: "Is Taj Mahal closed on any day\?", answer: "Yes, the Taj Mahal is closed for tourists every Friday. We plan your itinerary so your visit falls between Saturday and Thursday." },
      { question: "How are the road conditions between Delhi, Agra, and Jaipur?", answer: "Road conditions are world-class via the 6-lane Yamuna Expressway (Delhi-Agra) and Delhi-Mumbai Expressway (Delhi-Jaipur)." },
    ],
  },

  "same-day": {
    slug: "same-day",
    name: "Same Day Tours",
    title: "Same Day Tour Packages",
    tagline: "Quick, Exciting 1-Day Road Trips from Delhi NCR",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=80",
    description:
      "Short on time but eager to explore? Travel Hawkers’ Same Day Tour Packages are perfect for travelers who want to experience the best of India in just one day with doorstep pickup and drop in Delhi NCR.",
    fullOverview: [
      "Short on time but eager to explore? Travel Hawkers’ Same Day Tour Packages are perfect for travelers who want to experience the best of India in just one day. Whether you’re a history lover, a nature enthusiast, or an adventure seeker, we have quick and exciting tours designed just for you!",
      "Popular Same Day Tours include Same Day Delhi City Tour, Same Day Agra Taj Mahal Express, Same Day Jaipur Pink City Tour, Same Day Mathura-Vrindavan Temple Pilgrimage, and Same Day Haridwar-Rishikesh Ganga Aarti.",
      "With Travel Hawkers, enjoy hassle-free door-to-door transportation in clean, sanitized private AC cabs, knowledgeable local guides, and a seamless 1-day experience without needing hotel stays!",
    ],
    bestTime: "Year-Round (Weekend Friendly & Daily Departures)",
    startingPrice: "₹3,499",
    idealDuration: "1 Day (12 to 14 Hours)",
    rating: 4.85,
    reviewsCount: 190,
    keySpots: ["Agra (Taj Mahal)", "Mathura & Vrindavan", "Jaipur Express", "Haridwar & Rishikesh", "Delhi Full Day"],
    highlights: [
      {
        title: "Same Day Agra Taj Mahal Express",
        description: "Early morning pickup via Yamuna Expressway, visit Taj Mahal, Agra Fort, Mughlai lunch, and return home by 9 PM.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Same Day Mathura-Vrindavan Spiritual Yatra",
        description: "Visit Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir light and fountain show, returning same night.",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Same Day Haridwar & Rishikesh Ganga Aarti",
        description: "Visit Har Ki Pauri, Mansa Devi ropeway, Ram Jhula & Laxman Jhula, and witness the magical evening Ganga Aarti.",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    itinerary: [
      { day: "06:00 AM", title: "Doorstep Pickup across Delhi NCR", description: "Sanitized private AC sedan/SUV arrives at your home/hotel in Delhi, Gurugram, or Noida." },
      { day: "09:30 AM", title: "Destination Arrival & Guided Tour", description: "Fast expressway travel. Meet certified local guide and explore primary monuments and temples." },
      { day: "01:30 PM", title: "Authentic Local Lunch Break", description: "Enjoy lunch at handpicked restaurants (Petha in Agra, Kachori in Jaipur, or satvik thali in Vrindavan)." },
      { day: "03:30 PM", title: "Secondary Sightseeing & Local Bazaars", description: "Explore secondary forts, scenic viewpoints, or local handicraft markets." },
      { day: "06:30 PM", title: "Evening Highlights / Sunset & Return", description: "Attend evening Aarti or sunset view, board vehicle for smooth expressway drive back." },
      { day: "10:30 PM", title: "Comfortable Doorstep Drop", description: "Arrive back safely at your residence or airport in Delhi NCR." },
    ],
    packages: [
      {
        id: "same-day-agra",
        title: "Same Day Agra Taj Mahal Tour by Private Car",
        duration: "1 Day (Same Day)",
        price: "₹4,499",
        originalPrice: "₹5,500",
        rating: 4.92,
        reviews: 140,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        overview: "Taj Mahal, Agra Fort, Mehtab Bagh with doorstep pickup & drop in Delhi NCR via Yamuna Expressway.",
        highlights: ["Taj Mahal & Agra Fort", "Yamuna Expressway tolls included", "Doorstep pickup in NCR", "English-speaking guide"],
        inclusions: ["Private Dedicated AC Cab", "All Expressway Tolls & Parking", "Experienced Chauffeur DA", "Doorstep Pickup & Drop"],
      },
      {
        id: "same-day-mathura",
        title: "Same Day Mathura & Vrindavan Temple Darshan",
        duration: "1 Day (Same Day)",
        price: "₹3,999",
        originalPrice: "₹4,800",
        rating: 4.88,
        reviews: 95,
        badge: "Spiritual Special",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
        overview: "Visit Krishna Janmasthan, Banke Bihari temple, ISKCON, and Prem Mandir musical fountain light show.",
        highlights: ["Krishna Janmabhoomi", "Banke Bihari VIP Darshan guidance", "Prem Mandir evening lights", "Clean AC cab"],
        inclusions: ["Private AC Car", "All Tolls & Parking", "Chauffeur Allowance", "Doorstep Pickup & Drop"],
      },
      {
        id: "same-day-jaipur",
        title: "Same Day Jaipur Express via NE4 Expressway",
        duration: "1 Day (Same Day)",
        price: "₹5,499",
        originalPrice: "₹6,800",
        rating: 4.86,
        reviews: 70,
        badge: "Fast Track",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
        overview: "Reach Jaipur in just 3.5 hrs via Delhi-Mumbai Expressway. Visit Amber Fort, Jal Mahal, and City Palace in one day.",
        highlights: ["3.5 hours drive via NE4", "Amber Fort & Hawa Mahal", "Pink City markets", "Return same night"],
        inclusions: ["Private Sedan / SUV", "All NE4 Tolls & Parking", "Professional Chauffeur", "Delhi NCR Pickup"],
      },
    ],
    faqs: [
      { question: "What time does the Same Day Agra tour start?", answer: "Tours typically depart between 6:00 AM and 7:00 AM to beat traffic and arrive at the Taj Mahal before peak afternoon crowds." },
      { question: "Are toll taxes and parking charges included in the same-day price?", answer: "Yes, our same-day tour quotes are completely all-inclusive with state road tax, Yamuna/NE4 expressway tolls, parking fees, and driver DA." },
    ],
  },
};

export function getPackageBySlug(slug: string) {
  for (const destination of Object.values(DOMESTIC_DESTINATIONS)) {
    const pkg = destination.packages.find((p) => p.slug === slug || p.id === slug);
    if (pkg) {
      return { pkg, destination };
    }
  }
  return null;
}

export function getPackagesByDestination(destinationSlug: string) {
  const destination = DOMESTIC_DESTINATIONS[destinationSlug];
  return destination ? destination.packages : [];
}
