import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BiLogoMessenger } from "react-icons/bi";
import { FaFacebookF, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiAddLine, RiShareFill } from "react-icons/ri";

const PropertyView = () => {
  //fetching JSON
  const [propertyData, setPropertyData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPropertyData(data);
      })
      .catch((error) => {
        console.error(`Error fetching property with ID ${id}:`, error);
      });
  }, [id]);

  return (
    <>
      {/* House Details */}
      <div className="mt-40">
        <h1 className="font-helvetica font-semibold text-2xl lg:text-3xl transition-all ease-in-out duration-300">
          {propertyData.title}
        </h1>
        <p className="mt-2 text-base lg:text-lg transition-all ease-in-out duration-300">
          {propertyData.loc}
        </p>
      </div>

      <div>
        <p className="mt-12 font-semibold text-2xl lg:text-3xl transition-all ease-in-out duration-300">
          {`P${propertyData.price}`}
        </p>
      </div>

      <div>
        <p className="mt-12 text-base lg:text-lg font-semibold font-playFair transition-all ease-in-out duration-300">
          Overview
        </p>
      </div>

      <div className="flex mt-8 text-xs md:text-sm lg:text-base mb-6 text-center space-x-0 md:space-x-3 lg:space-x-6 transition-all ease-in-out duration-300">
        <div className="border-r-2 border-gray whitespace pr-4 md:pr-7 lg:pr-10">
          <p className="text-gray">Bedrooms</p>
          <p>{propertyData.overview && propertyData.overview[0].bedroom}</p>
        </div>
        <div className="border-r-2 border-gray whitespace pl-4 pr-4 md:pr-7 lg:pr-10">
          <p className="text-gray">Bathrooms</p>
          <p>{propertyData.overview && propertyData.overview[0].bathroom}</p>
        </div>
        <div className="border-r-2 border-gray whitespace pl-4 pr-4 md:pr-7 lg:pr-10">
          <p className="text-gray whitespace-nowrap">Year Built</p>
          <p>{propertyData.overview && propertyData.overview[0].yearBuilt}</p>
        </div>
        <div>
          <p className="pl-4 text-gray whitespace-nowrap">Land Area</p>
          <p className="pl-4 whitespace-nowrap">7,002 sq ft</p>
        </div>
      </div>

      {/* About this home */}
      <div className="flex mt-16 font-playFair font-semibold text-base lg:text-lg transition-all ease-in-out duration-300">
        <h1>About this home</h1>
      </div>

      <div className="max-w-4xl">
        <p className="mt-4 justify-items-start text-sm lg:text-base transition-all ease-in-out duration-300">
          {propertyData.description}
        </p>
        <div>
          <button className="flex mt-4 items-center hover:text-primary">
            <RiAddLine className="ml-0 m-1 size-4 lg:size-5" />
            <p className="font-playFair text-base lg:text-lg transition-all ease-in-out duration-300">
              Show more
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyView;
