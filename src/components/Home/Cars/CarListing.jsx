import React from "react";
import SimilarNewCars from "../../SimilarNewCars";
import style from "./Cars.module.css";
const CarListing = ({ cars, showCta }) => {
  return (
    <>
      <div className={`container ${style.main_page} `}>
        <div className={style.car_list}>
          <p className={`${style.sub_heading}`} style={{marginBottom:'80px'}}>
            Explore our handpicked luxury car collection in pune
          </p>
          {/* <h3 className="heading mb-5">
            EXPLORE OUR <span>HANDPICKED</span> USED CAR
          </h3> */}
        </div>
        <SimilarNewCars showCta={showCta} />
      </div>
    </>
  );
};

export default CarListing;
