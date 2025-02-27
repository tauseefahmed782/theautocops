import React, { useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../pages/Contact/contact.module.css";
import style from "./SellCarForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const SellCarForm = () => {
  const [step, setStep] = useState(1);
  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    mgfYear: "",
    kmsDriven: "",
    registrationNo: "",
  });
  const [carImages, setCarImages] = useState([null, null, null, null]);
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    mobileNo: "",
    city: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formStatus, setFormStatus] = useState("");

  const navigate = useNavigate();

  function generateCaptcha() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return `${a} + ${b}`;
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleCarDetailChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleImageChange = (index, file) => {
    const newImages = [...carImages];
    newImages[index] = file;
    setCarImages(newImages);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...imagePreviews];
        newPreviews[index] = reader.result;
        setImagePreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [a, , b] = captcha.split(" ");
    const expected = parseInt(a) + parseInt(b);
    if (parseInt(userInfo.captchaInput) !== expected) {
      alert("Captcha is incorrect. Please try again.");
      setCaptcha(generateCaptcha());
      setUserInfo({ ...userInfo, captchaInput: "" });
      return;
    }

    const formData = new FormData();
    formData.append("car_make", carDetails.make);
    formData.append("car_model", carDetails.model);
    formData.append("manufacturing_year", carDetails.mgfYear);
    formData.append("kms_driven", carDetails.kmsDriven);
    formData.append("registration_number", carDetails.registrationNo);
    formData.append("name", userInfo.name);
    formData.append("email", userInfo.email);
    formData.append("mobile_number", userInfo.mobileNo);
    formData.append("city", userInfo.city);
    formData.append("captcha", userInfo.captchaInput);

    carImages.forEach((image, index) => {
      if (image) formData.append(`upload_image_${index + 1}`, image);
    });

    try {
      const response = await axios.post(
        "https://theautocops.com/car-sell.php",
        formData
      );

      if (response.data.success) {
        navigate("/thankyou"); // Redirect to thank you page
      } else {
        setFormStatus(response.data.error || "There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <div className={`${styles.contact} pt-0 pb-0`}>
      <Form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.contact_card}>
          <ProgressBar now={(step / 3) * 100} className="mb-4" />

          {step === 1 && (
            <div className={style.CustomForm}>
              <h3 className={`${style.formHeading}`}>FILL YOUR CAR DETAILS</h3>
              <Form.Group className="mb-3" controlId="carMake">
                <Form.Label>Car Make</Form.Label>
                <Form.Control
                  style={{ background: '#161C28', color: '#fff', boxShadow: 'none' }}
                  as="select"
                  name="make"
                  value={carDetails.make}
                  onChange={handleCarDetailChange}
                  required
                >
                  <option value="">Select Make</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="BMW">BMW</option>
                  <option value="Jaguar Land Rover">Jaguar Land Rover</option>
                  <option value="Audi">Audi</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Maserati">Maserati</option>
                  <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
                  <option value="Other Brands">Other Brands (All other non-luxury brands)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="carModel">
                <Form.Label>Car Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Car Model"
                  name="model"
                  value={carDetails.model}
                  onChange={handleCarDetailChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mgfYear">
                <Form.Label>Manufacturing Year</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="e.g., 2020"
                  name="mgfYear"
                  value={carDetails.mgfYear}
                  onChange={handleCarDetailChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="kmsDriven">
                <Form.Label>KMs Driven</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter KMs Driven"
                  name="kmsDriven"
                  value={carDetails.kmsDriven}
                  onChange={handleCarDetailChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registrationNo">
                <Form.Label>Registration No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Registration Number"
                  name="registrationNo"
                  value={carDetails.registrationNo}
                  onChange={handleCarDetailChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className={style.CustomForm}>
              <h3 className="text-white mb-3">Upload Your Car Images</h3>
              {[0, 1, 2, 3].map((index) => (
                <Form.Group className="mb-3" controlId={`carImage${index}`} key={index}>
                  <Form.Label>Upload Image {index + 1}</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e.target.files[0])}
                    required={index === 0}
                  />
                  {imagePreviews[index] && (
                    <img
                      src={imagePreviews[index]}
                      alt={`Preview ${index + 1}`}
                      className="mt-2"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                  )}
                </Form.Group>
              ))}

              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={style.CustomForm}>
              <h3 className="text-white mb-3">Your Information</h3>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleUserInfoChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleUserInfoChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mobile Number"
                  name="mobileNo"
                  value={userInfo.mobileNo}
                  onChange={handleUserInfoChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={userInfo.city}
                  onChange={handleUserInfoChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="captchaInput">
                <Form.Label>Captcha: {captcha}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Captcha"
                  name="captchaInput"
                  value={userInfo.captchaInput}
                  onChange={handleUserInfoChange}
                  required
                />
              </Form.Group>

              {formStatus && <div className="mb-3 text-danger">{formStatus}</div>}

              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handlePrevious}>
                  Previous
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};
