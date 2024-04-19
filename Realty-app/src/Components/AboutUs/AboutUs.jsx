import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

import CTAButton from "../Buttons/CTAButton.jsx";
import image from "./AboutImage.png";

import {
  MdGroups2,
  MdHandshake,
  MdOutlineMiscellaneousServices,
  MdPayments,
} from "react-icons/md";

const AboutUs = () => {
  const history = useHistory();
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
        <div className="flex flex-wrap font-medium -space-y-1 lg:space-y-0 lg:space-x-2 lg:justify-center">
          <h1 className="text-3xl lg:text-4xl font-normal">We are your</h1>
          <div className="md:space-y-3">
            <h1 className="text-primary text-5xl lg:text-4xl font-semibold whitespace-nowrap">
              trusted partner
            </h1>
            <h1 className="text-black text-3xl lg:text-4xl font-normal">
              in finding your&#160;
              <span className="text-primary font-semibold">dream home</span>
            </h1>
          </div>
        </div>

        {/* Shape */}
        <div className="flex justify-center my-6">
          <div className="bg-primary w-0.5 h-64"></div>
        </div>

        {/* Info */}

        <div className="mx-4 lg:mx-20 text-black text-sm md:text-base space-y-6">
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
          <h1 className="text-3xl md:text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">Our</span> Vision
          </h1>
          <div className="bg-white w-full h-0.5"></div>
        </div>

        {/* Info */}
        <div>
          <p className="mx-4 md:mx-16 lg:mx-36 text-black text-sm md:text-base font-regular text-center md:text-left">
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
          <h1 className="text-3xl md:text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">Our</span> Mission
          </h1>
          <div className="bg-primary w-full h-0.5"></div>
        </div>

        {/* Info */}
        <div>
          <p className="mx-4 md:mx-16 lg:mx-36 text-black text-sm md:text-base font-regular text-center md:text-left">
            At 1568 Realty, we empower clients to unlock their dream homes and
            build prosperous futures through exceptional service, innovative
            solutions, and unwavering integrity.
          </p>
        </div>
      </div>

      {/* Offer */}
      <div className="space-y-14 mt-24">
        <div className="flex items-center space-x-6">
          <div className="bg-primary w-full h-0.5"></div>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap font-medium text-primary">
            <span className="text-black">We offer</span> Excellent Services
          </h1>
          <div className="bg-white w-full h-0.5"></div>
        </div>

        <div className="mx-4 md:mx-36 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Services 1 */}
          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <span className="mr-4 text-3xl">
                <MdOutlineMiscellaneousServices />
              </span>
              Personalized Service
            </h1>
            <p className="text-base">
              We understand that every client is unique, which is why we take
              the time to listen to your needs and preferences, tailoring our
              services to meet your specific requirements.
            </p>
          </div>

          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <span className="mr-4 text-3xl">
                <MdHandshake />
              </span>
              Hassle-free Transactions
            </h1>
            <p className="text-base">
              Stress-free transactions, expert guidance, and unique
              understanding by our dedicated agents ensure a seamless experience
              for our clients.
            </p>
          </div>
        </div>

        <div className="mx-4 md:mx-36 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Services 1 */}
          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <span className="mr-4 text-3xl">
                <MdPayments />
              </span>
              Secure Payment
            </h1>
            <p className="text-base">
              Advanced encryption and robust protocols ensure secure and
              worry-free transactions, providing peace of mind to our clients
              throughout the buying and selling process.
            </p>
          </div>

          <div className="space-y-2 md:w-[50%]">
            <h1 className="flex md:text-3xl text-primary font-medium">
              <span className="mr-4 text-3xl">
                <MdGroups2 />
              </span>
              Extensive Network
            </h1>
            <p className="text-base">
              With an extensive network of industry connections and resources,
              we have access to a wide range of properties, including exclusive
              listings that may not be available to the public.
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-9 lg:px-24">
        <PropertyCard properties={properties} />
      </div>

      {/* View all listings button */}
      <div className="flex justify-center">
        <CTAButton btnName={"View all listings"} onClick={handleViewListings} />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
