"use client";
import Cart from "@/public/svg/Cart";
import SearchIcon from "@/public/svg/SearchIcon";
import React from "react";

const Setting = () => {
  return (
    <div style={{ display: "flex" }} className='mr-2 ml-2'>
      <div className='m-1'>
        <SearchIcon />
      </div>
      <div className='m-1'>
        <Cart />
      </div>
    </div>
  );
};

export default Setting;
