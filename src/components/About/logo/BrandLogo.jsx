import React from "react";
import styles from "./logo.module.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import hummer from "../../../Images/logos/hummer.png";
import chevrolet from "../../../Images/logos/chevrolet.png";
import jeep from "../../../Images/logos/jeep.png";
import rolls from "../../../Images/logos/rollsroyce.png";
import motor from "../../../Images/logos/motors.png";
import mercedes from "../../../Images/logos/mercedes-benz.png";

const BrandLogo = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed for mobile devices
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For smaller devices, you can adjust this if needed
        settings: {
          slidesToShow: 4, // Example: show 3 slides on very small screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.brands}>
      <Container>
        <Slider {...settings}>
          <div className={styles.slide_container}>
            <img src={chevrolet} alt="chevrolet" className="img img-fluid" />
          </div>
          <div className={styles.slide_container}>
            <img src={jeep} alt="Jeep" className="img img-fluid" />
          </div>
          <div className={styles.slide_container}>
            <img src={hummer} alt="Hummer" className="img img-fluid" />
          </div>
          <div className={styles.slide_container}>
            <img src={rolls} alt="Rolls-Royce" className="img img-fluid" />
          </div>
          <div className={styles.slide_container}>
            <img
              src={motor}
              alt="Mitsubishi-motors"
              className="img img-fluid"
            />
          </div>
          <div className={styles.slide_container}>
            <img src={mercedes} alt="Mercedes-Benz" className="img img-fluid" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default BrandLogo;
