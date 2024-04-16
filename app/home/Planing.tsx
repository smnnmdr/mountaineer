import React from "react";
// h1-img-22
import bysicle from "@/public/images/h1-img-22.jpg";
const Planing = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src={bysicle.src} alt='bycle' className='' />
      </div>
      <div className='flex justify-center items-start  flex-col '>
        <span style={{ fontSize: "4rem", fontWeight: "bold" }} className='m-2'>
          LEAVE THE PLANNING TO US
        </span>
        <span className='m-2'>
          Lorem ipsum dolor sit amet, consectetur adipis cing elitunc. Bibendum
          maximus.
        </span>
        <button className='btn btn-primary bg-sky-950 m-2'>Read more</button>
      </div>
    </div>
  );
};

export default Planing;
