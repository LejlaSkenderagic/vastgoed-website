import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/aboutSection";
import { ServicesSection } from "../components/servicesSection";
import { WhatWeDoSection } from "../components/whatWeDoSection";
import { ProjectsSection } from "../components/projectsSection";
import { ContactBanner } from "../components/contactBanner";
import { Footer } from "../components/footer";


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
        <WhatWeDoSection />
        <ProjectsSection />
        <ContactBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
