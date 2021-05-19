import React from "react";
import Card from "./Card/Card";
import Chart from "../Chart/Chart";
import "./CovidTrackerCards.css";
import CountryPicker from "../CountryPicker/CountryPicker";

const CovidTrackerCards = (props) => {
  const { data } = props;
  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return (
      <div className="container pt-5 mt-5 ">
        <div className="spinner-border text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <section id="cards" style={{ paddingBottom: "4rem" }}>
      <div className="container">
        <div className="cards__heading-box text-center mb-4 pb-4 ">
          <h1 className="cards__heading">Current COVID-19 Info</h1>
          <hr className="mb-5 "></hr>
          <CountryPicker handleCountryChange={props.handleCountryChange} />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 d-flex justify-content-center">
            <Card
              heading="Infected"
              value={confirmed.value}
              lastUpdate={lastUpdate}
              text="Number of active cases of COVID-19"
              classes="card__custom-1"
            />
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-center">
            <Card
              heading="Recovered"
              value={recovered.value}
              lastUpdate={lastUpdate}
              text="Number of recoveries from COVID-19"
              classes="card__custom-2"
            />
          </div>
          <div className="col-lg-4 col-md-12  d-flex justify-content-center">
            <Card
              heading="Deaths"
              value={deaths.value}
              lastUpdate={lastUpdate}
              text="Number of deaths caused by COVID-19"
              classes="card__custom-3"
            />
          </div>
        </div>
        <Chart country={props.country} data={props.data} />
      </div>
    </section>
  );
};

export default CovidTrackerCards;
