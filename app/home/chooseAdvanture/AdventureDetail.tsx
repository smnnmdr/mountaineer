import React from "react";
import { IAdvantureProps } from "./@types";

const AdventureDetail = ({
  description,
  image,
  place,
  price,
  title,
}: IAdvantureProps) => {
  return (
    <div className='border-b-2 border-b-slate-400 flex flex-row py-2'>
      <div>
        <img
          style={{ display: "flex", flexBasis: "30%" }}
          src={image}
          alt='event'
          width={400}
          height={300}
        />
      </div>

      <div className='px-8 pt-8'>
        <div className='mb-20'>
          <span className='p-1 text-xs bg-cyan-500'>{title}</span>
        </div>
        <div>
          <div
            style={{
              content: "",
              width: "4px",
              height: "4px",
              backgroundColor: "#000",
              borderRadius: "100%",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              display: "inline-block",
            }}
          ></div>
          <span className='text-sm  ml-2'>{place}</span>
        </div>
        <div>
          <span className='text-xl font-extrabold '>{description}</span>
        </div>
        <div>
          <span className='text-lg font-semibold '>$ {price} </span>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetail;
