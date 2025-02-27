import React from "react";
import bg from "../../Images/banner-all.jpg";

import style from "../PrivacyPolicy/PrivacyPolicy.module.css";
import style1 from "./Finance.module.css";
import { ContactForm } from "../../components/ContactForm";
import Faq from "../../components/FAQ/Faq";
import { Helmet } from "react-helmet";

const Finance = () => {
  const faqFinance = [
    {
      question: "What credit score is generally required to qualify for The Autocops luxury car financing?",
      answer: "To qualify for The Autocops luxury car financing, a credit score of 750 and above is essential. This ensures that you receive favorable terms and conditions."
    },
    {
      question: "Do you finance older luxury vehicles or only newer models within a certain age range?",
      answer: "We finance luxury vehicles up to 12 years old, allowing us to provide financial solutions for a diverse range of models within this specified age limit."
    },
    {
      question: "Does the size of a down payment impact the financing rates and terms you can offer luxury car buyers?",
      answer: "No, the size of the down payment does not affect financing rates and terms. We offer flexibility for luxury car buyers in their purchase journey."
    },
    {
      question: "Do you provide financing for luxury vehicle upgrades and customizations in addition to just the purchase price?",
      answer: "While we do finance vehicle upgrades such as trade-ins, additional financing for customizations on pre-owned cars is not available."
    },
    {
      question: "Can financing still be arranged even if purchasing from a private luxury vehicle seller rather than through your dealership inventory?",
      answer: "Yes, we can arrange financing for luxury vehicles purchased outside our inventory, providing convenience for our customers."
    },
    {
      question: "With financing, can additional services like extended warranties be bundled into the total amount being financed for easier budgeting?",
      answer: "For pre-owned cars, insurance can be bundled into financing on a case-by-case basis. For new car buyers, products like insurance, accessories, warranties, and service plans can be bundled through our Brand Financing Options."
    }
  ];
  return (
    <>
    <Helmet>
        <title>Financial Services for Luxury Cars in Pune - The Autocops		</title>
        <meta name="description" content="Need finance services for luxury cars in Pune? We offer premium financing solutions for high-end vehicles. Explore our options today." />
        <meta property="og:title" content="Financial Services for Luxury Cars in Pune - The Autocops	" />
        <meta property="og:description" content="Need finance services for luxury cars in Pune? We offer premium financing solutions for high-end vehicles. Explore our options today." />
        <link rel="canonical" href="https://theautocops.com/finance"/>
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
          <div className="container d-flex   flex-column  justify-content-start align-items-start">
          <div className="width-50">
            <h2
              className={style.subHeading}
            >{`Get Your Dream Car, Your Way`}</h2>
            <h3 className={style.heading}>{"Financing Made Easy For Most Luxurious Cars in Pune"}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${style1.my80}`}>
        <div className="row m-0">
          <div className={`col-md-6 ${style1.pr4}`}>
            <h4 className={style1.sectionHeading}>
            Make Your Dream Car a Reality with Our Personalized Financing Options
            </h4>
            <p className={style1.sectionParagraph}>
            Why wait when your dream car is just a signature away? Our finance experts are here to craft a plan that suits you—no stress, no fuss. We’re all about making luxury car financing simple, so you can focus on what really matters: enjoying the ride. Let’s turn those car keys into a reality.
            </p>
            {/* <p className={style1.sectionParagraph}>
            Why wait when your dream car is just a signature away? Our finance experts are here to craft a plan that suits you—no stress, no fuss. We’re all about making luxury car financing simple, so you can focus on what really matters: enjoying the ride. Let’s turn those car keys into a reality.
            </p> */}
           
          </div>
          <div className={`col-md-6 ${style1.contact_card}`}>
            <ContactForm descriptionText="Fill in this simple form, and let our expert team design a financing plan tailored to your needs. 
" />
          </div>
        </div>
      </div>
      <Faq faqs={faqFinance}/>
    </>
  );
};

export default Finance;
