import React from "react";
import Faqs from "./Faqs.jsx";

const FaqsPage = () => {
  return (
    <>
      <div id="faqs">
        {/* FAQS */}
        <div className="mb-24 mt-28">
          <div className="flex items-center mb-4">
            <div className="bg-white w-[100%] h-0.5"></div>
            <h1 className="text-3xl md:text-4xl whitespace-nowrap mr-2 font-medium px-4 text-primary">
              <span className="text-black">Frequently Asked</span> Questions
            </h1>
            <div className="bg-primary w-[100%] h-0.5"></div>
          </div>

          {/* faqs */}
          <Faqs
            question="How do I schedule a consultation or property viewing?"
            answer="Simply contact us through our website or give us a call, and our team will be happy to assist you in scheduling a consultation or arranging property viewings."
          />
          <Faqs
            question="Do you handle legal aspects of the transaction?"
            answer="Yes, we provide legal and administrative support to ensure a smooth and hassle-free transaction, including handling paperwork and coordinating with legal professionals."
          />
          <Faqs
            question="How do you determine the value of a property?"
            answer="We conduct thorough market analysis, considering factors such as location, property condition, recent sales, and market trends to determine accurate property values."
          />
          <Faqs
            question="How can I stay updated on new listings or market trends?"
            answer="We conduct thorough market analysis, considering factors such as location, property condition, recent sales, and market trends to determine accurate property values."
          />

          <div className="text-center mt-8">
            <h3 className="text-base font-medium">
              Can&#x27;t find your question here?
            </h3>
            <p className="text-base text-primary">Contact us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqsPage;
