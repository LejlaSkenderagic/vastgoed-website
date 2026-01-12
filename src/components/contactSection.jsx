import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Twitch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "Dank voor uw bericht. Wij nemen snel contact op!",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Neem <span className="text-primary"> Contact Op</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Uw pand verdient het beste onderhoud. Neem contact op voor een vrijblijvende offerte of adviesgesprek over onderhoud en renovatie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gradient-border p-8 card-hover">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contactgegevens</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-amber-100/20">
                  <Mail className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground ">Email</h4>
                  <a
                    href="mailto:info@vastgoedwerving.nl"
                    className="text-foreground hover:text-orange-950 transition-colors"
                  >
                    info@vastgoedwerving.nl
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-amber-100/20">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Telefoon</h4>
                  <a
                    href="tel:+31612345678"
                    className="text-foreground hover:text-orange-950 transition-colors"
                  >
                    +31 6 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-amber-100/20">
                  <MapPin className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Locatie</h4>
                  <span className="text-foreground hover:text-orange-950 transition-colors">
                    Zwolle, Overijssel
                  </span>
                </div>
              </div>
              <p className="text-center pt-4 text-foreground mb-12 max-w-2xl mx-auto"> 
              Wilt u iets bespreken, een offerte ontvangen of meer weten over het onderhoud of beheer van uw vastgoed? Bel of mail ons gerust — we denken graag met u mee.
             </p>
            </div>
          </div>

          <div className="bg-amber-500/50 p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Stuur een Bericht</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Uw Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Admir Skenderagic..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="a_style@something.bih"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hallo! Ik wil graag meer weten over uw diensten..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button text-white w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Versturen..." : "Bericht Versturen"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
