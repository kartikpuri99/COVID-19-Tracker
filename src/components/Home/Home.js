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
            See The COVID-19 Cases
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
