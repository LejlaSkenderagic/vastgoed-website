import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactBanner = () => {
  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Contact Banner */}
        <div className="bg-secondary rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left lg:w-48">
            <h2 className="text-2xl md:text-3xl font-bold">
              Klaar om te beginnen?
            </h2>
          </div>

          {/* Center Contact Info */}
          <div className="flex flex-col gap-4 text-white w-full lg:w-auto lg:flex-1 lg:flex-row lg:gap-8 lg:justify-center">
            {/* Whatsapp */}
            <div className="grid grid-cols-[40px_1fr] gap-3 items-center justify-items-start lg:flex lg:justify-start">
              <Phone size={28} className="text-primary justify-self-center" />
              <div className="text-left">
                <h3 className="text-base font-semibold mb-1">Whatsapp.</h3>
                <p className="text-sm">+31 6 12602934</p>
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-[40px_1fr] gap-3 items-center justify-items-start lg:flex lg:justify-start">
              <Mail size={28} className="text-primary justify-self-center" />
              <div className="text-left">
                <h3 className="text-base font-semibold mb-1">Email.</h3>
                <p className="text-sm">info@vinchibouw.nl</p>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-[40px_1fr] gap-3 items-center justify-items-start lg:flex lg:justify-start">
              <MapPin size={28} className="text-primary justify-self-center" />
              <div className="text-left">
                <h3 className="text-base font-semibold mb-1">Vestiging.</h3>
                <p className="text-sm">Grote Voort 247, 8041 BL Zwolle</p>
              </div>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="w-full lg:w-auto text-center">
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
