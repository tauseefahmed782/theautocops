import React from "react";
import style from "./CtaBanner.module.css";
import { Button } from "react-bootstrap";

function CtaBanner() {
  return (
    <div className={style.bgImage}>
      <div
        className={`container d-flex justify-content-center align-items-center flex-column`}
      >
        <h2 className="text-white mb-2 fw-light text-uppercase">
          Start Sell With <span className="fw-bold">AUTOCOPS</span> NOW!
        </h2>
        <p className="text-white mb-2 ">
          No hidden fees or costs, you pay what you need
        </p>
        <Button className="btn btn-custom">Start Selling Now</Button>
      </div>
    </div>
  );
}

export default CtaBanner;
