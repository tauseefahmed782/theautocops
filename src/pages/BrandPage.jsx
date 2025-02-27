// BrandPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import useBrands from './useBrands'; // Import the custom hook
import style from '../components/BrandPage/Brand.module.css';
import DOMPurify from 'dompurify';

const BrandPage = () => {
  const location = useLocation();
  const { brandName } = useParams(); // Extract the brand name from the URL
  const { brands } = useBrands(); // Use the custom hook
  const [brand, setBrand] = useState(location.state || null); // Initialize state with passed data or null
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Set loading to true before finding the brand
    setLoading(true);
    
    // Find the brand using the name from the URL
    const foundBrand = brands.find(b => b.name.toLowerCase() === brandName); // Match the name in lowercase
    setBrand(foundBrand);

    // Set loading to false after the brand is found
    setLoading(false);
  }, [brandName, brands]); // Update dependencies

  if (loading) {
    return <div>Loading...</div>; // Show loader while loading
  }

  if (!brand) {
    return <div>No brand details available.</div>;
  }

  return (
    <div className="">
      <div className={style.brand}>
        {brand.banner_image && (
          <img className="img img-fluid"
            src={brand.banner_image}
            alt={brand.name}
          />
        )}
      </div>

      <div className={`container ${style.brand_details}`}>
        <h2>{brand.name}</h2>
        {brand.description && (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(brand.description),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BrandPage;
