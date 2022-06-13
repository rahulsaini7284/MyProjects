import React from "react";
import { Button } from "react-bootstrap";
import { GiPillow, GiStarGate } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="main">
        <div className="div-1 ">
          <div className="card-1">
            <GiPillow style={{ color: "gold" }} />
            <h3>Cozy Room</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
          </div>
          <div className="card-2"></div>
          <div className="card-3"></div>
          <div className="card-4">
            <GiStarGate style={{ color: "gold", fontSize: "3rem" }} />
            <h3>Cozy Room</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia.
            </p>
          </div>
        </div>
        <div className="div-2">
          <h6>ABOUT US</h6>
          <h1>Unwind A Hotel Booking Agency</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <NavLink to={"/dashboard/bookRoom"}>
            <Button className="btn">BOOK YOUR ROOM NOW</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
