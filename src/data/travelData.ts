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
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bali",
    name: "Bali",
    packagesCount: "18+ Packages",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dubai",
    name: "Dubai",
    packagesCount: "30+ Packages",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "goa",
    name: "Goa",
    packagesCount: "15+ Packages",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    packagesCount: "12+ Packages",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kerala",
    name: "Kerala",
    packagesCount: "16+ Packages",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "thailand",
    name: "Thailand",
    packagesCount: "22+ Packages",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kashmir",
    name: "Kashmir",
    packagesCount: "14+ Packages",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    destination: "Kashmir",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "trekking-adventure",
    title: "Trekking & Adventure",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "honeymoon-holidays",
    title: "Honeymoon Holidays",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "family-vacations",
    title: "Family Vacations",
    image: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "group-tours",
    title: "Group Tours",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "wildlife-tours",
    title: "Wildlife Tours",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pilgrimage-tours",
    title: "Pilgrimage Tours",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80",
    readTime: "5 min read",
    slug: "top-10-international-destinations",
  },
  {
    id: "guide-leh-ladakh",
    title: "A Complete Travel Guide to Leh Ladakh",
    date: "08 Aug 2024",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    readTime: "8 min read",
    slug: "complete-travel-guide-leh-ladakh",
  },
  {
    id: "visit-bali-guide",
    title: "Best Time to Visit Bali — A Seasonal Guide",
    date: "05 Aug 2024",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    readTime: "6 min read",
    slug: "best-time-to-visit-bali-seasonal-guide",
  },
];
