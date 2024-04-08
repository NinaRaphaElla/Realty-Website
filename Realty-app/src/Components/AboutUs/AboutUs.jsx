import React from "react";
import Header from "../Header/Header.jsx";
import peopleSvg from "../Home/people.svg";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

import image from "./AboutImage.png";
import CTAButton from "../Buttons/CTAButton.jsx";

const AboutUs = () => {
  return (
    <>
      <Header />

      {/* About Background Details */}
      <div className="flex flex-wrap mx-16 mt-24 relative">
        <img className="flex" src={image} />
        <h1
          id="top"
          className="absolute top-48 left-1/2 justify-center text-5xl font-medium font-playFair text-white transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          About Us
        </h1>
      </div>

      {/* Tagline */}
      <div className="flex justify-center items-center">
        <div className="mt-2 m-0 p-0 text-5xl font-medium flex-nowrap font-playFair">
          <h1>We are your</h1>
        </div>

        <div>
          <h1 className="mt-20 pl-3 text-primary text-5xl flex-nowrap font-medium font-playFair">
            trusted partner
          </h1>
          <h1 className="pl-3 text-black text-[3rem] flex-nowrap font-medium font-playFair">
            in finding your&#160;
            <span className="text-primary font-playFair">dream home</span>
          </h1>
        </div>
      </div>

      {/* Shape */}
      <div className="flex justify-center my-6">
        <div className="bg-primary w-0.5 h-52"></div>
      </div>

      {/* Info */}
      <div className="flex justify-center items-center">
        <div className="px-56 text-black text-base flex-nowrap font-regular">
          <p className="mt-2">
            With a team of experienced professionals that are dedicated in
            providing excellent service, we pride ourselves on our deep
            understanding of the market and our commitment to our client
            satisfaction.
          </p>
          <p className="mt-8">
            Over the years, we have earned a reputation for excellence,
            integrity, and reliability. Our clients trust us to guide them
            through every step of the buying, or renting process, ensuring a
            smooth and stress-free experience from start to finish. Whether it's
            finding the perfect home for a growing family, securing an
            investment property, or negotiating a complex commercial deal, we
            are there every step of the way, providing personalized attention
            and expert guidance.
          </p>
          <p className="mt-8">
            With each new challenge and opportunity, we are reminded of why we
            do what we do – because there is no greater satisfaction than
            helping our clients turn their real estate dreams into reality.
          </p>
          <p className="mt-8">
            At 1568 Realty, the journey is just beginning, and we invite you to
            join us as we continue to set new standards of excellence in the
            world of real estate.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="mt-40 flex items-center">
        <div className="mt-3">
          <div className="bg-primary w-[37rem] h-0.5"></div>
        </div>
        <h1 className="pl-12 justify-center text-black text-5xl flex-nowrap font-medium font-playFair">
          Our&#160;<span className="text-primary font-playFair">Vision</span>
        </h1>
      </div>

      {/* Info */}
      <div className="flex justify-center items-center">
        <p className="mt-8 px-64 text-black text-base flex-nowrap font-regular">
          At 1568 Realty, we empower clients to unlock their dream homes and
          build prosperous futures through exceptional service, innovative
          solutions, and unwavering integrity.
        </p>
      </div>

      {/* Mission */}
      <div className="mt-24 flex justify-center items-center relative">
        <h1 className="text-black text-5xl flex-nowrap font-medium font-playFair">
          Our&#160;<span className="text-primary font-playFair">Mission</span>
        </h1>
        <div className="absolute right-0 pr-0 mt-3">
          <div className="bg-primary w-[36rem] h-0.5"></div>
        </div>
      </div>

      {/* Info */}
      <div className="flex justify-center items-center">
        <p className="mt-8 px-64 text-black text-base flex-nowrap font-regular">
          At 1568 Realty, we empower clients to unlock their dream homes and
          build prosperous futures through exceptional service, innovative
          solutions, and unwavering integrity.
        </p>
      </div>

      {/* Offer */}
      <div className="mt-40 flex items-center">
        <div className="mt-3">
          <div className="bg-primary w-[26rem] h-0.5"></div>
        </div>
        <h1 className="pl-12 justify-center text-black text-5xl flex-nowrap font-medium font-playFair">
          We offer&#160;
          <span className="text-primary font-playFair">Excellent Services</span>
        </h1>
      </div>

      {/* Services 1 */}
      <div className="flex mt-20 mx-11">
        <div className="mx-44">
          <h1 className=" justify-start flex mb-2 text-3xl text-primary font-medium font-playFair">
            <img className="h-9 mr-4" src={peopleSvg} />
            Hassle-free Transactions
          </h1>
          <p className=" justify-items-start text-base w-[28rem]">
            Stress-free transactions, expert guidance, and unique understanding
            by our dedicated agents ensure a seamless experience for our
            clients.
          </p>
        </div>

        <div className="mx-18">
          <h1 className=" justify-start flex mb-2 text-3xl text-primary font-medium font-playFair">
            <img className="h-9 mr-4" src={peopleSvg} />
            Personalized Service
          </h1>
          <p className=" justify-items-start text-base w-[28rem]">
            We understand that every client is unique, which is why we take the
            time to listen to your needs and preferences, tailoring our services
            to meet your specific requirements.
          </p>
        </div>
      </div>

      {/* Services 2 */}
      <div className="flex mt-20 mx-11">
        <div className="mx-44">
          <h1 className=" justify-start flex mb-2 text-3xl text-primary font-medium font-playFair">
            <img className="h-9 mr-4" src={peopleSvg} />
            Secure Payment
          </h1>
          <p className=" justify-items-start text-base w-[28rem]">
            Advanced encryption and robust protocols ensure secure and
            worry-free transactions, providing peace of mind to our clients
            throughout the buying and selling process.
          </p>
        </div>

        <div className="mx-18">
          <h1 className=" justify-start flex mb-2 text-3xl text-primary font-medium font-playFair">
            <img className="h-9 mr-4" src={peopleSvg} />
            Extensive Network
          </h1>
          <p className=" justify-items-start text-base w-[28rem]">
            With an extensive network of industry connections and resources, we
            have access to a wide range of properties, including exclusive
            listings that may not be available to the public.
          </p>
        </div>
      </div>

      {/* Shape */}
      <div className="flex justify-center my-16">
        <div className="bg-primary w-0.5 h-80"></div>
      </div>

      {/* Featured Properties */}
      <div className="flex justify-center items-center mt-32 mb-20">
        <h1 className="pl-12 justify-center text-black text-5xl flex-nowrap font-medium font-playFair">
          Featured&#160;
          <span className="text-primary font-playFair">Properties</span>
          <p className="flex mt-4 justify-center items-center text-base">
            Find Your Perfect Property
          </p>
        </h1>
      </div>

      <div className="flex space-x-20 justify-center">
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
      <CTAButton />
    </>
  );
};

export default AboutUs;
