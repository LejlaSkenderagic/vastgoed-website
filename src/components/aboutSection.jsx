import { CheckCircle, Shield, Handshake, Megaphone, Users, Eye, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 relative">
      <div className="w-full p-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Over <span className="text-foreground"> Ons</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text Column */}
            <div className="space-y-6 section-bg rounded-lg p-8 animate-slide-up" style={{ animation: "slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards", opacity: 1 }}>

              <h3 className="text-2xl font-semibold text-foreground">Wat wij doen</h3>

              <p className="text-muted-foreground">
                Uw pand in topconditie houden is ons vak. Wij bieden een compleet pakket aan onderhouds- en renovatiediensten voor woningen en bedrijfspanden.
              </p>

              <p className="text-muted-foreground">
                Onze diensten:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3 animate-fade-in-delay-1" style={{ animation: "fade-in 0.6s ease-out 0.2s forwards", opacity: 0 }}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Onderhoudswerkzaamheden:</strong> Van kleine reparaties tot periodiek onderhoud, wij zorgen dat alles werkt.</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in-delay-2" style={{ animation: "fade-in 0.6s ease-out 0.3s forwards", opacity: 0 }}>
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Renovatieprojecten:</strong> Complete verbouwingen, modernisering en verduurzaming van uw pand.</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in-delay-3" style={{ animation: "fade-in 0.6s ease-out 0.4s forwards", opacity: 0 }}>
                  <Eye className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Inspectie & Advies:</strong> Grondige inspecties en deskundig advies voor een duurzaam resultaat.</span>
                </li>
                <li className="flex items-start gap-3 animate-fade-in-delay-4" style={{ animation: "fade-in 0.6s ease-out 0.5s forwards", opacity: 0 }}>
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Transparante offertes:</strong> Heldere afspraken en duidelijke communicatie, zonder verrassingen.</span>
                </li>
              </ul>

              
            </div>

            {/* Right Feature Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover animate-scale-in" style={{ animation: "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards", opacity: 0 }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ color: "#713309" }}>Grondige Screening</h4>
                    <p style={{ color: "#713309" }}>
                      Wij controleren alles: inkomsten, referenties en betrouwbaarheid van de kandidaat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover animate-scale-in" style={{ animation: "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards", opacity: 0 }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ color: "#713309" }}>Uw Belangen Beschermd</h4>
                    <p style={{ color: "#713309" }}>
                      Transparante afspraken en professioneel contractbeheer voor totale veiligheid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover animate-scale-in" style={{ animation: "scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards", opacity: 0 }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg" style={{ color: "#713309" }}>Lokale Expertise</h4>
                    <p style={{ color: "#713309" }}>
                      Jaren ervaring en breed netwerk in de regio voor de beste resultaten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
