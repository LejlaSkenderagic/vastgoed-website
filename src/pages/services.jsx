import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Wrench, Hammer, Lightbulb, Droplet, CheckCircle, Clock, Users, Zap } from "lucide-react";
import contractorImage from "../assets/contractor.jpg";
import { useEffect } from "react";

export const Services = () => {
  useEffect(() => {
    // Handle hash scrolling on page load and navigation
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const navHeight = 80; // Approximate navbar height
            window.scrollTo({
              top: elementPosition - navHeight,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);
  const services = [
    {
      id: "dagelijks-onderhoud",
      icon: Wrench,
      title: "Dagelijks Onderhoud",
      shortDesc: "Reparatie van lekkages, hang- en sluitwerk, verlichting en kleine schilderwerk.",
      fullDesc: "Ons dagelijks onderhoud zorgt ervoor dat uw pand altijd in topconditie blijft. Van kleine reparaties tot regelmatig preventief onderhoud - wij zijn er voor al uw onderhoudsbehoeften.",
      details: [
        "Reparatie van lekkages en verstoppingen",
        "Herstellen of vervangen van deuren en ramen",
        "Verlichting en schakelaars vervangen",
        "Klein schilderwerk en kitranden",
        "Sanitair en kraan vervangen bij slijtage",
      ],
    },
    {
      id: "renovatieprojecten",
      icon: Hammer,
      title: "Renovatieprojecten",
      shortDesc: "Van badkamerrenovaties tot dakreparaties en gevelwerk. Complete verbouwingen.",
      fullDesc: "Voor grotere onderhoudsklussen en volledige renovaties hebben we jaren ervaring. Wij begeleiden u van concept tot oplevering met professionaal vakmanschap en duidelijke communicatie.",
      details: [
        "Badkamer- en toiletrenovaties",
        "Vervangen of vernieuwen van dakbedekking",
        "Groot schilderwerk binnen en buiten",
        "Gevelrenovatie en metselwerk",
        "Indelingswijzigingen en binnenwanden",
      ],
    },
    {
      id: "preventief-onderhoud",
      icon: Lightbulb,
      title: "Preventief Onderhoud",
      shortDesc: "CV-ketelservice, ventilatie-inspectie en regelmatig technisch onderhoud.",
      fullDesc: "Preventief onderhoud voorkomt dure reparaties later. Wij voeren regelmatige inspecties uit en onderhoud aan kritieke installaties om problemen vroegtijdig te detecteren.",
      details: [
        "CV-ketelservice en regulier technisch onderhoud",
        "Ventilatie- en afzuigsystemen controleren",
        "Elektrische installaties inspecteren",
        "Loodgieterswerk en sanitair controleren",
        "Jaarlijkse onderhoudsprogramma's",
      ],
    },
    {
      id: "spoedreparaties",
      icon: Droplet,
      title: "Spoedreparaties",
      shortDesc: "Bij haast zijn we snel ter plaatse voor lekkages en acute reparaties.",
      fullDesc: "Spoedreparaties kunnen niet altijd wachten. Daarom hebben wij snelle responstijden en zijn we beschikbaar voor acute problemen die onmiddellijke aandacht nodig hebben.",
      details: [
        "Snelle respons op spoedreparaties",
        "24/7 beschikbaarheid voor noodgevallen",
        "Lekkagebestrijding en waterschade",
        "Verstoppingen en rioolproblemen",
        "Damage control en herstelwerkzaamheden",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-amber-500/10">
          <div className="max-w-4xl mx-auto text-center pt-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Onderhoud <span className="text-primary">& Renovatie</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Zorgeloos vastgoed begint bij goed onderhoud. Ontdek ons volledige aanbod van dagelijks onderhoud tot grootschalige renovatieprojecten.
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {services.map((service, serviceIdx) => {
              const Icon = service.icon;
              const isSwapped = serviceIdx === 1 || serviceIdx === 3;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-32 animate-slide-up ${isSwapped ? '' : ''}`}
                  style={{
                    animation: `slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${serviceIdx * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className={`space-y-6 ${isSwapped ? 'order-2' : 'order-2 md:order-1'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.fullDesc}
                    </p>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Ons aanbod:</h3>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 animate-fade-in"
                            style={{
                              animation: `fade-in 0.6s ease-out ${serviceIdx * 0.2 + idx * 0.08}s forwards`,
                              opacity: 0,
                            }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${isSwapped ? 'order-1' : 'order-1 md:order-2'}`}>
                    <div 
                      className="p-12 rounded-lg bg-section-bg flex items-center justify-center h-64 animate-scale-in"
                      style={{
                        animation: `scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${serviceIdx * 0.2 + 0.3}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <Icon className="h-32 w-32 text-primary/70" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 section-bg">
          <div className="max-w-7xl mx-auto flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Onze <span className="text-primary">Werkwijze</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center flex-1">
              {/* Left - Process Steps (2 columns) */}
              <div className="order-1 space-y-6 md:col-span-2 flex flex-col justify-center">
                {[
                  {
                    icon: Users,
                    step: "1",
                    title: "Kennismaking & Inventarisatie",
                    desc: "We starten met een gesprek over uw wensen en brengen de staat van uw pand in kaart.",
                  },
                  {
                    icon: Lightbulb,
                    step: "2",
                    title: "Advies & Offerte",
                    desc: "U ontvangt een transparante offerte met heldere prijsopgave en planning.",
                  },
                  {
                    icon: Hammer,
                    step: "3",
                    title: "Professionele Uitvoering",
                    desc: "Onze professionals voeren het werk vakkundig uit. U heeft één aanspreekpunt.",
                  },
                  {
                    icon: CheckCircle,
                    step: "4",
                    title: "Oplevering & Nazorg",
                    desc: "We controleren samen het resultaat en blijven beschikbaar voor toekomstig onderhoud.",
                  },
                ].map((item, idx) => {
                  const StepIcon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 animate-slide-up"
                      style={{
                        animation: `slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.15}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <div 
                        className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 animate-icon-bounce"
                        style={{
                          animation: `icon-bounce 0.8s ease-out ${idx * 0.15 + 0.2}s forwards`,
                          opacity: 0,
                        }}
                      >
                        <span className="text-lg font-bold text-primary">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        <p className="text-base text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right - Image (3 columns) */}
              <div className="order-2 md:col-span-3">
                <img
                  src={contractorImage}
                  alt="Contractor at work"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor het volgende onderhoud of renovatie?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Neem contact op voor een vrijblijvende offerte of adviesgesprek. Wij denken graag met u mee.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Neem Contact Op
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
