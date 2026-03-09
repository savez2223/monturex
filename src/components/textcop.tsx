import { useState } from "react";
import { Button } from "@/components/ui/button";

const Text = () => {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    const textToCopy = `I confirm that I have received the delivered digital IT services as agreed.

Transaction ID: 8xxxxxxxxxxx

Date of Payment: 21 Feb 2026

I acknowledge and accept the scope of work, terms and conditions, and related documents shared via email. I also confirm that the payment has been made willingly and that I will not initiate any refund request or chargeback for the completed services.

I understand that all delivered work and email communications serve as official proof of service completion.

Thank you for your professional support.

Best regards,
Client Name`;

    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto text-sm text-muted-foreground leading-relaxed py-10">
      <p className="mb-4">
        I confirm that I have received the delivered digital IT services as
        agreed.
      </p>

      <p className="mb-2">
        <strong>Transaction ID:</strong> 0P7389919T125681U
      </p>

      <p className="mb-4">
        <strong>Date of Payment:</strong> 09 Mar 2026
      </p>

      <p className="mb-4">
        I acknowledge and accept the scope of work, terms and conditions, and
        related documents shared via email. I also confirm that the payment has
        been made willingly and that I will not initiate any refund request or
        chargeback for the completed services.
      </p>

      <p className="mb-4">
        I understand that all delivered work and email communications serve as
        official proof of service completion.
      </p>

      <p className="mb-6">Thank you for your professional support.</p>

      <p className="font-medium mb-6">
        Best regards,
        <br />
        Robert Doyle
      </p>

      {/* Copy Button */}
      <Button onClick={copyText} className="w-full">
        {copied ? "Copied ✅" : "Copy Text"}
      </Button>
    </div>
  );
};

export default Text;
