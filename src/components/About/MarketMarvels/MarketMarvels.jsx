import React from 'react';
import styles from './market.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../../Images/aboutUsImages/img-one.png'
import sliderimg from '../../../Images/aboutUsImages/image-2.png'

const MarketMarvels = () => {
    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slideToScroll : 1,
        infinite: true, 
        autoplay: true,
        autoplaySpeed: 2000,  // Autoplay speed in milliseconds (2 seconds)
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToShow: 1, // Example: show 3 slides on very small screens

            }
          }
        ]
      };
  return (
    <div className={`container-fluid ${styles.marvels}`}>
        <div className={`container market_marvels ${styles.wrapperCOntainer}`}>
        <Slider {...settings}>
      <div><img src={slider1} alt="" /></div>
      <div><img src={sliderimg} alt="" /></div>
      <div><img src={slider1} alt="" /></div>
      <div><img src={sliderimg} alt="" /></div>
      <div><img src={slider1} alt="" /></div>
      <div><img src={sliderimg} alt="" /></div>
      <div><img src={slider1} alt="" /></div>
      
    </Slider>
        </div>
    </div>
  )
}

export default MarketMarvels