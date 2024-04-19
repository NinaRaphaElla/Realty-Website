import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import PropertyView from "./Components/PropertyView/PropertyView.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import CountUp from "./Components/SplashScreen/CountUp.jsx";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <CountUp end={100} start={0} />
          {/* <PulseLoader
            color={"#14593F"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> */}
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
