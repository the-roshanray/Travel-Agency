"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useRouter } from "next/navigation";

export function FeaturedSection() {
  const router = useRouter();
  const destinations = [
    {
      src: "/rome.jpg",
      title: "Rome, Italy",
      price: "$5.42k",
      description: "Explore the ancient ruins, Italian culture.",
      slug: "rome-italy",
    },
    {
      src: "/london.jpg",
      title: "London, UK",
      price: "$4.90k",
      description: "Discover iconic landmarks like Big Ben and the Tower of London.",
      slug: "london-uk",
    },
    {
      src: "/europe.jpg",
      title: "Full Europe",
      price: "$6.20k",
      description: "Embark on a grand tour across European destinations.",
      slug: "full-europe",
    },
    {
      src: "/singapore.jpg",
      title: "Singapore",
      price: "$4.10k",
      description: "Experience the futuristic skyline and cultural heritage.",
      slug: "singapore",
    },
    {
      src: "/dubai.jpg",
      title: "Dubai, UAE",
      price: "$5.00k",
      description: "Witness the marvels of modern architecture and attractions.",
      slug: "dubai-uae",
    },
    {
      src: "/bali.png",
      title: "Bali, Indonesia",
      price: "$3.80k",
      description: "Relax on serene beaches and enjoy vibrant Balinese culture.",
      slug: "bali-indonesia",
    },
    {
      src: "/tokyo.jpg",
      title: "Tokyo, Japan",
      price: "$6.00k",
      description: "Immerse yourself in a perfect blend of tradition and technology.",
      slug: "tokyo-japan",
    },
    {
      src: "/newyork.jpg",
      title: "New York, USA",
      price: "$7.50k",
      description: "Experience the bustling city life in iconic places like Times Square.",
      slug: "new-york-usa",
    },
    {
      src: "/paris.jpg",
      title: "Paris, France",
      price: "$5.80k",
      description: "Stroll through the City of Light and enjoy its world-famous cuisine.",
      slug: "paris-france",
    },
    {
      src: "/sydney.jpg",
      title: "Sydney, Australia",
      price: "$6.70k",
      description: "Visit the Sydney Opera House and its picturesque beaches.",
      slug: "sydney-australia",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
          Discover Your Dream Destination
        </h2>
        <p className="text-center text-gray-600 text-sm md:text-lg">
          Hand-picked travel destinations for your next big adventure.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem
                key={index}
                className="basis-[90%] sm:basis-[45%] md:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <div className="p-4">
                  <a
                    href={`/booking/${destination.slug}`}
                    aria-label={`Book ${destination.title}`}
                  >
                    <Card
                      className="shadow-md transform hover:scale-105 transition-transform duration-300"
                      style={{ height: "100%", width: "100%" }}
                    >
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden rounded-t-lg">
                        <Image
                          src={destination.src}
                          alt={`Image of ${destination.title}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                          {destination.price}
                        </span>
                      </div>

                      {/* Content Section */}
                      <CardContent className="flex flex-col items-start p-4 space-y-2">
                        <h3 className="text-base md:text-lg font-bold text-gray-800">
                          {destination.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 flex-grow">
                          {destination.description}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`/booking/${destination.slug}`);
                          }}
                          className="mt-4 px-5 py-2 w-full bg-blue-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600 transition"
                          aria-label={`Book now for ${destination.title}`}
                        >
                          Book Now
                        </button>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
