import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Faqs = (props) => {
  const [faqOpen, setfaqOpen] = useState(false);

  const setFaq = () => {
    setfaqOpen(!faqOpen);
  };

  return (
    <>
      <div
        id="faq-01"
        className="mx-4 md:mx-16 border-b-[0.05rem] border-secondary-100 py-7 px-4 md:px-12 hover:bg-hover-faqs transition-all ease-in-out duration-300"
      >
        <button onClick={setFaq} className="flex w-full justify-between">
          <h1 className="text-sm md:text-base text-start font-medium">
            {props.question}
          </h1>
          <span>
            {faqOpen ? (
              <RiArrowDownSLine className="size-6 rotate-180 transition-all ease-in-out duration-300" />
            ) : (
              <RiArrowDownSLine className="size-6 transition-all ease-in-out duration-300" />
            )}
          </span>
        </button>

        <div
          className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
            faqOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm md:text-base">{props.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
