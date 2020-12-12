import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


export default function Navigation() {

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
            src="/images/Ashley-H_white.png"
            width="auto"
            height="40"
            className="d-inline-block align-top logo pr-3"
            alt="Ashley logo"
          />
          {' '}
          Ashley Hunt's Porflio
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navLink" href="/">About</Nav.Link>
              <Nav.Link className="navLink" href="/portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

        // <Nav className="navbar navbar-expand-lg navbar-light">
        //     {/* <a href="/">
        //         <img className="logo" src="../../images/Ashley-H_white.png" alt="logo"> 
        //     </a> */}
        //     <Navbar.Brand href="#home">
        //         <img
        //         src="../images/public/Ashley-H_white.png"
        //         width="auto"
        //         height="30"
        //         className="d-inline-block align-top logo"
        //         alt="Ashley logo"
        //         />
        //     </Navbar.Brand>
        //     <a className="nav-brand" href="index.html">Ashley Hunt's Porflio </a>

        //     {/* <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button> */}
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //       <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        //           <ul className="nav">
        //               <li className="nav-item">
        //                   <a classname="nav-link" href="index.html">About</a>

        //               </li>
        //               <li class="nav-item">
        //                   <a className="nav-link" href="portfolio.html">Portfolio</a>
        //               </li>
        //           </ul>
        //       </div>
        //     </Navbar.Collapse>
        // </Nav>


        

    );
}
