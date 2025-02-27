import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import style from "./FindYourCar.module.css";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/global.css";

const Search = ({ onSearch }) => {
  const [key, setKey] = useState("brand");

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [priceRange, setPriceRange] = useState([100000, 3000000]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  // Handle brand-based search
  const handleBrandSearch = (event) => {
    event.preventDefault();
    const query = `brand_name=${brand}&model=${model}`;
    onSearch(query);
  };

  // Handle price-based search
  const handlePriceSearch = (event) => {
    event.preventDefault();
    const query = `min_price=${priceRange[0]}&max_price=${priceRange[1]}`;
    onSearch(query);
  };
    // Clear all filters and show all cars
    const handleClearSearch = () => {
      setBrand("");
      setModel("");
      setPriceRange([100000, 3000000]); // Set to default price range or as needed
      onSearch(""); // Call onSearch with an empty query or fetch all cars
    };

  return (
    <>
      <div className="container-fluid bg-f2f2f2 m-0 p-0" id="shopNowTabs" style={{position:'relative'}}>
        <form className="form_search">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="brand" title="By Brand">
              <div className="tab-content ">
                <div className="row align-items-center">
                  <div className={`col-md-4 ${style.divider}`}>
                    <Form.Select
                      aria-label="Default select example"
                      className={style.select}
                      onChange={(e) => setBrand(e.target.value)}
                    >
                      <option value="">Select Brand</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="BMW">BMW</option>
                      <option value="Jaguar Land Rover">Jaguar Land Rover</option>
                      <option value="Audi">Audi</option>
                      <option value="Porsche">Porsche</option>
                      <option value="Lexus">Lexus</option>
                      <option value="Maserati">Maserati</option>
                      <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                      <option value="Other Brands">Other Brands (All other non-luxury brands)</option>
                    </Form.Select>
                  </div>
                  <div className="col-md-4">
                    <Form.Select
                      aria-label="Default select example"
                      className={style.select}
                      onChange={(e) => setModel(e.target.value)}
                    >
                      <option value="">Select Model</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Convertible">Convertible</option>
                      <option value="Sports">Sports</option>
                      <option value="Coupe">Coupe</option>
                      <option value="MUV">MUV</option>
                      <option value="All">All</option>
                    </Form.Select>
                  </div>
                  <div className="col-md-4 ">
                    <Button
                      variant="primary"
                      className={`w-100 ${style.btn_search} mt-0`}
                      type="submit"
                      onClick={handleBrandSearch}
                    >
                      Search by Brand
                    </Button>
                    <button
            variant="secondary"
            className={` ${style.btn_clear} mt-3`}
            type="button"
            onClick={handleClearSearch}
          >
            Clear Search
          </button>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="price" title="By Price">
              <div className="tab-content">
                <div className="row py-3 align-items-end">
                  <div className="col-md-8">
                    <Form.Label className={style.label}>
                      Select Price Range
                    </Form.Label>
                    <RangeSlider
                      min={100000}
                      max={3000000}
                      step={10000}
                      defaultValue={[100000, 3000000]}
                      onChange={handlePriceChange}
                      value={priceRange}
                    />
                    <div className={`${style.priceDisplay} mt-2`}>
                      Selected Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </div>
                  </div>
                  <div className="col-md-4 align-items-center">
                    <Button
                      variant="primary"
                      className={`w-100 ${style.btn_search}`}
                      type="submit"
                      onClick={handlePriceSearch}
                    >
                      Search by Price
                    </Button>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
          
        </form>
      </div>
    </>
  );
};

export default Search;
