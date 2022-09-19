import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swipe/r styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles/portfolio.scss";
import RevvexImg from "../assets/revvexImg.png";
import ManceImg from "../assets/manceImg.png";
import MaketplaceImg from "../assets/maketplaceImg.png";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Container } from "reactstrap";
import MenuBar from "./navbar";
import { Fade } from "react-reveal";

const Projects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="portfolio-bg-img">
      <MenuBar />
      <Container>
        <br />
        <br />
        <br />
        <Fade left>
          <h1 className="text-center p-4">PORTFOLIOS</h1>
        </Fade>
        <div className="card p-5">
          <Fade right>
            <Swiper
              style={{
                "--swiper-navigation-color": "white",
                "--swiper-pagination-color": "white",
                "--swiper-navigation-size":"small"

              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide className="swiper-slide">
                <img className="mx-5" src={RevvexImg} alt="revvex_img" />
                <div className="d-block  mx-2">
                  <h3>
                    Budget Management System known as{" "}
                    <span color="red">REVVEX</span>{" "}
                  </h3>
                  <p className="p-3">
                    Plan and track your budgets with ease, <br /> and get a
                    real-time overview of your <br /> company's financial{" "}
                    performance with <br /> Revvex budgeting software.
                  </p>
                  <p>
                    <a target="_blank" href="https://revvex.io">
                      click here to view
                    </a>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img className="mx-5" src={ManceImg} alt="mance_img" />
                <div className="d-block  mx-2">
                  <h3>
                    Performance Management System known as <span>MANCE</span>
                  </h3>
                  <p className="p-3">
                    Mance is a robust platform for <br /> continously
                    stimulating awesome performance <br /> from high-energy
                    teams towards intentional <br /> strategy execution.
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://630b75f9a0b05a54757bbe50--mance.netlify.app/"
                    >
                      click here to view
                    </a>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={MaketplaceImg}
                  alt="maketplace_img"
                  className="mx-5"
                />
                <div className="d-block  mx-2">
                  <h3>
                    Ecommerce Application known as <span>MAKETPLACE</span>
                  </h3>
                  <p className="p-3">
                    MaketPlace offers an easy way for retail <br /> store owners
                    to buy products. Stop running from <br /> one store to
                    another to make your purchases <br /> and having to carry
                    cash.
                  </p>
                  <p>
                    <a
                      target="_blank  "
                      href="https://maket-place-9dcrltz9e-oracle10gee.vercel.app/"
                    >
                      click here to view
                    </a>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
