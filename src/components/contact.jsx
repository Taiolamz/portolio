import React from "react";
import "../styles/contact.scss";
import {
  Container,
  Row,
  Col,
  Label,
  Form,
  Input,
  Button,
  Card,
} from "reactstrap";
import MenuBar from "./navbar";
import Fade from "react-reveal";
// import MenuBar from "./navbar";

const Contact = () => {
  return (
    <div>
      <MenuBar />
      <Fade left>
        <Container className="form mt-1 p-5">
          <Row>
            {/* <Col></Col/> */}
            <Col className="mt-5 connect">
              <br />
              <br />
              <h1 className="mt-5 ">Hi there, Let's connect...</h1>
              <br />
              <br />
              <br />
              <p className="mt-5">
                Copyright © 2022 HASSAN LAMIDI | All rights reserved |{" "}
                <a color="red" href="/contact">
                  Contact
                </a>
              </p>
            </Col>
            <Col>
              <Card className="contact-card p-5 mx-5 col-10">
                <Form>
                  <h3 className="text-center mb-5">GET IN TOUCH 🤝</h3>
                  <Row>
                    <Col>
                      <Label for="first_name">First Name:</Label>
                      <span> *</span>
                      <Input
                        type="text"
                        id="first_name"
                        placeholder="Enter your first name"
                        required
                      />
                    </Col>
                    <Col>
                      <Label for="last_name">Last Name:</Label>
                      <span> *</span>

                      <Input
                        type="text"
                        id="last_name"
                        placeholder="Enter your last name"
                        required
                      />
                    </Col>
                  </Row>
                  <br />
                  <Label for="email">Email:</Label>
                  <span> *</span>

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    required
                  />
                  <br />
                  <Label for="phone">Phone number:</Label>
                  <span> *</span>

                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone "
                    required
                  />
                  <br />
                  <Label for="message">Message:</Label>
                  <span> *</span>

                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    placeholder="Enter Message"
                    className="textarea"
                    required
                  />
                  <br />
                  <br />
                  <Button type="submit">SUBMIT</Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default Contact;
