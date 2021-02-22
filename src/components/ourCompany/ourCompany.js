import React from "react";
import "./ourCompanyStyl.scss";
import Rectangle25 from "./Rectangle 25.png";
import Rectangle252 from "./Rectangle 252.png";

function ourCompany() {
  return (
    <>
      <div className="text-container our-top">
        <div className="text-servise">
          <h2>Наша компания</h2>
          <div className="text-hr our-top-hr"></div>
        </div>
      </div>
      <div classNam="wrap-block-text">
        <img
          className="d-block w-100 img-our"
          src={Rectangle25}
          alt="Second slide"
        />
        <div className="wrap-text">
          <h2>Почему мы?</h2>
          <p>
            Люди – профессионалы с большим опытом работы. Полный спектр работ по
            металлообработке в одном месте – комплексный индивидуальный подход.
            Конструкторский отдел. Логистика. Многолетний опыт машиностроения –
            создание промышленного
          </p>
          <div className="text-hr-our"></div>
        </div>
      </div>
      <div classNam="wrap-block-text">
        <img
          className="d-block w-100 img-our-2"
          src={Rectangle252}
          alt="Second slide"
        />
        <div className="wrap-tex-2">
          <h2>Наши преимущества</h2>
          <p>
            Люди – профессионалы с большим опытом работы. Полный спектр работ по
            металлообработке в одном месте – комплексный индивидуальный подход.
            Конструкторский отдел. Логистика. Многолетний опыт машиностроения –
            создание промышленного
          </p>
          <div className="text-hr-our"></div>
        </div>
      </div>
    </>
  );
}
export default ourCompany;
