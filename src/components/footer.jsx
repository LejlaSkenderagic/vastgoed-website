import { ArrowUp } from "lucide-react";
import logoSvg from "../assets/logo2.0.svg?react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LESK.co All rights reserved.
          </p>
        </div>
        <a
          href="/"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
