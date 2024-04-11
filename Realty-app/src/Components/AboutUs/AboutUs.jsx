import React from "react";
import peopleSvg from "../Home/people.svg";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";
import Footer from "../Footer/Footer.jsx";

import image from "./AboutImage.png";
import CTAButton from "../Buttons/CTAButton.jsx";

const AboutUs = () => {
  return (
    <>
      {/* About Background Details */}
      <div className="mx-4 mt-20 md:mx-16 space-y-10">
        <div className="relative">
          <img className="w-full" src={image} />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white font-medium text-3xl md:text-4xl">
              About Us
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-wrap font-medium space-y-2 lg:space-y-0 lg:space-x-2 lg:justify-center">
          <h1 className="text-5xl lg:text-4xl">We are your</h1>
          <div className="md:space-y-3">
            <h1 className="text-primary text-5xl lg:text-4xl whitespace-nowrap">
              trusted partner
            </h1>
            <h1 className="text-black text-4xl">
              in finding your&#160;
              <span className="text-primary">dream home</span>
            </h1>
          </div>
        </div>

        {/* Shape */}
        <div className="flex justify-center my-6">
          <div className="bg-primary w-0.5 h-64"></div>
        </div>

        {/* Info */}

        <div className="mx-4 lg:mx-20 text-black text-base space-y-6">
          <p>
            With a team of{" "}
            <span className="text-primary font-semibold">
              experienced professionals
            </span>{" "}
            that are dedicated in providing excellent service, we pride
            ourselves on our deep understanding of the market and our commitment
            to our client satisfaction.
          </p>
          <p>
            Over the years, we have earned a reputation for{" "}
            <span className="text-primary font-semibold">
              excellence, integrity, and reliability.
            </span>{" "}
            Our clients trust us to guide them through every step of the buying,
            or renting process, ensuring a smooth and stress-free experience
            from start to finish. Whether it's finding the perfect home for a
            growing family, securing an investment property, or negotiating a
            complex commercial deal, we are there every step of the way,
            providing personalized attention and expert guidance.
          </p>
          <p>
            With each new challenge and opportunity, we are reminded of why we
            do what we do – because there is no greater satisfaction than
            helping our clients{" "}
            <span className="text-primary font-semibold">
              turn their real estate dreams into reality.
            </span>{" "}
          </p>
          <p>
            At <span className="text-primary font-semibold">1568 Realty</span> ,
            the journey is just beginning, and we invite you to join us as we
            continue to set new standards of excellence in the world of real
            estate.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="space-y-6 mt-24">
        <div className="flex items-center space-x-6">
          <div className="bg-primary w-full h-0.5"></div>
          <h1 className="text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">Our</span> Vision
          </h1>
          <div className="bg-white w-full h-0.5"></div>
        </div>

        {/* Info */}
        <div>
          <p className="mx-4 md:mx-16 lg:mx-36 text-black text-base font-regular">
            At 1568 Realty, we empower clients to unlock their dream homes and
            build prosperous futures through exceptional service, innovative
            solutions, and unwavering integrity.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="space-y-6 mt-12">
        <div className="flex items-center space-x-6">
          <div className="bg-white w-full h-0.5"></div>
          <h1 className="text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">Our</span> Mission
          </h1>
          <div className="bg-primary w-full h-0.5"></div>
        </div>

        {/* Info */}
        <div>
          <p className="mx-4 md:mx-16 lg:mx-36 text-black text-base font-regular">
            At 1568 Realty, we empower clients to unlock their dream homes and
            build prosperous futures through exceptional service, innovative
            solutions, and unwavering integrity.
          </p>
        </div>
      </div>

      {/* Offer */}
      <div className="space-y-10 mt-24">
        <div className="flex items-center space-x-6">
          <div className="bg-primary w-full h-0.5"></div>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">We offer</span> Excellent Services
          </h1>
          <div className="bg-white w-full h-0.5"></div>
        </div>

        <div className="mx-4 md:mx-16 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Services 1 */}
          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <img className="h-9 mr-4" src={peopleSvg} />
              Hassle-free Transactions
            </h1>
            <p className="text-base">
              Stress-free transactions, expert guidance, and unique
              understanding by our dedicated agents ensure a seamless experience
              for our clients.
            </p>
          </div>

          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <img className="h-9 mr-4" src={peopleSvg} />
              Hassle-free Transactions
            </h1>
            <p className="text-base">
              Stress-free transactions, expert guidance, and unique
              understanding by our dedicated agents ensure a seamless experience
              for our clients.
            </p>
          </div>
        </div>

        <div className="mx-4 md:mx-16 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Services 1 */}
          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <img className="h-9 mr-4" src={peopleSvg} />
              Hassle-free Transactions
            </h1>
            <p className="text-base">
              Stress-free transactions, expert guidance, and unique
              understanding by our dedicated agents ensure a seamless experience
              for our clients.
            </p>
          </div>

          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <img className="h-9 mr-4" src={peopleSvg} />
              Hassle-free Transactions
            </h1>
            <p className="text-base">
              Stress-free transactions, expert guidance, and unique
              understanding by our dedicated agents ensure a seamless experience
              for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Shape */}
      <div className="flex justify-center my-10">
        <div className="bg-primary w-0.5 h-80"></div>
      </div>

      {/* Featured Properties */}
      <div className="flex justify-center items-center">
        <h1 className="text-black text-4xl md:text-5xl font-medium">
          Featured&#160;
          <span className="text-primary font-playFair">Properties</span>
          <p className="flex justify-center text-base">
            Find Your Perfect Property
          </p>
        </h1>
      </div>

      <p className="text-white text-center">Find your perfect property</p>

      <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-4 my-8">
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
      {/* View all listings button */}
      <div className="flex justify-center">
        <CTAButton btnName={"View all listings"} />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
