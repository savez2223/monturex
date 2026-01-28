import { Download, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InvoiceSection = () => {
  const invoices = [
    {
      name: "Invoice - Alex Gill",
      file: "Invoice_Alex_Gill.pdf",
      description: "Download invoice for Alex Gill",
      date: "2024-01-15",
    },
    {
      name: "Invoice - Garner Davidson",
      file: "Invoice_Garner_Davidson.pdf",
      description: "Download invoice for Garner Davidson",
      date: "2024-01-20",
    },
    {
      name: "Invoice - Jerry",
      file: "Invoice_jerry.pdf",
      description: "Download invoice for Jerry",
      date: "2024-01-25",
    },
  ];

  return (
    <section id="invoices" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Invoice Downloads
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download your invoices and billing documents securely
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {invoices.map((invoice, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">{invoice.name}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {invoice.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {invoice.description}
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={`/downloads/${invoice.file}`} download={invoice.file}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Invoice
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvoiceSection;
