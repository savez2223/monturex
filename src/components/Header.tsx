import { Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const icons = [
    { name: "Browser Security", file: "browser.ico" },
    { name: "Email Security", file: "email_security.ico" },
    { name: "Network Security", file: "shield.ico" },
    { name: "Firewall Security", file: "firewall.ico" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold text-primary">Monto Security</span>
        </div>

        {/* Icons Download Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <TooltipProvider>
            {icons.map((icon, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a
                    href={`/downloads/${icon.file}`}
                    download={icon.file}
                    className="group relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all hover:scale-110"
                  >
                    <img 
                      src={`/downloads/${icon.file}`} 
                      alt={icon.name}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                    <Download className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 md:w-3 md:h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Download {icon.name} Icon</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
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
