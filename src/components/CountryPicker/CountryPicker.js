import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api/index";
import "./CountryPicker.css";


const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);
  return (
    <form className="form__control mx-auto w-100">
      
      <select 
        defaultValue='Global' className='form-control custom-select'
        onChange={(e) => handleCountryChange(e.target.value)}
      >
      
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CountryPicker;
