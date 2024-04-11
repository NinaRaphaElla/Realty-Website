import React, { useState } from "react";
import mainLogo from "./Logo.png";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Properties", link: "/properties" },
    { name: "About Us", link: "/about" },
    { name: "FAQs", link: "/faqs" },
    { name: "Contact Us", link: "/contact" },
    // { name: "Property Details", link: "/details" },
  ];

  const [menuState, setMenuState] = useState(false);

  const setMenu = () => {
    setMenuState(!menuState);
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
          {Links.map((link) => (
            <li className="md:ml-8 text-sm cursor-pointer px-16 md:px-0">
              <NavLink
                to={link.link}
                className={`hover:text-accent ${
                  link.name === "Contact Us"
                    ? "bg-accent px-4 py-2 text-white border-2 border-accent hover:bg-white hover:border-accent transition-all ease-in-out duration-300"
                    : ""
                }`}
                activeClassName={`text-yellow-500 ${
                  link.name === "Contact Us" ? "bg-white border-accent" : ""
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>

      {/* side bar */}
      <div
        className={
          menuState
            ? "fixed left-0 top-0 mt bg-white h-full w-[50%] font-playFair ease-in-out duration-500 md:hidden z-[49]"
            : "fixed left-[-200px] top-0 w-[50%] z-[49] h-full font-playFair ease-in-out duration-500"
        }
      >
        <ul className="py-9 px-10">
          <img className="h-7 cursor-pointer mb-7 " src={mainLogo} />
          {Links.map((link) => (
            <li className="text-sm cursor-pointer mb-7 hover:text-accent">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
