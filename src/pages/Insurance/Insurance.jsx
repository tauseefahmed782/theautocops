import React from "react";
import style from "../PrivacyPolicy/PrivacyPolicy.module.css";
import style1 from "./Insurance.module.css";
import bg from "../../Images/banner-all.jpg";
import { ContactForm } from "../../components/ContactForm";
import Faq from "../../components/FAQ/Faq";
import { Helmet } from "react-helmet";

const Insurance = () => {
  const insuranceFaqData = [
    {
      question: "How do I choose the right coverage for my car?",
      answer: "Selecting the ideal insurance coverage involves prioritizing efficient claims processing and user-friendly documentation from reputable companies. Tailor your premium based on required coverages like Comprehensive, Zero Depreciation, Return-to-Invoice, Third Party, Key Cover, Hydrostatic Lock Cover, Consumables Cover, Natural Disasters, and Accessories Cover."
    },
    {
      question: "Does your insurance coverage take into account the higher repair and replacement costs associated with luxury vehicles compared to standard models?",
      answer: "Absolutely. Reputable insurance companies acknowledge the elevated costs for luxury vehicle repairs. It's crucial to engage authorized service centers or workshops approved by the insurance company, with replacements for severely damaged parts often preferred over repairs."
    },
    {
      question: "Do you offer any additional perks or benefits for The Autocops insurance customers, such as complimentary car washes or roadside assistance?",
      answer: "Certainly! Opt for The Autocops insurance to enjoy an industry-leading 80% discount on the OD premium. Additionally, benefit from a complimentary car wash, one free inspection, and free pick-up and drop services for any service-related needs."
    },
    {
      question: "I have numerous custom upgrades and accessories for my luxury vehicle. How can I ensure proper coverage of their value?",
      answer: "Ensure coverage for custom upgrades and accessories by purchasing items with proper documentation, including a GST bill and warranty. An insurance company surveyor will inspect and incorporate these additions into your policy, subject to an additional, reasonable premium."
    },
    {
      question: "What steps should I take after a car accident to claim insurance?",
      answer: "Initiate the insurance claim process by contacting the help line of the insurance company. Seek assistance from an authorized dealer for the necessary support, and they will guide you through the rest. In case of third-party damage, obtain an FIR from the police as per the situation."
    },
    {
      question: "Will my high-performance luxury vehicle have coverage even if I take it to a closed-track facility for its intended use?",
      answer: "Insurance providers generally exclude coverage for racing and adventure activities. It's advisable to refrain from such activities to ensure your coverage remains intact."
    },
    {
      question: "With your experience insuring luxury vehicles, do you have preferred body shops to properly repair these cars in the event of a claim?",
      answer: "Yes, all insurance companies collaborate with authorized dealers and workshops adhering to OEM standards. These preferred locations ensure proper repairs for luxury vehicles in the event of a claim."
    }
  ];
  return (
    <>
     <Helmet>
        <title>Luxury Car Insurance - Comprehensive Coverage | The Autocops		</title>
        <meta name="description" content="Protect your luxury car with our tailored insurance solutions. Get peace of mind for new and used premium vehicles. Customize your plan today!"/>
        <meta property="og:title" content="Luxury Car Insurance - Comprehensive Coverage | The Autocops	" />
        <meta property="og:description" content="Protect your luxury car with our tailored insurance solutions. Get peace of mind for new and used premium vehicles. Customize your plan today!" />
      <link rel="canonical" href="https://theautocops.com/insurance"></link>
        </Helmet>
      <div
        className="container-fluid"
        style={{ position: "relative", padding: "0px" }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
          }}
          className={style.mainWrapper}

        >
          <div className="container d-flex  flex-column  justify-content-start align-items-start">
          <div className="width-50">
            <h2 className={style.subHeading}>{`Safeguard Your Car with Coverage That Fits You`}</h2>
            <h3 className={style.heading}>{"Effortless Insurance Solutions for Luxury Cars in Pune"}</h3>
           </div>
          </div>
        </div>
      </div>
      <div className={`container ${style1.my80}`}>
        <div className="row m-0">
          <div className={`col-md-6 ${style1.pr4}`}>
            <h4 className={style1.sectionHeading}>
            Comprehensive Coverage for Your Luxury Car
            </h4>
            <p>
            Why leave anything to chance when it comes to your prized possession? At The Autocops, we offer insurance for luxury cars in Pune that’s designed to give you peace of mind. Our insurance services for luxury cars are tailored to protect your investment against the unexpected, so you can enjoy every drive without worry. Let us handle the details while you focus on the thrill of the road.
            </p>
          
          </div>
          <div className={`col-md-6 ${style1.contact_card}`}>
            <ContactForm uploadRcImage={true} descriptionText="Fill in this simple form, and let our expert team design an insurance plan tailored to your needs.
"/>
          </div>
        </div>
      </div>
      <Faq faqs={insuranceFaqData}/>

    </>
  );
};

export default Insurance;
