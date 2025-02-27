import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './faq.css';

// Define prop types for FAQ item
const Faq = ({ faqs }) => {
  return (
    <div>
      <section className="faq_sec">
        <div className="container">
          <div >
            <h3 className="heading mb-4">Frequently Asked Questions</h3>
          </div>
          <Accordion defaultActiveKey="0">
            {faqs?.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  {faq.question}
                  <FontAwesomeIcon icon={faChevronDown} />
                </Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Faq;
