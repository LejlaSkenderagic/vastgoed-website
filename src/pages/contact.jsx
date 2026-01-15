import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/Footer";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Main Contact Section */}
      <section className="relative py-20 px-4 pt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Neem contact op
              </h1>
              <p className="text-lg text-gray-600">
                Heb je vragen of wil je een offerte aanvragen? We helpen je graag verder.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 flex-shrink-0">
                  <Phone size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Whatsapp.</h3>
                  <p className="text-base text-gray-600">+31 (0)6 12345678</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 flex-shrink-0">
                  <Mail size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email.</h3>
                  <p className="text-base text-gray-600">info@vincibouw.nl</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 flex-shrink-0">
                  <MapPin size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Vestiging.</h3>
                  <p className="text-base text-gray-600">Nijenhuislaan 20
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 text-center">
              <h3 className="text-lg font-semibold mb-6">Socials.</h3>
              <div className="flex gap-4 justify-center">
                <a href="#" className="w-14 h-14 rounded-lg bg-white border border-gray-200 text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-lg bg-white border border-gray-200 text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-lg bg-white border border-gray-200 text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Stuur ons een bericht</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  placeholder="Je naam"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  placeholder="je@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Onderwerp
                </label>
                <input
                  type="text"
                  placeholder="Onderwerp"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  rows="5"
                  placeholder="Je bericht hier..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-700 transition-all"
              >
                Verzenden
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
