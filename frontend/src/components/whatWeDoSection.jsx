import { Paintbrush, Hammer, Zap, Wrench, Users, Droplets, Shovel, Eye, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    name: "Schilder",
    description: "Voor strak en duurzaam schilderwerk.",
    Icon: Paintbrush,
  },
  {
    name: "Stucadoor",
    description: "Voor perfect afgewerkte wanden en plafonds.",
    Icon: Users,
  },
  {
    name: "Elektricien",
    description: "Gecertificeerd, voor veilige en professionele elektra-installaties.",
    Icon: Zap,
  },
  {
    name: "Dakwerker",
    description: "Voor het repareren en onderhouden van daken.",
    Icon: Wrench,
  },
  {
    name: "Timmerman",
    description: "Voor maatwerk en herstelwerkzaamheden.",
    Icon: Hammer,
  },
  {
    name: "Loodgieter",
    description: "Voor waterdichte installaties en sanitair.",
    Icon: Droplets,
  },
  {
    name: "Vloerwerk",
    description: "Professioneel vloerwerk voor duurzame resultaten.",
    Icon: Shovel,
  },
  {
    name: "Glazenwassen",
    description: "Impeccabel schoon glas voor maximaal lichtinval.",
    Icon: Eye,
  },
  {
    name: "Garantie & Kwaliteit",
    description: "Alle werkzaamheden met volledige kwaliteitsgarantie.",
    Icon: CheckCircle,
  },
];

export const WhatWeDoSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-index]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-6 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-12">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up" style={{ animation: "slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards", opacity: 1 }}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-secondary">Wat wij </span>
            <span className="text-primary">doen</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wij bieden een volledig scala aan bouwdiensten voor uw renovatie, nieuwbouw en onderhoud projecten.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.Icon;
            const isVisible = visibleCards.has(String(index));

            return (
              <div
                key={index}
                data-index={index}
                className={`p-8 bg-gray-50 border border-gray-200 rounded-xl transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } hover:bg-gray-100 hover:border-primary/50 group cursor-pointer`}
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
};
