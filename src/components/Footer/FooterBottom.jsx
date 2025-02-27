// FooterBottom.js
import React from 'react';
import { Link } from 'react-router-dom';
import useBrands from '../../pages/useBrands'; // Import the custom hook
import './Footer.css';

const FooterBottom = () => {
  const { brands, loading, error } = useBrands(); // Use the custom hook

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="footer_bottom">
      <div className="container px-4 px-md-0">
        <div className="end">
          <p style={{color:'#fff'}}>
          Copyright © 2025 TheAutoCops, All rights reserved. Design and Developed by <Link to="https://theaceworks.com/">
          Ace Works
          </Link>
          </p>
          {/* <ul className="list">
            {brands.length > 0 ? (
              brands.map(brand => (
                <Link
                  key={brand.id}
                  style={{ textDecoration: 'none' }}
                  to={`/brand/${brand.name.toLowerCase()}`} // Use brand name in lowercase for the link
                  state={brand}
                >
                  <li className="listItem">
                    • {brand.name} in Pune
                  </li>
                </Link>
              ))
            ) : (
              <li className="listItem">No brands available</li>
            )}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
