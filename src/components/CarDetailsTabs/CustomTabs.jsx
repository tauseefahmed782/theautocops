import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Specification from '../accordian/Specification';
import Features from '../accordian/Features';
import './Tabs.css';

const CustomTabs = ({ specificationData, featureData }) => {
  return (
    <div>
      <Tabs defaultActiveKey="home" id="details-tabs" className="">
        <Tab eventKey="home" title="Car Specification">
          {specificationData.length > 0 ? (
            <Specification car_specification={specificationData} />
          ) : (
            <p>No specifications available.</p>
          )}
        </Tab>
        <Tab eventKey="profile" title="Car Features">
          {featureData.length > 0 ? (
            <Features car_features={featureData} />
          ) : (
            <p>No features available.</p>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
