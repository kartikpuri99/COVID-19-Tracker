import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-distributed ">
      <div className="container d-flex">
        <div className="footer-left">
          <h3>
            CO-<span>WIN</span>
          </h3>

          <p className="footer-links">
            <Link to="/">Home</Link>·<Link to="/covidtracker">Tracker</Link>·
            <Link to="/covidnews">News</Link>·
            <Link to="/covidvaccine">Vaccine</Link>
          </p>

          <p className="footer-company-name">Kartik's Company &copy; 2019</p>
        </div>

        <div className="footer-right d-block ml-auto ">
          <p className="footer-company-about">
            <span>About the App</span>A all in one web app to get latest
            information about COVID-19 along with available vaccine slots.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
