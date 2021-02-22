import React, { useState } from "react";
import "./servicesStyl.scss";
import ItemServices from "./itemServices";
import img1 from "./Rectangle 18.png";
import img2 from "./Rectangle 20.png";
import img3 from "./Rectangle 22.png";
import img4 from "./Rectangle 19.png";
import img5 from "./Rectangle 21.png";
import img6 from "./Rectangle 17.png";
import img7 from "./Rectangle 23.png";
import img8 from "./Rectangle 24.png";
import gears1 from "./Vector1.png";
import gears2 from "./Vector2.png";

function ServicesMet() {
  const [text1] = useState("Производство оборудования");
  const [text2] = useState("Металическа мебель");
  const [text3] = useState("Металлоконструкции");
  const [text4] = useState("Металлообработка");
  const [text5] = useState("Раскрой металла");
  const [text6] = useState("Конструкторское бюро");
  const [text7] = useState("Аренда техники");
  const [text8] = useState("Ремонт техники");

  return (
    <>
      <div className="text-container">
        <div className="text-servise">
          <h2>Услуги</h2>
          <div className="text-hr"></div>
        </div>
      </div>
      <div className="wrp">
        <div className="item-services-main">
          <div className="item-services-main-grid">
            <div className="service-bloc-1">
              <ItemServices imgUrl={img1} textService={text1} />
            </div>
            <div className="service-bloc-2">
              <ItemServices imgUrl={img2} textService={text2} />
            </div>
            <div className="service-bloc-3">
              <ItemServices imgUrl={img3} textService={text3} />
            </div>
            <div className="service-bloc-4">
              <ItemServices imgUrl={img4} textService={text4} />
            </div>
            <div className="service-bloc-5">
              <ItemServices imgUrl={img5} textService={text5} />
            </div>
            <div className="service-bloc-6">
              <ItemServices imgUrl={img6} textService={text6} />
            </div>
          </div>
          <div className="service-bloc-grid2">
            <div className="service-bloc-7">
              <ItemServices imgUrl={img7} textService={text7} />
            </div>
            <div className="service-bloc-8">
              <ItemServices imgUrl={img8} textService={text8} />
            </div>
          </div>
          <div className="text-payment">
            <div className="text-payment-blokc">
              <h2>Быстрый расчет цены по чертежу</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gears-left1">
        <img src={gears1} alt="First gears" className="animet-gears" />
      </div>
      <div className="gears-left2">
        <img src={gears2} alt="Serond gears" className="animet-gears" />
      </div>

      <div className="gears-right1">
        <img src={gears2} alt="First gear" className="animet-gears" />
      </div>
      <div className="gears-right2">
        <img src={gears1} alt="First gear" className="animet-gears" />
      </div>
    </>
  );
}
export default ServicesMet;
