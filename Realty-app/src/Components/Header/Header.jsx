import React from "react";
import mainLogo from "./Logo.png";
import burger from "./burger.svg";

const Header = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Properties", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "FAQs", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  return (
    <header
      className="fixed left-0 right-0 top-0 mx-auto md:flex md:items-center md:justify-between py-5 md:px-16 px-10 shadow-md transition-all ease-in-out font-playFair z-50"
      style={{
        backgroundColor: "#F9F9F9",
      }}
    >
      <div className="flex justify-between items-center">
        <img
          className="h-7 inline-block whitespace-nowrap cursor-pointer"
          src={mainLogo}
        />
        <img className="cursor-pointer md:hidden" src={burger} />
      </div>

      <ul className="md:flex md:items-center md:absolute right-16 md:opacity-100 whitespace-nowrap text-base text-black m-0 p-0 md:opacity-100 opacity-0">
        {Links.map((link) => (
          <li className="md:ml-8 my-4 md:my-0 text-base cursor-pointer hover:text-accent">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
