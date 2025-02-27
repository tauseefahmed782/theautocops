import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testdrive.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const TestDrive = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location :"",
    date: "",
    rcImage: null,
  });

  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
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
    setLoading(true); // Set loading to true

    const data = new FormData();
    data.append("full_name", formData.fullName);
    data.append("location", formData.location);
    data.append("phone_number", formData.phoneNumber);
    data.append("date", formData.date);

    if (formData.rcImage) {
      data.append("rc_image", formData.rcImage);
    }

    try {
      const response = await axios.post(
        "https://theautocops.com/test-drive.php",
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
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <div className="container">
        <div className=" text-center">
          <div className="">
            <div className={styles.form_card}>
              <div className={styles.bg_color}>
                <h3 className="text-white p-4">Fill Form For Your Drive</h3>
                <Form className={styles.contact_form} onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formFullName"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formPhoneNumber"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your mobile number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-white" controlId="date">
                    <Form.Label>Test drive Date</Form.Label>
                    <Form.Control
                      name="date"
                      value={formData.testDriveDate}
                      onChange={handleInputChange}
                      type="date"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 text-white" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Location"
                      name="location"
                      value={formData.location}
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
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </Form>
                {formStatus && <p className="text-danger mt-3">{formStatus}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrive;
