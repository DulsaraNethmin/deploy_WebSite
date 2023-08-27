import React from "react";
import logo from "../../assets/logo.png";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";

function Footer() {
  return (
    <div className="flex flex-col items-center w-full bg-secondary-blue bg-footerBG-img bg-no-repeat bg-cover px-10 pt-10 lg:px-24 xl:pt-16 pb-8">
      <div className="flex flex-col xl:flex-row xl:justify-between items-center xl:items-start">
        <div className="w-full xl:w-1/4 flex flex-col justify-center items-center xl:items-start pb-10 xl:pb-0 mb-10 xl:mb-0 border-b xl:border-none border-gray-500">
          <img src={logo} width="400" />
          <div className="my-8 text-center xl:text-left w-3/4 xl:w-full">
            <text className="text-white text-xs xl:text-base">
              Get in touch with us via Facebook, Instagram, Linkedin, &
              Youtube.
            </text>
          </div>
          <div className="flex flex-row">
            <FontAwesomeIcon
              className="mr-6"
              icon={faFacebookSquare}
              size="2x"
              color="#ffffff"
            />
            <FontAwesomeIcon
              className="mr-6"
              icon={faInstagramSquare}
              size="2x"
              color="#ffffff"
            />
            <FontAwesomeIcon
              className="mr-6"
              icon={faTwitterSquare}
              size="2x"
              color="#ffffff"
            />
            <FontAwesomeIcon
              className="mr-6"
              icon={faYoutubeSquare}
              size="2x"
              color="#ffffff"
            />
          </div>
        </div>
        <div className="mb-10 xl:mb-0">
          <text className="text-2xl text-white font-bold">Quick Links</text>
          <div className="mt-6 flex flex-col xl:items-start items-center">
            <QuickLinks title={"Home"} link={"/home"}/>
            <QuickLinks title={"Sen Courier"} link={"/ourservices"} />
            <QuickLinks title={"Sen Local Distribution"} link={"/localdis"} />
            <QuickLinks title={"Sen Consolidated Hub"} link={"/consolidatedhub"} />
            <QuickLinks title={"Team"} link={"/team"} />
            <QuickLinks title={"About Us"} link={"/about"} />
            <QuickLinks title={"Contact Us"} link={"/contact"} />
          </div>
        </div>
        <div className="w-full xl:w-1/6 flex flex-col items-center xl:items-start mb-6 xl:mb-0">
          <text className="text-2xl text-white font-bold">Contact Info</text>
          <div className="mt-4 flex flex-col items-center xl:items-stretch">
            <div className="xl:border-b border-gray-500">
              <ContactInfo icon="phone" title="+62 81587 6218" />
            </div>
            <div className="xl:border-b border-gray-500">
              <ContactInfo
                icon="map"
                title="IL Raya Kuta No.21, KUraL BOl BOSB"
              />
            </div>
            <ContactInfo icon="mail" title="info@gruziru" />
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-stretch">
          <text className="text-2xl text-white font-bold">Newsletter</text>
          <text className="xl:mt-6 mt-8 text-white text-sm w-80 text-center xl:text-start">
            Don't miss out our latest news. Sign up for newsletter & be
            informed.
          </text>
          <div className="mt-6">
            <input
              className="lg:px-4 lg:py-2 px-2 py-1 rounded-l-lg"
              placeholder="Your Email Address"
            />
            <button className="bg-lotus-red lg:px-4 lg:py-2 px-2 py-1 rounded-r-lg">
              SEND
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-6 border-gray-500 w-full flex justify-center">
        <text className="text-white text-sm text-center">
          © 2022 Copyright All rights reserved. SEN TRANSPORT.Ltd.
        </text>
      </div>
    </div>
  );
}

export default Footer;
