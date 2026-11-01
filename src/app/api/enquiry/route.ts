import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Log inquiry for travel desk records
    console.log("[TRAVEL_HAWKERS_EMAIL_ENQUIRY]", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      destination: data.destination || data.packageTitle,
      dates: data.dates,
      travellers: data.travellers,
      message: data.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Our travel experts will email your custom quote shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ENQUIRY_SUBMIT_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
