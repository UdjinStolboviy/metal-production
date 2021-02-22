import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import "./carouselStyle.scss";
import forestImg from "./Rectangle.png";

export default class Carousels extends Component {
  render() {
    return (
      <div className="carousels w-100 p-0">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={forestImg} alt="First slide" />
            <Carousel.Caption className="carousel-bloc">
              <div className="carousel-bloc-text">
                <h3>Высокоточное изготовление</h3>
                <div className="bloc-text-hr"></div>
                <p>изделий из металла по чертежам</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block w-100" src={forestImg} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={forestImg} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
