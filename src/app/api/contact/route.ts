import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      company,
      email,
      phone,
      service,
      budget,
      description,
      preferredContactMethod,
      timeline,
      preferredHub,
    } = body;

    // Validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and project description are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business or personal email address." },
        { status: 400 }
      );
    }

    // Server-side logging for national-level enquiry tracking
    console.log("PROJECT ENQUIRY TRANSMISSION RECEIVED:", {
      name,
      company: company || "Not Provided",
      email,
      phone: phone || "Not Provided",
      service: service || "General Agency Inquiry",
      budget: budget || "Flexible",
      preferredContactMethod: preferredContactMethod || "Email / WhatsApp",
      timeline: timeline || "Standard Launch Runway",
      preferredHub: preferredHub || "Remote / Pan-India",
      description,
      timestamp: new Date().toISOString(),
      recipient: "connect@afterthat.in",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project commission enquiry has been logged and transmitted to the AFTER THAT leadership team.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process enquiry. Please email connect@afterthat.in directly or WhatsApp +91 96561 66555." },
      { status: 500 }
    );
  }
}
