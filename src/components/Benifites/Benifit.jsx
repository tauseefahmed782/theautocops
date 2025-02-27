import React from 'react'
import styles from './benifit.module.css'
import point from '../../Images/point-inspection.jpg'
import Paperwork from '../../Images/hassle-free-paperwork.jpg'
import pricing from '../../Images/competitive-pricing.jpg'
import quality from '../../Images/premium-quality-assurance.jpg'
const Benifit = () => {
  return (
    <div >
         <h3 className={styles.benifit}>
         Benefits
        </h3>
        <div className={styles.benifit_card}>
       
        <div className='row'>
            <div className='col-md-3'>
                <div className={styles.icon_box}>
                    <img src={point} className='img img-fluid'></img>
                    <div className={styles.box_content}>
                       
                        <p>
                        Rigorous 120-Point Inspection
                        </p>
                    </div>
                </div>
            </div>
             <div className='col-md-3'>
                <div className={styles.icon_box}>
                    <img src={Paperwork} className='img img-fluid'></img>
                    <div className={styles.box_content}>
                       
                        <p>
                        Hassle-Free Paperwork
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className={styles.icon_box}>
                    <img src={quality} className='img img-fluid'></img>
                    <div className={styles.box_content}>
                        
                        <p>
                        Premium Quality Assurance
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className={styles.icon_box}>
                    <img src={pricing} className='img img-fluid'></img>
                    <div className={styles.box_content}>
                       
                        <p>
                        Competitive Pricing
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Benifit