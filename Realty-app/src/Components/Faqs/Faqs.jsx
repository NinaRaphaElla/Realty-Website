import React from "react";
import gallery from "./gallery1.png";
import galleries from "./gallery2.png";
import pictures from "./maingallery.png";

const Faqs = () => {
  return (
    <>
      {/* background images */}
      <div className="flex space-x-4 mx-16 mt-24">
        <img className="flex flex-wrap h-96" src={pictures} />
        <div className="columns-1 space-y-4">
          <img className="h-44 w-80" src={gallery} />
          <img className="h-48 w-80" src={galleries} />
        </div>
        <div className="columns-1 space-y-4">
          <img className="h-44 w-80" src={gallery} />
          <img className="h-48 w-80" src={galleries} />
        </div>
      </div>
    </>
  );
};

export default Faqs;
