import React from "react";
import banner from "../../Images//banner-all.jpg";
import styles from "./contact.module.css";
import { ContactForm } from "../../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import MapDetails from "../../components/MapDetails/MapDetails";
import { Helmet } from "react-helmet";

const Contact = () => {
  const KalyaniAdd =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7565.157759162177!2d73.900479!3d18.547923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10e7ad2057d%3A0xe5cea7e260265db!2sThe%20Autocops%20%7C%20Luxury%20Pre-Owned%20Car%20Dealer%20%7C%20Mercedes-Benz%20%7C%20BMW%20%7C%20Mini%20%7C%20Audi%20%7C%20Range%20Rover%20%7C%20Jaguar%20%7C%20Volvo%20%7C%20Toyota!5e0!3m2!1sen!2sin!4v1723483037807!5m2!1sen!2sin";
  const WakadPune =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.760638027046!2d73.757109!3d18.601956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b930133bf32d%3A0x8bd3aad74b64c161!2sThe%20Autocops!5e0!3m2!1sen!2sin!4v1723484420768!5m2!1sen!2sin";

  return (
    <div>
      <Helmet>
        <title> The Autocops - Contact Us		</title>
        </Helmet>
      <div className="banner">
        <img src={banner} className="img img-fluid" alt="" />
      </div>
      <div className="container">
        <div className={styles.contact}>
          <div className="row">
            <div className="col-md-5 ">
              <h3 className="mb-4 mb-md-5 ">
                Lets discuss something <span>cool</span> together
              </h3>
              <div className={`mb-4 mb-md-5 ${styles.card_one}`}>
                <h4>For Preowned/unregistered Luxury Cars:</h4>
                <ul className="m-0 p-0">
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    theautocops@gmail.com
                  </li>
                  <li className="d-flex align-items-center">
                    <div>
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    8390001122 , 7796660022 ,7721859933 <br></br>
                  </li>
                </ul>
              </div>
              <div className={`mb-5 ${styles.card_one}`}>
                <h4 className="mb-0">For detailing, ceramic & PPF services:</h4>
                <p className={styles.free}>
                  Feel free to call us between 10:00 am to 10:00 pm
                </p>
                <ul className="m-0 p-0">
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    theautocops@gmail.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    8390001122 <br></br>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <div className={styles.contact_card}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapDetails
        title={"Kalyani Nagar, Pune"}
        descrption={
          "Shop No.3, Corniche Tower, opposite ICICI Bank, Kalyani Nagar, Pune, Maharashtra 411006"
        }
        maplocationip={KalyaniAdd}
        orderValue={"1"}
        orderValue2={"2"}
      />
      <MapDetails
        title={"Wakad, Pimpri-Chinchwad,"}
        descrption={
          "Western Avenue K-Type, WESTERN AVENU, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057"
        }
        maplocationip={WakadPune}
        orderValue={"2"}
        orderValue2={"1"}
        last={true}
      />
    </div>
  );
};

export default Contact;
