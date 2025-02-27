import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Home from './pages/Home';
import Layout from './components/layout';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Finance from './pages/Finance/Finance';
import Insurance from './pages/Insurance/Insurance';
import Stock from './pages/Stock/Stock';
import Sell from './pages/Sell/Sell';
import Thankyou from './pages/ThankYou';
import BrandPage from './pages/BrandPage';
import Blog from './pages/Blog/Blog';
import Blogdetail from './pages/Blogdetail/Blogdetail';
import Topblogs from './components/Topblogs/Topblogs';
import Testdrive from './components/Testdrive/Testdrive';
import Booknow from './components/Booknow/Booknow';
import Videos from './pages/Videos/Videos';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path="/our-videos" element={<Videos/>} />
        <Route path='/privacypolicy' element ={<PrivacyPolicy/>}/>
        <Route path='/financing' element ={<Finance/>}/>
        <Route path='/insurance' element ={<Insurance/>}/>
        <Route path='/stock' element ={<Stock/>}/>
        <Route path='/sell' element ={<Sell/>}/>
        <Route path="/brand/:brandName" element={<BrandPage />} />
        <Route path='/thankyou' element ={<Thankyou/>}/>
        <Route path="/cars/:slug" element={<SingleProduct />} />
        <Route path='/blogs' element ={<Blog />} />
        <Route path="/blogs/:slug" element={<Blogdetail />} />
        <Route path='/Topblogs' element={<Topblogs />} />
        <Route path="/Testdrive" element={<Testdrive />} />
        <Route path="/Booknow" element={<Booknow />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
