import React from "react";
import SlideSHow from "./SlideSHow";
import Activities from "./Activities";
import Planing from "./Planing";
import ChooseAdventure from "./chooseAdvanture/ChooseAdventure";

const HomePage = () => {
  return (
    <div>
      <SlideSHow />
      <Activities />
      <Planing />
      <ChooseAdventure />
    </div>
  );
};

export default HomePage;
