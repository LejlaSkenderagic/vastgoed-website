import contractorImage from "../assets/contractor.jpg";
import dakOnderhoudImage from "../assets/dakOnderhoud.jpg";
import badkamerRenoImage from "../assets/badkamerReno.jpg";
import keukenRenoImage from "../assets/keukenReno.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 4,
      title: "dakonderhoud van een woning",
      description: "De woning is volledig beschermd en verduurzaamd met vernieuwde dakpannen en een opgefriste gevel.",
      image: dakOnderhoudImage,
    },
    {
      id: 5,
      title: "Badkamerrenovatie",
      description: "Compleet gerenoveerde badkamer met spa-gevoel.",
      image: badkamerRenoImage,
    },
    {
      id: 6,
      title: "Keukenupdates & reparaties",
      description: "Een functionele en stijlvolle keuken vernieuwd met maatwerk en moderne installaties.",
      image: keukenRenoImage,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-secondary ">
          Recent opgeleverde projecten
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
