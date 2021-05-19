import axios from "axios";
import React, { useEffect, useState } from "react";
import Districts from "./Districts/Districts";
import States from "./States/States";
import "./CovidVaccinePicker.css";
import CovidVaccineTable from "./CovidVaccineTable/CovidVaccineTable";

const CovidVaccinePicker = () => {
  const [states, setStates] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [errorStates, setErrorStates] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [errorDistricts, setErrorDistricts] = useState(null);
  const [selectedDist, setSelectedDist] = useState(null);
  const [clickedSearchButton, setClickedSearchButton] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultError, setSearchResultError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getStates = async () => {
      try {
        const { data } = await axios.get(
          "https://cdn-api.co-vin.in/api/v2/admin/location/states"
        );
        setStates(data.states);
        setLoadingStates(false);
      } catch (err) {
        setLoadingStates(false);
        setErrorStates(err.message);
      }
    };
    getStates();
  }, []);

  const fetchDistricts = async () => {
    const sel = document.getElementById("selected-state");
    const selState = sel.options[sel.selectedIndex].id;
    setSelectedState(selState);
    try {
      const { data } = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selState}`
      );
      setDistricts(data.districts);
    } catch (err) {
      setErrorDistricts(err.message);
    }
  };

  const setDist = () => {
    const sel = document.getElementById("selected-district");
    const selDistrict = sel.options[sel.selectedIndex].id;
    setSelectedDist(selDistrict);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      var currentdate = dd + "-" + mm + "-" + yyyy;

      const { data } = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?date=${currentdate}&district_id=${selectedDist}`
      );
      setSearchResult(data.sessions);
      setClickedSearchButton(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setClickedSearchButton(true);
      setSearchResultError(err.message);
    }
  };

  return (
    <React.Fragment>
      {loadingStates ? (
        <div className="container mb-5 text-center d-flex justify-content-center">
          <div className="spinner-border text-center text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : errorStates ? (
        <div className="alert alert-danger">{errorStates}</div>
      ) : (
        states && <States states={states} fetchDistricts={fetchDistricts} />
      )}
      {errorDistricts ? (
        <div className="alert alert-danger">{errorDistricts}</div>
      ) : (
        districts.length > 0 && (
          <Districts districts={districts} setDist={setDist} />
        )
      )}
      {selectedDist && selectedState && (
        <div className="w-100 d-flex justify-content-center">
          <button
            className="mt-5 btn btn-light search-button "
            onClick={handleSubmit}
          >
            <i className="fas fa-search" /> Search
          </button>
        </div>
      )}
      {clickedSearchButton ? (
        loading ? (
          <div className="container pt-5 mt-5 d-flex justify-content-center">
            <div className="spinner-border text-center text-white" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : searchResultError ? (
          <div className="alert alert-danger">{searchResultError}</div>
        ) : searchResult.length <= 0 ? (
          <div className="alert alert-danger">No Slots Available</div>
        ) : (
          <CovidVaccineTable searchResult={searchResult} />
        )
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default CovidVaccinePicker;
