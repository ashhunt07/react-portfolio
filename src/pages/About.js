import React from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About () {
        return(

        <Container className="my-5">

                <Row>
                        <Col md="auto" lg={6}>
                        <img
                                src={process.env.PUBLIC_URL + "/images/Ashley-H-small.jpg" || "/images/Ashley-H-small.jpg"}
                                class="card-img" 
                                alt="My headshot"
                                />
                        </Col>

                        <Col md="auto" lg={6}>

                        <h2 className="mb-4">Full-Stack Web Developer. <br></br> Designer. Night Owl.</h2>

                                <p>
                                HI, I'm Ashley! I am a graphic designer working in the Marketing department of a family-owned office furniture company. You can view <a class="portLink" href="http://designed-by-ash.com/index.html" target="_blank" rel="noreferrer">My Design Portfolio</a> here. 
                                </p>
                                <p>
                                While my education focus and current work revolve around Graphic Design I am drawn strongly to web design and development. So I chose to expand my knowledge by enrolling into a 6 month bootcamp where I am learning the skills and tools to become a Full Stack Developer. I enjoy long hours of coding and complex problem solving with the smallest victories making all of those hours worthwhile and look forward to building these skills. My goal is to transition from a graphic designer into a developer role. 
                                </p>
                                <p>
                                Other than my work life, I am a homebody gamer. My time off is spent in bed or on my couch with my XBox, boyfriend and dogs. I like to play FPS and games that require tact, problem solving and critical thinking. But let's be honest, it's all about the rare loot drops. The soundtrack of my life is sung by my two corgis, Maverick and Appa, who performs best in the middle of the night when I am trying to sleep. I enjoy long hours of coding and complex problem solving with the smallest victories making all of those hours worthwhile.
                                </p>
                                


                        </Col>
                </Row>

        </Container>

        )
}