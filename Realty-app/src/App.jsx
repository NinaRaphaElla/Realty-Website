import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

import ScrollToTop from "./Components/ScrollToTop.jsx";
import PulseLoader from "react-spinners/PulseLoader";
import PropertyView from "./Components/PropertyView/PropertyView.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <PulseLoader
            color={"#14593F"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Router>
          <ScrollToTop />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/properties">
              <Properties />
            </Route>
            <Route path="/property-details/:id">
              <PropertyView />
            </Route>
            <Route exact path="/faqs"></Route>
            <Route exact path="/details">
              <PropertyDetails />
            </Route>
            <Route exact path="/contact">
              <div className="mt-20">
                <ContactUs />
              </div>
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
