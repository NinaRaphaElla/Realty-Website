import React from "react";

import PropertyCard from "../PropertyCard/PropertyCard";
import aboutImg1 from "./about-img1.png";
import aboutImg2 from "./about-img2.png";
import aboutImg3 from "./about-img3.png";
import heroImg1 from "./hero_img1.png";
import heroImg2 from "./hero_img2.png";
import heroImg3 from "./hero_img3.png";
import i7Logo from "./logo-intelliseven.png";
import peopleSvg from "./people.svg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="mr-16 ml-16 mt-20 flex justify-between">
        <div>
          <h1 className="m-0 p-0 font-normal text-4xl">Welcome to</h1>
          <h1 className="m-0 p-0 text-[6.5rem] font-normal flex-nowrap font-noto">
            1568&#160;<span className="text-primary font-playFair">Realty</span>
          </h1>
        </div>
        <img className="" src={heroImg1} alt="Hero Image" />
      </div>

      <div className="flex justify-between ml-16 mr-16 mt-4">
        <div>
          <img
            className="w-[600px] object-cover"
            src={heroImg2}
            alt="Hero Image"
          />
          <div className="flex justify-between pl-6 pr-6 mt-4">
            <p className="flex flex-col text-3xl m-0">
              0K+<span className="text-base">Happy Customers</span>
            </p>
            <p className="flex flex-col text-3xl m-0">
              000+<span className="text-base">Daily Inquiries</span>
            </p>
            <p className="flex flex-col text-3xl m-0">
              000+<span className="text-base">Listed Properties</span>
            </p>
          </div>
        </div>

        <div>
          <div>
            <h1 className="m-0 p-0 text-4xl font-normal">Unlock your</h1>
            <h1 className="m-0 p-0 text-8xl font-normal text-primary">
              dream home
            </h1>
            <h1 className="m-0 p-0 text-4xl font-normal">with us</h1>
          </div>
          <img
            className="w-[510px] h-[130px] mt-4 object-cover"
            src={heroImg3}
            alt="Hero Image"
          />
        </div>
      </div>

      {/* Powered by Intelliseven */}
      <div className="bg-secondary-300 h-40 mb-20 mt-20 max-w-full flex flex-col justify-center items-center">
        <p className="text-white text-base font-noto">powered by</p>
        <img
          className="h-24 mt-[-0.9rem]"
          alt="IntelliSeven Logo"
          src={i7Logo}
        />
      </div>

      {/* About us Section */}
      <div className="mb-20">
        <div className="flex justify-center">
          <h1 className="text-5xl font-normal">Experience&nbsp;</h1>
          <div>
            <h1 className="text-5xl font-normal text-primary">Excellence</h1>
            <h1 className="text-5xl font-normal">
              in Real&nbsp;<span className="text-primary">Estate</span>
            </h1>
            <p className="text-base">Learn more about us</p>
          </div>
        </div>

        {/* Shape */}
        <div className="flex justify-center my-6">
          <div className="bg-primary w-0.5 h-52"></div>
        </div>

        {/* About-layer-1 */}
        <div className="flex mx-16 items-center">
          <img
            className="max-w-full mr-8 mb-10"
            alt="Property Image"
            src={aboutImg1}
          />
          {/* about-description */}
          <div>
            <h1 className="text-secondary-300 mb-4">About 1568 Realty</h1>
            <p className="mb-4 text-black">
              We are your trusted partner in finding your dream home. With a
              team of experienced professionals that are dedicated in providing
              excellent service, we pride ourselves on our deep understanding of
              the market and our commitment to our client satisfaction.{" "}
            </p>
            <p className="mb-10 text-black text-base">
              With years of experience, we have provided a reputation for
              excellence, integrity, and reliability. Our clients trust us to
              guide them through every step of the buying, selling, or renting
              process, ensuring a smooth and stress-free experience from start
              to finish.
            </p>
          </div>
        </div>

        {/* about-layer-2 */}
        <div className="flex mx-16">
          {/* about-us-layer2-section2*/}
          <div className="flex flex-col mr-6">
            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="h-8 mr-4" src={peopleSvg} />
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
              className="max-w-full h-[230px]"
              alt="Property Image"
              src={aboutImg3}
            />
          </div>

          {/* about-us-layer2-section2*/}
          <div className="flex flex-col">
            <img
              className="max-w-full mb-8"
              alt="Property Image"
              src={aboutImg2}
            />

            <div className="mb-8">
              <h1 className="flex items-center mb-2 text-3xl text-primary">
                <img className="h-8 mr-4" src={peopleSvg} />
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
                Hassle-free Transactions
              </h1>
              <p className="text-base">
                With an extensive network of industry connections and resources,
                we have access to a wide range of properties, including
                exclusive listings that may not be available to the public.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-secondary-300 px-16 py-8">
        <div className="flex flex-col">
          {/* Featured Intro */}
          <div>
            <h1>Featured Properties</h1>
            <p>Find your perfect property</p>
          </div>

          <div className="flex justify-between max-w-full">
            {/* Featured Properties */}
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
              title="Pandi House Rental"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
              price={30000}
              bedQuantity={1}
              bathQuantity={1}
              yearBuilt={2021}
              landArea={500}
            />

            <PropertyCard
              title="Calumpit Property 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
              price={30000}
              bedQuantity={1}
              bathQuantity={1}
              yearBuilt={2021}
              landArea={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
