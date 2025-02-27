import React from 'react'
import style from './Sell.module.css'
import icon from '../../../Images/iconbox-image_01.png'
const steps = [
  {
    title: 'Select Car',
    description: 'To contribute to positive change and achieve our sustainability goals with many extraordinary',
  },
  {
    title: 'Get Offer',
    description: 'Receive a competitive offer within minutes for your vehicle, ensuring a fair and transparent process.',
  },
  {
    title: 'Sell Your Car',
    description: 'Complete the sale quickly and easily with our hassle-free process, getting paid instantly.',
  },
];

const SellCar = () => {
  return (
    <>
      <div className='container main_page'>
        <div className={style.sell_your_car}>
        <p className='sub_heading'>
          With The Autocops
          </p>
          <h3 className='heading'>
          SELL YOUR CAR
          </h3>
         
          <div className='row'>

          {steps.map((step, index) => (
            <div className='col-md-4' key={index}>
              <div className={style.step_card}>
                <img src={icon} alt="" />
                <h4 className={style.heading}>
                  {step.title}
                </h4>
                <p className={`theme-text ${style.description}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SellCar