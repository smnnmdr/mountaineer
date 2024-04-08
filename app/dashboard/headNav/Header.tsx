"use client";

import React from "react";
import MenuBar from "./MenuBar";
import NavLink from "./NavLinks";
import Cart from "./Cart";
import Logo from "./Logo";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      <NavLink />
      <MenuBar />
      <Cart />
    </div>
  );
};

export default Header;
