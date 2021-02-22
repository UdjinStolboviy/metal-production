/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./footerSiteStyl.scss";
import ItemFooter from "./itemFooter";
import fb from "./facebook.svg";
import inst from "./instagram.svg";
import youtub from "./youtube.svg";
import google from "./google.svg";

function footerSite() {
  const [mainText1] = useState("О компании");
  const [text2] = useState("Наши работы");
  const [text3] = useState("Контакты");
  const [text4] = useState("Доставка");
  const [text5] = useState("Форма заказа");
  const [mainText2] = useState("Услуги");
  const [text6] = useState("Производство оборудования");
  const [text7] = useState("Металлическая мебель");
  const [text8] = useState("Металлоконструкции");
  const [text9] = useState("Металлообработка");
  const [mainText3] = useState("");
  const [text10] = useState("Раскрой металла");
  const [text11] = useState("Конструкторское бюро ");
  const [text12] = useState("Аренда техники");
  const [text13] = useState("Ремонт техники");

  return (
    <>
      <div className="main-footer">
        <div className="about-company">
          <ItemFooter
            mainText={mainText1}
            text2={text2}
            text3={text3}
            text4={text4}
            text5={text5}
          />
        </div>
        <div className="footer-hr"></div>
        <div className="services-footer">
          <ItemFooter
            mainText={mainText2}
            text2={text6}
            text3={text7}
            text4={text8}
            text5={text9}
          />
        </div>
        <div className="services-add">
          <ItemFooter
            mainText={mainText3}
            text2={text10}
            text3={text11}
            text4={text12}
            text5={text13}
          />
        </div>
        <div className="footer-hr"></div>
        <div className="social-info">
          <h2>Контактная информация</h2>
          <p>
            Заводская улица, 2В, Буча,
            <br />
            Киевская область, 08292
          </p>
          <h3>ПН - ПТ: 09:00 - 18:00</h3>
          <h3>+38(097)123-45-67</h3>
          <div className="social-icons">
            <img className="img-fb" src={fb} alt="FB" />
            <img className="img-ins" src={inst} alt="INS" />
            <img className="img-youtub" src={youtub} alt="YT" />
            <img className="img-google" src={google} alt="Google" />
          </div>
        </div>
      </div>
      <div className="dev">Developed by Stubbs</div>
    </>
  );
}

export default footerSite;
