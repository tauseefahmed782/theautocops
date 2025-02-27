import React from "react";
import FindYourCar from "../components/Home/FindCar/FindYourCar";
import CarListing from "../components/Home/Cars/CarListing";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import TopSellingCars from "../components/Home/TopSellingCars/TopSellingCars";
import OurServices from "../components/Home/OurServices/OurServices";
import Faq from "../components/Home/Faq/Faq";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import CallToAction from "../components/CallToAction";
import { Helmet } from "react-helmet";
const Home = () => {
  
  return (
    <div>
       <Helmet>
        <title> Best Pre Owned Luxury Cars Dealers in Pune - The Autocops	</title>
        <meta name="description" content="Find the best pre-owned luxury cars in Pune! Our premium used car dealers offer unbeatable deals on second-hand luxury cars. Explore your dream ride today! " />
        <meta property="og:title" content=" Best Pre Owned Luxury Cars Dealers in Pune - The Autocops" />
        <meta property="og:description" content="Find the best pre-owned luxury cars in Pune! Our premium used car dealers offer unbeatable deals on second-hand luxury cars. Explore your dream ride today! " />
        <link rel="canonical" href="https://theautocops.com/"/>
        </Helmet>
      <HeroSection />
      {/* <Banner/> */}
      <FindYourCar limit={8} heading="Find Your Perfect Car" tagline="Explore our handpicked collection of pre-owned luxury cars in Pune."/>
      <CallToAction/>
      {/* <CarListing  showCta={true}/> */}
      {/* <SellCar/> */}
      {/* <AboutUs/> */}
      {/* <CtaBanner/> */}
      <TopSellingCars />
      <OurServices/>
      <Faq/>
      <Testimonial/>
      {/* <Testimonials/> */}
      {/* <BrandLogos /> */}
    </div>
  );
};

export default Home;
