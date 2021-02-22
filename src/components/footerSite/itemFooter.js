/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./itemFooterStyl.scss";

function itemFooter({ mainText, text2, text3, text4, text5 }) {
  return (
    <div className="wrap-footer-text">
      <ul className="menu-footer">
        <li className="main-item">
          <a href="blog.html">{mainText}</a>
        </li>
        <li>
          <a href="about.html">{text2}</a>
        </li>
        <li>
          <a href="blog.html">{text3}</a>
        </li>
        <li>
          <a href="contact.html">{text4}</a>
        </li>
        <li>
          <a href="contact.html">{text5}</a>
        </li>
      </ul>
    </div>
  );
}
export default itemFooter;
