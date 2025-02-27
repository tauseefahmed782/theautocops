import React from "react";
import banner from "../../../Images/banner_car.png";
import style from "./Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audia6 from "../../../assets/carousel/audi-a6.webp";
// import "./CarSlider.css"; // Create and import your CSS file

const carData = [
  {
    brand: "AUDI",
    model: "A6 35 TFSI",
    bodyType: "SEDAN",
    year: 2021,
    price: "210,000",
    imgSrc: audia6,
    ctaLink: "#",
  },
  {
    brand: "BMW",
    model: "M3",
    bodyType: "COUPE",
    year: 2022,
    price: "250,000",
    imgSrc: audia6,
    ctaLink: "#",
  },
  // Add more car data as needed
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* <div className={style.banner}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6>Plan your trip now</h6>
              <h1>
                Best Way To Find Your
                <span> Dream</span> Car
              </h1>
              <p>
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
              <div className="buttons">
                <button className={`btn ${style.btn_Book_ride}`}>
                  Book Ride
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={style.icon}
                  />
                </button>
                <button className={`btn ${style.btn_learn}`}>
                  Learn More
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={style.icon}
                  />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style.hero_img}>
                <img src={banner} className="img img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={style.fullScreenBg}>
        <div className={`container`}>
          <Slider {...settings}>
            {carData.map((car, index) => (
              <div key={index} className={style.sliderItem}>
                <div className="row d-flex align-items-center" style={{margin:"80px 0px"}}>
                  <div className="col-md-6 content">
                    <h2 className={style.brand}>{car.brand}</h2>
                    <h3 className={style.brand}>{car.model}</h3>
                    <p className={style.bodyType}>{car.bodyType}</p>
                    <div className={`d-flex mt-3 gap-4 mb-2`}>
                      <span className={style.modelYear}>Model: {car.year}</span>{" "}
                      <br />
                      <span className={style.price}>₹{car.price}/-</span>
                    </div>

                    <button className={`btn ${style.btn_learn} mt-4`}>
                      Learn More
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={style.icon}
                      />
                    </button>
                  </div>
                  <div className="col-md-6 image">
                    <img
                      src={car.imgSrc}
                      alt={`${car.brand} ${car.model}`}
                      className={style.carImg}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
