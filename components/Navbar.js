import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md ">
      {/* Brand */}
      <div className="text-2xl font-bold flex items-center space-x-2">
        <span className="text-black">fauget</span>
        <span className="text-yellow-500 text-3xl">✈️</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a
          href="#services"
          className="hover:text-yellow-500 transition duration-300"
        >
          Services
        </a>
        <a
          href="#destination"
          className="hover:text-yellow-500 transition duration-300"
        >
          Destination
        </a>
        <a
          href="/bookinglist"
          className="hover:text-yellow-500 transition duration-300"
        >
          Booking
        </a>
        <a
          href="#testimonials"
          className="hover:text-yellow-500 transition duration-300"
        >
          Testimonials
        </a>
        <a
          href="/login"
          className="hover:text-yellow-500 transition duration-300"
        >
          Login
        </a>
        <Link href={"/signup"}>
          <button
            type="button"
            className="bg-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 text-white transition duration-300"
          >
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
