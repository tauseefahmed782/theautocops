import React, { useState, useEffect } from "react";
import style from "./FindYourCar.module.css";
import Search from './Serach';
import SimilarNewCars from "../../SimilarNewCars";

const FindYourCar = ({ limit, heading, tagline }) => {
  const [allCars, setAllCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://theautocops.com/admin_panel/public/api/products")
      .then((response) => response.json())
      .then((data) => {
        setAllCars(data.products);
        setFilteredCars(data.products);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

  const handleSearch = (query) => {
    setFilteredCars([]);
    setError("");

    fetch(`https://theautocops.com/admin_panel/public/api/products?${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.products.length === 0) {
          setError("No cars found matching your criteria.");
        } else {
          setFilteredCars(data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching filtered car data:", error);
        setError("An error occurred while fetching data.");
      });
  };

  const carsToShow = limit ? filteredCars.slice(0, limit) : filteredCars;

  return (
    <>
      <div className={`container ${style.maincontainer}`}>
        <h3 className={`heading mb-2 ${style.HeadingColor}`}>{heading}</h3>
        <div className={`${style.search_card}`}>
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className={`container ${style.main_page}`}>
        <div className={style.car_list}>
          <p className={`mt-3 ${style.sub_heading}`} style={{ marginBottom: '80px' }}>
            {tagline}
          </p>
          {error && <div className="alert alert-danger">{error}</div>}
          <SimilarNewCars cars={carsToShow} showCta={true} />
        </div>
      </div>
    </>
  );
};

export default FindYourCar;
