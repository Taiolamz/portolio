import React from "react";
import "../styles/about.scss";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import MenuBar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fade right>
      <div className="bg-img-2">
        <MenuBar />
        <Container className="about mt-5 me-5 p-5">
          <Fade right>
            <Row className=" mt-2">
              <Col>{/* hello */}</Col>

              <Col className="mx-5 text-center">
                <Fade top>
                  <h1>ABOUT ME</h1>
                </Fade>
                <p>
                  A Creative and Confident Frontend Developer
                  <br /> with two years experience working with REACTJS, and{" "}
                  <br />
                  other interesting frameworks. I have <br /> worked with
                  several clients and organization in <br /> developing products
                  that are top-notch. 
                </p>
                <p>I love NODEJS too..</p>
                <p>
                  Kindly checkout my{" "}
                  <a href="resume.pdf" download>
                    RESUME
                  </a>
                </p>
                <br />
                <span className="span-txt">
                  {" "}
                  A wise Developer once said "If there is a designer to design,
                  <br /> I am the developer to Implement and Integrate"
                </span>
              </Col>
            </Row>
          </Fade>
        </Container>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Fade>
  );
};

export default About;
