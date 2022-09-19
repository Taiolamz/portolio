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
import emailjs from "emailjs-com";
// import MenuBar from "./navbar";

function Contact() {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irow8ik",
        "template_yqn5lck",
        e.target,
        "M2QqXCm8VY8KLPXAR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Form submitted successfully");
  };

  return (
    <div className="contact">
      <MenuBar />
      <Fade left>
        <Container className="mt-1 p-5">
          <Row>
            {/* <Col></Col/> */}
            <Col className="mt-5 connect">
             
              <h1 className="mt-5 ">Hi there, Let's connect...</h1>
              <br />
              <br />
              <br />
              <p className="mt-5">
                Copyright © 2022 HASSAN LAMIDI | All rights reserved 08177135933
                | 09087365217{" "}
                <a color="red" href="/contact">
                  Contact
                </a>
              </p>
            </Col>

            <Col>
              <Card className="contact-card p-5 mx-5 col-10">
                <Form onSubmit={sendEmail}>
                  <h3 className="text-center mb-5">GET IN TOUCH 🤝</h3>
                  <Row>
                    <Col>
                      <Label for="full_name">Full Name:</Label>
                      <span> *</span>
                      <Input
                        type="text"
                        id="full_name"
                        name="full_name"
                        placeholder="Enter your full name"
                        required
                      />
                    </Col>
                    <Col>
                      <Label for="tel">Phone number:</Label>
                      <span> *</span>

                      <Input
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="Enter your phone number"
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
                  <Label for="subject">Subject:</Label>
                  <span> *</span>

                  <Input
                    type="text"
                    placeholder="Enter Subject"
                    id="subject"
                    name="subject"
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
}

export default Contact;
