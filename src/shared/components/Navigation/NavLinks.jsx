import React from "react";
import "./NavLinks.css";

import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">New Places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticated</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
