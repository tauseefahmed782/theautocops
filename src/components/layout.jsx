// src/components/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer_2 from './Footer/Footer';
import FooterBottom from './Footer/FooterBottom';


const Layout = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <Footer_2 />
    <FooterBottom/>

    </div>
  );
};

const mainStyle = {
  // marginTop: '80px', // Adjust this value based on your header height
 
};

export default Layout;
