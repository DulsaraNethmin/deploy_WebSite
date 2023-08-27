import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import classes from "./NavBarButton.module.css";


function DropdownComponent() {
  return (
    <Menu as="div" className="relative inline-block text-left xl:mx-4 xl:pl-2 xl:pl-none">
      <div>
        <Menu.Button className="inline-flex justify-center items-center text-white font-semibold hover:text-lotus-red 2xl:text-lg text-lg">
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
        <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-right bg-secondary-blue-dark rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bold">
          <div className="p-4">
            <Menu.Item className="m-1">
              <div className={classes.header}>
                <NavLink
                  activeClassName={classes.active}
                  to="/ourservices"
                  className=" text-white font-semibold hover:text-lotus-red"
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
                  className=" text-white font-semibold hover:text-lotus-red"
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
                  className="text-white font-semibold hover:text-lotus-red"
                >
                  Sen Consolidated Hub
                </NavLink>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default DropdownComponent;
