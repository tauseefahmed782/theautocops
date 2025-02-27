import React from 'react'
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();
  return (
    <div>
        
        <div className="container ctaContainer d-flex justify-content-between">
          <p className="ctaText">
          Why just drive when you can make a bold statement? Buy used luxury cars in Pune that suits your style and personality. It’s not just about getting from point A to point B—it's about enjoying the journey in ultimate comfort and class.          </p>
          <button className="ctaBtnViewMore" onClick={() => navigate('/stock')}>
          Explore More Cars
          </button>
        </div>
     
    </div>
  )
}

export default CallToAction