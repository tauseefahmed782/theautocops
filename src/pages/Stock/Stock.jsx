import React from "react";
import style from "./Stock.module.css";
import bgBanner from "../../Images/banner-all.jpg";
import sideimg from "../../Images/stockBanner.jpg";
import FindYourCar from "../../components/Home/FindCar/FindYourCar";
import CarListing from "../../components/Home/Cars/CarListing";

import car1 from "../../Images/singleproduct/similarcars/car1.jpg";
import brandLogo from "../../Images/singleproduct/bmwlogo.png";
import mLogo from "../../Images/singleproduct/mercedes.png";
import pLogo from "../../Images/singleproduct/porsche.png";
import jLogo from "../../Images/singleproduct/Jaguar.png";
import tLogo from "../../Images/singleproduct/toyota.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faTachometer } from "@fortawesome/free-solid-svg-icons";
import car2 from "../../Images/singleproduct/similarcars/car-2.jpg";
import car3 from "../../Images/singleproduct/similarcars/car-3.jpg";
import car4 from "../../Images/singleproduct/similarcars/car-4.jpg";
import car5 from "../../Images/singleproduct/similarcars/car5.png";
import car6 from "../../Images/singleproduct/similarcars/car6.png";
import car7 from "../../Images/singleproduct/similarcars/car7.png";
import car8 from "../../Images/singleproduct/similarcars/car8.png";
import { Helmet } from "react-helmet";
const Stock = () => {
    
  return (
    <>
     <Helmet>
        <title>Buy Pre Own Audi, Land Rover, Toyota, BMW, and  Mercedes Benz Cars in Pune		</title>
        <meta name="description" content="Discover the best deals on pre-owned BMW, Toyota, Land Rover, and Mercedes-Benz cars in Pune. Find your perfect used luxury car today!" />
        <meta property="og:title" content="Buy Pre Own Audi, Land Rover, Toyota, BMW, and  Mercedes Benz Cars in Pune	" />
        <meta property="og:description" content="Discover the best deals on pre-owned BMW, Toyota, Land Rover, and Mercedes-Benz cars in Pune. Find your perfect used luxury car today!" />
        <link rel="canonical" href="https://theautocops.com/stock"/>
        </Helmet>
      <div
        className="container-fluid"
        style={{ position: "relative", padding: "0px" }}
      >
        <div className={` ${style.Container}`}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgBanner})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center , center",
             
              display: "flex",
              alignItems: "center",
            }}
            className={style.mainWrapper}
          >
            <div className="container d-flex  flex-column  justify-content-start align-items-start">
            <div className="width-50">
              <h2
                className={style.subHeading}
              >{`Find Your Perfect Ride`}</h2>
              <h1 className={style.heading}>
                {"Shop Premium Second Hand Luxury Cars in Pune "}
              </h1>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className={`container ${style.my80}`}>
        <div className="row m-0">
          <div className={`col-md-6 ${style.pr4}`}>
            <h4 className={style.sectionHeading}>
            Luxury, Performance, and Value: Shop Quality Used Luxury Cars
            </h4>
            <p className={style.sectionParagraph}>
            Your dream ride is waiting! Whether you're after a sleek sedan, a versatile SUV, or used BMW car in Pune, we've got the second-hand luxury car that fits your style and needs. Every car in our collection is handpicked and inspected to meet the highest standards of quality and reliability. Looking for tech-savvy features or classic elegance? We've got you covered. Browse our vast selection of high-end cars and drive home something extraordinary like Audi or Mercedes-Benz used cars today! 
            </p>
          </div>
          <div className={`col-md-6 p-0 ${style.contact_card}`}>
            {/* <ContactForm /> */}
            <img src={sideimg} alt="" srcset="" className={style.imageSection} />
          </div>
        </div>
      </div>
      <FindYourCar heading="Upgrade Your Drive Today" tagline="Browse the Finest Selection of Used Luxury Cars in Pune " />
      {/* <CarListing cars={cars}/> */}


    </>
  );
};

export default Stock;
