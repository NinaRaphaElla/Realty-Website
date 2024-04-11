import React from "react";
import Faqs from "./Faqs.jsx";

const FaqsPage = () => {
  return (
    <>
      <div className="mt-24 mb-[3000px]">
        <Faqs
          question="How do I schedule a consultation or property viewing?"
          answer="Simply contact us through our website or give us a call, and our team will be happy to assist you in scheduling a consultation or arranging property viewings."
        />
      </div>
    </>
  );
};

export default FaqsPage;
