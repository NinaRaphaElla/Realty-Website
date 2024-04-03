import React from "react";
import mainLogo from "./Logo.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Properties", link: "/" },
    { name: "About Us", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  return (
    <header
      className="fixed left-0 right-0 top-0 mx-auto md:flex md:items-center md:justify-between py-3  px-16 shadow-md font-playFair z-50"
      style={{
        backgroundColor: "#F9F9F9",
      }}
    >
      <img className="h-7" src={mainLogo} />

      <ul className="md:flex md:items-center md: static md:absolute md:opacity-100 whitespace-nowrap text-base text-black m-0 p-0">
        {Links.map((link) => (
          <li className="md:ml-8 my-4 md:my-0 text-base cursor-pointer hover:text-accent">
            <a href={link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
