import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const IconsSection = () => {
  const icons = [
    {
      name: "Browser Security",
      file: "browser_Security.ico",
      description: "Professional browser security icon for your applications",
      category: "Web Security",
    },
    {
      name: "Email Security",
      file: "email_security.ico",
      description: "Comprehensive Email Protection and Security Tools",
      category: "Communication",
    },
    {
      name: "Network Security",
      file: "shield.ico",
      description: "Network monitoring and protection shield icon",
      category: "Network",
    },
    {
      name: "Firewall Security",
      file: "firewall_1.ico",
      description: "Advanced Firewall Defense and Protection Suite",
      category: "Defense",
    },
    {
      name: "Sonic Firewall (macOS)",
      file: "shield.ico",
      description: "Advanced SSL Security Suite for macOS Systems",
      category: "macOS Security",
    },
    {
      name: "Invoice Document",
      file: "Invoice_jerry.pdf",
      description: "Download invoice document",
      category: "Documentation",
      isDocument: true,
    },
  ];

  return (
    <section id="icons" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security Icons
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download professional security icons for your projects and
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {icons.map((icon, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-24 h-24 flex items-center justify-center bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  {icon.isDocument ? (
                    <Download className="w-16 h-16 text-primary" />
                  ) : (
                    <img
                      src={`/downloads/${icon.file}`}
                      alt={icon.name}
                      className="w-16 h-16"
                    />
                  )}
                </div>
                <CardTitle className="text-xl">{icon.name}</CardTitle>
                <CardDescription className="text-xs text-accent font-medium">
                  {icon.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {icon.description}
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={`/downloads/${icon.file}`} download={icon.file}>
                    <Download className="mr-2 h-4 w-4" />
                    {icon.isDocument ? "Download Invoice" : "Download Icon"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All icons are in .ICO format and ready to use in your applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
