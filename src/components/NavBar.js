import React, { useState } from "react";
import logo from "../assets/logo.png";
import DropdownComponent from "./DropdownComponent";
import NavBarButton from "./NavBarButton";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from 'hamburger-react'
import left from "../assets/left.png"
import right from "../assets/right.png"

function NavBar() {
  //let [open, setOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex flex-row xl:mt-16 xl:mb-6 xl:mx-20">
      <div className="flex flex-row xl:flex-row justify-between items-center bg-secondary-blue pl-4 py-4 xl:rounded-l-2xl xl:rounded-r-none xl:w-5/6 w-auto ">
        <img src={logo} className="w-1/3" alt="logo" />
        <div
          onClick={() => setOpen(!isOpen)}
          className="text-3xl right-16 top-8 cursor-pointer xl:hidden"
        >
          {/* <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            size="1x"
            color="#ffffff"
          /> */}
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <div className={`xl:flex xl:flex-row flex-col justify-center items-center absolute xl:static left-0 w-full transition-all duration-300 ease-in-out ${isOpen ? 'top-16 md:top-20 lg:top-24 py-6 bg-secondary-blue' : 'top-[-490px]'}`}>
          <NavBarButton title={"Home"} url="/home" />
          <DropdownComponent />
          <NavBarButton title={"Team"} url="/team" />
          <NavBarButton title={"About Us"} url="/about" />
          <NavBarButton title={"Contact Us"} url="/contact" />
        </div>
        <div className="hidden xl:flex">
          <img src={left} width="30" />
        </div>

      </div>

      {/* <div className="">
      <FontAwesomeIcon icon={faPhone} size="1x" color="#ffffff" />
    </div> */}
      <div className="hidden flex-row justify-between bg-lotus-red py-4 pr-4 rounded-r-2xl w-1/6 items-center text-white xl:flex">
        <img src={right} width="20" />
        <div className="flex flex-col justify-center items-center w-4/5">
          <text className="font-bold">Contact Us now</text>
          <text className="text-sm">+94714561236</text>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
