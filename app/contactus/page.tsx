import React from "react";

const ContactUsPage = () => {
  return (
    <div className="flex ">
      <div style={{ border: "1px solid black", width: "50%", height: "80vh" }}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ border: "1px solid red" }}
        >
          <div>Contact us for more information</div>
          <div className="flex " style={{ height: "400px" }}>
            <div
              style={{ border: "1px solid black", width: "50%" }}
              className="flex flex-col"
            >
              <span>Brooklyn</span>
              <span>
                Schweizer Skischule Hühnerhubelstrasse 95 CH-3123 Belp
              </span>
              <span>Fax. +41 31 920 41 12</span>
              <span> trekon@qode.com</span>
            </div>
            <div
              style={{ border: "1px solid black", width: "50%" }}
              className="flex flex-col"
            >
              <span>Manhattan</span>
              <span>
                Schweizer Skischule Hühnerhubelstrasse 95 CH-3123 Belp
              </span>
              <span>Fax. +41 31 920 41 12</span>
              <span> trekon@qode.com</span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ border: "1px solid black", width: "50%", height: "80vh" }}
      ></div>
    </div>
  );
};

export default ContactUsPage;
