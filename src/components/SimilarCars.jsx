import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faGasPump, faGaugeHigh, faTachometer } from "@fortawesome/free-solid-svg-icons";
import "./SmilarCars.css";
import { useNavigate } from 'react-router-dom';
const SimilarCars = ({ brandId }) => {
  const [similarCars, setSimilarCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Apply the limit to the cars array if a limit is provided

  // Updated handleClick to accept productId
  const handleClick = (slug) => {
    navigate(`/cars/${slug}`);
  };
  useEffect(() => {
    axios.get("https://theautocops.com/admin_panel/public/api/products")
      .then(response => {
        const allCars = response.data.products;
        // Filter cars based on brandId, excluding the current product itself
        const filteredCars = allCars.filter(car => car.brand.id === brandId).slice(0, 4);
        setSimilarCars(filteredCars);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [brandId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="other_cars ">
      <div className="container">
        <div>
          <h3 className="heading mb-5">Similar Used Car Models</h3>
        </div>
        <div className="row">
          {similarCars.map((car, index) => (
            <div className="col-md-3" key={index}>
             <div className="filter-card-item position-relative overflow-hidden rounded swiper-slide swiper-slide-active">
            <div className="feature-thumb position-relative overflow-hidden">
            <button className="p-0 m-0" onClick={() => handleClick(car.cars)}>
              <img src={car.thumbnail} alt={car.title} className="img-fluid" />
            </button>
          </div>
          <div className="filter-card-content">
          <div className="price">₹{car.price}</div>
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
              >
                View Details
              </button>
              <button
                className="btn outline-btn btn-sm w-50 d-block"
                onClick={handleShow}
              >
                Calculate EMI
              </button>
            </div>
          </div>
          </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarCars;
