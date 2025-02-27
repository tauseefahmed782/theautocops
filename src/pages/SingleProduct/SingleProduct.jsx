import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; // Import useParams
import style from "./SingleProduct.module.css";
import DOMPurify from "dompurify"; // Import DOMPurify for sanitizing HTML
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faGasPump, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "../../components/ProductGallery/ImageGallery";

import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Accordion, Badge } from "react-bootstrap";
import Header from "../../components/Header/Header";
import KeyInformation from "../../components/KeyListing/KeyInformation";
import Sidebar from "../../components/SideBar/Sidebar";
import CustomTabs from "../../components/CarDetailsTabs/CustomTabs";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton CSS
import Benifit from "../../components/Benifites/Benifit";
import SimilarCars from "../../components/SimilarCars";
import SimilarNewCars from "../../components/SimilarNewCars";
import Footer_2 from "../../components/Footer/Footer";
import Faq from "../../components/FAQ/Faq";
import closeicon from "../../Images/singleproduct/closeicon.jpg";
import TestDrive from "../../components/Testdrive/Testdrive";
import Booknow from "../../components/Booknow/Booknow";
import { Helmet } from "react-helmet";

const SingleProduct = () => {
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const openBookNowModal = () => setIsBookNowOpen(true);
  const closeBookNowModal = () => setIsBookNowOpen(false);
  const openTestDriveModal = () => setIsTestDriveOpen(true);
  const closeTestDriveModal = () => setIsTestDriveOpen(false);

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("modal-overlay")) {
      closeBookNowModal();
      closeTestDriveModal();
    }
  };

  const { slug } = useParams(); // Extract id from route parameters
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true); // State for image loading
  const faqs = [
    {
      question:
        "What inspection checklist and criteria do you use to select vehicles for your luxury used car inventory?",
      answer:
        "Our luxury used cars undergo a meticulous 360-degree inspection and certification by Carwale and Cartrade, featuring a rigorous 167-point quality check.",
    },
    {
      question:
        "Do you have any financing partnerships or special programs for first-time luxury vehicle buyers?",
      answer:
        "The Autocops has financing partnerships with leading banks and NBFCs, offering tailor-made schemes for the unique needs of first-time luxury vehicle buyers.",
    },
    {
      question:
        "Do you provide warranty options for your pre-owned luxury vehicles?",
      answer:
        "Yes, we offer extended warranties at an additional cost for pre-owned luxury vehicles beyond the original manufacturers warranty.",
    },
    {
      question:
        "Can I trade in my current vehicle for a luxury car at your dealership?",
      answer:
        "Absolutely, you can trade in any passenger car toward the purchase of your luxury car, providing a seamless and convenient experience.",
    },
    {
      question:
        "Do you offer extended service contracts or protection plans for luxury vehicles?",
      answer:
        "Yes, The Autocops offers extended service contracts and warranty options at an additional cost, ensuring comprehensive protection for your luxury vehicle.",
    },
    {
      question:
        "For selling customers, what documentation or verification is needed for getting a quote?",
      answer:
        "To get the best quote for your vehicle, we require documents such as the Registration Certificate, Valid Insurance, Vehicle Service History, Purchase, and Service Invoices, Extended Warranty, Service Plan certificates, and an in-person vehicle inspection.",
    },
  ];

  useEffect(() => {
    axios
      .get(`https://theautocops.com/admin_panel/public/api/cars/${slug}`)
      .then((response) => {
        const data = response.data.car;
        setCarData(data);
        setImages(data.images);
        setLoading(false);
        setImagesLoading(false); // Set image loading to false once images are loaded
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);
  const handleImageLoad = () => {
    setImagesLoading(false);
  };

  if (loading)
    return (
      <p className="loder text-center ">
        <div class="loader" id="loader-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  if (!carData) return null;

  return (
    <>
    <Helmet>
        <title>{carData.meta_title}</title>
        <meta name="description" content={carData.meta_description} />
        <meta property="og:title" content={carData.meta_title} />
        <meta property="og:description" content={carData.meta_description} />
        <meta property="og:image" content={carData.og_tags} /> {/* Adjust this to the correct image URL */}
        <meta property="og:url" content={`https://theautocops.com/car/${slug}`} /> {/* Adjust this to the correct URL */}
      </Helmet>
      <div className={`container my-5 ${style.single_pro_section}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {/* <Badge bg="success" className={style.badge_sale}>
              For Sale
            </Badge> */}
            <h3 className={`text-left my-2 ${style.bmw}`}>
              {carData.title} {carData.model}
            </h3>
          </div>

          <div className={` d-flex   ${style.share_icons}`}>
            <Link
              className="text-black"
              to="https://www.facebook.com/share/bdFqGYzKcFE2ybR2/?mibextid=LQQJ4d"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
            <Link
              className="text-black"
              to="https://www.instagram.com/theautocops?igsh=eHVpcjk2Nm1qZDN3&utm_source=qr"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link className="text-black" to="https://pin.it/4dZxum076">
              <FontAwesomeIcon icon={faPinterest} />
            </Link>
            <Link
              className="text-black"
              to="https://youtube.com/@theautocops?si=c2YGgSfZFK7wgzs1"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-8">
            {/* Show skeleton loader if images are loading */}
            {imagesLoading ? (
              <Skeleton
                height={500}
                width="100%"
                style={{
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                }}
              /> // Show skeleton while images are loading
            ) : (
              <ImageGallery
                items={images.map((img) => ({
                  original: img,
                  thumbnail: img,
                  onLoad: handleImageLoad, // Image load handler
                }))}
              />
            )}
          </div>

          <div className="col-md-4">
          <div className={style.product_price}>
            <div className={style.bg_color}>
              <div className="d-flex align-items-center justify-content-between">
                <h4 className={style.price}> ₹ {carData.price} </h4>
                <small> ₹ {carData.emi_start_at} /m </small>
              </div>
              <div className="d-flex align-items-center justify-content-between ">
                <div
                  className={` d-flex align-items-center ${style.widget_meta}`}
                >
                  <span className="">
                    {" "}
                    <FontAwesomeIcon icon={faGaugeHigh} /> {carData.miles} KMS
                  </span>
                  <span className="px-3">|</span>
                  <span className="">
                    {" "}
                    <FontAwesomeIcon icon={faGasPump} /> {carData.fuel_type}
                  </span>
                </div>
                {/* emi calculator */}
                <a href="" className={style.emi_calculate}>
                  Calculate EMI
                </a>
              </div>
            </div>
            <KeyInformation
              data={{
                mileage: carData.mileage,
                transmission: carData.transmission,
                fuel_type: carData.fuel_type,
                year: carData.year,
                kms_done: carData.miles,
                previous_owner: carData.mileage,
                performance: carData.performance,
              }}
            />
            <div className="row">
              <div className="col-md-6  col-6">
                <div className="d-flex">
                  <button
                    onClick={openBookNowModal}
                    className={`btn ${style.btn_book}`}
                  >
                    Book Now
                  </button>
                  {isBookNowOpen && (
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Booknow />
                        <button
                          className="close-btn"
                          onClick={closeBookNowModal}
                        >
                          <img className="close" src={closeicon} />
                        </button>
                      </div>
                    </div>
                  )}
                  <div></div>
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="d-flex">
                  <button
                    onClick={openTestDriveModal}
                    className={`btn ${style.testdrive_btn}`}
                  >
                    Test Drive
                  </button>
                  {isTestDriveOpen && (
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TestDrive />
                        <button
                          className="close-btn"
                          onClick={closeTestDriveModal}
                        >
                          <img className="close" src={closeicon} />
                        </button>
                      </div>
                    </div>
                  )}

                  <div></div>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      {/* main and sidebar */}
      <div className={`container ${style.custom_tabs}`}>
        <div className="row">
          {/* main content */}
          <div className="col-md-8">
            <CustomTabs
              specificationData={carData.car_specification}
              featureData={carData.car_features}
            />
            <Benifit />
          </div>
          {/* sidebar */}
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
      {/* Pass brand id to SimilarCars component */}
      <SimilarCars brandId={carData.brand.id} />

      <Faq faqs={faqs} />
    </>
  );
};

export default SingleProduct;
