import React, { useRef, useState } from "react";
import mainLogo from "./Logo.png";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const setMenu = () => {
    setMenuState(!menuState);
  };

  const history = useHistory();

  const handleFAQClick = () => {
    history.push("/");
    scrollToSection("faqs-section");
  };

  const handleContactClick = () => {
    history.push("/");
    scrollToSection("contact-section");
  };

  const handleHeroClick = () => {
    history.push("/");
    scrollToSection("hero-section");
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div>
      <header className="fixed left-0 right-0 top-0 flex items-center justify-between w-auto py-5 md:px-16 px-10 shadow-xl font-playFair z-50 bg-white">
        <img className="h-7 whitespace-nowrap cursor-pointer" src={mainLogo} />
        <div onClick={setMenu} className="md:hidden cursor-pointer">
          {menuState ? (
            <RiCloseLine className="text-primary size-6" />
          ) : (
            <RiMenu3Fill className="text-primary size-5" />
          )}
        </div>

        <ul className="md:flex md:items-center whitespace-nowrap text-base text-black m-0 p-0 w-full md:w-auto  bg-white hidden">
          <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0 hover:text-accent">
            <a href="#" onClick={handleHeroClick}>
              Home
            </a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0 hover:text-accent">
            <a href="/properties">Properties</a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0 hover:text-accent">
            <a href="/about">About Us</a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0 hover:text-accent">
            <a href="#" onClick={handleFAQClick}>
              FAQs
            </a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer bg-accent px-4 py-2 text-white border-2 border-accent hover:bg-white hover:border-accent transition-all ease-in-out duration-300">
            <a href="#" onClick={handleContactClick}>
              Contact Us
            </a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0 hover:text-accent">
            <a href="/details">Property Details</a>
          </li>
        </ul>
      </header>

      {/* side bar */}
      <div
        className={
          menuState
            ? "fixed left-0 top-0 mt bg-white h-full w-[50%] font-playFair ease-in-out duration-500 md:hidden z-[49]"
            : "fixed left-[-200px] top-0 w-[50%] md:hidden z-[49] h-full font-playFair ease-in-out duration-500"
        }
      >
        <ul className="pt-24 px-10">
          <li className="text-sm cursor-pointer mb-7 hover:text-accent">
            <a href="/">Home</a>
          </li>
          <li className="text-sm cursor-pointer mb-7 hover:text-accent">
            <a href="/properties">Properties</a>
          </li>
          <li className="text-sm cursor-pointer mb-7 hover:text-accent">
            <a href="/about">About Us</a>
          </li>
          <li className="text-sm cursor-pointer mb-7 hover:text-accent">
            <a href="#" onClick={handleFAQClick}>
              FAQs
            </a>
          </li>
          <li className="md:ml-8 text-sm cursor-pointer bg-accent px-4 py-2 text-white border-2 border-accent hover:bg-white hover:border-accent transition-all ease-in-out duration-300">
            <a href="#" onClick={handleContactClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
