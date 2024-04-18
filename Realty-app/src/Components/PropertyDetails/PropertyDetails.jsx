import React, { useState } from "react";
import CTAButton from "../Buttons/CTAButton.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import SliderImg from "./Slider.jsx";

import { BiLogoMessenger } from "react-icons/bi";
import { FaFacebookF, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiAddLine, RiShareFill } from "react-icons/ri";

const PropertyDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* background images */}

      <SliderImg />

      {/*  Parent of Whole Details */}
      <div className="flex justify-between flex-wrap md:mx-16 mx-4 transition-all ease-in-out duration-300">
        {/* House Details */}
        <div className="Parent of House Details">
          {/* Status */}
          <div className="flex w-full justify-between">
            <div className="flex space-x-3 whitespace-nowrap justify-center items-center">
              <div>
                <p className="p-1.5 md:p-2 bg-accent border-2 border-accent text-white font-playFair text-base lg:text-lg transition-all ease-in-out duration-300">
                  For Sale
                </p>
              </div>

              <div>
                <p className="p-1.5 md:p-2 bg-accent border-2 border-accent text-white font-playFair text-base lg:text-lg transition-all ease-in-out duration-300">
                  House and Lot
                </p>
              </div>
            </div>

            {/* Share Button Container */}
            <div className="relative">
              <button
                className="flex items-center w-28 h-10 hover:text-primary"
                onClick={setModal}
              >
                <RiShareFill className="mr-0.5 md:mr-1 m-12 md:m-1 size-6 transition-all ease-in-out duration-300" />
                <p>Share</p>
              </button>

              <div
                className={`z-30 absolute w-56 h-56 bg-rawWhite shadow-xxl -bottom-66 right-0 md:right-10 transition-all ease-in-out duration-300 ${
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
          <div className="mt-12">
            <h1 className="font-helvetica font-semibold text-2xl lg:text-3xl transition-all ease-in-out duration-300">
              House and Lot For Sale in Taguig City
            </h1>
            <p className="mt-2 text-base lg:text-lg transition-all ease-in-out duration-300">
              Bagumbayan, Taguig City, Metro Manila
            </p>
          </div>

          <div>
            <p className="mt-12 font-semibold text-2xl lg:text-3xl transition-all ease-in-out duration-300">
              ₱2,200,000
            </p>
          </div>

          <div>
            <p className="mt-12 text-base lg:text-lg font-semibold font-playFair transition-all ease-in-out duration-300">
              Overview
            </p>
          </div>

          <div className="flex mt-8 text-sm lg:text-base mb-6 text-center space-x-0 md:space-x-3 lg:space-x-6 transition-all ease-in-out duration-500">
            <div className="border-r-2 border-gray whitespace pr-7 lg:pr-10">
              <p className="text-gray">Bedrooms</p>
              <p>2</p>
            </div>
            <div className="border-r-2 border-gray whitespace pl-7 pr-7 lg:pl-4 lg:pr-10">
              <p className="text-gray">Bathrooms</p>
              <p>5</p>
            </div>
            <div className="border-r-2 border-gray whitespace pl-7 pr-7 lg:pl-4 lg:pr-10">
              <p className="text-gray whitespace-nowrap">Year Built</p>
              <p>2021</p>
            </div>
            <div>
              <p className="pl-7 lg:pl-4 text-gray whitespace-nowrap">
                Land Area
              </p>
              <p className="pl-7 lg:pl-4 whitespace-nowrap">7,002 sq ft</p>
            </div>
          </div>

          {/* About this home */}
          <div className="flex mt-16 font-playFair font-semibold text-base lg:text-lg transition-all ease-in-out duration-300">
            <h1>About this home</h1>
          </div>

          <div className="max-w-4xl">
            <p className="mt-4 justify-items-start text-sm lg:text-base transition-all ease-in-out duration-300">
              Step back in time and experience the allure of a bygone era with
              this enchanting vintage house nestled in the heart of Bagumbayan,
              Taguig City. A perfect blend of classic elegance and modern
              convenience...
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

          {/* Property Features */}
          <div className="flex mt-16 font-playFair font-semibold text-base lg:text-lg transition-all ease-in-out duration-300">
            <h1>Property Features</h1>
          </div>

          <div className="border-b-[0.03rem] border-gray">
            <h1 className="font-helvetica mt-8 mb-2 text-sm lg:text-base transition-all ease-in-out duration-300">
              Interior Features
            </h1>
          </div>

          <ul className="mx-8 mt-4 list-disc text-sm lg:text-base transition-all ease-in-out duration-300">
            <li>Bedroom/s : 3</li>
            <li>Bathroom/s : 2</li>
            <li>Kitchen: 1</li>
          </ul>

          <div className="border-b-[0.03rem] border-gray">
            <h1 className="font-helvetica mt-8 mb-2 text-sm lg:text-base transition-all ease-in-out duration-300">
              Exterior Features
            </h1>
          </div>

          <ul className="mx-8 mt-4 list-disc text-sm lg:text-base transition-all ease-in-out duration-300">
            <li>Garage: 1</li>
            <li>Garden: 1</li>
            <li>Swimming pool: 1</li>
          </ul>

          <div className="border-b-[0.03rem] border-gray">
            <h1 className="font-helvetica mt-8 mb-2 text-sm lg:text-base transition-all ease-in-out duration-300">
              Appliances
            </h1>
          </div>

          <ul className="mx-8 mt-4 list-disc text-sm lg:text-base transition-all ease-in-out duration-300">
            <li>Air conditioning</li>
            <li>Washing machine</li>
            <li>Refrigerators</li>
          </ul>

          <div className="border-b-[0.03rem] border-gray">
            <h1 className="font-helvetica mt-8 mb-2 text-sm lg:text-base transition-all ease-in-out duration-300">
              Utilities
            </h1>
          </div>

          <ul className="mx-8 mt-4 list-disc text-sm lg:text-base transition-all ease-in-out duration-300">
            <li>Public Water Source</li>
            <li>High-speed internet available</li>
            <li>Separate Meters</li>
            <li>Sewer Available</li>
          </ul>

          <div className="border-b-[0.03rem] border-gray">
            <h1 className="font-helvetica mt-8 mb-2 text-sm lg:text-base transition-all ease-in-out duration-300">
              Distances
            </h1>
          </div>

          <ul className="mx-8 mt-4 list-disc text-sm lg:text-base transition-all ease-in-out duration-300">
            <li>School: 100 km</li>
            <li>Cafe: 200 km</li>
          </ul>

          {/* Map */}
          <div className="flex mt-16 font-playFair font-semibold mb-5 text-base lg:text-lg transition-all ease-in-out duration-300">
            <h1>Map</h1>
          </div>
          <div>
            <iframe
              className="border-0 w-full h-80 transition-all ease-in-out duration-300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.594162184865!2d121.04492640678077!3d14.476158602478291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfa4afd8f41b%3A0xd48e183dc204b5cc!2sBagumbayan%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1712569427478!5m2!1sen!2sph"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Agent */}
          <div className="flex mt-16 font-playFair font-semibold text-lg mb-4">
            <h1>Agent</h1>
          </div>

          <div className="bg-primary justify-center text-white py-4 px-7 w-full h-50 transition-all ease-in-out duration-300">
            <div className="flex mt-4 md:mt-5 justify-center">
              <img className="h-10 md:h-12 w-10 md:w-12" src={profilepic} />
            </div>
            <p className="flex justify-center text-lg md:text-xl font-semibold mt-1 md:mt-2">
              Nina Velasco
            </p>
            <p className="flex text-sm justify-center">Agent</p>
            <p className="flex text-sm justify-center mt-2 mb-4">
              0906 946 2738
            </p>
          </div>
        </div>

        {/* Sticky Forms */}
        <div className="sticky top-28 flex flex-col justify-end items-start mt-16 md:mt-16 lg:mt-0 p-6 h-[36rem] md:w-[896px] lg:w-[28rem] w-[28rem] bg-rawWhite shadow-xxl transition-all ease-in-out duration-300">
          <h1 className="mt-0 text-xl font-bold mb-3">
            Interested? Message Us
          </h1>
          <p className="text-sm lg:w-[24rem] mb-5">
            Feel free to reach out to us and connect with one of our welcoming
            representatives.
          </p>

          <label>Full name</label>
          <input
            className="bg-input w-full text-gray p-2 focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Enter your full name"
          />
          <label className="mt-4">Email Address</label>
          <input
            className="bg-input w-[100%] text-gray p-2 focus:outline-none"
            type="text"
            name="user_email"
            placeholder="Enter your email address"
          />

          <label className="mt-4">Phone Number &#40;optional&#41;</label>
          <input
            className="bg-input w-[100%] text-gray p-2 focus:outline-none"
            type="text"
            name="user_number"
            placeholder="Enter your phone number"
          />
          <label className="mt-4">Message</label>
          <textarea
            className="bg-input w-[100%] text-gray p-2 focus:outline-none"
            type="text"
            name="user_message"
            placeholder="Enter your message"
            rows="5"
          ></textarea>
          <input
            className="cursor-pointer mt-4 mb-2 font-playFair border-2 border-white text-white p-2 bg-accent w-[100%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200"
            type="submit"
            value="Send Message"
          />
        </div>
      </div>

      {/* Similar Listings */}
      <div className="flex mt-[100px] lg:mt-32 justify-center items-center">
        <h1 className="text-3xl font-bold">Similar Listings</h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap mt-16 gap-20 justify-center items-center">
        <PropertyCard
          title="House and Lot For Sale in Taguig City"
          description="Impressive House and Lot with Roof Deck and Swimming Pool…"
          price={45000000}
          bedQuantity={2}
          bathQuantity={2}
          yearBuilt={2024}
          landArea={1024}
        />

        <PropertyCard
          title="House and Lot For Sale in Taguig City"
          description="Impressive House and Lot with Roof Deck and Swimming Pool…"
          price={45000000}
          bedQuantity={2}
          bathQuantity={2}
          yearBuilt={2024}
          landArea={1024}
        />

        <PropertyCard
          title="House and Lot For Sale in Taguig City"
          description="Impressive House and Lot with Roof Deck and Swimming Pool…"
          price={45000000}
          bedQuantity={2}
          bathQuantity={2}
          yearBuilt={2024}
          landArea={1024}
        />
      </div>

      {/* View all listings button */}
      <div className="flex justify-center mt-16 mb-10">
        <CTAButton btnName={"View all listings"} />
      </div>
    </>
  );
};

export default PropertyDetails;
