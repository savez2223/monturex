import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Icons = () => {
  const icons = [
    {
      name: "Browser Security",
      file: "browser.ico",
      description: "Professional browser security icon for your applications. Perfect for browser extensions, security dashboards, and web protection tools.",
      category: "Web Security",
      dimensions: "256x256",
      format: "ICO"
    },
    {
      name: "Email Security",
      file: "email_security.ico",
      description: "Email protection and security icon. Ideal for email clients, spam filters, and communication security applications.",
      category: "Communication",
      dimensions: "256x256",
      format: "ICO"
    },
    {
      name: "Network Security",
      file: "shield.ico",
      description: "Network monitoring and protection shield icon. Great for network monitoring tools, VPN applications, and security suites.",
      category: "Network",
      dimensions: "256x256",
      format: "ICO"
    },
    {
      name: "Firewall Security",
      file: "firewall.ico",
      description: "Firewall defense and protection icon. Perfect for firewall applications, security software, and system protection tools.",
      category: "Defense",
      dimensions: "256x256",
      format: "ICO"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <Link 
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Icons Collection</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Download professional, high-quality security icons for your projects. All icons are available in ICO format 
              and optimized for various applications including desktop software, web applications, and security tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {icons.map((icon, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 flex items-center justify-center bg-background rounded-lg shadow-md group-hover:scale-110 transition-transform">
                      <img 
                        src={`/downloads/${icon.file}`} 
                        alt={icon.name}
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{icon.name}</CardTitle>
                      <CardDescription className="text-xs text-accent font-medium mb-2">
                        {icon.category}
                      </CardDescription>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>Format: {icon.format}</span>
                        <span>Size: {icon.dimensions}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">
                    {icon.description}
                  </p>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90"
                    size="lg"
                    asChild
                  >
                    <a href={`/downloads/${icon.file}`} download={icon.file}>
                      <Download className="mr-2 h-5 w-5" />
                      Download {icon.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <h3 className="text-2xl font-bold">Usage Guidelines</h3>
            <div className="max-w-2xl mx-auto text-left space-y-3 text-muted-foreground">
              <p>✓ Free to use in personal and commercial projects</p>
              <p>✓ Perfect for desktop applications, web apps, and security software</p>
              <p>✓ High-quality ICO format compatible with Windows and other platforms</p>
              <p>✓ No attribution required (though appreciated)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Icons;
