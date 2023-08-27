import React from "react";
import { faShield, faDollarSign, faCalendarCheck, faTruckMedical, faRotate, faHandshakeSimple  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WhyChooseUsCard({ icon, title }) {
  return (
    <div className="flex flex-row w-60 items-center justify-between m-6">
      {
        (icon === "Assured safety" && (
          <FontAwesomeIcon icon={faShield} size="1x" color="#e44650" />
        ))
      }
      {
        (icon === "Affordable prices" && (
          <FontAwesomeIcon icon={faDollarSign} size="1x" color="#e44650" />
        ))
      }
      {
        (icon === "Pre-planned deliveries" && (
          <FontAwesomeIcon icon={faCalendarCheck} size="1x" color="#e44650" />
        ))
      }
      {
        (icon === "Emergency services" && (
          <FontAwesomeIcon icon={faTruckMedical} size="1x" color="#e44650" />
        ))
      }
      {
        (icon === "Real-time tracking" && (
          <FontAwesomeIcon icon={faRotate} size="1x" color="#e44650" />
        ))
      }
      {
        (icon === "Zero hassle" && (
          <FontAwesomeIcon icon={faHandshakeSimple} size="1x" color="#e44650" />
        ))
      }
      <div className="font-bold w-3/4">
        <text>{title}</text>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;
