import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import ListItem from "./listItemNavBar/ListItem";
import NavBarConstant from "../constant/NavBarConstant";
import SocialConstant from "../constant/SocialConstant";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="firas" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {NavBarConstant.map(({ name }, idx) => (
          <ListItem name={name} key={idx} />
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {NavBarConstant.map(({ name }, idx) => (
          <ListItem
            name={name}
            style={`py-6 text-4xl`}
            handleFunction={handleClick}
            key={`${idx}`.padEnd(7, "5")}
          />
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {SocialConstant.map(({ name, link, icon }, idx) => (
            <li  key={`${idx}`.padEnd(20, "==")} className="w-[160px] h-[60px] shadow-md shadow-[#040c16] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#0a192f] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={`${link}`}
              >
                {name} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
