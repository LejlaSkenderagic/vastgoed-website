import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/aboutSection";
import { ServicesSection } from "../components/servicesSection";
import { ContactSection } from "../components/contactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
