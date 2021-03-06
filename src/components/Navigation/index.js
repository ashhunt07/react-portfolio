import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


export default function Navigation() {

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#/">
            <img
            src={process.env.PUBLIC_URL + "/images/Ashley-H_white.png" || "/images/Ashley-H_white.png"}
            width="auto"
            height="40"
            className="d-inline-block align-top logo pr-3"
            alt="Ashley logo"
          />
          {' '}
          Ashley Hunt's Porfolio
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navLink" href="#/">About</Nav.Link>
              <Nav.Link className="navLink" href="#/portfolio">Portfolio</Nav.Link>
              <Nav.Link className="navLink" href="#/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>




        

    );
}
