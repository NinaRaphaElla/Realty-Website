import React from "react";
import CTAButton from "../Buttons/CTAButton.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import gallery from "./gallery1.png";
import galleries from "./gallery2.png";
import pictures from "./maingallery1.png";
import profilepic from "./profile.png";

import { RiAddLine, RiShareLine } from "react-icons/ri";

const PropertyDetails = () => {
  return (
    <>
      {/* background images */}
      <div className="flex flex-wrap justify-center w-svh md:space-x-3 mx-16 mt-24">
        <img className="flex-nowrap mb-5" src={pictures} />
        <div className="columns-1 space-y-5">
          <img className="h-56 w-64" src={gallery} />
          <img className="h-58 w-64" src={galleries} />
        </div>
        <div className="columns-1 space-y-5">
          <img className="h-56 w-64" src={gallery} />
          <img className="h-58 w-64" src={galleries} />
        </div>
      </div>

      {/*  Parent of Whole Details */}
      <div className="w-3/5 mx-16">
        <div className="flex justify-between items-center">
          <div className="flex space-x-5">
            <div className="bg-accent border-2 border-accent text-white w-24 h-10 mt-4">
              <p className="ml-3.5 mt-1 font-playFair text-lg">For Sale</p>
            </div>

            <div className=" bg-accent border-2 border-accent text-white w-36 h-10 mt-4">
              <p className="ml-3.5 mt-1 font-playFair text-lg">House and Lot</p>
            </div>
          </div>

          <div>
            <button className="flex items-center w-28 h-10 hover:text-primary">
              <RiShareLine className="mr-2 m-1 size-6" />
              <p>Share</p>
            </button>
          </div>
        </div>

        {/* Fixed Contact Us */}
        <div className="relative">
          <div className="absolute justify-sticky top-16 right-[-30rem] mt-[-116px]">
            <div className="flex flex-col justify-center items-start p-4 h-[36rem] w-[28rem] bg-white-700 shadow-lg">
              <h1 className="mt-0 text-lg font-bold mb-2">
                Interested? Message Us
              </h1>
              <p className="text-sm w-[24rem] mb-5">
                Feel free to reach out to us and connect with one of our
                welcoming representatives.
              </p>

              <label>Full name</label>
              <input
                className="bg-input w-[100%] text-gray p-2 focus:outline-none"
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
                className="cursor-pointer mt-4 font-playFair border-2 border-white text-white p-2 bg-accent w-[30%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200"
                type="submit"
                value="Send Message"
              />
            </div>
          </div>
        </div>

        {/* House Details */}
        <div className="mt-12">
          <h1 className="font-helvetica font-semibold text-3xl">
            House and Lot For Sale in Taguig City
          </h1>
          <p className="mt-2">Bagumbayan, Taguig City, Metro Manila</p>
        </div>

        <div>
          <p className="mt-12 font-semibold text-3xl">₱2,200,000</p>
        </div>

        <div>
          <p className="mt-12 text-lg font-semibold font-playFair">Overview</p>
        </div>

        <div className="flex mt-8 space-x-10 font-sans text-base mb-6 font-medium text-center">
          <div className="border-r-2 border-gray pr-10">
            <p className="text-gray">Bedrooms</p>
            <p>2</p>
          </div>
          <div className="border-r-2 border-gray pr-10">
            <p className="text-gray">Bathrooms</p>
            <p>5</p>
          </div>
          <div className="border-r-2 border-gray pr-10">
            <p className="text-gray">Year Built</p>
            <p>2021</p>
          </div>
          <div>
            <p className="text-gray">Land Area</p>
            <p>7,002 sq ft</p>
          </div>
        </div>

        {/* About this home */}
        <div className="flex mt-16 font-playFair font-semibold text-lg">
          <h1>About this home</h1>
        </div>

        <div>
          <p className="flex mt-4 justify-items-start text-base w-[56rem]">
            Step back in time and experience the allure of a bygone era with
            this enchanting vintage house nestled in the heart of Bagumbayan,
            Taguig City. A perfect blend of classic elegance and modern
            convenience...
          </p>
          <div>
            <button className="flex mt-4 items-center hover:text-primary">
              <RiAddLine className="ml-0 m-1 size-5" />
              <p className="font-playFair">Show more</p>
            </button>
          </div>
        </div>

        {/* Property Features */}
        <div className="flex mt-16 font-playFair font-semibold text-lg">
          <h1>Property Features</h1>
        </div>

        <div className="border-b-[0.03rem] border-gray">
          <h1 className="font-helvetica mt-8 mb-2">Interior Features</h1>
        </div>

        <ul className="mx-8 mt-4 list-disc">
          <li>Bedroom/s : 3</li>
          <li>Bathroom/s : 2</li>
          <li>Kitchen: 1</li>
        </ul>

        <div className="border-b-[0.03rem] border-gray">
          <h1 className="font-helvetica mt-8 mb-2">Exterior Features</h1>
        </div>

        <ul className="mx-8 mt-4 list-disc">
          <li>Garage: 1</li>
          <li>Garden: 1</li>
          <li>Swimming pool: 1</li>
        </ul>

        <div className="border-b-[0.03rem] border-gray">
          <h1 className="font-helvetica mt-8 mb-2">Appliances</h1>
        </div>

        <ul className="mx-8 mt-4 list-disc">
          <li>Air conditioning</li>
          <li>Washing machine</li>
          <li>Refrigerators</li>
        </ul>

        <div className="border-b-[0.03rem] border-gray">
          <h1 className="font-helvetica mt-8 mb-2">Utilities</h1>
        </div>

        <ul className="mx-8 mt-4 list-disc">
          <li>Public Water Source</li>
          <li>High-speed internet available</li>
          <li>Separate Meters</li>
          <li>Sewer Available</li>
        </ul>

        <div className="border-b-[0.03rem] border-gray">
          <h1 className="font-helvetica mt-8 mb-2">Distances</h1>
        </div>

        <ul className="mx-8 mt-4 list-disc">
          <li>School: 100 km</li>
          <li>Cafe: 200 km</li>
        </ul>

        {/* Map */}
        <div className="flex mt-16 font-playFair font-semibold text-lg mb-5">
          <h1>Map</h1>
        </div>
        <div>
          <iframe
            className="border-0 w-full h-svh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.594162184865!2d121.04492640678077!3d14.476158602478291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfa4afd8f41b%3A0xd48e183dc204b5cc!2sBagumbayan%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1712569427478!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Agent */}
        <div className="flex mt-16 font-playFair font-semibold text-lg mb-5">
          <h1>Agent</h1>
        </div>

        <div className="bg-primary justify-center text-white py-4 px-7">
          <div className="flex mt-5 justify-center">
            <img className="h-12 w-12" src={profilepic} />
          </div>
          <p className="flex justify-center text-xl font-semibold mt-2">
            Nina Velasco
          </p>
          <p className="flex text-sm justify-center">Agent</p>
          <p className="flex text-sm justify-center mt-2 mb-4">0906 946 2738</p>
        </div>
      </div>


      {/* Similar Listings */}
      <div className="flex mt-32 justify-center items-center">
        <h1 className="text-3xl font-bold">Similar Listings</h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap mt-16 space-x-8 justify-center items-center">
          <div className="hover:-translate-y-2 transition duration-300 ease-in-out">
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
          
          <div className="hover:-translate-y-2 transition duration-300 ease-in-out">
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

          <div className="hover:-translate-y-2 transition duration-300 ease-in-out">
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

          <div className="hover:-translate-y-2 transition duration-300 ease-in-out">
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
        </div>

      {/* View all listings button */}
      <div className="flex justify-center mt-16 mb-10">
        <CTAButton btnName={"View all listings"}/>
      </div>

    </>
  );
};

export default PropertyDetails;
