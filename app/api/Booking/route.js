import Booking, { bookingSchema } from "@/models/Booking";
import { NextResponse } from "next/server";
import { z } from "zod";
import connectDB from "@/Database/connectDB";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    if (typeof data.guests === "string" && !isNaN(Number(data.guests))) {
      data.guests = Number(data.guests);
    }
    if (!data.destination) {
      throw new Error("Destination is required.");
    }
    const validatedData = bookingSchema.parse(data);
    validatedData.tourStartDate = new Date(validatedData.startDate);
    validatedData.tourEndDate = new Date(validatedData.endDate);

    const booking = new Booking({
      ...validatedData,
      numberOfGuests: validatedData.guests,
    });
    await booking.save();

    return NextResponse.json(
      { message: "Booking saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Validation error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors.map((err) => err.message).join(", ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message:
          error.message || "Something went wrong, please try again later.",
      },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find({});
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { message: "Failed to fetch bookings." },
      { status: 500 }
    );
  }
}
