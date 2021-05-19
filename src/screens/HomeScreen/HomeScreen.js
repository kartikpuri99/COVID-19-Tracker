import React from "react";
import "./HomeScreen.css";
import image1 from "../../img/Temperature Measurement-amico.svg";
const HomeScreen = () => {
  const informations = [
    {
      icon: "fa-chart-line",
      heading: "Tracker",
      description: "Get track of the number of cases of COVID-19 countrywise.",
      link: "/covidtracker",
    },
    {
      icon: "fa-newspaper",
      heading: "News",
      description:
        "Get the latest happening around the world related to COVID-19.",
      link: "/covidnews",
    },
    {
      icon: "fa-hospital",
      heading: "Vaccine Center",
      description:
        "Find the nearby COVID Vaccine Centers in your area and city.",
      link: "/covidvaccine",
    },
  ];
  return (
    <React.Fragment>
      <section id="homescreen" className="home">
        <div className="homescreen__box">
          <div className="container">
            <div className="row custom-row">
              <div className="col-md-6 col-lg-6 order-2 order-md-1 d-flex flex-column justify-content-center">
                <div >
                  <h1 className="homescreen__heading">
                    B<span>E</span> A<span>W</span>ARE S<span>T</span>AY H
                    <span>E</span>ALTHY{" "}
                  </h1>
                  <div className="homescreen__heading-secondary lead">
                    welcome to coronavirus information portal
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 order-1 order-md-2 ">
                <img src={image1} className="img-fluid" alt='NOT LOADING'/>
              </div>
            </div>
            <div className="row custom-row">
              <a href="#information" class="mouse_scroll">
                <div class="mouse">
                  <div class="wheel"></div>
                </div>
                <div>
                  <span class="m_scroll_arrows unu"></span>
                  <span class="m_scroll_arrows doi"></span>
                  <span class="m_scroll_arrows trei"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="information" className="homescreen__information">
        <div className="container mt-5 pt-5">
          <div className="row text-center">
            {informations.map((information) => (
              <div className="col-lg-4 px-4">
                <div className="information__container my-5 py-5 px-4">
                  <div className="information__icons">
                    <i className={`fas ${information.icon}`}></i>
                  </div>
                  <div className="information__content">
                    <div className="information__content-head lead">
                      {information.heading}
                    </div>
                    <div className="information__content-text lead">
                      {information.description}
                    </div>
                    <a
                      href={information.link}
                      className="mt-3 btn btn-block custom-button"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeScreen;
