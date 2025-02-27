import React from "react";
import styles from "./Booknow.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ContactForm } from "../ContactForm";

const Booknow = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    testDriveDate: "",
    location: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission, e.g., send to API
  };

  return (
    <div>
      <div className="container">
        <div className=" text-center">
          <div className="">
            <div className={styles.form_card}>
              <div className={styles.bg_color}>
                <h3 className="text-white p-4 mb-0 pb-0">Fill Form For Booking</h3>
                {/* <Form className={styles.contact_form} onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formFullName"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Customer Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formPhoneNumber"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Customer mobile number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-white" controlId="message">
                    <Form.Label>E mail</Form.Label>
                    <Form.Control
                      name="testDriveDate"
                      value={formData.testDriveDate}
                      onChange={handleChange}
                      type="mail"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-white" controlId="location">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Message"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="text-center">
                  <Button
                    className={styles.submit_btn}
                    type="submit"
                  >
                    Submit
                  </Button>
                  </div>
                </Form> */}
                 <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booknow;
