import React from "react";
interface IActivityProps {
  src: string;
  alt: string;
  title: string;
}

const Activity = ({ src, alt, title }: IActivityProps) => {
  return (
    <div style={{ width: "400px", height: "800px" }} className='m-3'>
      <img src={src} alt={alt} />
      <span style={{ color: "white", fontSize: "1rem", position: "absolute" }}>
        {title}
      </span>
    </div>
  );
};

export default Activity;
