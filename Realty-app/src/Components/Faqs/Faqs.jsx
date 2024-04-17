import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import faqs from "../../../Data/Faqs.json";

const Faqs = () => {
  const [faqOpen, setFaqOpen] = useState(Array(faqs.faqs.length).fill(false));

  const toggleFaq = (index) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
    console.log(index);
  };

  return (
    <>
      {faqs.faqs.map((item, index) => (
        <div
          id={item.id}
          className="mx-4 md:mx-16 border-b-[0.05rem] border-secondary-100 py-7 px-4 md:px-12 hover:bg-hover-faqs transition-all ease-in-out duration-300"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full justify-between"
          >
            <h1 className="text-base md:text-base text-start font-medium">
              {item.question}
            </h1>
            <span>
              <RiArrowDownSLine
                className={`size-6 ${
                  faqOpen[index] ? "rotate-180" : ""
                } transition-all ease-in-out duration-300`}
              />
            </span>
          </button>

          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
              faqOpen[index]
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-sm md:text-base">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faqs;
