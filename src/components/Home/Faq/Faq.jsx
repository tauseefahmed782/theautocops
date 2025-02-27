import React, { useState } from "react";
import style from "./Faq.module.css";

const faqData = [
  {
    title: "1. Is it good to buy used luxury cars from The Autocops?",
    description:
      "Yes, when you buy through The Autocops, a premium car dealership in Pune, rest assured that you are getting a thoroughly inspected, high-quality vehicle with excellent customer service to give it to the company. ",
  },
  {
    title: "2. What are the best used luxury cars available at The Autocops?",
    description:
      "In this used car dealers in Pune, you will find only top models from iconic brands such as Mercedes-Benz, BMW, Land Rover, Audi, Porsche, etc. Each car is hand-picked and engineered with stringent quality control.",
  },
  {
    title: "3. Should you buy a used luxury car in India?",
    description:
      "Yes, it may be a financially acute decision to buy a used luxury car in Pune. With The Autocops, one can be assured that a car shall meet the finest standards for quality and reliability. ",
  },
  {
    title:
      "4. What are the benefits of buying from used luxury car dealers in Pune like The Autocops?",
    description:
      "The Autocops offers invincible service, a wide range of premium cars, unbeatable prices, and detailed inspection. The combination makes our company among the top choices of buying used luxury cars in Pune. ",
  },
  {
    title: "5. Where can I find used luxury cars near me?",
    description:
      "Head to The Autocops, Pune, and view our collection. Our dealership is conveniently located, making it easier to hunt for premium cars in Pune of your choice. ",
  },
  {
    title: "6. Which used luxury car should I buy?",
    description:
      "Our team of experts will guide you through your preferences and needs. Whether performance or comfort or style, we have a luxury car that does justice to your requirements. ",
  },
  {
    title: "7. Do you have any affordable used luxury cars?",
    description:
      "Yes, The Autocops comes with a wide array of pre owned cars in Pune at competitive prices—to buy quality without costing an arm and a leg. ",
  },
  {
    title: "8. Should you buy used luxury cars in India?",
    description:
      "You have a hassle-free experience buying your preferred 2nd hand luxury car from us and having it inspected. You will also have hassle-free financing options to close the deal. ",
  },
];

const aboutTeamData = [
  {
    heading: "Expert Team",
    description:
      "Our professionals are seasoned experts in luxury vehicles.",
  },
  {
    heading: "Unmatched Quality",
    description:
      " Each car undergoes a 200-point inspection.",
  },
  {
    heading: "Customer-Centric Service",
    description:
      " Your satisfaction is our top priority.",
  },
  {
    heading: "Guaranteed Satisfaction",
    description:
      " Join over 1,000 happy customers who trust The Autocops.",
  },
];
const Faq = () => {
  const [expanded, setExpanded] = useState(Array(faqData.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };
  return (
    <div className={`container ${style.mainWrapper}`} style={{}}>
      <div className="row m-0">
        <div className={`col-md-6  ${style.faqWraper}`}>
          {faqData.map((faq, index) => (
            <div key={index} className={style.faqCard}>
              <h3 className={style.faqTitle}>{faq.title}</h3>
              <p
                className={`${style.faqDescription} ${
                  expanded[index] ? style.expanded : ""
                }`}
              >
                {faq.description}
              </p>
              <span
                className={style.moreBtn}
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? "less" : " more"}
              </span>
            </div>
          ))}
        </div>
        <div className={`col-md-6  ${style.faqWraperRight}`}>
          <h3 className={style.subheadingFaq}>Why Choose The Autocops?</h3>
          <h1 className={`mb-2 ${style.headingFaq}`}>
          Luxury Cars Deserve the Best—And So Do You
           
          </h1>
          <p className="mb-4">
          With years of experience in luxury automotive, our team is dedicated to providing top-tier service and support for best pre owned luxury cars. Our comprehensive inspection and certification process ensure that every car on our lot meets the highest standards of quality.
          </p>
          <div className={style.aboutDetailsWrapper}>
            {aboutTeamData.map((item, index) => (
              <div key={index}>
                <h4 className={style.aboutTeamHeading}>{item.heading}</h4>
                <p className={style.aboutTeamDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
