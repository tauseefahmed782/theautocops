import React from "react";
import styles from "./founder.module.css";
import founder from "../../../Images/aboutUsImages/founder.png";

const Founders = () => {
  return (
    <div className="container">
      <div className={styles.founder}>
      <h3 className={`${styles.founders_heading}  mb-5 text-center`}>Meet Our Founders</h3>

        <div className="row ">

            <div className={`col-md-6 ${styles.firstMemberContainer}`}>
            <div className={styles.founder_card}>
            <img src={founder} className={`img img-fluid mb-4 ${styles.founderImg}`}></img>

            
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since. the industry's standard dummy
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </p>
              <p>Lorem Ipsum has been the industry's</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.founder_card}>
            <img src={founder} className={`img img-fluid mb-4 ${styles.founderImg}`}></img>

             
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since. the industry's standard dummy
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </p>
              <p>Lorem Ipsum has been the industry's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
