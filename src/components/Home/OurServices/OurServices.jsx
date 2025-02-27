import React from "react";
import style from "./OurServices.module.css";
import repairImg from "../../../Images/ourServices/repaireService.png";
import ppfImg from "../../../Images/ourServices/ppf.png";
import ceramicImg from "../../../Images/ourServices/ceramic.png";
import vector from "../../../Images/ourServices/Vector8.svg";

const servicesData = [
  {
    title: "Buy Pre-Owned Luxury Cars",
    description: "Explore an elite selection of second hand luxury cars that unite elegance with exceptional value. ",
    image: repairImg,
  },
  {
    title: "Sell Your Luxury Car",
    description:
      " Get the best price for your used luxury car with our hassle-free buying process, based on giving you the maximum returns.",
    image: ppfImg,
  },
  {
    title: "Finance Your Dream Car",
    description:
      " Benefit from our flexible and hassle-free financing solutions, tailored to fit your budget to buy your pre-owned cars in Pune. ",
    image: ceramicImg,
  },
  {
    title: "Protect with Insurance",
    description:
      "Safeguard your investment with comprehensive insurance packages that offer peace of mind. ",
    image: repairImg,
  },
];

const OurServices = () => {
  return (
    <div
      className={`container-fluid ${style.OurServicesWrapper}`}
      // style={{ position: "relative", padding: "0px" }}
    >
      <div className={`container ${style.m_0}`}>
        {" "}
        <h3 className={`heading ${style.HeadingColor}`}>
        Comprehensive Services Tailored for You
        </h3>
        <div className={`${style.cardsWrapperContainer}`}>
          {servicesData.map((service, index) => (
            <div key={index} className={style.cardWraper}>
              <img
                src={service.image}
                alt={service.title}
                className={style.thumbnail}
              />
              <img
                src={vector}
                alt=""
                className="Vector8"
                style={{
                  //   width: 35.15,
                  //   height: 35.3,
                  left: 0,
                  top: "185px",
                  position: "absolute",
                  //   background: "white",
                  //   border: "0.29px white solid",
                }}
              />

              <div className={style.textCard}>
                <h3 className={style.cardTitle}>{service.title}</h3>
                <p className={style.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
