import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";

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
