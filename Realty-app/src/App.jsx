import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import FaqsPage from "./Components/Faqs/FaqsPage.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route exact path="/faqs">
            <FaqsPage />
          </Route>
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
    </>
  );
};

export default App;
