import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo1.png";

const Header = () => {
  const navigate = useNavigate();

  // Scroll to section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // When clicking logo → go home + scroll to top
  const handleLogoClick = () => {
    navigate("/"); // Go to home route
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="Monturex Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl font-bold">
            <span style={{ color: "#00796c" }}>Monturex</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>

          <button
            onClick={() => scrollToSection("icons")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Icons
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

        {/* Get Started Button */}
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
