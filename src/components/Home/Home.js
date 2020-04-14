import React from "react";
import "./Home.css";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home__box">
        <div className="home__heading">
          C
          <span>
            <i className="fas fa-virus"></i>
          </span>
          vid Tracker
        </div>
        <div className="home__bottom">
          <a className="btn-down" href="#cards">
            total case in the world
          </a>
          <a className="btn-down" href="#">
            country wise cases
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
