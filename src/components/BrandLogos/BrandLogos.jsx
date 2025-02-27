import React from "react";
import style from "./BrandLogos.module.css";

import testimonialOneImg from "../../assets/logo/ferrari.jpg";
import hyundao from "../../assets/logo/hyundai.png";
import porsche from "../../assets/logo/porsche.jpg";
import bmw from "../../assets/logo/BMW.svg.png";

function BrandLogos() {
  return (
    <>
      {/* <div className={style.logoWraper}> */}
      <div className={`container ${style.logoContainer}`}>
        <div
          className={`d-flex justify-content-center align-items-center flex-column `}
        >
          <h5 className={`text-center fw-normal ${style.logoSubHeading}`}>
            POPULAR BRANDS{" "}
          </h5>
          <h3 className={`${style.logoHeading} mt-3 mb-5`}>
            Our Top Quality Brands
          </h3>
        </div>
        <div className="row gap-4 d-flex justify-content-between  ">
          <div className={`col-6 col-md-3 col-lg-2 pr-2 ${style.brandItem} `}>
            <div className={style.brandImg}>
              <img
                src={testimonialOneImg}
                alt="Ferrari"
                className={style.brandLogoImg}
              />
            </div>
            <h5 className={style.brandTitle}>Ferrari</h5>
          </div>
          <div className={`col-6 col-md-3 col-lg-2 pr-2 ${style.brandItem} `}>
            <div className={style.brandImg}>
              <img src={hyundao} alt="Ferrari" className={style.brandLogoImg} />
            </div>
            <h5 className={style.brandTitle}>hyundao</h5>
          </div>
          <div className={`col-6 col-md-3 col-lg-2 pr-2 ${style.brandItem} `}>
            <div className={style.brandImg}>
              <img src={porsche} alt="porsche" className={style.brandLogoImg} />
            </div>
            <h5 className={style.brandTitle}>porsche</h5>
          </div>
          <div className={`col-6 col-md-3 col-lg-2 pr-2 ${style.brandItem} `}>
            <div className={style.brandImg}>
              <img src={bmw} alt="bmw" className={style.brandLogoImg} />
            </div>
            <h5 className={style.brandTitle}>BMW</h5>
          </div>
          <div className={`col-6 col-md-3 col-lg-2 pr-2 ${style.brandItem} `}>
            <div className={style.brandImg}>
              <img
                src={testimonialOneImg}
                alt="Ferrari"
                className={style.brandLogoImg}
              />
            </div>
            <h5 className={style.brandTitle}>Ferrari</h5>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default BrandLogos;
