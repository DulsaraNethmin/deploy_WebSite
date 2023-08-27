import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function QuickLinks({ title, link }) {
  return (
    <NavLink to={link} className="group block m-1 ">
      <div className="">
        <FontAwesomeIcon icon={faChevronRight} size="1x" color="#e44650" />
        <text className="text-white ml-4 group-hover:text-lotus-red">{title}</text>
      </div>
    </NavLink>
  );
}

export default QuickLinks;
