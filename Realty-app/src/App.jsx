import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Faqs from "./Components/Faqs/Faqs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route exact path="/faqs">
            <Faqs />
          </Route>
          <Route exact path="/details">
            <PropertyDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
