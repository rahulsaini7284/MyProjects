import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import img1 from "../../photos/image1.jpg";
import { http } from "../config/axiosConfig";

const Galery = () => {
  const [img, setImg] = useState([]);
  let photos = [];
  useEffect(() => {
    http
      .get("roomData")
      .then((res) => {
        for (const e of res.data.result) {
          photos.push(e.images);
        }
        setImg(photos);
      })
      .catch((er) => console.log(er.message));
  }, []);
  console.log(img);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <Carousel>
        {img &&
          img?.map((p) => (
            <div>
              <img src={p[0]} />
              <p className="legend">Legend 1</p>
            </div>
          ))} */}
      <Carousel
        variant="dark"
        className="carousel-wrapper"
        style={{ width: "80vw", height: "50vh" }}
      >
        {img &&
          img?.map((d) => (
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={d[0]}
                alt="First slide"
                style={{ borderRadius: "1rem" }}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default Galery;
