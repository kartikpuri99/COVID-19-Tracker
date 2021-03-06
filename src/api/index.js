import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country && country !== "Global") {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    let modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    modifiedData = modifiedData.slice(
      modifiedData.length - 100,
      modifiedData.length
    );
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    let country = countries.map((country) => country.name);
    country.unshift("Global");
    return country;
  } catch (error) {
    console.log(error);
  }
};
