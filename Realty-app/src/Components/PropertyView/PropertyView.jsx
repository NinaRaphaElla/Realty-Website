import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BiLogoMessenger } from "react-icons/bi";
import { FaFacebookF, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiAddLine, RiShareFill } from "react-icons/ri";

import SliderImg from "../PropertyDetails/Slider.jsx";
import Footer from "../Footer/Footer.jsx";
import CTAButton from "../Buttons/CTAButton.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

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

  //Share modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //show more
  const [isShowMore, setIsShowMore] = useState(false);

  const setShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  //fetching similar listings
  const [properties, setProperties] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    setType(propertyData.type);
  }, [propertyData.type]);

  useEffect(() => {
    fetch("http://localhost:8000/property")
      .then((res) => res.json())
      .then((data) => {
        const similar = data.filter((property) => property.type === type);
        setProperties(similar);
      });
  }, [type]);

  const handleViewListings = () => {
    history.push("/properties");
  };

  return (
    <>
      {/* background images */}
      <SliderImg />

      <div className="flex justify-between flex-wrap md:mx-16 mx-4 transition-all ease-in-out duration-300">
        {/* House Details */}
        <div className="w-full lg:w-[60%] space-y-14">
          {/* Status */}
          <div className="flex justify-between transition-all ease-in-out duration-30">
            <div className="flex space-x-4 whitespace-nowrap">
              <div>
                <p className="px-3 py-2 bg-primary text-white font-playFair text-base lg:text-lg">
                  {propertyData.status}
                </p>
              </div>

              <div>
                <p className="px-3 py-2 bg-primary text-white font-playFair text-base lg:text-lg">
                  {type}
                </p>
              </div>
            </div>

            {/* Share Button Container */}
            <div className="relative space-y-2">
              <button
                className="flex items-center hover:text-secondary-100"
                onClick={setModal}
              >
                <RiShareFill className="mr-2 size-6 transition-all ease-out duration-300" />
                <p>Share</p>
              </button>

              <div
                className={`z-30 absolute w-56 h-56 bg-rawWhite shadow-xxl -bottom-66 right-0  transition-all ease-in-out duration-300 ${
                  !isModalOpen ? "hidden" : ""
                }`}
              >
                <p className="mx-5 mt-5 text-sm">Share this listing</p>

                <div>
                  <button className="flex ml-5 mt-3 items-center w-5/6 h-8 border-2 rounded-sm hover:bg-hover-faqs hover:border-primary hover:text-primary">
                    <FaFacebookF className="mr-2 m-2.5 size-4" />
                    <p className="text-sm">Facebook</p>
                  </button>
                </div>

                <div>
                  <button className="flex ml-5 mt-2 items-center w-5/6 h-8 border-2 rounded-sm hover:bg-hover-faqs hover:border-primary hover:text-primary">
                    <BiLogoMessenger className="mr-1.5 m-2 size-5" />
                    <p className="text-sm">Messenger</p>
                  </button>
                </div>

                <div>
                  <button className="flex ml-5 mt-2 items-center w-5/6 h-8 border-2 rounded-sm hover:bg-hover-faqs hover:border-primary hover:text-primary">
                    <MdEmail className="mr-1.5 m-2 size-5" />
                    <p className="text-sm">Email</p>
                  </button>
                </div>

                <div>
                  <button className="flex ml-5 mt-2 items-center w-5/6 h-8 border-2 rounded-sm hover:bg-hover-faqs hover:border-primary hover:text-primary">
                    <FaLink className="mr-2 m-2.5 size-4 rotate-90" />
                    <p className="text-sm">Copy link</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* House and Lot Details */}
          <div className="space-y-1 transition-all ease-in-out duration-300">
            <h1 className="font-semibold text-2xl lg:text-3xl">
              {propertyData.title}
            </h1>
            <p className="text-base lg:text-base">{propertyData.location}</p>
          </div>

          <div>
            <p className="font-semibold text-2xl lg:text-3xl">
              ₱{propertyData.price}
            </p>
          </div>

          {/* overview */}
          <div className="space-y-4">
            <p className="text-base lg:text-lg font-semibold font-playFair transition-all ease-in-out duration-300">
              Overview
            </p>

            <div className="flex text-sm lg:text-base mb-6 text-center space-x-0 md:space-x-3 lg:space-x-6 transition-all ease-in-out duration-500">
              <div className="border-r-[0.10rem] border-gray whitespace-nowrap pr-7 lg:pr-10">
                <p className="text-black text-opacity-45">Bedrooms</p>
                <p>
                  {propertyData.overview && propertyData.overview[0].bedroom}
                </p>
              </div>
              <div className="border-r-[0.10rem] border-gray whitespace-nowrap pl-7 pr-7 lg:pl-4 lg:pr-10">
                <p className="text-black text-opacity-45">Bathrooms</p>
                <p>
                  {propertyData.overview && propertyData.overview[0].bathroom}
                </p>
              </div>
              <div className="border-r-[0.10rem] border-gray whitespace-nowrap pl-7 pr-7 lg:pl-4 lg:pr-10">
                <p className="text-black whitespace-nowrap text-opacity-45">
                  Year Built
                </p>
                <p>
                  {propertyData.overview && propertyData.overview[0].yearBuilt}
                </p>
              </div>
              <div className="text-center pl-7 lg:pl-4">
                <p className="text-black whitespace-nowrap text-opacity-45">
                  Land Area
                </p>
                <p className="whitespace-nowrap">
                  {propertyData.overview && propertyData.overview[0].area} sq ft
                </p>
              </div>
            </div>
          </div>

          {/* About this home */}
          <div className="transition-all ease-in-out duration-300">
            <h1 className="flex font-semibold text-base lg:text-lg">
              About this home
            </h1>

            <div className="transition-all ease-in-out duration-500 space-y-2">
              <p
                className={`mt-4 justify-items-start text-sm lg:text-base ${
                  isShowMore ? "" : "line-clamp-2"
                }`}
              >
                {propertyData.description}
              </p>

              <button className="flex items-center hover:text-primary">
                <RiAddLine className="size-5" />
                <p
                  className="font-playFair font-medium text-sm md:text-base"
                  onClick={setShowMore}
                >
                  Show more
                </p>
              </button>
            </div>
          </div>

          {/* Property Features */}
          <div className="space-y-4">
            <div className="flex font-playFair font-semibold text-base lg:text-lg transition-all ease-in-out duration-300">
              <h1>Property Features</h1>
            </div>

            <div className="transition-all ease-in-out duration-300">
              <div className="border-b-[0.10rem] border-gray">
                <h1 className="font-helvetica mb-2 text-sm lg:text-base">
                  Interior Features
                </h1>
              </div>

              <ul className="mx-10 mt-4 list-disc text-sm lg:text-base">
                {propertyData.features &&
                  propertyData.features.interior.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="transition-all ease-in-out duration-300">
              <div className="border-b-[0.10rem] border-gray">
                <h1 className="font-helvetica mb-2 text-sm lg:text-base">
                  Exterior
                </h1>
              </div>

              <ul className="mx-10 mt-4 list-disc text-sm lg:text-base">
                {propertyData.features &&
                  propertyData.features.exterior.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="transition-all ease-in-out duration-300">
              <div className="border-b-[0.10rem] border-gray">
                <h1 className="font-helvetica mb-2 text-sm lg:text-base">
                  Home Appliances
                </h1>
              </div>

              <ul className="mx-10 mt-4 list-disc text-sm lg:text-base">
                {propertyData.features &&
                  propertyData.features.appliances.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="transition-all ease-in-out duration-300">
              <div className="border-b-[0.10rem] border-gray">
                <h1 className="font-helvetica mb-2 text-sm lg:text-base">
                  Utilities
                </h1>
              </div>

              <ul className="mx-10 mt-4 list-disc text-sm lg:text-base">
                {propertyData.features &&
                  propertyData.features.utilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="transition-all ease-in-out duration-300">
              <div className="border-b-[0.10rem] border-gray">
                <h1 className="font-helvetica mb-2 text-sm lg:text-base">
                  Distances
                </h1>
              </div>

              <ul className="mx-10 mt-4 list-disc text-sm lg:text-base">
                {propertyData.features &&
                  propertyData.features.distances.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div>
            <h1 className="font-semibold mb-5 text-base lg:text-lg transition-all ease-in-out duration-300">
              Map
            </h1>

            <div>
              <iframe
                className="border-0 w-full h-96 transition-all ease-in-out duration-300"
                src={propertyData.map}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Agent */}
          <div>
            <div className="flex mt-16 font-playFair font-semibold text-lg mb-4">
              <h1>Agent</h1>
            </div>

            <div className="flex items-center space-x-7 bg-primary py-4 px-7 w-full transition-all ease-in-out duration-300">
              <div className="flex">
                <img
                  className="h-10 md:h-14 w-10 md:w-14 rounded-full"
                  src={propertyData.agent && propertyData.agent[0].profile}
                />
              </div>
              <div className="text-white border-l-[0.08rem] border-white pl-5">
                <p className="text-lg md:text-xl font-semibold mt-1 md:mt-2">
                  {propertyData.agent && propertyData.agent[0].name}
                </p>
                <p className="text-sm">Agent</p>
                <p className="text-sm mt-2">
                  {propertyData.agent && propertyData.agent[0].number}
                </p>
                <p className="text-sm">
                  {propertyData.agent && propertyData.agent[0].email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Forms */}
        <div className="sticky top-24 mt-16 lg:mt-0 p-6 h-[32rem] w-full lg:w-[35%] bg-rawWhite shadow-xxl transition-all ease-in-out duration-300">
          <h1 className="text-lg font-bold mb-1">Interested? Message Us</h1>
          <p className="text-sm text-black text-opacity-70 mb-2">
            Feel free to reach out to us and connect with one of our welcoming
            representatives.
          </p>

          <div className="space-y-1">
            <div>
              <label className="text-sm text-black text-opacity-70">
                Full name
              </label>
              <input
                className="bg-input w-full text-gray p-2 focus:outline-none"
                type="text"
                name="user_name"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-sm text-black text-opacity-70">
                Email Address
              </label>
              <input
                className="bg-input w-[100%] text-gray p-2 focus:outline-none"
                type="text"
                name="user_email"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="text-sm text-black text-opacity-70">
                Phone Number &#40;optional&#41;
              </label>
              <input
                className="bg-input w-[100%] text-gray p-2 focus:outline-none"
                type="text"
                name="user_number"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="text-sm text-black text-opacity-70">
                Message
              </label>
              <textarea
                className="bg-input w-[100%] text-gray p-2 focus:outline-none"
                type="text"
                name="user_message"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>

            <div>
              <input
                className="cursor-pointer mt-2 mb-2 font-playFair border-2 border-white text-white p-2 bg-accent w-[100%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200"
                type="submit"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
      {/* similar listings */}
      <div className="mt-24">
        <div className="flex items-center">
          <div className="bg-primary w-[100%] h-0.5"></div>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap mr-2 font-medium px-4 text-primary">
            Similar Properties
          </h1>
          <div className="bg-secondary-300 w-[100%] h-0.5"></div>
        </div>

        {/* property cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-9 lg:px-24">
          <PropertyCard properties={properties} />
        </div>

        <div className="flex justify-center">
          <CTAButton
            btnName={"View all listings"}
            onClick={handleViewListings}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropertyView;
