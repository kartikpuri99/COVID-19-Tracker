import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CovidTrackerScreen from "./screens/CovidTrackerScreen/CovidTrackerScreen";
import CovidNewsScreen from "./screens/CovidNewsScreen/CovidNewsScreen";
import CovidVaccineScreen from "./screens/CovidVaccineScreen/CovidVaccineScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <main className={styles.app__main}>
        <Switch>
          <Route path="/covidtracker" component={CovidTrackerScreen} />
          <Route path="/covidnews" component={CovidNewsScreen} />
          <Route path="/covidvaccine" component={CovidVaccineScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
