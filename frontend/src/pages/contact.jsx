import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Email succesvol verzonden!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
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
              <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <Phone size={32} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Whatsapp</h3>
                  <p className="text-base text-gray-600">+31 6 12602934</p>
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <Mail size={32} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                  <p className="text-base text-gray-600">info@vincibouw.nl</p>
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                <MapPin size={32} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Vestiging</h3>
                  <p className="text-base text-gray-600">Grote Voort 247, 8041 BL Zwolle
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Je naam"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="je@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Bericht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Je bericht hier..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`p-3 rounded-lg text-center font-medium ${
                  status.includes("✅") 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {status}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Verzenden..." : "Verzenden"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
