import React from "react";
import { Row, Col } from "reactstrap";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div>
      {/* <Container > */}
      <Row className="footer">
        <Col></Col>
        <Col className="">
          <a target="#" href="https://github.com/Taiolamz">
            <FaGithub color="#000" className="icon mx-5 mt-5" size={20} />
          </a>
          <br />
          <a target="#" href="https://linkedin.com/in/taiwo1">
            <FaLinkedinIn color="black" className="icon mx-5 mt-3" size={20} />
          </a>
          <br />
          <a target="#" href="https://twitter.com/HassanOnyebuchi">
            <BsTwitter color="black" className="icon mx-5 mt-3" size={20} />
          </a>
          <br />
          <a target={"#"} href="https://web.facebook.com/lahmeedi.T">
            <FaFacebook color="black" className="icon mx-5 mt-3" size={20} />
          </a>
          <br />
          <a target="#" href="https://www.instagram.com/taiolamz/">
            <BsInstagram color="	black" className="icon mx-5 mt-3" size={20} />
          </a>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default Footer;
