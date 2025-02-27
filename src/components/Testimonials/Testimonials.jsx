import React from "react";
import Slider from "react-slick";
import style from "./Testimonials.module.css";
import testimonialOneImg from "../../assets/testimonial-img/01.jpg";
import testimonialTwoImg from "../../assets/testimonial-img/05.jpg";
import testimonialThreeImg from "../../assets/testimonial-img/03.jpg";

const testimonials = [
    {
        image: testimonialOneImg,
        author: 'Dr. Emily Stone',
        role: 'Doctor',
        quote: 'This platform offers excellent luxury cars. Impressive quality and seamless process!',
        rating: 5,
      },
      {
        image: testimonialTwoImg,
        author: 'Mark Robinson',
        role: 'Engineer',
        quote: 'Exceptional service and top-quality luxury cars. Highly recommend for second-hand buys.',
        rating: 4,
      },
      {
        image: testimonialThreeImg,
        author: 'Sarah Lee',
        role: 'Professor',
        quote: 'Outstanding variety of luxury second-hand cars. The purchasing experience was smooth.',
        rating: 5,
      },
      {
        image: testimonialOneImg,
        author: 'John Davis',
        role: 'Architect',
        quote: 'Great service and a fantastic selection of luxury cars. Worth every penny spent!',
        rating: 5,
      },
      {
        image: testimonialTwoImg,
        author: 'Laura Johnson',
        role: 'Designer',
        quote: 'A smooth process and impressive selection of luxury cars. Excellent platform overall!',
        rating: 4,
      },
      {
        image: testimonialThreeImg,
        author: 'Michael Green',
        role: 'Entrepreneur',
        quote: 'Found exactly what I wanted. Excellent service and high-quality luxury second-hand cars.',
        rating: 5,
      },
];
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of testimonials visible at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container py-5">
      <div className={`d-flex justify-content-center align-items-center flex-column `}>
        <h5 className={`text-center fw-normal ${style.subHeading}`}>
          TESTIMONIALS
        </h5>
        <h3 className={`${style.testimonialHeading} mt-3 mb-5`}>What Our Client Say's
        </h3>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <>
              {/* <div key={index} className="testimonial-item">
               <p>{testimonial.text}</p>
               <h5>{testimonial.name}</h5>
             </div> */}
              <div className={style.testimonialCard}>
                <div className={style.testimonialContent}>
                  <div className={style.testimonialAuthorImg}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className={style.testiImage}
                    />
                  </div>
                  <div className={style.testimonialAuthorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className={style.testimonialQuote}>
                  {/* <span className={style.testimonialQuoteIcon}>
                    <i className="bi bi-quote"></i>
                  </span> */}
                  <p className="p-0">{testimonial.quote}</p>
                </div>
                {/* <div className={style.testimonialRate}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      key={index}
                      className={`fas fa-star ${
                        index < testimonial.rating ? style.filled : ""
                      }`}
                    ></i>
                  ))}
                </div> */}
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
