import { CheckCircle, Shield, Handshake, Megaphone, Users, Eye, FileText, Zap, Hammer } from "lucide-react";
import contractorImage from "../assets/contractor.jpg";
import dak from "../assets/dak.png";
import verbouwer from "../assets/verbouwer.png";
import huis from "../assets/huisAbout.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Column */}
            <div className="space-y-6 animate-slide-up" style={{ animation: "slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards", opacity: 1 }}>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
                  Uw partner in bouwen en
                  <span className="text-primary"> verbouwen</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Wij zijn een solide en betrouwbaar bouwbedrijf. Wij helpen u met nieuwbouw, renovatie en verbouwingen. Kwaliteit en vakmanschap staan centraal.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="mb-2 flex justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Binnen 24u reactie</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="mb-2 flex justify-center">
                    <Hammer className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Ervaren vakmensen</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="mb-2 flex justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Betrouwbaar vakwerk</p>
                </div>
              </div>
            </div>

            {/* Right Images - VinciBouw Style */}
            <div className="flex gap-4 h-96 animate-fade-in" style={{ animation: "fade-in 0.6s ease-out 0.2s forwards", opacity: 0 }}>
              {/* Large Image - Left side */}
              <img 
                src={huis}
                alt="Contractor at work"
                className="w-3/5 h-full object-cover rounded-2xl shadow-lg"
              />
              
              {/* Right side - Two stacked small images */}
              <div className="w-2/5 flex flex-col gap-4">
                {/* Top Small Image */}
                <img 
                  src={dak}
                  alt="Construction project"
                  className="w-full h-1/2 object-cover rounded-xl shadow-md"
                />
                
                {/* Bottom Small Image */}
                <img 
                  src={verbouwer}
                  alt="House renovation"
                  className="w-full h-1/2 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
