import React from "react";
import { useHistory } from "react-router-dom";

import PropertyCard from "../PropertyCard/PropertyCard";
import Footer from "../Footer/Footer.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import { Link } from "react-router-dom";
import Faqs from "../Faqs/Faqs.jsx";

import aboutImg1 from "./about-img1.png";
import aboutImg2 from "./about-img2.png";
import aboutImg3 from "./about-img3.png";
import heroImg1 from "./hero_img1.png";
import heroImg2 from "./hero_img2.png";
import heroImg3 from "./hero_img3.png";
import i7Logo from "./logo-intelliseven.png";
import peopleSvg from "./people.svg";
import outro from "./outro.png";

import CTAButton from "../Buttons/CTAButton";
import LoadButton from "../Buttons/LoadButton";
import TextButton from "../Buttons/TextButton";

const Home = () => {
  const history = useHistory();

  const handleAboutUs = () => {
    // Navigate to the about us page when the button is clicked
    history.push("/about");
  };

  const handleViewListings = () => {
    // Navigate to the about us page when the button is clicked
    history.push("/properties");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mt-16 space-y-6">
        <div className="mx-4 md:mx-16 md:flex md:items-center space-y-4 md:space-x-4">
          <div>
            <h1 className="whitespace-nowrap text-3xl">Welcome to</h1>
            <h1 className="text-7xl md:text-6xl lg:text-8xl xl:text-9xl font-normal font-noto">
              1568&#160;
              <span className="text-primary font-playFair">Realty</span>
            </h1>
          </div>
          <div className="flex-1">
            <img
              className="object-cover h-full w-full"
              src={heroImg1}
              alt="Hero Image"
            />
          </div>
        </div>

        {/* Layer 2 */}
        <div className="flex flex-col-reverse md:flex-row mx-4 md:mx-16 md:space-x-6">
          <div className="flex flex-col-reverse md:space-y-4 md:flex-col md:w-[50%]">
            <div className="flex-1">
              <img
                className="object-cover h-full w-full"
                src={heroImg2}
                alt="Hero Image"
              />
            </div>
            <div className="flex justify-between text-center md:text-left">
              <p className="flex flex-col text-3xl text-secondary-200">
                0K+
                <span className="text-base md:text-sm text-black">
                  Happy Customers
                </span>
              </p>
              <p className="flex flex-col text-3xl text-secondary-200">
                000+
                <span className="text-base md:text-sm text-black">
                  Daily Inquiries
                </span>
              </p>
              <p className="flex flex-col text-3xl text-secondary-200">
                000+
                <span className="text-base md:text-sm  text-black">
                  Listed Properties
                </span>
              </p>
            </div>
          </div>

          <div className="md:w-[50%]">
            <div>
              <h1 className="text-3xl">Unlock your</h1>
              <h1 className="text-6xl md:text-4xl lg:text-7xl xl:text-8xl text-primary">
                dream home
              </h1>
              <h1 className="text-3xl">with us</h1>
            </div>
            <div className="flex-1">
              <img
                className="object-cover w-full"
                src={heroImg3}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Powered by Intelliseven */}
      <div className="bg-secondary-300 h-40 my-20 max-w-full flex flex-col justify-center items-center">
        <p className="text-white text-base font-playFair">powered by</p>
        <img
          className="h-24 mt-[-0.9rem]"
          alt="IntelliSeven Logo"
          src={i7Logo}
        />
      </div>

      {/* About us Section */}
      <div className="mb-24">
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl font-medium">Experience&nbsp;</h1>
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-primary">
              Excellence
            </h1>
            <h1 className="text-3xl md:text-5xl font-medium">
              in Real&nbsp;<span className="text-primary">Estate</span>
            </h1>
            <p className="text-sm md:text-base">Learn more about us</p>
          </div>
        </div>

        {/* Shape */}
        <div className="flex justify-center my-6 ">
          <div className="bg-primary w-0.5 h-60"></div>
        </div>

        {/* About-layer-1 */}
        <div className="lg:flex mx-4 mb-8 md:mx-16 items-center md:space-x-6">
          <div>
            <img
              className="w-[100%] h-[100%]"
              alt="Property Image"
              src={aboutImg1}
            />
          </div>
          {/* about-description */}
          <div className="lg:w-[50%]">
            <h1 className="text-secondary-300 text-3xl font-medium my-4">
              About <span className="font-noto">1568</span> Realty
            </h1>
            <p className="my-6 text-black">
              We are your trusted partner in finding your dream home. With a
              team of experienced professionals that are dedicated in providing
              excellent service, we pride ourselves on our deep understanding of
              the market and our commitment to our client satisfaction.
            </p>
            <p className="my-6 text-black text-base">
              With years of experience, we have provided a reputation for
              excellence, integrity, and reliability. Our clients trust us to
              guide them through every step of the buying, selling, or renting
              process, ensuring a smooth and stress-free experience from start
              to finish.
            </p>

            <CTAButton btnName={"Learn more"} />
          </div>
        </div>

        <div className="mx-4 md:flex md:space-x-6 md:mx-16">
          {/* about-us-layer2-section2*/}
          <div className="">
            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl text-primary">
                <img
                  className="size-[24px] md:size-[32px] mr-4"
                  src={peopleSvg}
                />
                Personalized Service
              </h1>
              <p className="text-sm md:text-base">
                We understand that every client is unique, which is why we take
                the time to listen to your needs and preferences, tailoring our
                services to meet your specific requirements.
              </p>
            </div>

            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl text-primary">
                <img
                  className="size-[24px] md:size-[32px] mr-4"
                  src={peopleSvg}
                />
                Hassle-free Transactions
              </h1>
              <p className="text-sm md:text-base">
                Stress-free transactions, expert guidance, and unique
                understanding by our dedicated agents ensure a seamless
                experience for our clients.
              </p>
            </div>
            <img
              className="w-[100%] mb-4"
              alt="Property Image"
              src={aboutImg3}
            />
          </div>

          {/* about-us-layer2-section2*/}
          <div>
            <div className="mb-8">
              <img
                className="w-[100%] mb-4"
                alt="Property Image"
                src={aboutImg2}
              />
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl text-primary">
                <img
                  className="size-[24px] md:size-[32px] mr-4"
                  src={peopleSvg}
                />
                Personalized Service
              </h1>
              <p className="text-sm md:text-base">
                We understand that every client is unique, which is why we take
                the time to listen to your needs and preferences, tailoring our
                services to meet your specific requirements.
              </p>
            </div>

            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl text-primary">
                <img
                  className="size-[24px] md:size-[32px] mr-4"
                  src={peopleSvg}
                />
                Hassle-free Transactions
              </h1>
              <p className="text-sm md:text-base">
                Stress-free transactions, expert guidance, and unique
                understanding by our dedicated agents ensure a seamless
                experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-secondary-300 py-6 mb-24">
        <div className="flex flex-col">
          {/* Featured Intro */}
          <div className="flex items-center">
            <div className="bg-primary w-[100%] h-0.5"></div>
            <h1 className="text-3xl md:text-4xl whitespace-nowrap mr-2 font-medium px-4 text-white">
              Featured Properties
            </h1>
            <div className="bg-secondary-300 w-[100%] h-0.5"></div>
          </div>

          <p className="text-white text-center">Find your perfect property</p>

          {/* <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-4 my-8">
            <div className="hover:-translate-y-2 transition duration-300 ease-in-out flex">
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

            <div className="hover:-translate-y-2 transition duration-300 ease-in-out-">
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
          </div> */}

          <div className="flex justify-center">
            <CTAButton btnName={"View all listings"} />
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="mb-24">
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

      {/* Contact Us */}
      <div className="mb-24">
        <ContactUs />
      </div>

      {/* Outro */}
      <div className="flex flex-wrap mx-4 md:mx-16">
        <img className="object-cover md:w-[50%]" src={outro} />
        <div className="bg-secondary-300 md:w-[50%] max-h-full flex flex-col justify-center px-12 py-12 md:py-8">
          <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-white mb-4">
            Unlock your dream home and live an exceptional life with 1568 Realty
          </h1>
          <p className="text-base md:text-sm lg:text-base xl:text-base text-white mb-4">
            Because we offer the finest selection of houses and lots for sale.
          </p>
          <div className="flex flex-col space-y-2 sm:space-y-2 lg:flex-row lg:justify-start lg:space-x-4 lg:space-y-0 whitespace-nowrap justify-between xl:justify-start xl:space-x-4">
            <CTAButton btnName={"About us"} onClick={handleAboutUs} />
            <CTAButton btnName={"View listings"} onClick={handleViewListings} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
