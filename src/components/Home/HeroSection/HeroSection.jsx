import React from "react";
import HeroImg from "../../../Images/logos/homePageImages/side_img.webp";
import Style from "./HeroSection.module.css";

import { Link, Navigate, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();


  return (
    <div class="container-fluid">
      <div class="row full-height">
        <div
          class="col-md-6 img-container "
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <img src={HeroImg} alt="" className={Style.heroImage} />
        </div>
        <div class={`col-md-6 text-container  ${Style.darkBg}`}>
          <div>
            <h6 className={Style.subHeading}>Experience Luxury at Its Best</h6>
            <h1 className={Style.heading}>Buy Pre-Owned Luxury Cars</h1>
            <p className={Style.description}>
            Discover an exclusive collection of pre-owned luxury cars that blend elegance, performance, and affordability. At The Autocops, we help to turn your dream of owning a luxury car without spending a hefty amount.             </p>
          </div>
          <div className="mt-5">
          <button className="ctaBtnViewMore" onClick={() => navigate('/Contact')}>
          Contact Us
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
