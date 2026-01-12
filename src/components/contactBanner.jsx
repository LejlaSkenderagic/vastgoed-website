import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactBanner = () => {
  return (
    <section className="py-24 px-4 relative bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Contact Banner */}
        <div className="bg-[#0D152D] rounded-3xl p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="text-white space-y-4 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              Klaar om te beginnen?
            </h2>
          </div>

          {/* Center Contact Info */}
          <div className="flex flex-col md:flex-row gap-12 flex-1 text-white">
            {/* Whatsapp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Whatsapp.</h3>
                <p className="text-base">+31 (6) 12345678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email.</h3>
                <p className="text-base">info@vincibouw.nl</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Vestiging.</h3>
                <p className="text-base">Adres hier</p>
              </div>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-orange-700 transition-all text-lg whitespace-nowrap"
            >
              Ik wil kennismaken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
