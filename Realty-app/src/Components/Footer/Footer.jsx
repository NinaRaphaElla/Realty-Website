import { useState } from "react";
import CTAButton from "../Buttons/CTAButton";
import singleLogo from "./1568Logo.png";
import facebookSvg from "./facebook.svg";
import instagramSvg from "./instagram.svg";
import text from "./LogoText.png";
import twitterSvg from "./twitter.svg";

const Footer = () => {
  const [isSubscribeModal, setIsSubscribeModal] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Properties", link: "/properties" },
    { name: "About Us", link: "/about" },
    { name: "FAQs", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  const handleSubscribe = () => {
    setIsSubscribeModal(true);
  }

  return (
    <>
      <div className="mx-4 md:mx-16 mb-2 mt-24">
        {/* logo */}
        <div className="mb-8 transition-all ease-in-out duration-300">
          <img className="lg:h-20 h-16" src={singleLogo} />
          <img className="mt-3 lg:h-12 h-9" src={text} />
        </div>

        <div className="lg:flex mb-12">
          {/* Newsletter */}
          <div className="flex flex-col mb-12 lg:w-[40%] lg:mr-16">
            <h1 className="mb-2">
              <span className="font-bold">Subscribe</span> to our newsletter to
              get the latest listings and updates!
            </h1>
            <input
              className="w-full py-3 px-3 font-helvetica mb-2 bg-input text-black focus:outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
            <CTAButton btnName={"Subscribe"}
            onClick={handleSubscribe} />
          </div>

          <div className="flex flex-wrap w-full justify-between">
            {/* site map */}
            <div className="mb-12">
              <p className="font-bold">Site Map</p>
              <ul>
                {Links.map((link) => (
                  <li className="mt-3 hover:text-accent font-playFair">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <p className="font-bold">Contact</p>
              <ul>
                <li className="hover:text-accent font-playFair mt-3">
                  <a href="mailto:hello@intelliseven.com.ph">
                    hello@intelliseven.com.ph
                  </a>
                </li>
                <li className="hover:text-accent font-playFair mt-3">
                  +63918-909-0331
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="md:w-[40%]">
              <div>
                <p className="font-bold">Address</p>
                <ul>
                  <li className="hover:text-accent font-playFair mt-3">
                    <a
                      href="https://maps.app.goo.gl/53NaYh8U7Hr7nb62A"
                      target="_blank"
                    >
                      Unit 309, 3rd Floor, West City Plaza, 66 West Ave, Quezon
                      City, 1104 Metro Manila
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect with us */}
              <div className="mt-4">
                <p className="font-bold">Connect with us</p>
                <div className="flex mt-2">
                  <img className="mr-3" src={instagramSvg} />
                  <img className="mr-3" src={facebookSvg} />
                  <img className="mr-3" src={twitterSvg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex-wrap md:flex justify-between text-sm">
          <p className="mb-8">1568 Realty &#169; 2024. All rights reserved.</p>
          <p>
            <span>Powered by </span>
            <a
              href="https://www.intelliseven.com.ph/"
              target="_blank"
              className=" hover:text-accent font-bold"
            >
              IntelliSeven Technology Solutions Inc.
            </a>
          </p>
        </div>
      </div>
      {isSubscribeModal && (
      <div className="fixed inset-0 bg-rawWhite transition-all ease-in-out duration-300 z-50 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-20">
            <img alt="logo" className="w-200.17 h-35"  src="/RealtyLogoGold.png" />
            <div className="w-310 h-310">
              <video autoPlay muted playsInline src="/subscribe.mp4" />
            </div>
            <p className="font-bold text-3xl md:text-4xl text-center pt-2 ">You’re already subscribed</p>
            <p className="font-normal opacity-70 text-center text-l md:text-xl text-gray-200 py-2 md:w-7/12 w-full ">We are happy that you’re interested in this property. We’ll let you know with our latest posts and updates.</p>
            <a href="/" className=" flex justify-center cursor-pointer mt-2 mb-2 font-playFair border-2 border-white text-white p-3 bg-accent   md:w-[20%] w-[50%] hover:bg-white hover:text-accent hover:border-accent ease-out duration-200">
                Discover more
            </a>
        </div>
      </div>
      )}
    </>
  );
};

export default Footer;
