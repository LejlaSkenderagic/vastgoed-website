import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/video.mp4";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden z-20"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 bg-white/25 backdrop-blur-md rounded-2xl p-8 md:p-12 w-fit mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-secondary opacity-0 animate-fade-in">Renovatie en </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> onderhoud</span>
            <span className="text-secondary text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Wij doen het goed én snel.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Wij verzorgen professioneel onderhoud, renovatie en herstel van uw woning of bedrijfspand. Betrouwbaar vakmanschap, zorgeloos resultaat.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <Link to="/contact" className="cosmic-button text-white">
              Vraag een offerte aan
            </Link>
          </div>

          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
