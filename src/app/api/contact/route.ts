import { NextResponse } from "next/server";
import { addInquiry, getAllInquiries } from "@/lib/dbServer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const { name, email, phone, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const inquiry = addInquiry({
      name,
      email,
      phone: phone || "",
      message
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to submit inquiry request." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const inquiries = getAllInquiries();
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read inquiries." }, { status: 500 });
  }
}
