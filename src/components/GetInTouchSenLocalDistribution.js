import React from "react";
import { faPhone, faEnvelope, faLocationDot, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../assets/profilePIC.png";

function GetInTouchSenLocalDistribution() {
  return (
    <div className="w-full bg-lotus-red p-10 lg:p-24">
      <div>
        <text className="font-ExpletusSans-BoldItalic text-lg text-white">
          Get In Touch
        </text>
        <div className="lg:text-5xl text-3xl font-bold">
          <text className="text-secondary-blue">We are ready </text>
          <text className="text-white">to assist </text>
          <text className="text-secondary-blue">you anytime, </text>
          <text className="text-white">every time...</text>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <img src={profilePic} width="200"/>
        <text className="text-xl text-white font-semibold m-4">Zen Koala</text>
        <button className="py-1 px-4 border text-white rounded">Contact Us</button>
      </div>
      <div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:mx-48">
          <div className="flex flex-col items-center justify-center lg:ml-10 mt-10">
            <FontAwesomeIcon icon={faPhone} size="2x" color="#FFFFFF" />
            <div className="flex flex-col justify-center items-center text-base lg:text-sm mt-4 text-white">
              <text className="font-semibold">PHONE</text>
              <text>+2 360 185 35 65</text>
              <text>+2 262 890 80 02</text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:ml-10 mt-10">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#FFFFFF" />
            <div className="flex flex-col justify-center items-center text-base lg:text-sm mt-4 text-white">
              <text className="font-semibold">EMAIL</text>
              <text>Zen@sentransport</text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:ml-10 mt-10">
            <FontAwesomeIcon icon={faLocationDot} size="2x" color="#FFFFFF" />
            <div className="flex flex-col justify-center items-center text-base lg:text-sm mt-4 text-white">
              <text className="font-semibold">LOCATION</text>
              <text>2307 Brooklyn. New York</text>
              <text>United State</text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:ml-10 mt-10">
            <FontAwesomeIcon icon={faShareNodes} size="2x" color="#FFFFFF" />
            <div className="flex flex-col justify-center items-center text-base lg:text-sm mt-4 text-white">
              <text className="font-semibold">FOLLOW US</text>
              <text>+2 262 890 80 02</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouchSenLocalDistribution;
