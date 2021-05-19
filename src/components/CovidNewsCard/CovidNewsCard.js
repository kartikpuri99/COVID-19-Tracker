import React from "react";
import './CovidNewsCard.css';

const CovidNewsCard = ({newss}) => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="example-1 card card-news  ">
      <div className="wrapper" style={{ background: `url(${newss.urlToImage})` }}>
        <div className="date">
          <span className="day">
            {new Date(newss.publishedAt).getDate().toString()}
          </span>
          <span className="month">
            {months[new Date(newss.publishedAt).getMonth()]}
          </span>
          <span className="year">
            {(new Date(newss.publishedAt).getFullYear() + 1).toString()}
          </span>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">{newss.author}</span>
            <h4 className="title">
              <a href={newss.url}>{newss.title.slice(0,100)}...</a>
            </h4>
            <p className="text">
              <strong>Description : </strong>
              {newss.description && newss.description.slice(0, 100)}...
            </p>
            <a href={newss.url} className='mt-3 custom-button'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidNewsCard;
