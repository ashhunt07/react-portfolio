
//import react
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

//import components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//import pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";


//Handles page load
export default function App() {
  return (
    <div className ="page-container">
      <div className="content-wrap">
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
  </Router>
  </div>
  <Footer />
  </div>
  );
}
