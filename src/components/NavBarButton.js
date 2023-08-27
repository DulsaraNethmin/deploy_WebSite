import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBarButton.module.css";

function NavBarButton({ title, url }) {
  return (
    <header className={classes.header}>
      <div className="flex justify-center items-center text-center">
        <NavLink
          activeClassName={classes.active}
          to={url}
          className="xl:p-2 xl:m-4 m-10 text-white font-Montserrat font-semibold hover:text-lotus-red 2xl:text-lg text-lg"
        >
          {title}
        </NavLink>
      </div>
    </header>
  );
}

export default NavBarButton;
