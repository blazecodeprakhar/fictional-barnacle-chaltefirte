import { NextResponse } from "next/server";
import { addBooking, getAllBookings } from "@/lib/dbServer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Basic validation
    const { trekId, trekTitle, pricePerPerson, trekDate, fullname, email, phone, guestsCount, aadhaarFileName, healthFileName } = body;
    if (!trekId || !trekTitle || !pricePerPerson || !trekDate || !fullname || !email || !phone || !guestsCount) {
      return NextResponse.json({ error: "Missing required booking details." }, { status: 400 });
    }

    const booking = addBooking({
      trekId,
      trekTitle,
      pricePerPerson: Number(pricePerPerson),
      trekDate,
      fullname,
      email,
      phone,
      guestsCount: Number(guestsCount),
      aadhaarFileName: aadhaarFileName || "",
      healthFileName: healthFileName || ""
    });

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error: any) {
    console.error("Booking API error:", error);
    return NextResponse.json({ error: "Failed to submit booking request." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = getAllBookings();
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read bookings." }, { status: 500 });
  }
}
