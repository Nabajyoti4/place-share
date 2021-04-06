import React from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

function MainNavigation() {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Place</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
