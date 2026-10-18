export const TRAVEL_HAWKERS_WHATSAPP_NUMBER = "919355486036";

export interface WhatsAppInquiryData {
  packageTitle?: string;
  destination?: string;
  name?: string;
  phone?: string;
  email?: string;
  dates?: string;
  travellers?: string;
  vehicle?: string;
  pickupCity?: string;
  message?: string;
  tripType?: string;
}

export function generateWhatsAppUrl(data: WhatsAppInquiryData): string {
  const parts: string[] = ["*New Travel Inquiry - Travel Hawkers* \u2708\uFE0F\n"];

  if (data.packageTitle || data.destination) {
    parts.push(`*Destination / Package:* ${data.packageTitle || data.destination}`);
  }
  if (data.name) {
    parts.push(`*Name:* ${data.name}`);
  }
  if (data.phone) {
    parts.push(`*Phone:* ${data.phone}`);
  }
  if (data.email) {
    parts.push(`*Email:* ${data.email}`);
  }
  if (data.dates) {
    parts.push(`*Travel Dates:* ${data.dates}`);
  }
  if (data.travellers) {
    parts.push(`*Travellers:* ${data.travellers}`);
  }
  if (data.vehicle) {
    parts.push(`*Preferred Vehicle:* ${data.vehicle}`);
  }
  if (data.pickupCity) {
    parts.push(`*Pickup Location:* ${data.pickupCity}`);
  }
  if (data.tripType) {
    parts.push(`*Trip Type:* ${data.tripType}`);
  }
  if (data.message) {
    parts.push(`*Notes / Requirements:* ${data.message}`);
  }

  parts.push("\n_Sent via travelhawkers.com website_");

  const fullText = parts.join("\n");
  return `https://wa.me/${TRAVEL_HAWKERS_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
}

export function openWhatsAppInquiry(data: WhatsAppInquiryData): void {
  const url = generateWhatsAppUrl(data);
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
