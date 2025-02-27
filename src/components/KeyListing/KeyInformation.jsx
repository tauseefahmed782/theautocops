import React from 'react';
import style from './Key.module.css';
import dateIcon from '../../Images/singleproduct/date.jpg';
import mileageIcon from '../../Images/singleproduct/milage.jpg';
import transformIcon from '../../Images/singleproduct/transformation.jpg';
import performanceIcon from '../../Images/singleproduct/performance.jpg';
import petrolIcon from '../../Images/singleproduct/petrol.jpg';
import previousowner from '../../Images/singleproduct/previousowner.jpg';
import kmsdone from '../../Images/singleproduct/kms done.jpg';




const KeyInformation = ({ data }) => {
  const keyInfo = [
    {
      icon: mileageIcon,
      title: 'Registration/State',
      value: data.performance,
    },
    {
      icon: transformIcon,
      title: 'Insurance',
      value: data.transmission,
    },
    {
      icon: petrolIcon,
      title: 'Fuel Type',
      value: data.fuel_type,
    },
    {
      icon: dateIcon,
      title: 'Registration/Year',
      value: data.year,
    },
    {
      icon: previousowner,
      title: 'Owner',
      value: data.mileage,
    },
    {
      icon: kmsdone,
      title: 'KMS Done',
      value: data.kms_done,
    },
  ];

  return (
    <div className={style.key_information}>
      <div className={style.listing_key}>
        {keyInfo.map((item, index) => (
          <div
            key={index}
            className={`${style.listing_information} ${style.listing_information_mileage}`}
          >
            <h6 className={style.listing_title}>
              <img src={item.icon} width={28} alt={item.title} />
              <br />
              <span>{item.title}</span>
            </h6>
            <span className={style.listing_information_text}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyInformation;
