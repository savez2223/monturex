import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvoiceSection from "@/components/InvoiceSection";
import UploadSection from "@/components/UploadSection";

const Invoice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvoiceSection />
        <UploadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Invoice;
