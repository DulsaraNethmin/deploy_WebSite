import React from "react";
import { NavLink } from "react-router-dom";

function PrimaryButton({ title, onClick, link }) {
  return (
    <NavLink to={link}>
      <div>
      <button class="bg-lotus-red hover:bg-opacity-80 text-white py-3 px-10 rounded-3xl" onClick={onClick}>
        {title}
      </button>
    </div>
    </NavLink>
    
  );
}

export default PrimaryButton;
