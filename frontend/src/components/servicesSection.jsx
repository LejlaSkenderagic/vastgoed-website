import { Wrench, Hammer, Lightbulb, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const maintenanceServices = [
    {
      id: "dagelijks-onderhoud",
      icon: Wrench,
      title: "Dagelijks Onderhoud",
      description: "Reparatie van lekkages, hang- en sluitwerk, verlichting en kleine schilderwerk. We zorgen dat uw pand in topconditie blijft.",
    },
    {
      id: "renovatieprojecten",
      icon: Hammer,
      title: "Renovatieprojecten",
      description: "Van badkamerrenovaties tot dakreparaties en gevelwerk. Complete verbouwingen met professioneel vakmanschap.",
    },
    {
      id: "preventief-onderhoud",
      icon: Lightbulb,
      title: "Preventief Onderhoud",
      description: "CV-ketelservice, ventilatie-inspectie en regelmatig technisch onderhoud om toekomstige problemen te voorkomen.",
    },
    {
      id: "spoedreparaties",
      icon: Droplet,
      title: "Spoedreparaties",
      description: "Bij haast zijn we snel ter plaatse voor lekkages, verst oppingen en andere acute reparaties.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative section-bg wave-divider rounded-t-[50px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Onderhoud <span className="text-primary">& Renovatie</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
          Zorgeloos vastgoed begint bij goed onderhoud. Wij bieden een compleet pakket van dagelijks onderhoud tot grote renovatieprojecten. Met één aanspreekpunt voor al uw onderhouds- en renovatiezaken.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintenanceServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 h-full animate-slide-up"
                style={{
                  animation: `slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Icon Container */}
                <div 
                  className="p-6 rounded-full bg-primary/10 animate-icon-bounce"
                  style={{
                    animation: `icon-bounce 0.8s ease-out ${index * 0.15 + 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  <Icon className="h-10 w-10 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground flex-grow">
                  {service.description}
                </p>

                {/* Read More Button */}
                <Link
                  to={`/services#${service.id}`}
                  className="mt-auto px-4 py-2 rounded-full bg-foreground text-white font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Lees meer
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
