import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../photos/img1.jpg";
import img2 from "../../photos/img2.jpg";
import img3 from "../../photos/img3.jpg";
import img4 from "../../photos/img4.jpg";
import img5 from "../../photos/img5.jpg";
import "./slide.css";

const SlideImages = () => {
  return (
    <div>
      <Carousel variant="dark" className="carousel-wrapper">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img3} alt="Second slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img4} alt="Second slide" />
          <Carousel.Caption>
            <h5>Fourth slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={img5} alt="Second slide" />
          <Carousel.Caption>
            <h5>Fifth slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideImages;
