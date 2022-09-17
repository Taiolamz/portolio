import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  p,
  Collapse,
  NavItem,
} from "reactstrap";
// import {useHistory} from 'react-router-dom';
import Fade from "react-reveal/Fade";
import HassanLogo from "../assets/hassan_logo.png";
import "../styles/navbar.scss";
import { useNavigate } from "react-router";

function MenuBar() {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate("/");
  };
  const handleAboutNavigate = () => {
    navigate("/about");
  };
  const handlePortfolioNavigate = () => {
    navigate("/portfolio");
  };
  const handleSkillsNavigate = () => {
    navigate("/skills");
  };
  const handleContactNavigate = () => {
    navigate("/contact");
  };

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);
  return (
    <div className="nav-bar">
      <Fade top>
        <Navbar className="navbar p-0" expand="md">
          <p style={{fontWeight: 500, fontSize: "14px"}} onClick={handleHomeNavigate} className="me-auto">
            {/* <img src={HassanLogo} alt="hassan_logo" /> */}
            <span color="light">
              <b style={{color: "#ba4a62"}}><i>Hassan</i></b>
              <i>{" "}Portfolio</i>
            </span>
          </p>
          <NavbarToggler className="harmburger me-2" onClick={toggle} />

          <div className="nav-list">
            {" "}
            <Collapse isOpen={collapsed} navbar>
              <Nav navbar>
                {/* <NavItem> */}
                <p
                  className={`nav-link nav-page${
                    window.location.pathname === "/" ? "" : "nav-page"
                  }`}
                  onClick={handleHomeNavigate}
                >
                  Home
                </p>

                <p
                  className={`nav-link nav-page${
                    window.location.pathname === "/about" ? "" : "nav-page"
                  }`}
                  onClick={handleAboutNavigate}
                >
                  About
                </p>

                <p
                  className={`nav-link nav-page${
                    window.location.pathname === "/skills" ? "" : "nav-page"
                  }`}
                  onClick={handleSkillsNavigate}
                >
                  Skills
                </p>

                <p
                  className={`nav-link nav-page${
                    window.location.pathname === "/portfolio" ? "" : "nav-page"
                  }`}
                  onClick={handlePortfolioNavigate}
                >
                  Portfolio
                </p>

                <p
                  className={`nav-link nav-page${
                    window.location.pathname === "/contact" ? "" : "nav-page"
                  }`}
                  onClick={handleContactNavigate}
                >
                  Contact
                </p>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </Fade>
    </div>
  );
}

export default MenuBar;
