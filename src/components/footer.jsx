import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "../assets/vinci_bouw_logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#0D152D]">
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          
          {/* Brand & Description */}
          <div className="space-y-8 flex flex-col items-center">
            <img 
              src={logo}
              alt="Vinci Bouw"
              className="h-24 w-auto"
            />
            <p className="text-lg text-gray-300 leading-relaxed max-w-xs text-center">
              Wij verzorgen professioneel onderhoud, renovatie en herstel van uw woning of bedrijfspand. Betrouwbaar vakmanschap, zorgeloos resultaat.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <div className="mb-8 space-y-4 text-left">
              <h3 className="text-2xl font-bold text-white">Diensten</h3>
            </div>
            <ul className="space-y-4 text-left">
              <li><span className="text-lg text-gray-300">Stucadoorswerk</span></li>
              <li><span className="text-lg text-gray-300">Schilderwerk</span></li>
              <li><span className="text-lg text-gray-300">Vloeren leggen</span></li>
              <li><span className="text-lg text-gray-300">Glazenwassen</span></li>
              <li><span className="text-lg text-gray-300">Timmerwerk</span></li>
              <li><span className="text-lg text-gray-300">Dakwerk</span></li>
              <li><span className="text-lg text-gray-300">Elektrotechnische installaties</span></li>
              <li><span className="text-lg text-gray-300">Loodgieterswerk</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-8 space-y-4 text-left">
              <h3 className="text-2xl font-bold text-white">Contact</h3>
            </div>
            <div className="space-y-6 text-left">
              <div>
                <p className="font-bold text-lg text-white mb-4">Vinci Bouw</p>
                <div className="flex items-center gap-3">
                  <MapPin size={22} className="text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">Adres hier</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={22} className="text-primary flex-shrink-0" />
                <span className="text-lg text-gray-300">+31 (0)6 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={22} className="text-primary flex-shrink-0" />
                <span className="text-lg text-gray-300">info@vincibouw.nl</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Socials.</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-14 h-14 rounded-lg bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={28} />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-lg bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 rounded-lg bg-white text-foreground flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-4 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LESK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
