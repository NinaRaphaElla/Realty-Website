import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import LoadButton from "../Buttons/LoadButton.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import photo from "./PropertiesImage.png";
import { RiArrowDownSLine } from "react-icons/ri";
import propertyFilter from "./propertyFilter.json";

const Properties = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Select Status");

  const [isOpentypes, setIsOpenTypes] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState("Select Type");

  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Select Price");

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsOpenStatus(false);
  };

  const handleTypesSelect = (types) => {
    setSelectedTypes(types);
    setIsOpenTypes(false);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsOpenLocation(false);
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
    setIsOpenPrice(false);
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/property")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    <>
      {/* About Background Details */}
      <div className="mx-4 mt-20 md:mx-16 space-y-10">
        <div className="relative">
          <img className="w-full" src={photo} />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white font-medium text-3xl md:text-4xl">
              List of Properties
            </h1>
          </div>

          <div
            className="absolute bg-white shadow-md p-5 md:space-x-5 flex flex-col md:flex-row justify-center
          items-center left-0 right-0 mx-8 md:bottom-[-120px] mb-24"
          >
            {/* Dropdown - Property Status */}
            <div className="w-full md:w-[20%] space-y-1">
              <label className="text-sm">Property Status</label>
              <button
                onClick={() => setIsOpenStatus((prev) => !prev)}
                className="bg-white border-[0.1rem] p-2 w-full flex items-center justify-between"
              >
                {selectedStatus}
                {isOpenStatus ? (
                  <RiArrowDownSLine className="size-5 rotate-180 transition-all ease-in-out duration-300" />
                ) : (
                  <RiArrowDownSLine className="size-5 transition-all ease-in-out duration-300" />
                )}
              </button>

              {isOpenStatus && (
                <div className="absolute bg-white p-2 z-10 w-[89%] md:w-[19%] shadow-md">
                  {propertyFilter.property_status.map((status, index) => (
                    <div
                      className="hover:bg-hover-faqs hover:border-l-secondary-100 hover:border-l-2 p-2 cursor-pointer"
                      onClick={() => handleStatusSelect(status)}
                    >
                      <p>{status}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Types */}
            <div className="w-full md:w-[20%] space-y-1">
              <label className="text-sm">Property Types</label>
              <button
                onClick={() => setIsOpenTypes((prev) => !prev)}
                className="bg-white border-[0.1rem] p-2 w-full flex items-center justify-between"
              >
                {selectedTypes}
                {isOpentypes ? (
                  <RiArrowDownSLine className="size-5 rotate-180 transition-all ease-in-out duration-300" />
                ) : (
                  <RiArrowDownSLine className="size-5 transition-all ease-in-out duration-300" />
                )}
              </button>

              {isOpentypes && (
                <div className="absolute bg-white p-2 z-10 w-[89%] md:w-[19%] shadow-md">
                  {propertyFilter.property_types.map((types, index) => (
                    <div
                      className="hover:bg-hover-faqs hover:border-l-secondary-100 hover:border-l-2 p-2 cursor-pointer"
                      onClick={() => handleTypesSelect(types)}
                    >
                      <p>{types}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Location */}
            <div className="w-full md:w-[20%] space-y-1">
              <label className="text-sm">Location</label>
              <button
                onClick={() => setIsOpenLocation((prev) => !prev)}
                className="bg-white border-[0.1rem] p-2 w-full flex items-center justify-between"
              >
                {selectedLocation}
                {isOpenLocation ? (
                  <RiArrowDownSLine className="size-5 rotate-180 transition-all ease-in-out duration-300" />
                ) : (
                  <RiArrowDownSLine className="size-5 transition-all ease-in-out duration-300" />
                )}
              </button>

              {isOpenLocation && (
                <div className="absolute bg-white p-2 z-10 w-[89%] md:w-[19%] shadow-md max-h-[216px] overflow-y-auto">
                  {propertyFilter.location.map((location, index) => (
                    <div
                      className="hover:bg-hover-faqs hover:border-l-secondary-100 hover:border-l-2 p-2 cursor-pointer"
                      onClick={() => handleLocationSelect(location)}
                    >
                      <p>{location}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Price Range */}
            <div className="w-full md:w-[20%] space-y-1">
              <label className="text-sm">Price range</label>
              <button
                onClick={() => setIsOpenPrice((prev) => !prev)}
                className="bg-white border-[0.1rem] p-2 w-full flex items-center justify-between"
              >
                {selectedPrice}
                {isOpenPrice ? (
                  <RiArrowDownSLine className="size-5 rotate-180 transition-all ease-in-out duration-300" />
                ) : (
                  <RiArrowDownSLine className="size-5 transition-all ease-in-out duration-300" />
                )}
              </button>

              {isOpenPrice && (
                <div className="absolute bg-white p-2 z-10 w-[89%] md:w-[19%] shadow-md max-h-[216px] overflow-y-auto">
                  {propertyFilter.price_range.map((price, index) => (
                    <div
                      className="hover:bg-hover-faqs hover:border-l-secondary-100 hover:border-l-2 p-2 cursor-pointer"
                      onClick={() => handlePriceSelect(price)}
                    >
                      <p>{price}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="w-full md:w-[20%] space-y-1">
              <label className="text-white">Search</label>
              <button className="flex items-center justify-center bg-accent text-white border-2 border-accent px-3 py-2 mt-4 w-full">
                <AiOutlineSearch className="mr-2 size-5" />
                <p>Search</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center md:px-32 lg:px-32 mt-[450px] md:mt-24">
        <PropertyCard properties={properties} />
      </div>

      {/* Cards */}

      {/* Load Button
      <div className="mt-16 flex justify-center mb-10">
        <LoadButton btnName={"Load more"} />
      </div> */}
    </>
  );
};

export default Properties;
