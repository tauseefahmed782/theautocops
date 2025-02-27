import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faGasPump, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import CalculateEmi from "./EmiCalculator/CalculateEmi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from 'react-router-dom';
import "./SmilarCars.css";

const SimilarNewCars = ({ cars, showCta, limit }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (cars && cars.length > 0) {
      setLoading(false);
    }
  }, [cars]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayedCars = limit ? cars.slice(0, limit) : cars;

  const handleClick = (slug) => {
    navigate(`/cars/${slug}`);
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      <div className="row align-items-end gy-4">
        {loading ? (
          Array(limit || 4).fill(0).map((_, index) => (
            <div className="col-md-3" key={index}>
              <div className="filter-card-item position-relative overflow-hidden rounded">
                <Skeleton height={200} />
                <div className="filter-card-content">
                  <Skeleton width={100} height={30} />
                  <div className="d-flex justify-content-between mt-4 mb-4">
                    <Skeleton width={150} />
                    <Skeleton width={100} className="model-text mt-1" />
                    <Skeleton circle={true} height={40} width={40} />
                  </div>
                  <div className="card-feature-box d-flex align-items-center my-3">
                    <Skeleton width={70} />
                  </div>
                  <div className="d-flex gap-2">
                    <Skeleton width="100%" height={40} />
                    <Skeleton width="100%" height={40} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          displayedCars.map((car, index) => (
            <div className="col-md-3" key={index}>
              <div className="filter-card-item position-relative overflow-hidden rounded swiper-slide">
                <div className="feature-thumb position-relative overflow-hidden">
                  <button className="p-0 m-0" onClick={() => handleClick(car.slug)}  disabled={car.is_sold === 1}>
                    <img
                      src={car.thumbnail}
                      alt={car.title}
                      className={`img-fluid fade-in ${imageLoaded[index] ? "loaded" : ""}`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </button>
                 
                </div>
                <div className="filter-card-content">
                  <div className="price">₹{car.price}</div>
                  {car.is_sold === 1 && (
                    <div className="sold_out">
                      <span className="">Sold</span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between mt-4 mb-4">
                    <div>
                      <h5>{car.title}</h5>
                      <p className="model-text mt-1">{car.model}</p>
                    </div>
                    <img
                      src={car.brand?.logo}
                      alt={car.brand?.name}
                      className="brandLogo"
                    />
                  </div>
                  <span className="meta-content">
                    <strong>EMI Start At:</strong> <a href="#">₹{car.emi_start_at}</a>
                  </span>
                  <div className="card-feature-box d-flex align-items-center my-3">
                    <div className="icon-box d-flex align-items-center">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      {car.year}
                    </div>
                    <div className="icon-box d-flex align-items-center">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faGaugeHigh} />
                      </span>
                      {car.miles}
                    </div>
                    <div className="icon-box d-flex align-items-center">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faGasPump} />
                      </span>
                      {car.fuel_type}
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn outline-btn btn-sm w-50 d-block"
                      onClick={() => handleClick(car.slug)}
                      disabled={car.is_sold === 1}
                    >
                      View Details
                    </button>
                    <button
                      className="btn outline-btn btn-sm w-50 d-block"
                      onClick={handleShow}
                      disabled={car.is_sold === 1}
                    >
                      Calculate EMI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calculate EMI</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <CalculateEmi />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SimilarNewCars;
