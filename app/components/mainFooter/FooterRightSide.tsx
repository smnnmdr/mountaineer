import React from "react";
import styled from "styled-components";

const FooterRightSide = () => {
  const Li = styled.li`
    line-height: 2.5rem;
  `;
  return (
    <div className="flex justify-between">
      <div className="pr-10 mr-20">
        <span className="text-lg font-bold ">Explore Activity</span>
        <ul>
          <Li>Hiking</Li>
          <Li>CYCLING</Li>
          <Li>TREKKING</Li>
          <Li>SNOW SPORTS</Li>
          <Li>MOUNTAIN BIKING</Li>
          <Li>RUNNING</Li>
        </ul>
      </div>
      <div className="pr-10 mr-20">
        <span className="text-lg font-bold mb-3">Useful Links</span>
        <ul>
          <Li>Alpes suizos, Airolo, CH, </Li>
          <Li>3123 Belp</Li>
          <Li>Kammelenberg strasse 98</Li>
          <Li>Tel: +123456789 10</Li>
          <Li>Fax: +12345678910</Li>
          <Li>trekon@website.com</Li>
        </ul>
      </div>
    </div>
  );
};

export default FooterRightSide;
