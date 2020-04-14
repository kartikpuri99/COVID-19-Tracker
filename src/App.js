import React from "react";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import { fetchData } from "./api/index";
class App extends React.Component {
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
      <div className={styles.app__main}>
        <Home />
        <Cards
          data={data}
          country={country}
          handleCountryChange={this.handleCountryChange}
        />
      </div>
    );
  }
}

export default App;
