import React from "react";
import styles from "./mission.module.css";
import mission from "../../../Images/aboutUsImages/mission.png";
const Mission = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className={styles.mission}>
        <div className="row">
          <div className="col-md-7">
            <div className={styles.mission_card}>
              <h3>Our Mission & Vision: Making Your Luxury Car Experience Better</h3>
              <p>
              <h4>Mission</h4>Our mission is to redefine the Indian pre-owned luxury car industry by introducing new standards of technological innovation. We are dedicated to setting benchmarks that elevate the industry and enhance the luxury car buying experience.
              </p>
              <h4 className="mt-3">Vision</h4>We aspire to become the most sustainable, profitable, ethical, and admired pre-owned luxury car brand in India. By leveraging technological advancements, we aim to inspire and transform the way people perceive and experience luxury car ownership.
            </div>
          </div>
          <div className="col-md-5">
            <img src={mission} className="img img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
