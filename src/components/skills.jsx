import React from "react";
import "../styles/skills.scss";
import {
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGithub,  
  FaReact,
  FaNode,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiPostman } from "react-icons/si";
import MenuBar from "./navbar";
import Fade from "react-reveal";


const Skills = () => {
  return (
    <div className="skill-bg-img">
      <MenuBar />
      <Fade right>
        {" "}
        <Container className="skill-container">
          <Row className="mt-5">
            <Col className="mt-5">
              <h2 className="mt-5">
                Consistency, <br /> Growth, and Development <br /> is never an
                option.
              </h2>
              <span className="mx-1 mt-1 name">
                <i>~Hassan~</i>
              </span>
            </Col>
          
            <Col className=" col-12 skill">
              <h4 className="text-center">  SKILLS</h4>
              <div className="icon p-1">
                <FaHtml5 color="#ff67"className="skill-icon" size={30} />
                <span className="mx-1 mt-1">{"<HTML5 />"} 95%</span>
                <Progress className="mx-4 mb-2" color="primary" value={95} />
              </div>
  
              <div className="icon p-1 mt-2">
                <FaCss3Alt color="#ff67" className="skill-icon" size={30} />
                <span className="mx-1 mt-1">{"<CSS3 />"} 90%</span>
                <Progress className="mx-4 mb-2" color="primary" value={90} />
              </div>
             
              <div className="icon p-1 mt-2">
                <FaBootstrap color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<BOOTSTRAP />"} 90%</span>
                <Progress className="mx-4 mb-2" color="primary" value={90} />
              </div>
              
              <div className="icon p-1 mt-2">
                <FaSass color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<SASS />"} 70%</span>
                <Progress className="mx-4 mb-2" color="primary" value={70} />
              </div>
              
              <div className="icon p-1 mt-2">
                <FaGithub color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<GIT />"} 85%</span>
                <Progress className="mx-4 mb-2" color="primary" value={85} />
              </div>
              
              <div className="icon p-1 mt-2">
                <FaReact color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<REACT />"} 95%</span>
                <Progress className="mx-4 mb-2" color="primary" value={95} />
              </div>
              
              <div className="icon p-1 mt-2">
                <FaNode color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<NODEJS />"} 70%</span>
                <Progress className="mx-4 mb-2" color="primary" value={70} />
              </div>
              
              <div className="icon p-1 mt-2">
                <DiJavascript1 color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<JAVASCRIPT />"} 90%</span>
                <Progress className="mx-4 mb-2" color="primary" value={90} />
              </div>
              
              <div className="icon p-1 mt-2">
                <SiRedux color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<REDUX />"} 80%</span>
                <Progress className="mx-4 mb-2" color="primary" value={80} />
              </div>
              
              <div className="icon p-1 mt-2">
                <SiPostman color="#ff67" size={30} className="skill-icon" />
                <span className="mx-1 mt-1">{"<POSTMAN />"} 70%</span>
                <Progress className="mx-4 mb-2" color="primary" value={70} />
              </div>
       
            </Col>
     
          </Row>
        </Container>
      </Fade>
    </div>
  );
};
export default Skills;
