import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl} from "@material-ui/core";
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
    <FormControl className="form__control">
      
      <Select
        defaultValue='Global'
        onChange={(e) => handleCountryChange(e.target.value)}
      >
      
        {fetchedCountries.map((country, i) => (
          <MenuItem key={i} value={country}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryPicker;
