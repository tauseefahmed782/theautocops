import React from 'react'
import bg from "../Images//banner-all.jpg";
import Story from '../components/About/Story'
import BrandLogo from '../components/About/logo/BrandLogo'
import Founders from '../components/About/AboutFounder/Founders'
import Mission from '../components/About/VisionMission/Mission'
import MarketMarvels from '../components/About/MarketMarvels/MarketMarvels'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
       <Helmet>
        <title>The Autocops: Our Story of Excellence in Luxury Car Sales</title>
        <meta
          name="description"
          content="Discover Autocops' journey since 2019, making luxury car ownership easier. Find your dream car with exceptional service."
        />
        <link rel="canonical" href="https://theautocops.com/about"></link>
      </Helmet>
        <div className='banner'>
            <img src={bg} className={`img img-fluid BannerImageAbout`} alt="" />
        </div>
        <Story/>
        <BrandLogo/>
        
        <Mission/>
        <MarketMarvels/>
    </div>
  )
}

export default About