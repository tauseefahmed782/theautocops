import React from "react";
import style from "./Testimonial.module.css";
import user1 from "../../../Images/testimonial/user1.png";
import user2 from "../../../Images/testimonial/user2.png";
import user3 from "../../../Images/testimonial/user3.png";
import user5 from "../../../Images/testimonial/user5.png";
import { ReactComponent as FuelTypeIcon } from "../../../Images/testimonial/RatingIcon.svg";

const Testimonial = () => {
  return (
    <div className="container testiminials">
      {/* <h6 className="text-center" style={{color: '#152C56' ,
    fontSize: '24px',
    }}>
     
      </h6> */}
      <h3 className={`heading mb-2 ${style.HeadingColor}`}>
      <span className={style.highlighted}>100+</span> Premium Used Luxury Cars Sold Monthly in Pune
      </h3>
      <div className={style.cardsContainer}>
        <div className={style.item}>
          <div className={style.userDetailContainer}>
            <img src={user1} className={style.userImg} alt="" />
            <div>
              <h6 className={style.userName}>Anita Gharpuray</h6>
              <div className={style.ratingContainer}>
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
              </div>
            </div>
          </div>
          <p className={style.description}>
          I have had a wonderful experience with The Autocops. Nitesh, from day 1 was very forthcoming, honest and extremely helpful. He had answers to all my questions. So, far it’s been a hassle free transaction. Sagar was very professional at the time of delivery. I would highly recommend The Autocops as a one stop station for your new luxury car.
          </p>
          <p className={style.description}>12:06 PM may 12-2024</p>
        </div>
        <div className={style.item}>
          <div className={style.innerItem}>
            <div className={style.userDetailContainer}>
              <img src={user2} className={style.userImg} alt="" />
              <div>
                <h6 className={style.userName}>AFarhan Usmani</h6>
                <div className={style.ratingContainer}>
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                </div>
              </div>
            </div>
            <p className={style.description}>
            Pleasure to have experienced prompt service n best price. 
            </p>
            <p className={style.description}>02:15 PM july 08-2024</p>
          </div>
          <div className={style.innerItem}>
            <div className={style.userDetailContainer}>
              <img src={user3} className={style.userImg} alt="" />
              <div>
                <h6 className={style.userName}>Biju Nair</h6>
                <div className={style.ratingContainer}>
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                  <FuelTypeIcon height={"20px"} width={"20px"} />
                </div>
              </div>
            </div>
            <p className={style.description}>
            One of the premium Used cars with Detailing facilities in town. Happy to be here.
            </p>
            <p className={style.description}>11:06 PM april 30-2024</p>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.userDetailContainer}>
            <img src={user5} className={style.userImg} alt="" />
            <div>
              <h6 className={style.userName}>karan bedi</h6>
              <div className={style.ratingContainer}>
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
                <FuelTypeIcon height={"20px"} width={"20px"} />
              </div>
            </div>
          </div>
          <p className={style.description}>
          Wonderful people and always ready to help. Loved the catalogue and the variety nothing like this in Pune. Must visit and great pricing. Lovely employees and staff all seemed very genuine. I visited both showrooms and went back a happy customer.
          </p>
          <p className={style.description}>09:00 PM april 12-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
