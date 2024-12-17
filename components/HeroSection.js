import Image from "next/image";
import React from "react";
import { FeaturedSection } from "./FeaturedSection";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 grid md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-orange-500 font-semibold text-lg md:text-xl">
            Best Destinations around the world
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold my-4 leading-tight text-gray-900">
            Travel, enjoy, and live a new and full life
          </h1>
          <p className="text-gray-600 my-4 text-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <button
              type="button"
              className="bg-yellow-400 px-8 py-3 rounded-md text-white transition hover:bg-yellow-500 shadow-lg transform hover:scale-105"
            >
              Contact
            </button>
            <Link href={"/bookinglist"}>
              <button
                type="button"
                className="bg-red-400 text-white px-8 py-3 rounded-md transition hover:bg-red-500 shadow-lg transform hover:scale-105"
              >
                Booking
              </button>
            </Link>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0">
          <div className="bg-yellow-400 h-72 w-72 rounded-full absolute top-0 left-0 shadow-lg"></div>
          <Image
            src="/tourist-no-bg.png"
            alt="Travel the world"
            width={400}
            height={400}
            priority
            className="relative transform hover:scale-105 transition"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-white">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              src: "/weather.png",
              title: "Calculated Weather",
              desc: "Built Wicket longer admire do barton vanity.",
            },
            {
              src: "/best-flight.png",
              title: "Best Flights",
              desc: "Park gate sell they west hard for the.",
            },
            {
              src: "/local-events.png",
              title: "Local Events",
              desc: "Preferred to men it engrossed listening.",
            },
            {
              src: "/custom.png",
              title: "Customization",
              desc: "We deliver outsourced aviation services.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center border p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={service.src}
                alt={service.title}
                width={100}
                height={100}
                className="mx-auto object-contain"
              />
              <h3 className="text-lg font-semibold mt-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-6 md:px-16 py-10 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-8 md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
              Book Your Next Trip In 3 Easy Steps
            </h2>
            {[
              {
                icon: "/destination.png",
                title: "Choose Destination",
                desc: "Choose your favourite place. No matter where you travel inside the World.",
                bgColor: "bg-yellow-500",
              },
              {
                icon: "/payment-method.png",
                title: "Make Payment",
                desc: "After finding your perfect spot, make your payment and get ready to travel.",
                bgColor: "bg-red-400",
              },
              {
                icon: "/airport.png",
                title: "Reach Airport on Selected Date",
                desc: "Arrive at the airport on time and enjoy your vacation.",
                bgColor: "bg-blue-500",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`${step.bgColor} p-3 rounded-lg`}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trip Card */}
          <div className="w-full md:w-[450px] bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="relative w-full h-[220px]">
              <Image
                src="/greece-trip.png"
                alt="Greece Trip"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Trip To Greece
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                14-29 June | by Robbin Joseph
              </p>
              <div className="flex justify-center items-center gap-2 mt-3 text-gray-600">
                <Image
                  src="/participant.png"
                  alt="People"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="text-sm">24 people going</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Cards */}
      <FeaturedSection />

      {/* Subscription Section */}
      <div className="flex justify-center items-center p-10 bg-white">
        <div className="bg-[#F8F6FF] rounded-xl shadow-md p-8 w-full max-w-3xl text-center relative mx-auto mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
            Subscribe to get information, latest news, and other interesting
            offers about Cobham
          </h2>
          <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <div className="flex items-center w-full bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full ml-2 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
              />
            </div>
            <button className="px-6 py-2 bg-[#FC724D] text-white font-medium rounded-lg hover:bg-[#ff5a2e] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
