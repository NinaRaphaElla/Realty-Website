import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import PropertyView from "./Components/PropertyView/PropertyView.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import SplashScreen from "./Components/SplashScreen/SplashScreen.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);  
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SplashScreen/>
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
            <Route exact path="/faq"></Route>
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
