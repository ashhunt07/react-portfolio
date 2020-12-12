
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";


//import react
import React from "react";

//import components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//import pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


//Handles page load
function App() {
  return (
    <Router basename="/">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
