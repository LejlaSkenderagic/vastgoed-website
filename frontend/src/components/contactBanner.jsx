import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactBanner = () => {
  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Contact Banner */}
        <div className="bg-secondary rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="text-white lg:w-48">
            <h2 className="text-2xl md:text-3xl font-bold">
              Klaar om te beginnen?
            </h2>
          </div>

          {/* Center Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 text-white lg:flex-1 lg:justify-center">
            {/* Whatsapp */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <Phone size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Whatsapp.</h3>
                <p className="text-sm whitespace-nowrap">+31 6 12602934</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Email.</h3>
                <p className="text-sm whitespace-nowrap">info@vinchibouw.nl</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <MapPin size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">Vestiging.</h3>
                <p className="text-sm whitespace-nowrap">Grote Voort 247, 8041 BL Zwolle</p>
              </div>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="w-full lg:w-auto">
            <Link
              to="/contact"
              className="inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-orange-700 transition-all text-sm whitespace-nowrap"
            >
              Vraag offerte aan!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
