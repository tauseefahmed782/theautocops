import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './cardstyling.css';

function Specification({ car_features }) {
  return (
    <Accordion defaultActiveKey="">
      {car_features.map((section, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header className='card-header p-0 m-0 justify-content-between'>
            {section.name}
            <FontAwesomeIcon icon={faChevronDown} />
          </Accordion.Header>
          <Accordion.Body className='specification-card'>
            <div className="row">
              <div className="col-md-12">
                {section.attributes.map((attribute, i) => (
                  <React.Fragment key={i}>
                    <ul className='list-inline list_style d-flex justify-content-between align-items-center m-0 py-2'>
                      <li className='list-inline-item spe_key'>
                      <h5 className="specifications  " style={{fontWeight:'600'}}>{attribute.key} : </h5>
                      </li>
                      <li className='list-inline-item'>
                        <h5 className="specifications">{attribute.value}</h5>
                      </li>
                    </ul>
                    {i < section.attributes.length - 1 && (
                      <hr className="m-0 p-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Specification;
