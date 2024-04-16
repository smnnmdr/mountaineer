import React from "react";
import { IAdvantureProps } from "./@types";
import AdventureDetail from "./AdventureDetail";
import event1 from "@/public/images/event-1.jpg";
import event2 from "@/public/images/event-2.jpg";
import event3 from "@/public/images/event-3.jpg";
import event4 from "@/public/images/event-4.jpg";
const ChooseAdventure = () => {
  const adventureModel: IAdvantureProps[] = [
    {
      id: 1,
      title: "TREKKING",
      description: "Think about power training before you start running",
      price: "3,250,000",
      image: event1.src,
      place: "Enlgand ,berming hum",
    },
    {
      id: 2,

      title: "CYCLING , HIKING",
      description: "Think about power training before you start running",
      price: "1,000,000",
      image: event2.src,
      place: "Enlgand ,berming hum",
    },
    {
      id: 3,

      title: "HIKING",
      description: "Think about power training before you start running",
      price: "30,000",
      image: event3.src,
      place: "Enlgand ,berming hum",
    },
    {
      id: 4,

      title: "CYCLING",
      description: "Think about power training before you start running",
      price: "45,000",
      image: event4.src,
      place: "Enlgand ,berming hum",
    },
  ];

  const renderAdventures = () => {
    return adventureModel.map((item) => {
      return <AdventureDetail key={item.id} {...item} />;
    });
  };

  return (
    <div style={{ width: "1200px", margin: "0 auto" }} className='pt-20 '>
      <div className='border-b-2 border-b-slate-400'>
        <span style={{ fontSize: "4rem" }}>Choose your adventure</span>
      </div>
      <div>{renderAdventures()}</div>
    </div>
  );
};

export default ChooseAdventure;
