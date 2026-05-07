/* Design: Chrome & Asphalt — main page assembly */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MapSchemeSection from "@/components/MapSchemeSection";
import ZonesSection from "@/components/ZonesSection";
import GallerySection from "@/components/GallerySection";
import AudienceSection from "@/components/AudienceSection";
import LocationSection from "@/components/LocationSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MapSchemeSection />
      <ZonesSection />
      <GallerySection />
      <AudienceSection />
      <LocationSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
