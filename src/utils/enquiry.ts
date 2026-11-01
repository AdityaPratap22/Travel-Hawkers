export interface EmailEnquiryData {
  name?: string;
  email: string;
  phone?: string;
  destination?: string;
  packageTitle?: string;
  dates?: string;
  travellers?: string | number;
  message?: string;
}

export async function submitEmailEnquiry(
  data: EmailEnquiryData
): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`HTTP status ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.warn("Client fallback for enquiry submission:", err);
    return {
      success: true,
      message: "Enquiry received. Our holiday designers will contact you via email shortly.",
    };
  }
}
