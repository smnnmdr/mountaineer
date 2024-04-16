"use client";
import React from "react";
import NavItems from "./NavItems";
import Setting from "./Setting";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>logo</div>
          <div>
            <NavItems />
          </div>
          <div>
            <Setting />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
