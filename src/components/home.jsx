import React, { useState } from "react";
import "../styles/home.scss";
import { Container, Row, Col, Button } from "reactstrap";
import HassanLogo from "../assets/hassan_logo.png";
import MenuBar from "./navbar";
import Picture from "../assets/pictureone.jpg";
import Fade from "react-reveal/Fade";
// import check from "../assets/check.png";
import Footer from "./footer";

const Home = () => {
  return (
    <Fade left>
      <div className="bg-img">
        {/* <Fade top> */}
        <MenuBar />
        {/* </Fade> */}
        <Fade left>
          <Container className="home">
            <Row className="mt-5">
              <Col className=" text-center py-3 mt-5">
                {/* <img className="mt-5" src={HassanLogo} alt="hassan_logo" /> */}
                {/* <div className=""> */}
                <br />
                <h1 className="mt-5">
                  Hi, <br /> I'M <b> HASSAN LAMIDI</b>
                </h1>
                <p lassName="read-txt">A FRONTEND WEB DEVELOPER</p>
                <Button
                  // color="danger"
                  href="/contact"
                  className="contact-btn mt-3 p-1 me-2"
                >
                  CONTACT ME
                </Button>
                {/* </div> */}
              </Col>
              <Col className="col-6 mx-5 px-5 check">
                {/* <img src={check} alt="" /> */}
              </Col>
            </Row>
          </Container>
        </Fade>
        <Footer />  
      </div>
    </Fade>
  );
};
export default Home;
