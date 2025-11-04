import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-primary">Monto Security</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <Link
            to="/icons"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Icons
          </Link>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("features")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-all hover:shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
