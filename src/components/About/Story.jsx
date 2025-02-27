import React from 'react'
import founder_img from '../../Images/aboutUsImages/coreValues.webp'
import styles from './story.module.css'
const Story = () => {
  return (
    <div className='container'>
        <div className={styles.founding_story}>
       <h6>
       Founding Story: Where It All Started
       </h6>
        <h3>
        Our Journey to Make Your Dreams Come True
        </h3>
        <p>
        In December 2019, amidst the uncertainty of the first wave of Covid-19, The Autocops emerged from a vision shared by Nikhil Kulkarni and Nitesh Sharma. Nikhil, with 25 years of experience in automobile sales, marketing, and building dealerships from the ground up, faced challenging times with unwavering determination. His philosophy, "When the going gets tough, the tough get going," was the driving force behind our inception.        </p>
        <p>
        Joining forces with Nitesh Sharma, a dynamic manager with extensive experience in retail, real estate, and the
         luxury car sector, the two founders set out to create something extraordinary. Their shared vision and passion 
         for automobiles led to the birth of The Autocops—a brand committed to connecting people with their dream cars.        </p>
       
        <img src={founder_img} className='img img-fluid text-center' alt='autocops-founder'></img>
        <p>
        Inspired by the government's "Atma Nirbhar Bharat" (Self-Reliant India) initiative, Nikhil and Nitesh embraced the 
        challenge of establishing a pre-owned luxury car business that stands out for its exceptional customer satisfaction and
         technological innovation. The Autocops was built on the ethos of “We Connect You With Your Dreams,” and we pride ourselves on delivering a 
         handcrafted and memorable experience to every customer.        </p>
    </div>
    </div>
  )
}

export default Story