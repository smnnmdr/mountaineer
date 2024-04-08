"use client";

import Image from "next/image";
import React from "react";
import LogoImage from "./../../../public/image/unnamed.png";
const Logo = () => {
  return (
    <div>
      <Image src={LogoImage} alt="mountaine logo" width={120} height={120} />
    </div>
  );
};

export default Logo;
