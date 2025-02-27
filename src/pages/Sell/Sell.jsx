import React from "react";
import bg from "../../Images/banner-all.jpg";
import style from "../PrivacyPolicy/PrivacyPolicy.module.css";
import style1 from "./Sell.module.css";
import sideimg from "../../Images/stockBanner.jpg";
import { SellCarForm } from "../../components/SellCarForm/SellCarForm";
import { Helmet } from "react-helmet";

const sell = () => {
  return (
    <div>
        <Helmet>
        <title>Sell Your Luxury Cars at Attractive Price | The AutoCops	</title>
        <meta name="description" content="The AutoCops: the ultimate platform for selling luxury cars easily in Mumbai and Pune. Fast, efficient, and reliable – we ensure your premium vehicle finds its perfect match." />
        <meta property="og:title" content="Sell Your Luxury Cars at Attractive Price | The AutoCops" />
        <meta property="og:description" content="The AutoCops: the ultimate platform for selling luxury cars easily in Mumbai and Pune. Fast, efficient, and reliable – we ensure your premium vehicle finds its perfect match." />
      <link rel="canonical" href="https://theautocops.com/sell"></link>
        </Helmet>
      <div
        className="container-fluid"
        style={{ position: "relative", padding: "0px" }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,

            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
          }}
          className={style.mainWrapper}
        >
          <div className="container d-flex  flex-column  justify-content-start align-items-start">
          <div className="width-50">
            <h1 className={style.subHeading}>{`Sell Your Luxury Car `}</h1>
            <h3 className={style.heading}>{" Get the Best Price of Your Luxury Car, Hassle-Free Deals with The AutoCops "}</h3>
          </div>
          </div>
        </div>
      </div>
      <div className={`container ${style1.my80}`}>
        <div className="row m-0">
          <div className={`col-md-6 ${style1.pr4} pl-0`}>
            {/* <p className={`${style1.highlighted}`}></p> */}
            <h4 className={style1.sectionHeading}>Take Away the Highest Offer for Your Luxury Car—No Compromises!</h4>
            <p className={style1.sectionParagraph}>
            Selling your lavish car has never been easier. Get in touch with us if you have used luxury car for sale! We are ready to offer you a price that truly reflects the value of your luxury car. With advanced data-driven luxury car prices in Pune, our engineering team carefully examines the condition of your car to ensure you receive a deal that matches the true worth of your vehicle. These engineers attend weekly training sessions to get updated on the latest trends in the luxury car market. We maintain transparent dealing policies and try to offer the best price in the market.             </p>
          </div>
          <div className={`col-md-6 p-0 ${style1.contact_card}`}>
            {/* <ContactForm /> */}
            <img
              src={sideimg}
              alt=""
              srcset=""
              className={style1.imageSection}
            />
          </div>
        </div>
      </div>
      <div className={`container ${style1.mb80} `}>
        <div className={`row m-0 `}>
          <div className={`col-md-12 text-center  ${style1.pr4} ${style1.my80} mt-0`}>
            <h4 className={style1.sectionHeading}>
            Get Behind the Wheel with Flexible and Stress-Free Financing Options
            </h4>
            <p className={style1.sectionParagraph}>
            At The AutoCops, we go beyond just buying and selling cars. We’re here to provide a seamless experience with top-tier service and competitive prices. Join our family of satisfied customers and sell your used luxury car in Pune with confidence. Trust The AutoCops if you have any used luxury car for sale! Get you the best value every time!            
          </p>
          </div>
          <div className={`col-md-12 ${style1.contact_card}  p-0`}>
            <SellCarForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default sell;
