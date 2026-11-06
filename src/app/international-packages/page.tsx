"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import PackageInfoModal, { PackageInfoData } from "@/components/PackageInfoModal";
import {
  Globe2,
  Clock,
  Sparkles,
  Phone,
  ArrowRight,
  Star,
  FileCheck,
  MapPin,
  CheckCircle2,
  Info,
} from "lucide-react";

interface InternationalPackage {
  id: string;
  title: string;
  country: string;
  citiesCovered: string[];
  duration: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  overview: string;
  keyPoints: string[];
  highlights: string[];
  inclusions: string[];
  visaInfo: string;
  slug: string;
}

export default function InternationalPackagesPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPackageTitle, setSelectedPackageTitle] = useState<string>("International Package");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedModalPackage, setSelectedModalPackage] = useState<PackageInfoData | null>(null);

  const packages: InternationalPackage[] = [
    {
      id: "dubai-abu-dhabi",
      slug: "/dubai-abu-dhabi",
      title: "Dubai & Abu Dhabi Tour Package",
      country: "United Arab Emirates",
      citiesCovered: ["Dubai City", "Dubai Marina", "Abu Dhabi", "Yas Island"],
      duration: "6 Nights / 7 Days",
      price: "₹48,999",
      originalPrice: "₹59,000",
      rating: 4.96,
      reviews: 284,
      badge: "Most Popular",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Journey through the world’s most futuristic destinations! Dubai 4 Nights & Abu Dhabi 2 Nights. Enjoy 360-degree views from Burj Khalifa 124th floor, Ferrari World, Desert Safari dune bashing, and Sheikh Zayed Grand Mosque.",
      keyPoints: [
        "Dubai: Burj Khalifa 124th floor observation deck & Dubai Mall dancing fountains",
        "Dubai: 4x4 Land Cruiser desert safari with dune bashing, camel rides & BBQ dinner",
        "Abu Dhabi: Guided visit to the majestic white marble Sheikh Zayed Grand Mosque",
        "Abu Dhabi: Ferrari World Yas Island entrance with Formula Rossa fastest coaster",
        "Dubai Marina: Luxury 2-hour Dhow cruise with international buffet dinner",
      ],
      highlights: [
        "Burj Khalifa 124th floor observation deck & Dubai Mall",
        "Ferrari World Abu Dhabi with Formula Rossa (fastest coaster)",
        "Desert Safari with 4x4 dune bashing, camel rides & BBQ dinner",
        "Marina Dhow Cruise & Sheikh Zayed Grand Mosque",
      ],
      inclusions: ["4-Star City Hotels", "Daily Buffet Breakfast", "All Entry Tickets", "Airport Transfers in AC Coach"],
      visaInfo: "Express 30-Day UAE Tourist Visa Processed in 48-72h",
    },
    {
      id: "singapore-malaysia",
      slug: "/singapore-malaysia",
      title: "Singapore & Malaysia Tour Package",
      country: "Singapore & Malaysia",
      citiesCovered: ["Singapore", "Sentosa Island", "Kuala Lumpur", "Genting Highlands"],
      duration: "6 Nights / 7 Days",
      price: "₹54,499",
      originalPrice: "₹66,000",
      rating: 4.93,
      reviews: 215,
      badge: "Family Favorite",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Kuala Lumpur 3 Nights & Singapore 3 Nights. Marvel at Universal Studios Sentosa, Gardens by the Bay futuristic Supertrees, Genting Highlands cable car, and Petronas Twin Towers.",
      keyPoints: [
        "Singapore: Full-day Universal Studios Singapore access with unlimited rides on Sentosa",
        "Singapore: Gardens by the Bay featuring the mist-filled Cloud Forest & Flower Dome",
        "Kuala Lumpur: Iconic Petronas Twin Towers skybridge photo stop & King's Palace",
        "Genting Highlands: Two-way Awana SkyWay cable car ride with Batu Caves golden statue",
        "Seamless luxury AC coach transfer between Malaysia and Singapore included",
      ],
      highlights: [
        "Full-day Universal Studios Singapore access with unlimited rides",
        "Gardens by the Bay Cloud Forest & Flower Dome",
        "Genting Highlands cable car & Batu Caves Murugan statue",
        "Kuala Lumpur city tour & Petronas Twin Towers photo stop",
      ],
      inclusions: ["4-Star Stays in KL & Singapore", "Daily Buffet Breakfast", "Universal & Gardens Tickets", "Inter-City Coach Transfer"],
      visaInfo: "Singapore e-Visa & Malaysia Digital Arrival Card (MDAC)",
    },
    {
      id: "vietnam",
      slug: "/vietnam",
      title: "Vietnam Tour Package (Hanoi, Halong Bay & Da Nang)",
      country: "Vietnam",
      citiesCovered: ["Hanoi", "Halong Bay", "Da Nang", "Ba Na Hills", "Hoi An"],
      duration: "6 Nights / 7 Days",
      price: "₹42,999",
      originalPrice: "₹52,000",
      rating: 4.94,
      reviews: 178,
      badge: "Trending Destination",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      overview:
        "2 Days Hanoi, 1 Day Halong Bay Cruise, 2 Days Da Nang & 2 Days Hoi An. Cruise through Halong Bay limestone karsts, marvel at the Golden Hand Bridge in Ba Na Hills, and stroll lantern-lit Hoi An.",
      keyPoints: [
        "Halong Bay: Overnight luxury cruise through UNESCO limestone karsts with kayaking & caves",
        "Da Nang / Ba Na Hills: World-famous Golden Bridge held aloft by giant stone hands in the mist",
        "Hanoi: Historic Old Quarter cyclo tour, street food delicacies & Water Puppet Theater",
        "Hoi An: Ancient lantern-lit UNESCO town cycling tour & basket boat river ride",
        "Domestic flight from Hanoi to Da Nang included in package",
      ],
      highlights: [
        "Overnight Halong Bay Luxury Cruise with kayaking & cave exploration",
        "Ba Na Hills Golden Hand Bridge suspended in misty clouds",
        "Hanoi Old Quarter walking street food tour & water puppets",
        "Hoi An ancient lantern town bicycle tour",
      ],
      inclusions: ["Overnight Halong Cruise", "4-Star Hotels", "All Meals on Cruise", "Internal Flights Included"],
      visaInfo: "Vietnam e-Visa Assistance within 3 Working Days",
    },
    {
      id: "mystical-bhutan",
      slug: "/mystical-bhutan",
      title: "Mystical Bhutan (Paro, Thimphu & Punakha)",
      country: "Bhutan",
      citiesCovered: ["Paro", "Thimphu", "Punakha", "Dochula Pass"],
      duration: "6 Nights / 7 Days",
      price: "₹38,500",
      originalPrice: "₹46,000",
      rating: 4.98,
      reviews: 132,
      badge: "Himalayan Serenity",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Gross National Happiness in the majestic Eastern Himalayas. Paro 2N, Thimphu 2N, Punakha 2N. Trek to the iconic Tiger’s Nest (Taktsang Monastery) perched 900m above the valley floor.",
      keyPoints: [
        "Paro: Cliffside pilgrimage trek to the sacred Tiger's Nest (Taktsang Monastery)",
        "Punakha: Grand 17th-century Punakha Dzong at the confluence of Pho Chhu and Mo Chhu",
        "Thimphu: 169ft Buddha Dordenma golden statue overlooking the mountain valley",
        "Dochula Pass: 108 memorial chortens with 360-degree views of snowcapped Himalayan peaks",
        "All meals (Breakfast, Lunch & Dinner) included daily on AP plan",
      ],
      highlights: [
        "Taktsang Monastery (Tiger's Nest) cliffside trek",
        "Punakha Dzong at the confluence of Pho Chhu and Mo Chhu",
        "Thimphu Buddha Dordenma 169ft giant golden statue",
        "Traditional Bhutanese archer cultural demonstration",
      ],
      inclusions: ["3-Star Heritage Bhutanese Hotels", "All Meals (AP Plan)", "English-speaking Bhutan Guide", "All Internal Permits"],
      visaInfo: "No Visa Needed for Indians (Entry Permit via Voter ID / Passport)",
    },
    {
      id: "indonesia",
      slug: "/indonesia",
      title: "Bali Tropical Paradise (Ubud, Kuta & Nusa Penida)",
      country: "Indonesia",
      citiesCovered: ["Ubud", "Kuta / Seminyak", "Nusa Penida", "Tanah Lot"],
      duration: "5 Nights / 6 Days",
      price: "₹34,999",
      originalPrice: "₹43,500",
      rating: 4.91,
      reviews: 260,
      badge: "Honeymoon Special",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Ubud private pool villa stays, Tegallalang rice terrace jungle swings, sacred Tanah Lot sunset temple, and an exhilarating speedboat island excursion to Nusa Penida's Kelingking T-Rex cliff.",
      keyPoints: [
        "Ubud: Private luxury pool villa stay with romantic floating breakfast",
        "Nusa Penida: Speedboat excursion to T-Rex shaped Kelingking Beach & Broken Beach",
        "Tanah Lot: Ancient Hindu sea temple perched on offshore rock during sunset",
        "Uluwatu: Dramatic 70m ocean cliff temple with traditional Kecak fire dance",
        "Tegallalang: Iconic Bali jungle swing over emerald terraced rice paddies",
      ],
      highlights: [
        "Private pool villa upgrade in Ubud with floating breakfast",
        "Nusa Penida West Island tour: Kelingking Beach & Broken Beach",
        "Tanah Lot & Uluwatu Cliff Temple with Kecak fire dance",
        "Mount Batur volcano viewpoint & coffee plantation tasting",
      ],
      inclusions: ["Private Pool Villa + 4-Star Resort", "Daily Breakfast", "Fast Boat to Nusa Penida", "Private Dedicated Cab"],
      visaInfo: "Electronic Visa on Arrival (e-VOA) Assistance",
    },
    {
      id: "thailand",
      slug: "/thailand",
      title: "Thailand Tour Package (Bangkok & Pattaya)",
      country: "Thailand",
      citiesCovered: ["Bangkok", "Pattaya", "Coral Island (Koh Larn)"],
      duration: "4 Nights / 5 Days",
      price: "₹24,999",
      originalPrice: "₹31,000",
      rating: 4.87,
      reviews: 320,
      badge: "Super Value",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Thailand offers the ultimate tropical escape. Speedboat to Coral Island Pattaya with parasailing and undersea walk, followed by Bangkok’s glittering Golden Buddha temples and Chao Phraya dinner cruise.",
      keyPoints: [
        "Pattaya: Speedboat across turquoise waters to Coral Island (Koh Larn) with Indian buffet lunch",
        "Pattaya: World-renowned Alcazar Cabaret Show with VIP theater seating",
        "Bangkok: Guided temple tour of Wat Traimit (Solid Gold Buddha) & Marble Temple",
        "Bangkok: Chao Phraya Princess luxury dinner cruise with live international band",
        "Shopping tours of Pratunam Wholesale Market, Platinum Mall & MBK Center",
      ],
      highlights: [
        "Coral Island speedboat ride with Indian buffet lunch",
        "Alcazar Cabaret Show VIP seating in Pattaya",
        "Bangkok Golden Buddha & Marble Temple tour",
        "Chao Phraya Princess luxury dinner cruise with live band",
      ],
      inclusions: ["4-Star Hotels in Pattaya & Bangkok", "Daily Breakfast", "Coral Island Speedboat Tour", "All Airport & Inter-City Transfers"],
      visaInfo: "Visa-Free Exemption for Indian Passport Holders",
    },

    {
      id: "dubai-express",
      slug: "/dubai-express",
      title: "Dubai Highlights & Desert Safari Express",
      country: "United Arab Emirates",
      citiesCovered: ["Dubai City", "Dubai Marina", "Desert Dunes"],
      duration: "4 Nights / 5 Days",
      price: "₹32,999",
      originalPrice: "₹42,000",
      rating: 4.92,
      reviews: 164,
      badge: "Bestseller Express",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      overview: "Experience Dubai's top highlights in a compact 5-day escape! Take in 360-degree views from Burj Khalifa 124th floor, conquer the red dunes in a 4x4 Land Cruiser with BBQ dinner, and glide on a Marina Dhow Cruise.",
      keyPoints: [
        "Burj Khalifa: 124th floor observation deck with Dubai Mall & fountain show",
        "Desert Safari: 4x4 red dune bashing, camel rides, Tanoura dance & BBQ dinner",
        "Dubai Marina: Luxury evening dhow cruise with international dinner buffet",
        "City Tour: Panoramic Dubai Frame, Palm Jumeirah & Gold Souk visit",
      ],
      highlights: [
        "Burj Khalifa 124th floor ticket included",
        "4x4 Desert Safari with dune bashing & BBQ dinner",
        "Marina Dhow Cruise with buffet",
        "Return airport transfers in private AC vehicle",
      ],
      inclusions: ["4-Star City Hotel", "Daily Buffet Breakfast", "Desert Safari & BBQ Dinner", "Dhow Cruise with Dinner", "Private Transfers"],
      visaInfo: "Express 30-Day UAE Tourist Visa Processed in 48-72h",
    },
    {
      id: "dubai-luxury-honeymoon",
      slug: "/dubai-luxury-honeymoon",
      title: "Luxury Dubai Honeymoon with Atlantis & Private Yacht",
      country: "United Arab Emirates",
      citiesCovered: ["Dubai Marina", "Palm Jumeirah", "Desert Resort"],
      duration: "5 Nights / 6 Days",
      price: "₹64,999",
      originalPrice: "₹78,000",
      rating: 4.98,
      reviews: 118,
      badge: "Honeymoon Special",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80",
      overview: "Celebrate romance in true ultra-luxury style. 5 nights in 5-star beachfront resorts, a 2-hour private yacht cruise along Dubai Marina and Palm Jumeirah, VIP desert cabana dinner, and Atlantis Aquaventure passes.",
      keyPoints: [
        "Private Yacht: 2-Hour private luxury yacht cruise around Marina and Palm Jumeirah",
        "VIP Desert Safari: Private majlis cabana seating with gourmet 5-course dinner",
        "Burj Khalifa VIP: 124th & 125th floor At The Top VIP access",
        "Atlantis The Palm: Full-day Aquaventure Waterpark & Lost Chambers passes",
        "Couples Spa: Rejuvenating 60-minute couples massage treatment",
      ],
      highlights: [
        "2-Hour Private Yacht Cruise in Dubai Marina",
        "VIP Desert Safari with private dining",
        "Atlantis Aquaventure & Lost Chambers passes",
        "Luxury vehicle transfers (Lexus / Mercedes)",
      ],
      inclusions: ["5-Star Luxury Resort Stay", "Daily Champagne Breakfast", "Private Yacht Cruise", "VIP Desert Safari", "Atlantis Pass", "Private Transfers"],
      visaInfo: "Express 30-Day UAE Tourist Visa Processed in 48-72h",
    },
    {
      id: "bali-romantic-honeymoon",
      slug: "/bali-romantic-honeymoon",
      title: "Romantic Bali Honeymoon with Pool Villa & Nusa Penida",
      country: "Indonesia",
      citiesCovered: ["Seminyak Beach", "Ubud Jungle", "Nusa Penida Island"],
      duration: "6 Nights / 7 Days",
      price: "₹46,999",
      originalPrice: "₹58,000",
      rating: 4.97,
      reviews: 195,
      badge: "Honeymoon Favorite",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      overview: "The quintessential romantic tropical getaway. 3 nights in ocean-view Seminyak and 3 nights in a private pool villa in Ubud. Includes floating breakfast, romantic candlelit dinner at Jimbaran Bay, and Nusa Penida island speedboat tour.",
      keyPoints: [
        "Private Pool Villa: Secluded luxury villa in Ubud with private swimming pool",
        "Floating Breakfast: Signature flower-filled floating breakfast experience",
        "Nusa Penida Island: Speedboat excursion to Kelingking T-Rex cliff and Broken Beach",
        "Jimbaran Sunset: 3-course candlelit fresh seafood dinner on the beach sand",
        "Couples Spa: 60-Minute authentic Balinese aromatherapy massage",
      ],
      highlights: [
        "Private Pool Villa in Ubud with floating breakfast",
        "Full-day Nusa Penida Island Speedboat Tour",
        "Jimbaran romantic beach candlelit seafood dinner",
        "Uluwatu Sunset Temple & Kecak fire dance",
      ],
      inclusions: ["3N 4-Star Resort + 3N Ubud Private Pool Villa", "Daily Breakfast + Floating Breakfast", "Jimbaran Candlelight Dinner", "Nusa Penida Tour", "Private Chauffeur"],
      visaInfo: "Electronic Visa on Arrival (e-VOA) Assistance",
    },
    {
      id: "bali-adventure-getaway",
      slug: "/bali-adventure-getaway",
      title: "Bali Volcano, River Rafting & Water Sports Escape",
      country: "Indonesia",
      citiesCovered: ["Kuta", "Tanjung Benoa", "Ayung River", "Mount Batur"],
      duration: "4 Nights / 5 Days",
      price: "₹29,999",
      originalPrice: "₹37,000",
      rating: 4.89,
      reviews: 142,
      badge: "Adventure Special",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      overview: "Designed for thrill-seekers! High-speed water sports at Tanjung Benoa, Class III white water rafting down the Ayung River in Ubud, and a sunrise 4x4 jeep safari across Mount Batur black lava fields.",
      keyPoints: [
        "Water Sports: Parasailing, Jet Ski & Banana Boat at Tanjung Benoa",
        "Ayung River Rafting: 12km exhilarating rapids with rainforest waterfalls",
        "4x4 Jeep Safari: Mount Batur sunrise volcanic black lava tour",
        "Tanah Lot Temple: Spectacular offshore sunset ocean shrine",
      ],
      highlights: [
        "Ayung River white water rafting with hot buffet lunch",
        "Mount Batur 4x4 sunrise jeep safari",
        "Tanjung Benoa thrilling water sports combo",
        "Finns Beach Club sunset pass",
      ],
      inclusions: ["4-Star Hotel Stay", "Daily Buffet Breakfast", "Rafting & 4x4 Jeep Tours", "Water Sports Combo", "All Private Transfers"],
      visaInfo: "Electronic Visa on Arrival (e-VOA) Assistance",
    },
    {
      id: "phuket-krabi-island-hopper",
      slug: "/phuket-krabi-island-hopper",
      title: "Phuket & Krabi Exotic Island Hopper",
      country: "Thailand",
      citiesCovered: ["Phuket", "Phi Phi Islands", "Maya Bay", "Krabi Ao Nang"],
      duration: "5 Nights / 6 Days",
      price: "₹36,999",
      originalPrice: "₹45,000",
      rating: 4.93,
      reviews: 210,
      badge: "Island Paradise",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
      overview: "Witness Thailand's dramatic limestone islands and emerald lagoons. 3 nights in Phuket and 2 nights in Krabi with a speedboat expedition to Phi Phi Islands, Maya Bay, and Krabi's 4 Islands.",
      keyPoints: [
        "Phi Phi Islands: Speedboat tour to Maya Bay, Pileh Lagoon & snorkeling",
        "Krabi 4 Islands: Longtail boat tour to Chicken Island, Tup Island sandbar & Phra Nang Cave",
        "Phuket City Tour: Big Buddha, Wat Chalong & Promthep Cape sunset",
        "Scenic Ferry Transfer: Cruise between Phuket and Krabi across Phang Nga bay",
      ],
      highlights: [
        "Phi Phi Islands & Maya Bay speedboat tour with lunch",
        "Krabi 4 Islands hopping tour with snorkeling",
        "Phuket Big Buddha & scenic viewpoints",
        "Sea ferry transfers between Phuket & Krabi",
      ],
      inclusions: ["3N Phuket + 2N Krabi 4-Star Beach Resorts", "Daily Buffet Breakfast", "Phi Phi & 4 Islands Tours with Lunches", "All Sea & Land Transfers"],
      visaInfo: "Visa-Free Entry for Indian Nationals",
    },
    {
      id: "complete-thailand-grand",
      slug: "/complete-thailand-grand",
      title: "Complete Thailand Grand Vacation: Bangkok, Pattaya & Phuket",
      country: "Thailand",
      citiesCovered: ["Pattaya", "Bangkok", "Phuket", "Phi Phi Islands"],
      duration: "7 Nights / 8 Days",
      price: "₹48,999",
      originalPrice: "₹62,000",
      rating: 4.95,
      reviews: 184,
      badge: "Grand Circuit",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      overview: "The grandest Thailand holiday! Includes internal domestic flight to Phuket, Coral Island speedboat excursion in Pattaya, Chao Phraya river dinner cruise in Bangkok, and Phi Phi Island tour in Phuket.",
      keyPoints: [
        "Internal Flight: Bangkok to Phuket domestic airfare included",
        "Pattaya: Speedboat tour to Coral Island with Indian lunch & Alcazar show",
        "Bangkok: Chao Phraya luxury river dinner cruise & Golden Buddha temple",
        "Phuket: Speedboat expedition to Phi Phi Islands & Maya Bay",
      ],
      highlights: [
        "Domestic Flight Bangkok to Phuket included",
        "Coral Island Pattaya & Phi Phi Island Phuket tours",
        "Chao Phraya Princess luxury dinner cruise",
        "Alcazar Cabaret Show VIP seating",
      ],
      inclusions: ["2N Pattaya + 2N Bangkok + 3N Phuket 4-Star Hotels", "Bangkok-Phuket Domestic Flight", "Daily Breakfasts", "All Major Excursions & Transfers"],
      visaInfo: "Visa-Free Entry for Indian Nationals",
    },
    {
      id: "singapore-city-gardens",
      slug: "/singapore-city-gardens",
      title: "Singapore Universal Studios & Marina Bay Fantasy",
      country: "Singapore & Malaysia",
      citiesCovered: ["Singapore City", "Sentosa Island", "Marina Bay"],
      duration: "4 Nights / 5 Days",
      price: "₹39,999",
      originalPrice: "₹49,000",
      rating: 4.94,
      reviews: 176,
      badge: "Family Bestseller",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
      overview: "Spend 4 glorious nights in the Lion City. Includes full-day passes to Universal Studios Sentosa, Gardens by the Bay double domes (Cloud Forest waterfall & Flower Dome), and Singapore Night Safari.",
      keyPoints: [
        "Universal Studios: 1-Day Pass with unlimited movie theme park rides",
        "Gardens by the Bay: Cloud Forest mist waterfall & Flower Dome tickets",
        "Night Safari: Guided tram ride through world's first nocturnal wildlife park",
        "Marina Bay Sands: SkyPark observation deck 56th-floor views",
      ],
      highlights: [
        "Universal Studios Singapore 1-Day Pass",
        "Gardens by the Bay Flower Dome & Cloud Forest",
        "Singapore Night Safari with tram ride",
        "Sentosa Cable Car Sky Pass & Wings of Time show",
      ],
      inclusions: ["4 Nights 4-Star Central Singapore Hotel", "Daily Buffet Breakfast", "Universal Studios Pass", "Gardens by the Bay", "Airport Transfers"],
      visaInfo: "Singapore e-Visa Assistance (3-5 Working Days)",
    },
    {
      id: "best-of-malaysia",
      slug: "/best-of-malaysia",
      title: "Best of Malaysia: Kuala Lumpur & Langkawi Island Retreat",
      country: "Singapore & Malaysia",
      citiesCovered: ["Kuala Lumpur", "Batu Caves", "Langkawi Island"],
      duration: "5 Nights / 6 Days",
      price: "₹34,999",
      originalPrice: "₹43,000",
      rating: 4.91,
      reviews: 138,
      badge: "Nature & Beach",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      overview: "Explore Malaysia's glittering capital and its premier tropical island. Marvel at Petronas Twin Towers and Batu Caves, followed by a domestic flight to Langkawi for white sands and the Langkawi SkyBridge.",
      keyPoints: [
        "Domestic Flight: Kuala Lumpur to Langkawi flight included",
        "Kuala Lumpur: Petronas Twin Towers photo stop & Batu Caves golden statue",
        "Langkawi: Island hopping boat cruise with eagle feeding sanctuary",
        "Langkawi SkyCab: Scenic cable car to Mount Machinchang & curved SkyBridge",
      ],
      highlights: [
        "Internal flight from KL to Langkawi included",
        "Langkawi Island Hopping boat tour & beach relaxation",
        "Batu Caves & Kuala Lumpur guided city tour",
        "Langkawi SkyCab cable car ticket",
      ],
      inclusions: ["2N Kuala Lumpur + 3N Langkawi 4-Star Hotels", "KL-Langkawi Domestic Flight", "Daily Buffet Breakfast", "Island Hopping Tour", "Airport Transfers"],
      visaInfo: "Malaysia Visa-Free Entry with Digital Arrival Card (MDAC)",
    },
    {
      id: "vietnam-danang-golden-bridge",
      slug: "/vietnam-danang-golden-bridge",
      title: "Gems of Central Vietnam: Da Nang, Ba Na Hills & Hoi An",
      country: "Vietnam",
      citiesCovered: ["Da Nang", "Ba Na Hills", "Hoi An Ancient Town", "Cam Thanh"],
      duration: "5 Nights / 6 Days",
      price: "₹39,999",
      originalPrice: "₹49,000",
      rating: 4.96,
      reviews: 152,
      badge: "Most Photogenic",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
      overview: "Walk across the breathtaking Golden Bridge suspended by giant stone hands at Ba Na Hills, take spinning bamboo basket boat rides through coconut waterways, and explore the lantern-lit streets of UNESCO Hoi An.",
      keyPoints: [
        "Golden Hand Bridge: Ba Na Hills cable car & suspension bridge in the clouds",
        "Hoi An Ancient Town: UNESCO World Heritage lantern-lit walking tour",
        "Cam Thanh Coconut Forest: Traditional round bamboo basket boat ride",
        "Marble Mountains: Limestone peaks with sacred Buddhist cave shrines",
      ],
      highlights: [
        "Ba Na Hills cable car & Golden Bridge tickets",
        "Hoi An Ancient Town guided night lantern tour",
        "Cam Thanh coconut forest basket boat experience",
        "Private AC vehicle transfers throughout",
      ],
      inclusions: ["3N Da Nang + 2N Hoi An 4-Star Boutique Hotels", "Daily Buffet Breakfast", "Ba Na Hills Pass", "Cam Thanh Basket Boat Tour", "Private Transfers"],
      visaInfo: "Vietnam e-Visa Assistance within 3 Working Days",
    },
    {
      id: "vietnam-hanoi-halong-bay",
      slug: "/vietnam-hanoi-halong-bay",
      title: "Northern Vietnam Charms: Hanoi & Luxury Halong Cruise",
      country: "Vietnam",
      citiesCovered: ["Hanoi", "Halong Bay", "Sung Sot Cave"],
      duration: "4 Nights / 5 Days",
      price: "₹31,999",
      originalPrice: "₹40,000",
      rating: 4.93,
      reviews: 124,
      badge: "Heritage Cruise",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      overview: "Combine Hanoi's historic Old Quarter and street food culture with an overnight 5-star cruise through the limestone islets of Halong Bay. Includes kayaking, cave exploration, and Tai Chi at sunrise.",
      keyPoints: [
        "Halong Bay Luxury Cruise: Overnight stay in private balcony ocean cabin",
        "All Cruise Meals: Full-board gourmet dining on board the cruise",
        "Activities: Kayaking, swimming, cave exploration & sunrise Tai Chi",
        "Hanoi Old Quarter: Street food walk and traditional water puppet show",
      ],
      highlights: [
        "Overnight 5-Star Cruise on UNESCO Halong Bay",
        "All meals on board cruise included",
        "Kayaking and Sung Sot Cave exploration",
        "Hanoi Old Quarter water puppet show",
      ],
      inclusions: ["3N Hanoi 4-Star Hotel + 1N Halong Cruise", "Daily Breakfast + All Cruise Meals", "Halong Kayaking & Cave Entry", "Limousine Coach Transfers"],
      visaInfo: "Vietnam e-Visa Assistance within 3 Working Days",
    },
    {
      id: "bhutan-cultural-odyssey",
      slug: "/bhutan-cultural-odyssey",
      title: "Bhutan Cultural Odyssey & Tiger's Nest Hike",
      country: "Bhutan",
      citiesCovered: ["Paro", "Thimphu", "Punakha", "Dochula Pass"],
      duration: "5 Nights / 6 Days",
      price: "₹29,999",
      originalPrice: "₹37,000",
      rating: 4.97,
      reviews: 110,
      badge: "Spiritual Trek",
      image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
      overview: "Hike to the legendary cliff-hanging Tiger's Nest monastery, gaze at the 169ft Buddha Dordenma in Thimphu, cross Dochula Pass with 108 memorial stupas, and soak in a traditional hot stone herbal bath.",
      keyPoints: [
        "Tiger's Nest (Taktsang): World-famous pilgrimage hike 900m above Paro valley",
        "Thimphu: 169ft bronze gilded Buddha Dordenma & Tashichho Dzong",
        "Dochula Pass: 3,100m high mountain pass with panoramic Himalayan views",
        "Punakha Dzong: Magnificent 17th-century fortress palace at the river confluence",
      ],
      highlights: [
        "Taktsang Monastery (Tiger's Nest) guided hike",
        "All meals daily included (Breakfast, Lunch & Dinner)",
        "Dedicated private SUV with licensed Bhutanese guide & driver",
        "Complimentary traditional Bhutanese hot stone herbal bath",
      ],
      inclusions: ["5 Nights in Certified 3-Star Bhutanese Hotels", "All Meals (Breakfast, Lunch & Dinner)", "Dedicated SUV with Chauffeur", "Certified Tour Guide", "All Permits"],
      visaInfo: "No Visa Needed for Indians (Entry Permit via Voter ID / Passport)",
    },
    {
      id: "europe-grand-tour",
      slug: "/europe-grand-tour",
      title: "Paris & Swiss Alps Dream Vacation",
      country: "Europe",
      citiesCovered: ["Paris", "Lucerne", "Interlaken", "Zurich"],
      duration: "7 Nights / 8 Days",
      price: "₹1,24,999",
      originalPrice: "₹1,45,000",
      rating: 4.97,
      reviews: 95,
      badge: "Luxury Flagship",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Paris romance meets Swiss alpine majesty. Experience the top deck of Eiffel Tower, Seine river cruise, Lucerne Chapel Bridge, and the snowclad peak of Mt. Titlis with world-famous Rotair cable car.",
      keyPoints: [
        "Paris: Eiffel Tower 2nd/top floor priority entry & evening illuminated Seine River cruise",
        "Paris: Guided city drive covering Champs-Élysées, Arc de Triomphe, and Louvre museum",
        "Switzerland: Mt. Titlis excursion with Ice Flyer chairlift & 360-degree revolving Rotair",
        "Lucerne & Interlaken: Scenic alpine lakes, wooden Chapel Bridge, and Jungfrau vistas",
        "High-speed TGV Lyria train from Paris to Switzerland included",
      ],
      highlights: [
        "Eiffel Tower priority tickets & illuminated Seine River cruise",
        "Mt. Titlis cable car & glacier cliff walk in Switzerland",
        "Lucerne walking tour & scenic Lake Lucerne panoramic views",
        "High-speed TGV international train between France and Switzerland",
      ],
      inclusions: ["4-Star Central City Hotels", "Daily Buffet Breakfast", "All High-Speed Train Tickets", "Mt. Titlis Mountain Excursion Pass"],
      visaInfo: "Schengen Visa Document Preparation & Appointment Scheduling",
    },
    {
      id: "maldives-luxury",
      slug: "/maldives-luxury",
      title: "Maldives Overwater Luxury Villa Escape",
      country: "Maldives",
      citiesCovered: ["North Malé Atoll", "Private Resort Island"],
      duration: "3 Nights / 4 Days",
      price: "₹69,999",
      originalPrice: "₹82,000",
      rating: 4.99,
      reviews: 142,
      badge: "All-Inclusive Resort",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      overview:
        "Wake up above crystal turquoise lagoons with direct access to vibrant coral reefs. Stay in luxury overwater villas with all-inclusive dining, sunset dolphin cruises, and complimentary snorkeling gear.",
      keyPoints: [
        "Stay in authentic Overwater Villa perched above turquoise turquoise lagoon",
        "All-Inclusive dining: Unlimited breakfast, lunch, 3-course dinner & premium beverages",
        "Complimentary return speedboat/seaplane transfers from Velana International Airport",
        "Sunset dolphin safari cruise & complimentary non-motorized water sports",
        "Zero visa hassle: 30-Day Free Tourist Visa upon arrival for Indians",
      ],
      highlights: [
        "Water Villa with private sundeck and ladder into the lagoon",
        "All-Inclusive meal & beverage plan at luxury resort",
        "Return speedboat transfers from Malé Airport",
        "Complimentary snorkeling equipment & sunset cruise",
      ],
      inclusions: ["Luxury Overwater Villa", "All Meals & Unlimited Drinks", "Return Airport Speedboat Transfer", "Green Tax & Service Charges"],
      visaInfo: "Free 30-Day Visa on Arrival for Indian Nationals",
    },
  ];

  const countries = ["All", "United Arab Emirates", "Singapore & Malaysia", "Vietnam", "Bhutan", "Indonesia", "Thailand", "Europe", "Maldives"];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedFilter === "All") return true;
    return pkg.country === selectedFilter;
  });

  const handleOpenModal = (pkg: InternationalPackage) => {
    setSelectedModalPackage({
      id: pkg.id,
      title: pkg.title,
      destination: `${pkg.country} (${pkg.citiesCovered.join(", ")})`,
      duration: pkg.duration,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      image: pkg.image,
      badge: pkg.badge,
      category: "International",
      citiesCovered: pkg.citiesCovered,
      keyPoints: pkg.keyPoints,
      highlights: pkg.highlights,
      inclusions: pkg.inclusions,
      slug: pkg.slug,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0B2724] via-[#091F1D] to-[#123834] text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C59B58_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            <div className="max-w-3xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C59B58] block">
                WORLDWIDE CURATED JOURNEYS
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
                International Tour Packages <br />
                <span className="text-[#C59B58]">&amp; Exotic Holidays</span>
              </h1>
              <p className="text-stone-200/90 text-sm sm:text-base leading-relaxed">
                Step outside borders with seamless visa assistance, handpicked 4-star hotels, verified private transfers, and curated itineraries across Dubai, Singapore, Vietnam, Bali, Thailand, Bhutan, Europe, and the Maldives.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+919355486036"
                  className="bg-[#C59B58] hover:bg-[#B58A43] text-[#0B2724] px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 93554 86036</span>
                </a>
                <Link
                  href="/packages"
                  className="bg-white/15 hover:bg-white/25 text-white px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-white/25 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C59B58]" />
                  <span>Explore All Packages</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {countries.map((cntry) => (
                <button
                  key={cntry}
                  type="button"
                  onClick={() => setSelectedFilter(cntry)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                    selectedFilter === cntry
                      ? "bg-[#B58238] text-white shadow-xs font-bold"
                      : "bg-[#FAF8F5] text-slate-700 hover:bg-stone-200 border border-stone-200"
                  }`}
                >
                  {cntry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B88434] block mb-1">
              EXPLORE BY DESTINATION &amp; CITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              {selectedFilter === "All" ? "Featured International Packages" : `${selectedFilter} Tour Packages`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tap on any package card to inspect day-wise itinerary, covered cities, and key points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredPackages.map((pkg, idx) => (
              <div
                key={pkg.id}
                onClick={() => handleOpenModal(pkg)}
                className={`reveal delay-${(idx % 6) * 75} bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1.5`}
              >
                {/* Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute top-3.5 left-3.5 bg-[#B58238] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400 font-normal">({pkg.reviews})</span>
                  </div>

                  {/* Quick Info Hint Button */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Tap for info &amp; key points
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    {/* Country & Duration */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <Globe2 className="w-3.5 h-3.5 text-[#B58238]" />
                        {pkg.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B58238]" />
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#B58238] transition-colors leading-snug">
                      <Link
                        href={pkg.slug}
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline"
                      >
                        {pkg.title}
                      </Link>
                    </h3>

                    {/* Cities Covered Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pkg.citiesCovered.map((city, cIdx) => (
                        <span
                          key={cIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#FAF5ED] text-stone-800 border border-[#EADBCC] px-2.5 py-0.5 rounded-md"
                        >
                          <MapPin className="w-2.5 h-2.5 text-[#B58238]" />
                          {city}
                        </span>
                      ))}
                    </div>

                    {/* Key City Points / Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Key City Highlights:
                      </span>
                      {pkg.keyPoints.slice(0, 3).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2 leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        From
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-serif font-bold text-slate-900">
                          {pkg.price}
                        </span>
                        <span className="text-[11px] text-slate-400">/person</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={pkg.slug}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#FAF5ED] hover:bg-[#F3E8D7] text-[#B58238] border border-[#EADBCC] text-xs font-bold py-2.5 px-3 rounded-lg transition-all cursor-pointer inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPackageTitle(pkg.title);
                          setEnquiryOpen(true);
                        }}
                        className="bg-[#B58238] hover:bg-[#9E6F21] text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <span>Get Quote</span>
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

      {/* Package Info Modal */}
      <PackageInfoModal
        isOpen={!!selectedModalPackage}
        onClose={() => setSelectedModalPackage(null)}
        pkg={selectedModalPackage}
        onBookNow={(title) => {
          setSelectedPackageTitle(title);
          setSelectedModalPackage(null);
          setEnquiryOpen(true);
        }}
      />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        packageTitle={selectedPackageTitle}
      />
    </div>
  );
}
