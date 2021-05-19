import React from "react";
import CovidTracker from "../../components/CovidTracker/CovidTracker";
import CovidTrackerCards from "../../components/CovidTrackerCards/CovidTrackerCards";
import { fetchData } from "../../api/index";
class CovidTrackerScreen extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <CovidTracker />
        <CovidTrackerCards
          data={data}
          country={country}
          handleCountryChange={this.handleCountryChange}
        />
      </>
    );
  }
}

export default CovidTrackerScreen;
