import mongoose from "mongoose";
import { z } from "zod";

export const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  roomType: z.enum(["Single", "Double", "Suite"]),
  guests: z.union([z.number(), z.string()]).refine(
    (value) => {
      if (typeof value === "string") {
        return /^[1-5+]+$/.test(value);
      }
      return typeof value === "number" && value >= 1 && value <= 5;
    },
    { message: "Invalid number of guests" }
  ),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid start date"),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid end date"),
  specialRequests: z.string().optional(),
  destination: z.string().optional(),
});

const BookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  roomType: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
  tourStartDate: { type: Date, required: true },
  tourEndDate: { type: Date, required: true },
  specialRequests: { type: String },
  destination: { type: String, required: true },
});

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;
