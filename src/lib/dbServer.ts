import fs from "fs";
import path from "path";
import { Booking, Inquiry } from "./db";

// JSON DB Persistence Config
const DB_FILE_PATH = path.join(process.cwd(), "src/data/db.json");

// Helper to initialize DB file
function ensureDbExists() {
  const dirPath = path.dirname(DB_FILE_PATH);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE_PATH)) {
    fs.writeFileSync(
      DB_FILE_PATH,
      JSON.stringify({ bookings: [], inquiries: [] }, null, 2),
      "utf-8"
    );
  }
}

// Read database
export function readDb(): { bookings: Booking[]; inquiries: Inquiry[] } {
  try {
    ensureDbExists();
    const data = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file, returning memory database", err);
    return { bookings: [], inquiries: [] };
  }
}

// Write database
export function writeDb(data: { bookings: Booking[]; inquiries: Inquiry[] }) {
  try {
    ensureDbExists();
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing to database file", err);
    return false;
  }
}

// DB Operations
export function getAllBookings(): Booking[] {
  const db = readDb();
  return db.bookings;
}

export function addBooking(bookingData: Omit<Booking, "id" | "status" | "bookingDate" | "totalPrice">): Booking {
  const db = readDb();
  const newBooking: Booking = {
    ...bookingData,
    id: "BOK-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    status: "Confirmed", // auto-confirm in this demo build
    bookingDate: new Date().toISOString(),
    totalPrice: bookingData.pricePerPerson * bookingData.guestsCount
  };
  
  db.bookings.push(newBooking);
  writeDb(db);
  return newBooking;
}

export function getAllInquiries(): Inquiry[] {
  const db = readDb();
  return db.inquiries;
}

export function addInquiry(inquiryData: Omit<Inquiry, "id" | "date">): Inquiry {
  const db = readDb();
  const newInquiry: Inquiry = {
    ...inquiryData,
    id: "INQ-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toISOString()
  };

  db.inquiries.push(newInquiry);
  writeDb(db);
  return newInquiry;
}
