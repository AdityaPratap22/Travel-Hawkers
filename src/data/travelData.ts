export interface Destination {
  id: string;
  name: string;
  packagesCount: string;
  image: string;
  tag?: string;
}

export interface PackageItem {
  id: string;
  title: string;
  duration: string;
  nights: number;
  days: number;
  badge: {
    label: string;
    color: string;
  };
  amenities: string[];
  price: number;
  originalPrice?: number;
  image: string;
  destination: string;
}

export interface Experience {
  id: string;
  title: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  readTime: string;
  slug: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "leh-ladakh",
    name: "Leh Ladakh",
    packagesCount: "25+ Packages",
    image: "/images/ladakh/hero.webp",
  },
  {
    id: "bali",
    name: "Bali",
    packagesCount: "18+ Packages",
    image: "/images/international/bali_uluwatu.webp",
  },
  {
    id: "dubai",
    name: "Dubai",
    packagesCount: "30+ Packages",
    image: "/images/international/dubai_burj_khalifa.webp",
  },
  {
    id: "goa",
    name: "Goa",
    packagesCount: "15+ Packages",
    image: "/images/goa/hero.webp",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    packagesCount: "12+ Packages",
    image: "/images/rajasthan/hawa_mahal.webp",
  },
  {
    id: "kerala",
    name: "Kerala",
    packagesCount: "16+ Packages",
    image: "/images/kerala/hero.webp",
  },
  {
    id: "thailand",
    name: "Thailand",
    packagesCount: "22+ Packages",
    image: "/images/international/thailand_phi_phi.webp",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    packagesCount: "14+ Packages",
    image: "/images/kashmir/dal_lake_shikara.webp",
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "goa-getaway",
    title: "Goa Getaway",
    duration: "3 Nights 4 Days",
    nights: 3,
    days: 4,
    badge: {
      label: "Bestseller",
      color: "bg-blue-600 text-white",
    },
    amenities: ["Hotel", "Sightseeing", "Transfers"],
    price: 12999,
    image: "/images/goa/baga_beach.webp",
    destination: "Goa",
  },
  {
    id: "bali-bliss",
    title: "Bali Bliss",
    duration: "5 Nights 6 Days",
    nights: 5,
    days: 6,
    badge: {
      label: "Popular",
      color: "bg-rose-500 text-white",
    },
    amenities: ["Hotel", "Sightseeing", "Transfers"],
    price: 54999,
    image: "/images/international/bali_tegalalang.webp",
    destination: "Bali",
  },
  {
    id: "leh-ladakh-escape",
    title: "Leh Ladakh Escape",
    duration: "6 Nights 7 Days",
    nights: 6,
    days: 7,
    badge: {
      label: "Adventure",
      color: "bg-sky-600 text-white",
    },
    amenities: ["Hotel", "Sightseeing", "Transfers"],
    price: 28999,
    image: "/images/ladakh/pangong_lake.webp",
    destination: "Leh Ladakh",
  },
  {
    id: "dubai-special",
    title: "Dubai Special",
    duration: "4 Nights 5 Days",
    nights: 4,
    days: 5,
    badge: {
      label: "Trending",
      color: "bg-indigo-600 text-white",
    },
    amenities: ["Hotel", "Sightseeing", "Transfers"],
    price: 49999,
    image: "/images/international/dubai_desert_safari.webp",
    destination: "Dubai",
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Paradise",
    duration: "5 Nights 6 Days",
    nights: 5,
    days: 6,
    badge: {
      label: "Scenic",
      color: "bg-emerald-600 text-white",
    },
    amenities: ["Hotel", "Sightseeing", "Transfers"],
    price: 32499,
    image: "/images/kashmir/gulmarg_gondola.webp",
    destination: "Kashmir",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "trekking-adventure",
    title: "Trekking & Adventure",
    image: "/images/himachal/solang_valley.webp",
  },
  {
    id: "honeymoon-holidays",
    title: "Honeymoon Holidays",
    image: "/images/kashmir/kashmir_honeymoon.webp",
  },
  {
    id: "family-vacations",
    title: "Family Vacations",
    image: "/images/rajasthan/amber_fort.webp",
  },
  {
    id: "group-tours",
    title: "Group Tours",
    image: "/images/international/bali_tegalalang.webp",
  },
  {
    id: "wildlife-tours",
    title: "Wildlife Tours",
    image: "/images/weekend/corbett_tiger.webp",
  },
  {
    id: "pilgrimage-tours",
    title: "Pilgrimage Tours",
    image: "/images/chardham/kedarnath_temple.webp",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment:
      "Amazing experience with Travel Hawkers! Everything was well planned and the team was super supportive throughout our trip to Bali.",
  },
  {
    id: "rohit-mehta",
    name: "Rohit Mehta",
    location: "Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment:
      "Our Leh Ladakh trip was a dream come true. Perfect itinerary, great hotels and hassle-free travel. Highly recommended!",
  },
  {
    id: "sneha-iyer",
    name: "Sneha Iyer",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment:
      "Very professional and friendly team. They customised our Europe trip exactly the way we wanted. Will surely travel again with them!",
  },
  {
    id: "arjun-kapoor",
    name: "Arjun Kapoor",
    location: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5,
    comment:
      "The Dubai vacation package was seamless from airport pickup to desert safari. Travel Hawkers gave us memories to cherish for life!",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "top-10-international",
    title: "Top 10 International Destinations for Your Next Holiday",
    date: "12 Aug 2024",
    image: "/images/international/europe_eiffel_tower.webp",
    readTime: "5 min read",
    slug: "top-10-international-destinations",
  },
  {
    id: "guide-leh-ladakh",
    title: "A Complete Travel Guide to Leh Ladakh",
    date: "08 Aug 2024",
    image: "/images/ladakh/khardung_la.webp",
    readTime: "8 min read",
    slug: "complete-travel-guide-leh-ladakh",
  },
  {
    id: "visit-bali-guide",
    title: "Best Time to Visit Bali — A Seasonal Guide",
    date: "05 Aug 2024",
    image: "/images/international/bali_tanah_lot.webp",
    readTime: "6 min read",
    slug: "best-time-to-visit-bali-seasonal-guide",
  },
];
