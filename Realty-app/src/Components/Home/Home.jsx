import React from "react";

import PropertyCard from "../PropertyCard/PropertyCard";
import Footer from "../Footer/Footer.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
import { Link } from "react-router-dom";

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
  return (
    <>
      {/* Hero Section */}
      <div className="mx-16 mt-24 md:flex">
        <div className="mr-8">
          <h1 className="whitespace-nowrap text-3xl mb-[-2rem]">Welcome to</h1>
          {/* <h1 className="text-[4rem] md:text-[4rem] lg:text-[6rem] xl:text-[7rem] font-normal font-noto">
            1568&#160;<span className="text-primary font-playFair">Realty</span>
          </h1> */}
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
      <div className="md:flex mx-16 mt-4">
        <div className="mr-4">
          <div className="flex-1">
            <img
              className="object-cover h-full w-full"
              src={heroImg2}
              alt="Hero Image"
            />
          </div>
          <div className="flex justify-between mx-10 mt-4">
            <p className="flex flex-col text-3xl text-secondary-200">
              0K+<span className="text-base text-black">Happy Customers</span>
            </p>
            <p className="flex flex-col text-3xl text-secondary-200">
              000+<span className="text-base text-black">Daily Inquiries</span>
            </p>
            <p className="flex flex-col text-3xl text-secondary-200">
              000+
              <span className="text-base text-black">Listed Properties</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-3xl">Unlock your</h1>
            <h1 className="text-7xl text-primary">dream home</h1>
            <h1 className="text-4xl">with us</h1>
          </div>
          <div className="flex-1 mt-4">
            <img
              className="object-cover h-full w-full"
              src={heroImg3}
              alt="Hero Image"
            />
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
      <div>
        {/* <div className="flex justify-center">
          <h1 className="text-5xl font-medium">Experience&nbsp;</h1>
          <div>
            <h1 className="text-5xl font-medium text-primary">Excellence</h1>
            <h1 className="text-5xl font-medium">
              in Real&nbsp;<span className="text-primary">Estate</span>
            </h1>
            <p className="text-base">Learn more about us</p>
          </div>
        </div> */}

        {/* Shape */}
        <div className="flex justify-center my-6">
          <div className="bg-primary w-0.5 h-60"></div>
        </div>

        {/* About-layer-1 */}
        <div className="flex mx-16 items-center mb-10">
          <img
            className="flex-1 object-cover h-full w-full mr-8"
            alt="Property Image"
            src={aboutImg1}
          />
          {/* about-description */}
          {/* <div>
            <h1 className="text-secondary-300 text-3xl font-medium mb-5">
              About <span className="font-noto">1568</span> Realty
            </h1>
            <p className="mb-5 text-black">
              We are your trusted partner in finding your dream home. With a
              team of experienced professionals that are dedicated in providing
              excellent service, we pride ourselves on our deep understanding of
              the market and our commitment to our client satisfaction.{" "}
            </p>
            <p className="mb-5 text-black text-base">
              With years of experience, we have provided a reputation for
              excellence, integrity, and reliability. Our clients trust us to
              guide them through every step of the buying, selling, or renting
              process, ensuring a smooth and stress-free experience from start
              to finish.
            </p>
            <CTAButton btnName={"Learn more"} />
          </div> */}
        </div>

        {/* about-layer-2 */}
        <div className="flex mx-16 mb-24">
          {/* about-us-layer2-section2*/}
          <div className="flex flex-col mr-6">
            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="size-[32px] mr-4" src={peopleSvg} />
                Personalized Service
              </h1>
              <p className="text-base">
                We understand that every client is unique, which is why we take
                the time to listen to your needs and preferences, tailoring our
                services to meet your specific requirements.
              </p>
            </div>

            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="h-8 mr-4" src={peopleSvg} />
                Hassle-free Transactions
              </h1>
              <p className="text-base">
                Stress-free transactions, expert guidance, and unique
                understanding by our dedicated agents ensure a seamless
                experience for our clients.
              </p>
            </div>
            <img
              className="flex-1 object-cover h-full w-full"
              alt="Property Image"
              src={aboutImg3}
            />
          </div>

          {/* about-us-layer2-section2*/}
          {/* <div className="flex flex-col">
            <img
              className="flex-1 object-cover h-full w-full mb-8"
              alt="Property Image"
              src={aboutImg2}
            />
            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="size-[32px] mr-4" src={peopleSvg} />
                Secure Payment
              </h1>
              <p className="text-base">
                Advanced encryption and robust protocols ensure secure and
                worry-free transactions, providing peace of mind to our clients
                throughout the buying and selling process.
              </p>
            </div>

            <div>
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="h-8 mr-4" src={peopleSvg} />
                Extensive Network
              </h1>
              <p className="text-base">
                With an extensive network of industry connections and resources,
                we have access to a wide range of properties, including
                exclusive listings that may not be available to the public.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-secondary-300 py-6 mb-10">
        <div className="flex flex-col">
          {/* Featured Intro */}
          <div className="flex items-center">
            <div className="bg-primary w-[35%] h-0.5 mr-8"></div>
            <div>
              <h1 className="text-4xl w-[65%] whitespace-nowrap font-medium text-white ">
                Featured Properties
              </h1>
              <p className="text-white">Find your perfect property</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center space-x-10 my-8">
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
          </div>

          <div className="flex justify-center">
            <CTAButton btnName={"View all listings"} />
          </div>
        </div>
      </div>

      {/* FAQS */}
      <div className="flex justify-end items-center">
        <h1 className="text-4xl whitespace-nowrap font-medium text-black mr-8 flex flex-1 justify-end">
          Frequently Asked&nbsp;<span className="text-primary"> Questions</span>
        </h1>
        <div className="bg-primary w-[30%] h-0.5"></div>
      </div>

      {/* Contact Us */}
      <ContactUs />

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
            <Link to="/about#top">
              <CTAButton btnName={"About us"} />
            </Link>
            <CTAButton btnName={"View listings"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
