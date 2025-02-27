import React from 'react';
import CalculateEmi from '../EmiCalculator/CalculateEmi';
import styles from "./Sidebar.module.css";
import PieChart from '../LoanCalculator/PieChart';
const Sidebar = () => {
  return (
    <div>
       <div className={styles.calculte_emi_card}>
       <div className={styles.calculte_emi}>
       <h5 className='mb-0 flex-shrink-0'>
            Calculate EMI
        </h5>
        <span class= {`align-self-end ${styles.spacer}`}></span>
       </div>
        <div className=''>
        <CalculateEmi/>
        </div>
      
       </div>
    </div>
  )
}

export default Sidebar