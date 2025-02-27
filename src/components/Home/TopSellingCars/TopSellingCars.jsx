import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as FuelTypeIcon } from "../../../Images/sliderItems/GasStation.svg";
import { ReactComponent as Mileage } from "../../../Images/sliderItems/Speed.svg";
import { ReactComponent as Engine } from "../../../Images/sliderItems/Engine.svg";
import { ReactComponent as Calendar } from "../../../Images/sliderItems/Calendar.svg";

import style from "./TopSellingCars.module.css";

const TopSellingCars = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get("https://theautocops.com/admin_panel/public/api/top-selling-cars")
      .then((response) => {
        if (response.data && response.data.top_selling_cars) {
          // Update state with the fetched data
          setCarData(response.data.top_selling_cars);
        }
      })
      .catch((error) => {
        console.error("Error fetching top selling cars data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div
        className="container-fluid top_sell_section"
        style={{ position: "relative", padding: "0px" }}
      >
           <h6 className="text-center" style={{color: '#152C56' ,
    fontSize: '24px',
    }}> Explore Our Top Sellers </h6>
        <h3 className={`heading mb-2 ${style.HeadingColor}`}>
        Only the Best Pre-Owned Luxury Cars
        </h3>
        <div style={{ overflowX: "hidden", overflowY: "hidden", height: "600px" }}>
          <Slider {...settings}>
            {carData.map((car, index) => (
              <div key={index} className={` ${style.customSlide}`}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car.top_sell_image})`,
                    width: "100%",
                    height: "600px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",                
                  }}
                >
                  <div className={`container d-flex justify-content-between align-items-center ${style.section_wrap}`}>
                    <div className="col-md-6 content mt-5" style={{ width: "40%" }}>
                      <h2 className={style.price}>{`₹ ${car.price}`}</h2>
                      <h3 className={style.carname}>{`${car.title} ${car.model} ${car.year}`}</h3>
                    </div>
                    <div className={`col-md-2 ${style.rightSide}`}>
                      <div className="d-flex flex-column">
                        <FuelTypeIcon width="28" height="28" />
                        <p className={style.type}>Fuel Type</p>
                        <p className={style.typeValue}>{car.fuel_type}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <Mileage width="28" height="28" />
                        <p className={style.type}>Mileage</p>
                        <p className={style.typeValue}>{`${car.mileage} miles`}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <Engine width="28" height="28" />
                        <p className={style.type}>Transmission</p>
                        <p className={style.typeValue}>{car.transmission}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <Calendar width="28" height="28" />
                        <p className={style.type}>Year</p>
                        <p className={style.typeValue}>{car.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCars;
