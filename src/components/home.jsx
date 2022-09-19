import React from "react";
import "../styles/home.scss";
import { Container, Row, Col, Button } from "reactstrap";
import MenuBar from "./navbar";
import Fade from "react-reveal/Fade";
// import check from "../assets/check.png";
import Footer from "./footer";

const Home = () => {
  return (
    <Fade left>
      <div className="bg-img">
   
        <MenuBar />
      
        <Fade left>
          <Container className="home">
            <Row className="mt-5">
              <Col className=" text-center py-3 mt-5">
             
                {/* <br /> */}
                <h1 className="mt-5">
                  Hi, <br /> I'M <b> HASSAN LAMIDI</b>
                </h1>
                <p lassName="read-txt">A FRONTEND WEB DEVELOPER</p>
                <Button
             
                  href="/contact"
                  className="contact-btn mt-3 p-1 me-2"
                >
                  CONTACT ME
                </Button>
            
              </Col>
              <Col className="col-6 mx-5 px-5 check">
              
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
