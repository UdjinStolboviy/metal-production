import React from "react";
import "./headerStyle.scss";

import ShooseLanguage from "./choose_language";
import Search from "./search";
import Rect305 from "./Rectangle 305.png";

function Heder() {
  return (
    <>
      <header className="header header__style-02">
        <div className="container">
          <div className="header__logo">
            <a href="index.html">
              <img src={Rect305} alt="logo" />
            </a>
          </div>

          <nav className="consult-nav">
            <ul className="consult-menu">
              <li className="current-menu-item main">
                <a href="blog.html">Главная</a>
              </li>
              <div className="rectangle"></div>
              <li className="services">
                <a href="about.html">Услуги</a>
              </li>
              <div className="rectangle"></div>
              <li className="our-work">
                <a href="blog.html">Наши работы</a>
              </li>
              <div className="rectangle"></div>
              <li className="about-us">
                <a href="contact.html">О нас</a>
              </li>
              <div className="rectangle"></div>
              <li className="contacts">
                <a href="contact.html">Контакты</a>
              </li>
            </ul>
          </nav>
          <Search />
          <ShooseLanguage />
        </div>
      </header>
    </>
  );
}
export default Heder;
