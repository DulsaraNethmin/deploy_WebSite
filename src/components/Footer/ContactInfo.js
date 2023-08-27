import React from "react";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo({ icon, title }) {
  return (
    <div className="my-2 pb-2">
      <a href="" className="group flex m-1">
        <div className=" flex flex-row justify-center items-center">
          {icon === "phone" && (
            <FontAwesomeIcon icon={faPhone} size="1x" color="#e44650" />
          )}
          {icon === "map" && (
            <FontAwesomeIcon icon={faLocationDot} size="1x" color="#e44650" />
          )}
          {icon === "mail" && (
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="#e44650" />
          )}
          <div className="ml-6">
            <text className="text-white  text-xs group-hover:text-lotus-red text-justify">
              {title}
            </text>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ContactInfo;
