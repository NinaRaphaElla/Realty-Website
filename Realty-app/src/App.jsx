import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AboutUs />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
