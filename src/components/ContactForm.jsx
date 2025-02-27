import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../pages/Contact/contact.module.css";
import Spinner from "react-bootstrap/Spinner";

export const ContactForm = ({ uploadRcImage, descriptionText }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    rcImage: null,
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      rcImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    const data = new FormData();
    data.append("full_name", formData.fullName);
    data.append("email", formData.email);
    data.append("phone_number", formData.phoneNumber);
    data.append("message", formData.message);

    if (formData.rcImage) {
      data.append("rc_image", formData.rcImage);
    }

    try {
      const response = await axios.post(
        "https://theautocops.com/send-mail.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response data:", response.data);

      if (response.data.success) {
        navigate("/thankyou");
      } else {
        setFormStatus(
          response.data.error ||
            "There was an error submitting the form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div>
      <p className={styles.sectionParagraph}>{descriptionText}</p>
      <Form className={styles.contact_form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your mobile number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="text-center">
          <Button
            className={styles.submit_btn}
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </Form>
      {formStatus && <p className="mt-3 text-danger">{formStatus}</p>}
    </div>
  );
};
