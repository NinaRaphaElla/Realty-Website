import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

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
        </Switch>
      </Router>
    </>
  );
};

export default App;
