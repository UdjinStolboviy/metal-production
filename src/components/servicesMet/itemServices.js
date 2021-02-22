import React from "react";
import "./itemServiceStyl.scss";

function itemServices({ imgUrl, textService }) {
  return (
    <div className="service-bloc">
      <img src={imgUrl} alt="First slide" />
      <div className="service-bloc-text">
        <h2>{textService}</h2>
        <div className="serv-hr"></div>
      </div>
    </div>
  );
}
export default itemServices;
