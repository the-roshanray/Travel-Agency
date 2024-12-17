"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/Booking");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch bookings.");
        }

        setBookings(data.bookings);
        setFilteredBookings(data.bookings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = bookings.filter((booking) =>
      `${booking.firstName} ${booking.lastName}`.toLowerCase().includes(query)
    );

    setFilteredBookings(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Booking</h1>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by Name..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <p className="text-red-500 font-semibold text-center">
            Error: {error}
          </p>
        )}

        {/* Booking List */}
        {!loading && !error && filteredBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-gray-200 shadow-md rounded-lg">
              <thead className="text-gray-700 uppercase bg-blue-50">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Room Type</th>
                  <th className="p-3 border">Guests</th>
                  <th className="p-3 border">Start Date</th>
                  <th className="p-3 border">End Date</th>
                  <th className="p-3 border">Destination</th>
                  <th className="p-3 border">Special Requests</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className={`hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="p-3 border">
                      {booking.firstName} {booking.lastName}
                    </td>
                    <td className="p-3 border">{booking.email}</td>
                    <td className="p-3 border">{booking.roomType}</td>
                    <td className="p-3 border">{booking.numberOfGuests}</td>
                    <td className="p-3 border">
                      {new Date(booking.tourStartDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">
                      {new Date(booking.tourEndDate).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">
                      {booking.destination || "N/A"}
                    </td>
                    <td className="p-3 border">
                      {booking.specialRequests || "None"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && (
            <div className="text-center mt-10">
              <Image
                src="/empty-state.png"
                alt="No Data"
                width={192}
                height={192}
                className="mx-auto"
              />

              <p className="text-gray-500 mt-4">No bookings found.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
