import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/HeroSection";
import LogoCloud from "@/components/ui/logo-cloud";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/ui/large-name-footer";

export default function HomePage() {
  return (
    <>
      <div className="grid-content">
        <Navbar />
        <HeroSection />
        <LogoCloud />
        <ServiceSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
