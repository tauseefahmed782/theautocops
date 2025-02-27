import React from 'react'
import style from './About.module.css'
import about from '../../../Images/about_image.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const AboutUs = () => {
    return (
        <>
         
            <div className='container main_page'>
                <div className={style.about_company}>
                    <div className='row'>
                        <div className='col-md-6' style={{ textAlign: 'center' }}>
                            <img src={about} alt="" />
                        </div>
                        <div className='col-md-6'>
                           <div className={style.about_txet}>
                           <p className='sub_heading'>
                                About Company
                            </p>
                            <h3 className='heading'>
                            You start the <span>engine</span> and your adventure begins

                            </h3>

                            <p className='theme-text'>
                             
                                Our team, seasoned with expertise from iconic luxury brands like Mercedes-Benz, BMW, Land Rover, and Audi, is dedicated to guiding you to your perfect match. Experience unparalleled service where your delight is our benchmark.
                                Come, join our family and let us steer you towards the car you've always dreamed of.
                            </p>

                            <Link className={`btn btn-custom`}>
                            See More 
                            </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs