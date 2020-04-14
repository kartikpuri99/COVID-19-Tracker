import React from "react";
import CountUp from "react-countup";

import "./Card.css";
const Card = (props) => {
  return (
    <div
      className={`card px-4 text-white mb-3 card__custom ${props.classes}`}
      style={{
        maxWidth: "18rem",
      }}
    >
      <h5 className="card-header">{props.heading}</h5>
      <div className="card-body">
        <h3 className="card-title">
          <CountUp start={0} end={props.value} duration={2.5} separator="," />
        </h3>
        <p className="card-text text-muted">
          {new Date(props.lastUpdate).toDateString()}
        </p>
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
