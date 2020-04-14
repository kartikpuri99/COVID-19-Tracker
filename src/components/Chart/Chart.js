import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Bar, Line } from "react-chartjs-2";
import "./Chart.css";

const Chart = (props) => {
  const { data, country } = props;
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: false,
            pointStyle: "star",
            pointBackgroundColor: "blue",
            // borderDash:[8,8]
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: false,
            pointStyle: "star",
            pointBackgroundColor: "red",
            // borderDash:[8,8]
          },
        ],
      }}
      options={{
        responsive: true,
        title: {
          display: true,
          text: "CASES GRAPH",
        },
      }}
    />
  ) : (
    <div className="container mt-4 pt-4 text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const barChart =
    data.confirmed && country !== "Global" ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              fill: false,
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(54, 252, 115, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235)",
                "rgba(54, 252, 115)",
                "rgb(255, 99, 132)",
              ],
              borderWidth: 1,
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null;

  return (
    <div className="mt-5 pt-5 w-100">
      {country && country !== "Global" ? barChart : lineChart}
    </div>
  );
};
export default Chart;
