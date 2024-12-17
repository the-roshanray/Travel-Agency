"use client";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import jsPDF from "jspdf";

const destinations = [
  {
    image: "/rome.jpg",
    title: "Rome, Italy",
    price: "$5.42k",
    description: "Explore the ancient ruins, Italian culture.",
    slug: "rome-italy",
  },
  {
    image: "/london.jpg",
    title: "London, UK",
    price: "$4.90k",
    description:
      "Discover iconic landmarks like Big Ben and the Tower of London.",
    slug: "london-uk",
  },
  {
    image: "/europe.jpg",
    title: "Full Europe",
    price: "$6.20k",
    description: "Embark on a grand tour across European destinations.",
    slug: "full-europe",
  },
  {
    image: "/singapore.jpg",
    title: "Singapore",
    price: "$4.10k",
    description: "Experience the futuristic skyline and cultural heritage.",
    slug: "singapore",
  },
  {
    image: "/dubai.jpg",
    title: "Dubai, UAE",
    price: "$5.00k",
    description: "Witness the marvels of modern architecture and attractions.",
    slug: "dubai-uae",
  },
  {
    image: "/bali.png",
    title: "Bali, Indonesia",
    price: "$3.80k",
    description: "Relax on serene beaches and enjoy vibrant Balinese culture.",
    slug: "bali-indonesia",
  },
  {
    image: "/tokyo.jpg",
    title: "Tokyo, Japan",
    price: "$6.00k",
    description:
      "Immerse yourself in a perfect blend of tradition and technology.",
    slug: "tokyo-japan",
  },
  {
    image: "/newyork.jpg",
    title: "New York, USA",
    price: "$7.50k",
    description:
      "Experience the bustling city life in iconic places like Times Square.",
    slug: "new-york-usa",
  },
  {
    image: "/paris.jpg",
    title: "Paris, France",
    price: "$5.80k",
    description:
      "Stroll through the City of Light and enjoy its world-famous cuisine.",
    slug: "paris-france",
  },
  {
    image: "/sydney.jpg",
    title: "Sydney, Australia",
    price: "$6.70k",
    description: "Visit the Sydney Opera House and its picturesque beaches.",
    slug: "sydney-australia",
  },
];

export default function BookingPage({ params }) {
  const router = useRouter();
  const { slug } = use(params);
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return notFound();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.destination = destination.title;

    try {
      const response = await fetch("/api/Booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Booking saved successfully!");
        generateInvoice(data); // Call the function to generate the invoice
        router.push("/bookinglist");
      } else {
        const error = await response.json();
        alert(`Failed to save booking: ${error.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save booking.");
    }
  };

  const generateInvoice = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Booking Invoice", 20, 20);
    doc.setFontSize(12);
    doc.text(`Destination: ${destination.title}`, 20, 40);
    doc.text(`Name: ${data.firstName} ${data.lastName}`, 20, 50);
    doc.text(`Email: ${data.email}`, 20, 60);
    doc.text(`Room Type: ${data.roomType}`, 20, 70);
    doc.text(`Guests: ${data.guests}`, 20, 80);
    doc.text(`Check In: ${data.startDate}`, 20, 90);
    doc.text(`Check Out: ${data.endDate}`, 20, 100);
    doc.text(`Special Requests: ${data.specialRequests || "None"}`, 20, 110);
    doc.setFontSize(14);
    doc.text(`Total Price: ${destination.price}`, 20, 130);
    doc.setFontSize(10);
    doc.save(`Invoice_${destination.slug}_${Date.now()}.pdf`);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${destination.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">{destination.title}</h1>
          <p className="text-lg mb-4">{destination.description}</p>
          <p className="text-3xl font-semibold text-yellow-400 mb-6">
            Price: {destination.price}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Read More
          </button>
        </div>
        <div className="w-full md:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Booking Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="roomType"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option>Room Type</option>
              <option>Single</option>
              <option>Double</option>
              <option>Suite</option>
            </select>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
              name="guests"
            >
              <option value={0}>Number of Guests</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value="5+">5+</option>
            </select>

            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <div className="flex flex-col items-start w-full md:w-1/2">
                <label htmlFor="startDate" className="mb-1  text-gray-600">
                  Check In
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 uppercase"
                />
              </div>
              <div className="flex flex-col items-start w-full md:w-1/2">
                <label htmlFor="endDate" className="mb-1 text-gray-600">
                  Check Out
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 uppercase"
                />
              </div>
            </div>

            <textarea
              name="specialRequests"
              placeholder="Special Requests (e.g., dietary restrictions, preferred activities)"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
