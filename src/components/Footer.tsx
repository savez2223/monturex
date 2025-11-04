import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">Monto Security</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Protecting your website, inbox, network & firewall with simple,
              powerful security tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-accent transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-accent transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                Phone:{" "}
                <a
                  href="tel:+17602740909"
                  className="hover:text-accent transition-colors"
                >
                  +1 760 274 0909
                </a>
              </li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>Copyright © {currentYear} Monto Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
