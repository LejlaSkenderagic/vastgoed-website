import { useState } from "react";
import contractorImage from "../assets/contractor.jpg";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("renovatie");

  const projects = {
    nieuwbouw: [
      {
        id: 1,
        title: "Modern nieuwbouwhuis",
        description: "Font of ijzeno vaitjgimnrein.",
        image: contractorImage,
      },
      {
        id: 2,
        title: "Duurzaam wooncomplex",
        description: "Energiezuinig bouwen met duurzame materialen.",
        image: contractorImage,
      },
      {
        id: 3,
        title: "Samengestelde villawoning",
        description: "Luxe nieuwbouw met moderne voorzieningen.",
        image: contractorImage,
      },
    ],
    renovatie: [
      {
        id: 4,
        title: "Renovatie in jaren '30 woning",
        description: "Font of ijzeno vaitjgimnrein.",
        image: contractorImage,
      },
      {
        id: 5,
        title: "Badkamerrenovatie",
        description: "Compleet gerenoveerde badkamer met spa-gevoel.",
        image: contractorImage,
      },
      {
        id: 6,
        title: "Keukenupdates & reparaties",
        description: "Moderne keukenoplossingen voor gezinnen.",
        image: contractorImage,
      },
    ],
    verbouw: [
      {
        id: 7,
        title: "Verouning van zolderkamer",
        description: "Font of ijpe ju eatijmamen.",
        image: contractorImage,
      },
      {
        id: 8,
        title: "Uitbouw woonruimte",
        description: "Uitbreiding van woonoppervlak met extra kamers.",
        image: contractorImage,
      },
      {
        id: 9,
        title: "Open plan keuken-woonkamer",
        description: "Verbouwing naar moderne open lay-out.",
        image: contractorImage,
      },
    ],
  };

  const filters = [
    { key: "nieuwbouw", label: "Nieuwbouw" },
    { key: "renovatie", label: "Renovatie" },
    { key: "verbouw", label: "Verbouw" },
  ];

  const currentProjects = projects[activeFilter] || [];

  return (
    <section id="projects" className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Recent opgeleverde projecten
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-8 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`pb-2 font-semibold text-lg transition-all duration-300 ${
                activeFilter === filter.key
                  ? "text-foreground border-b-4 border-primary"
                  : "text-gray-400 hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animation: "fade-in 0.6s ease-out forwards", opacity: 1 }}
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="inline-block px-6 py-2 rounded-full bg-foreground/90 text-white font-medium text-sm transition-all duration-300 hover:bg-foreground hover:scale-105"
                >
                  Vraag offerte aan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
