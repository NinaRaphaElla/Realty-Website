import React, { useState, useEffect } from "react";
import Select from "react-select";

import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import photo from "./PropertiesImage.png";

import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import propertyFilter from "./propertyFilter.json";
import Footer from "../Footer/Footer.jsx";
import LoadButton from "../Buttons/LoadButton.jsx";

const Properties = () => {
  //fetching data
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/property")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  //custom style for dropdowns
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "0px",
      boxShadow: state.isFocused ? "0 0 0 1px #668378" : null,
      "&:hover": {
        borderColor: "#14593F",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#668378" : "white",
      "&:hover": {
        backgroundColor: "#BED5CC",
      },
    }),
  };

  //filter
  // const [selectedOption, setSelectedOption] = useState(null);

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleStatus = (selectedOption) => {
    setSelectedStatus(selectedOption);
  };

  const handleType = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const handleLocation = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handlePrice = (selectedOption) => {
    setSelectedPrice(selectedOption);
  };

  const filteredProperties = properties.filter((property) => {
    let matchesFilter = true;


    if (selectedStatus && selectedStatus.label !== "Any Status") {
      matchesFilter = matchesFilter && property.status === selectedStatus.label;
    }
  
    if (selectedType && selectedType.label !== "All Types") {
      matchesFilter = matchesFilter && property.type === selectedType.label;
  }
   
    if (selectedLocation && selectedLocation.label !== "All Main Location") {
      matchesFilter = matchesFilter && property.address.some((addr) => addr.city === selectedLocation.label);
  }
   
    if (selectedPrice && selectedPrice.label !== "Any Price") {
      matchesFilter = matchesFilter && property.price >= selectedPrice.minPrice;
      if (selectedPrice.maxPrice !== null) {
        matchesFilter = matchesFilter && property.price <= selectedPrice.maxPrice;
      }
  }
   
    return matchesFilter;
   });
   

   
  // const filteredProperties = selectedOption
  //   ? properties.filter((property) => property.status === selectedOption.label)
  //   : properties;

  console.log("Selected option:", selectedType);
  console.log(filteredProperties);

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

          <div className="absolute bg-white shadow-md p-5 md:space-x-5 flex flex-col md:flex-row items-center left-0 right-0 mx-8 md:bottom-[-120px] mb-24 space-y-2 md:space-y-0">
            <div className="w-[100%] md:w[20%] space-y-2">
              <label className="text-sm text-black text-opacity-75">
                Property Status
              </label>
              <Select
                options={propertyFilter.status}
                styles={customStyles}
                onChange={handleStatus}
                value={selectedStatus}
              />
            </div>

            <div className="w-[100%] md:w[20%] space-y-2">
              <label className="text-sm text-black text-opacity-75">
                Property Types
              </label>
              <Select
                options={propertyFilter.types}
                styles={customStyles}
                onChange={handleType}
                value={selectedType}
              />
            </div>

            <div className="w-[100%] md:w[20%] space-y-2">
              <label className="text-sm text-black text-opacity-75">
                Main Location
              </label>
              <Select
                options={propertyFilter.location}
                styles={customStyles}
                onChange={handleLocation}
                value={selectedLocation}
              />
            </div>

            <div className="w-[100%] md:w[20%] space-y-2">
              <label className="text-sm text-black text-opacity-75">
                Price range
              </label>
              <Select
                options={propertyFilter.price_range}
                styles={customStyles}
                onChange={handlePrice}
                value={selectedPrice}
              />
            </div>
            {/* Search Button */}
            {/* <div className="w-full md:w-[20%]">
              <label className="text-sm text-white text-opacity-75">
                Search
              </label>
              <button className="">
                <AiOutlineSearch className="mr-2 size-5" />
                <p>Search</p>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center md:px-32 lg:px-32 mt-[450px] md:mt-24">
        {filteredProperties.length === 0 ? (
          <div className="absolute ">No Data Found</div>
        ) : (
          <>
            <PropertyCard properties={filteredProperties} />
          </>
        )}
      </div>
      <div className="mt-8">
        <LoadButton btnName={"Load more"} />
      </div>
      <Footer />
    </>
  );
};

export default Properties;
