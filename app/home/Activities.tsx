import React from "react";
import Activity from "./Activity";

import activity01 from "@/public/images/activity01.png";
import activity02 from "@/public/images/activity02.png";
import activity03 from "@/public/images/activity03.png";
import activity04 from "@/public/images/activity04.png";

const Activities = () => {
  return (
    <div
      id='sikim'
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#330728",
      }}
    >
      <h1>Activities</h1>
      <div style={{ display: "flex" }}>
        <div>
          <Activity src={activity01.src} alt='s' title='Snow' />
        </div>
        <div>
          <Activity src={activity02.src} alt='s' title='Snow' />
        </div>
        <div>
          <Activity src={activity03.src} alt='s' title='Snow' />
        </div>
        <div>
          <Activity src={activity04.src} alt='s' title='Snow' />
        </div>
      </div>
    </div>
  );
};

export default Activities;
