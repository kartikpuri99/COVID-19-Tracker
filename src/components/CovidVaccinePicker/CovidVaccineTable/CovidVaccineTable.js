import React from "react";
import './CovidVaccineTable.css';

const CovidVaccineTable = ({ searchResult }) => {
  const convertToAmPm = (time) => {
    const timeString12hr = new Date(
      "1970-01-01T" + time + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
  };
  return (
    <div className="table-responsive mt-5">
      <table className="table table-striped table-dark table-hover table-bordered table-custom">
        <thead>
          <tr>
            <th scope="col">Centre Name</th>
            <th scope="col">Address</th>
            <th scope="col">Timings</th>
            <th scope="col">Vaccine Name</th>
            <th scope="col">Availabe Capacity</th>
            <th scope="col">Fee Type</th>
            <th scope="col">Available Slots</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.address}</td>
              <td>
                From : {convertToAmPm(result.from)}
                <br />
                To : {convertToAmPm(result.to)}
              </td>
              <td>{result.vaccine}</td>
              <td>
                Dose 1 Capacity: {result.available_capacity_dose1}
                <br />
                Dose 2 Capacity : {result.available_capacity_dose2}
                <br />
                Total Capacity : {result.available_capacity}
              </td>
              <td>{result.fee <= 0 ? "Free" : "Rs." + result.fee}</td>
              <td>
                {result.slots.map((slot) => (
                  <>
                    <div>{slot}</div>
                    <br />
                  </>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CovidVaccineTable;
