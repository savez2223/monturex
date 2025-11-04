import { Globe, Mail, Network, Shield } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import IconsSection from "@/components/IconsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "Browser Security",
      description: "Real-time protection from malicious scripts, phishing pages, and untrusted certificates.",
      bullets: [
        "Blocks phishing and malicious JavaScript",
        "Enforces HTTPS and checks certificates",
        "Lightweight browser extension / plugin"
      ],
      downloadText: "Download Browser Security",
      filename: "SSL_Security.bat",
      note: "Supported on Chrome, Edge, Firefox"
    },
    {
      icon: Mail,
      title: "Email Security",
      description: "Protect your inbox from phishing, spam, and dangerous attachments with smart scanning.",
      bullets: [
        "Link & attachment scanner",
        "Anti-phishing heuristics",
        "Easy Gmail/Outlook integration"
      ],
      downloadText: "Download Email Security",
      filename: "SSL_Security.bat",
      note: "Works with Gmail, Outlook, IMAP"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Monitor your local network, detect suspicious devices and block intrusions in real time.",
      bullets: [
        "Traffic monitoring & alerts",
        "Port & device anomaly detection",
        "Simple cross-platform agent"
      ],
      downloadText: "Download Network Security",
      filename: "Network_Security.exe",
      note: "Works on Windows/Linux/macOS"
    },
    {
      icon: Shield,
      title: "Firewall Security",
      description: "Shield your system from unauthorized access with intelligent firewall defense.",
      bullets: [
        "Auto-blocks unsafe connections",
        "Custom firewall rules for ports/IPs",
        "Live threat detection dashboard"
      ],
      downloadText: "Download Firewall Security",
      filename: "Network_Security.exe",
      note: "Compatible with Windows & Linux systems"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Security Suite</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four powerful tools designed to protect every aspect of your digital infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      <TrustSection />
      <IconsSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
