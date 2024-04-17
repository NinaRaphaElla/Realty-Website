import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import PropertyCard from "../PropertyCard/PropertyCard";
import Footer from "../Footer/Footer.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import Faqs from "../Faqs/Faqs.jsx";
import SentModal from "../Modals/SentModal.jsx";

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
import {
  MdOutlineMiscellaneousServices,
  MdHandshake,
  MdPayments,
  MdGroups2,
} from "react-icons/md";

const Home = () => {
  //navigate buttons
  const history = useHistory();

  const handleAboutUs = () => {
    history.push("/about");
  };

  const handleViewListings = () => {
    history.push("/properties");
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/property")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter(
          (property) => property.isFeatured === true
        );
        setProperties(featured);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <div className="my-24 space-y-4 md:space-y-6">
          <div className="mx-4 md:mx-8 lg:mx-16 md:flex md:items-center space-y-4 md:space-x-6">
            <div className="-space-y-3 md:-space-y-0">
              <h1 className="text-2xl lg:text-3xl">Welcome to</h1>
              <h1 className="text-[3.4rem] md:text-6xl lg:text-[5rem] xl:text-[7rem] font-normal font-noto">
                1568&#160;
                <span className="text-primary font-playFair">Realty</span>
              </h1>
              <h1 className="whitespace-nowrap text-2xl lg:text-4xl">
                <span className="font-noto">&</span> Development Corporation
              </h1>
            </div>
            <div className="flex-1">
              <img className="w-full" src={heroImg1} alt="Hero Image" />
            </div>
          </div>

          {/* Layer 2 */}
          <div className="flex flex-col-reverse md:flex-row mx-4 md:mx-8 lg:mx-16 md:space-x-6">
            <div className="flex flex-col-reverse space-y-4 md:flex-col md:w-[50%]">
              <div className="flex-1 mt-4">
                <img
                  className="object-cover h-full w-full"
                  src={heroImg2}
                  alt="Hero Image"
                />
              </div>
              <div className="flex justify-between text-center md:text-left lg:px-8">
                <p className="flex flex-col text-2xl md:text-3xl text-secondary-200">
                  0K+
                  <span className="text-sm md:text-sm text-black">
                    Happy Customers
                  </span>
                </p>
                <p className="flex flex-col text-2xl md:text-3xl text-secondary-200">
                  000+
                  <span className="text-sm md:text-sm text-black">
                    Daily Inquiries
                  </span>
                </p>
                <p className="flex flex-col text-2xl md:text-3xl text-secondary-200">
                  000+
                  <span className="text-sm md:text-sm text-black">
                    Listed Properties
                  </span>
                </p>
              </div>
            </div>

            <div className="md:w-[50%] space-y-4">
              <div className="lg:space-y-0">
                <h1 className="whitespace-nowrap text-2xl lg:text-4xl">
                  Helping you with your
                </h1>
                <h1 className=" text-4xl md:text-4xl lg:text-6xl xl:text-[5rem] text-primary whitespace-nowrap">
                  Perfect Property
                </h1>
                {/* <h1 className="text-4xl">awaits</h1> */}
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
      </section>

      {/* Powered by Intelliseven */}
      <div className="bg-secondary-300 h-40 my-16 w-full flex flex-col justify-center items-center -space-y-3">
        <p className="text-white text-base font-playFair">powered by</p>
        <img className="h-20 md:h-24" alt="IntelliSeven Logo" src={i7Logo} />
      </div>

      {/* About us Section */}
      <div className="mb-24 mx-4 md:mx-8 lg:mx-16">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-5xl font-medium">Experience&nbsp;</h1>
          <div>
            <h1 className="text-2xl md:text-5xl font-medium text-primary">
              Excellence
            </h1>
            <h1 className="text-2xl md:text-5xl font-medium">
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
        <div className="lg:flex mb-8 items-center md:space-x-6">
          <div className="flex-1">
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
            <p className="my-6 text-black text-sm md:text-base">
              We are your trusted partner in finding your dream home. With a
              team of experienced professionals that are dedicated in providing
              excellent service, we pride ourselves on our deep understanding of
              the market and our commitment to our client satisfaction.
            </p>
            <p className="my-6 text-black text-sm md:text-base">
              With years of experience, we have provided a reputation for
              excellence, integrity, and reliability. Our clients trust us to
              guide them through every step of the buying, selling, or renting
              process, ensuring a smooth and stress-free experience from start
              to finish.
            </p>

            <CTAButton btnName={"Learn more"} onClick={handleAboutUs} />
          </div>
        </div>

        {/* about us layer  */}
        <div className="lg:flex mb-8 items-center space-y-6 md:space-x-6">
          {/* about-description */}
          <div className="lg:w-[50%] space-y-4 md:space-y-8 lg:space-y-12">
            <div>
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl font-medium text-primary">
                <span className="mr-4 text-3xl">
                  <MdOutlineMiscellaneousServices />
                </span>
                Personalized Service
              </h1>
              <p className="text-sm md:text-base">
                We understand that every client is unique, which is why we take
                the time to listen to your needs and preferences, tailoring our
                services to meet your specific requirements.
              </p>
            </div>

            <div>
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl font-medium text-primary">
                <span className="mr-4 text-3xl">
                  <MdHandshake />
                </span>
                Hassle-free Transactions
              </h1>
              <p className="text-sm md:text-base">
                Stress-free transactions, expert guidance, and unique
                understanding by our dedicated agents ensure a seamless
                experience for our clients.
              </p>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <img
              className="object-cover w-[100%] h-[100%]"
              alt="Property Image"
              src={aboutImg2}
            />
          </div>
        </div>

        {/* about us layer  */}
        <div className="lg:flex mb-8 items-center space-y-6 md:space-x-6">
          <div className="w-[100%] md:w-[50%]">
            <img
              className="object-cover w-[100%] h-[100%]"
              alt="Property Image"
              src={aboutImg3}
            />
          </div>
          {/* about-description */}
          <div className="lg:w-[50%] space-y-8 lg:space-y-12">
            <div>
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl font-medium text-primary">
                <span className="mr-4 text-3xl">
                  <MdPayments />
                </span>
                Secure Payment
              </h1>
              <p className="text-sm md:text-base">
                Advanced encryption and robust protocols ensure secure and
                worry-free transactions, providing peace of mind to our clients
                throughout the buying and selling process.
              </p>
            </div>

            <div>
              <h1 className="flex items-center mb-2 text-2xl md:text-3xl font-medium text-primary">
                <span className="mr-4 text-3xl">
                  <MdGroups2 />
                </span>
                Extensive Network
              </h1>
              <p className="text-sm md:text-base">
                With an extensive network of industry connections and resources,
                we have access to a wide range of properties, including
                exclusive listings that may not be available to the public.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-secondary-300 py-6 mb-24">
        <div className="flex flex-col mx-4 md:mx-8 lg-mx-16">
          {/* Featured Intro */}
          <div className="flex items-center">
            <div className="bg-primary w-[100%] h-0.5"></div>
            <h1 className="text-3xl md:text-4xl whitespace-nowrap mr-2 font-medium px-4 text-white">
              Featured Properties
            </h1>
            <div className="bg-secondary-300 w-[100%] h-0.5"></div>
          </div>

          <p className="text-white text-center">Find your perfect property</p>

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
      </div>

      {/* FAQS */}
      <section id="faqs-section">
        <div className="mb-24">
          <div className="flex items-center mb-4">
            <div className="bg-white invisible md:visible  w-[100%] h-0.5"></div>
            <h1 className="text-center text-2xl md:text-4xl md:whitespace-nowrap font-medium px-4 text-primary">
              <span className="text-black">Frequently Asked</span> Questions
            </h1>
            <div className="bg-primary invisible md:visible w-[100%] h-0.5"></div>
          </div>

          {/* faqs */}
          <Faqs />

          <div className="text-center mt-8">
            <h3 className="text-base font-medium">
              Can&#x27;t find your question here?
            </h3>
            <p className="text-base text-primary">Contact us</p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact-section">
        <div className="mb-24">
          <ContactUs />
        </div>
      </section>

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
