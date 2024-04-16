"use client";
import React from "react";
import FooterLeftSide from "./FooterLeftSide";
import FooterRightSide from "./FooterRightSide";

const MainFooter = () => {
  return (
    <div>
      footer head
      <div className=" mt-24 flex justify-between">
        <div>
          <FooterLeftSide />
        </div>
        <div>
          <FooterRightSide />
        </div>
      </div>
      <div>footer down</div>
    </div>
  );
};

export default MainFooter;
