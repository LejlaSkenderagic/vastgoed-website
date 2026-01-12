import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vinci_bouw_logo.svg";


const navItems = [
  { name: "Over ons", href: "/#about", isRoute: false },
  { name: "Diensten", href: "/services", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-2 bg-black/5 backdrop-blur-sm shadow-xs" : "py-2"
      )}
    >
      <div className="flex items-center justify-between px-8 md:px-14 w-full">
        <a
          className="flex items-center gap-3 z-10"
          href="/"
        >
          <img 
            src={logo}
            alt="Bouw Broeders"
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-14 md:h-16" : "h-20 md:h-22"
            )}
          />
          <span className="text-xl font-bold">
            <span className="text-foreground">Vinci</span>{" "}
            <span className="text-primary">Bouw</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) =>
            item.isRoute ? (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) =>
              item.isRoute ? (
                <Link
                  key={key}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            
          </div>
        </div>
      </div>
    </nav>
  );
};
