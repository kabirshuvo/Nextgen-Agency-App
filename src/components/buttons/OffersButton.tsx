"use client";

import { Download } from "lucide-react";
import { Button } from "../ui/button";

const OffersButton = () => {
  const downloadPdf = () => {
    const url = "/Offers.pdf"; // Path to your PDF file in the public folder
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Offers.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button variant="outline" className="gap-x-2" onClick={downloadPdf}>
      Download Offers <Download size={18} />
    </Button>
  );
};

export default OffersButton;
