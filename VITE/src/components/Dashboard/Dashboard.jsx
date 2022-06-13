import React from "react";
import { Outlet } from "react-router-dom";
import About from "../About/About";
import NavBar from "../navbar/Navbar";
import SearchRoom from "../SearchRoom/SearchRoom";
import SlideImages from "../Slide/SlideImages";
import "./dash.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="m-navbar">
        <NavBar />
      </div>
      <div className="m-main">
        <Outlet />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
