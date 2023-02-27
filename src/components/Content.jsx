import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/Content.css";

const Content = () => {
  return (
    <div>
      <Navbar />
      <div className="content-container" style={{overflow: "hidden"}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={require("../images/image1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>First Slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={require("../images/image2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Second Slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={require("../images/image3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>
            Third Slide
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <Footer/>
    </div>
  );
};

export default Content;
