import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#FFF5E5] text-gray-800 min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
