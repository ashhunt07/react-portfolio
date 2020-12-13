import React from "react";

import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// icons
import { FaHtml5, FaCss3Alt, FaJs, FaMdb, FaBootstrap, FaNodeJs, FaDatabase, FaReact, FaAdobe, FaAlignLeft, FaDrawPolygon, FaImage,FaRegWindowMaximize } from "react-icons/fa";


export default function Resume () {
    return(
        <Container className="my-5">

        <h2 className="mb-4">My Experience and Skills</h2>
        
        <h5 className="mb-2 mt-4">Work Experince</h5>
        <p><strong>Graphic Designer</strong>
        <br></br>
        August 2018–Present
        <br></br>
        Evoque Group – San Antonio, Texas</p>
        <ul className="zeroPx">
            <li>
                Webside design and maintence
            </li>
            <li>
            Print and digital collateral design
            </li>
            <li>
            Brand creation
            </li>
        </ul>

        <p className="mt-3"><strong>Web Master</strong>
        <br></br>
        May 2015-Feb. 2017
        <br></br>
        VFWMGT (Veterans of Foreign Wars Motorcycle Group of Texas)</p>
        <ul className="zeroPx">
            <li>
            Site Creation, Maintenance and Updates
            </li>
            <li>
            Domain transferring
            </li>
        </ul>


        <h5 className="mb-2 mt-4">Education</h5>
        <p><strong>Full-Stack Development Bootcamp</strong>
        <br></br>
        July 2020–Jan 2021
        <br></br>
        University of Texas at San Antonio</p>

        <p className="mt-3"><strong>BFA Communication Design<br></br>
        BS Mass Communication-Advertising</strong>
        <br></br>
        Fall 2013–Spring 2018
        <br></br>
        Texas State University</p>


        <h5 className="mb-3 mt-4">Design Technologies</h5>

        <Row>
            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaAdobe />&ensp; Adobe Creative</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaDrawPolygon />&ensp; Illustrator</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaImage />&ensp; Photoshop</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaAlignLeft />&ensp; InDesign</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaRegWindowMaximize />&ensp; XD</p>
            </Col>
        </Row>


        <h5 className="mb-3 mt-4">Web Technologies</h5>

        <Row>
            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaHtml5 />&ensp; HTML5</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaCss3Alt />&ensp; CSS3</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaBootstrap />&ensp; Bootstrap</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaJs />&ensp; JavaScript</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaJs />&ensp; jQuery</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaNodeJs />&ensp; Node.js</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaReact />&ensp; React</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaMdb />&ensp; MongoDB</p>
            </Col>

            <Col lg={2} md={4} sm={4} xs={6}>
                <p><FaDatabase />&ensp; MySQL</p>
            </Col>

        </Row>

        <p className="mt-5">  
            <a href="https://drive.google.com/file/d/1a887wwBSniij-kY4WAO2aFqxEJO8W_HM/view?usp=sharing" class="btn mb-2" target="_blank" rel="noreferrer">View Full Resume</a>
        </p>

        </Container>
        
        )
}