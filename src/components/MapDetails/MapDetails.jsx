import React from "react";
import style from "./MapDetails.module.css";
const MapDetails = ({
  title,
  descrption,
  maplocationip,
  orderValue,
  orderValue2,
  last,
}) => {
  return (
    <div className={`container ${last ? style.mb80 : style.mb40}`}>
      <div className="row ">
        <div
          className={`col-md-6 ${last ? null : `mb-4 mb-md-0`}`}
          style={{ order: orderValue }}
        >
          <iframe
            src={maplocationip}
            width="100%"
            height="350"
            // frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div
          style={{ order: orderValue2 }}
          className="col-md-6  d-flex flex-column justify-content-center align-items-start"
        >
          <h3 className={style.Title}>{title}</h3>
          <p className={`${style.Details} ${last?`mb-4`:null}`}>{descrption}</p>
        </div>
      </div>
    </div>
  );
};

export default MapDetails;
