import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import CoupleSection from "./components/CoupleSection";
import FamiliesSection from "./components/FamiliesSection";
import EventSection from "./components/EventSection";
import VenueSection from "./components/VenueSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/image1.webp')",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/85"></div>

        {/* Content */}
        <div className="relative z-10">
          <CoupleSection />
        </div>
      </div>

      <FamiliesSection />
      <EventSection />
      <VenueSection />
      <Footer />
    </main>
  );
}
