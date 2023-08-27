import React, { useState, useEffect, Fragment } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import DropdownComponent from "./DropdownComponent";
import NavBarButton from "./NavBarButton";
import Hamburger from "hamburger-react";
import call from "../assets/call.png";
import PrimaryButton from "./PrimaryButton";
import { NavLink } from "react-router-dom";
import classes from "./NavBarButton.module.css";
import { Menu, Transition } from "@headlessui/react";

function NavBarNew({onClickGetQuote, link}) {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 1;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="flex flex-row fixed font-Montserrat">
      {isVisible ? (
        <div className="flex flex-row xl:flex-row justify-between items-center lg:py-6 pt-4 pr-8 lg:pl-24 pl-10 w-auto bg-white lg:bg-transparent">
          <img
            src={logo}
            className="lg:w-1/5 w-1/4 lg:inline hidden"
            alt="logo"
          />
          <img src={logo1} className="lg:w-1/5 w-1/4 lg:hidden" alt="logo" />
          <div
            onClick={() => setOpen(!isOpen)}
            className="text-3xl right-16 top-8 cursor-pointer xl:hidden"
          >
            <div className="lg:inline hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="white"
                size="25"
              />
            </div>

            <div className="lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="black"
                size="25"
              />
            </div>
          </div>
          <div
            className={`xl:flex xl:flex-row flex-col justify-center items-center absolute xl:static left-0 w-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-16 md:top-24 lg:top-24 py-6 bg-white"
                : "top-[-490px]"
            }`}
          >
            <div>
              {isOpen ? (
                <div className="text-black flex flex-col w-full">
                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/home"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Home
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/ourservices"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Courier
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/localdis"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Local Distribution
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/consolidatedhub"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Consolidated Hub
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/team"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Team
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/about"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        About Us
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/contact"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Contat Us
                      </NavLink>
                    </div>
                  </header>
                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/careers"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Careers
                      </NavLink>
                    </div>
                  </header>
                </div>
              ) : (
                <div className="lg:inline hidden">
                  <div className="flex flex-row justify-center items-center">
                    <NavBarButton title={"Home"} url="/home" />
                    <DropdownComponent />
                    <NavBarButton title={"Team"} url="/team" />
                    <NavBarButton title={"About Us"} url="/about" />
                    <NavBarButton title={"Contact Us"} url="/contact" />
                    <NavBarButton title={"Careers"} url="/careers" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div class="flex flex-row items-center justify-between bg-lotus-red hover:bg-opacity-80 text-white rounded-3xl px-4 py-1 w-72">
          <div className="">
            <img src={call} width="100" height="100%"></img>
          </div>
          <div className="flex flex-col items-center text-sm text-center">
            <text>Contact Us Now</text>
            <text>+94714561236</text>
          </div>
        </div> */}
        {/* <NavLink to={link}> */}
          <div className="w-1/4 xl:inline hidden">
            <button onClick={onClickGetQuote} class="bg-lotus-red hover:bg-opacity-80 text-white py-3 2xl:px-10 px-6 rounded-3xl">
              Get Quote
            </button>
          </div>
          {/* </NavLink> */}
        </div>
      ) : (
        <div
          className={`flex flex-row xl:flex-row justify-between items-center lg:py-6 pt-4 pr-8 lg:pl-24 pl-10 w-auto bg-white lg:absolute xl:static left-0 transition-all duration-500 ease-in-out ${
            isOpen ? "top-16 md:top-24 lg:top-24 py-6 bg-white" : "top-[-490px]"
          }`}
        >
          <img
            src={logo1}
            className="lg:w-1/5 w-1/4 lg:inline hidden"
            alt="logo"
          />
          <img src={logo1} className="lg:w-1/5 w-1/4 lg:hidden" alt="logo" />
          <div
            onClick={() => setOpen(!isOpen)}
            className="text-3xl right-16 top-8 cursor-pointer xl:hidden"
          >
            <div className="lg:inline hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="white"
                size="25"
              />
            </div>

            <div className="lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="black"
                size="25"
              />
            </div>
          </div>
          <div
            className={`xl:flex xl:flex-row flex-col justify-center items-center absolute xl:static left-0 w-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-16 md:top-24 lg:top-24 py-6 bg-white"
                : "top-[-490px]"
            }`}
          >
            <div>
              {isOpen ? (
                <div className="text-black flex flex-col w-full">
                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/home"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Home
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/ourservices"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Courier
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/localdis"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Local Distribution
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/consolidatedhub"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Sen Consolidated Hub
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/team"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Team
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/about"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        About Us
                      </NavLink>
                    </div>
                  </header>

                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/contact"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Contact Us
                      </NavLink>
                    </div>
                  </header>
                  <header className={classes.header}>
                    <div className="flex justify-center items-center text-center">
                      <NavLink
                        activeClassName={classes.active}
                        to="/careers"
                        className="xl:p-2 xl:m-4 my-3 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                      >
                        Careers
                      </NavLink>
                    </div>
                  </header>
                </div>
              ) : (
                <div className="lg:inline hidden">
                  <div className="flex flex-row justify-center items-center">
                    <header className={classes.header}>
                      <div className="flex justify-center items-center text-center">
                        <NavLink
                          activeClassName={classes.active}
                          to="/home"
                          className="xl:p-2 xl:m-4 m-10 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                        >
                          Home
                        </NavLink>
                      </div>
                    </header>

                    <Menu
                      as="div"
                      className="relative inline-block text-left xl:mx-4 xl:pl-2 xl:pl-none"
                    >
                      <div>
                        <Menu.Button className="inline-flex justify-center items-center text-secondary-blue font-semibold hover:text-lotus-red 2xl:text-lg text-lg">
                          Our Services
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bold">
                          <div className="p-4">
                            <Menu.Item className="m-1">
                              <div className={classes.header}>
                                <NavLink
                                  activeClassName={classes.active}
                                  to="/ourservices"
                                  className="text-lotus-red font-semibold hover:text-secondary-blue"
                                >
                                  Sen Courier
                                </NavLink>
                              </div>
                            </Menu.Item>
                            <Menu.Item className="m-1">
                              <div className={classes.header}>
                                <NavLink
                                  activeClassName={classes.active}
                                  to="/localdis"
                                  className=" text-lotus-red font-semibold hover:text-secondary-blue"
                                >
                                  Sen Local Distribution
                                </NavLink>
                              </div>
                            </Menu.Item>
                            <Menu.Item className="m-1">
                              <div className={classes.header}>
                                <NavLink
                                  activeClassName={classes.active}
                                  to="/consolidatedhub"
                                  className="text-lotus-red font-semibold hover:text-secondary-blue"
                                >
                                  Sen Consolidated Hub
                                </NavLink>
                              </div>
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <header className={classes.header}>
                      <div className="flex justify-center items-center text-center">
                        <NavLink
                          activeClassName={classes.active}
                          to="/team"
                          className="xl:p-2 xl:m-4 m-10 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                        >
                          Team
                        </NavLink>
                      </div>
                    </header>

                    <header className={classes.header}>
                      <div className="flex justify-center items-center text-center">
                        <NavLink
                          activeClassName={classes.active}
                          to="/about"
                          className="xl:p-2 xl:m-4 m-10 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                        >
                          About Us
                        </NavLink>
                      </div>
                    </header>

                    <header className={classes.header}>
                      <div className="flex justify-center items-center text-center">
                        <NavLink
                          activeClassName={classes.active}
                          to="/contact"
                          className="xl:p-2 xl:m-4 m-10 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </header>
                    <header className={classes.header}>
                      <div className="flex justify-center items-center text-center">
                        <NavLink
                          activeClassName={classes.active}
                          to="/careers"
                          className="xl:p-2 xl:m-4 m-10 text-secondary-blue font-semibold bold hover:text-lotus-red 2xl:text-lg text-lg"
                        >
                          Careers
                        </NavLink>
                      </div>
                    </header>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div class="flex flex-row items-center justify-between bg-lotus-red hover:bg-opacity-80 text-white rounded-3xl px-4 py-1 w-72">
          <div className="">
            <img src={call} width="100" height="100%"></img>
          </div>
          <div className="flex flex-col items-center text-sm text-center">
            <text>Contact Us Now</text>
            <text>+94714561236</text>
          </div>
        </div> */}
        {/* <NavLink to={link}> */}
          <div className="w-1/4 xl:inline hidden">
            <button onClick={onClickGetQuote} class="bg-lotus-red hover:bg-opacity-80 text-white py-3 2xl:px-10 px-6 rounded-3xl">
              Get Quote
            </button>
          </div>
          {/* </NavLink> */}
        </div>
      )}
    </div>
  );
}
export default NavBarNew;
