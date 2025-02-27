import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import navLogo from "../../Images/logos/autocops_logo.jpg";
import youtube from "../../Images/social-logins/youtub.svg";
import instagram from "../../Images/social-logins/instagram.svg";
import twitter from "../../Images/social-logins/twitter.svg";
import facebook from "../../Images/social-logins/facebook.svg";
import FooterBottom from "./FooterBottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebookSquare, faInstagram, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer_2 = () => {
  return (
    <Container>
      <div className="footer">
        <div className="row ">
          <div className="col-md-6">
            <div className="footer_col_1">
              <img
                className="logo img img-fluid pr-4"
                width={200}
                src={navLogo}
                alt="logo"
              />
              <p>
              At The Autocops, we bring together competitive pricing, unmatched service quality, and a nationwide network of satisfied customers.
              </p>
              <h6 className="footerHeading">Follow Us On</h6>
              <div className="social">
              <Link  className="" to="https://www.facebook.com/share/bdFqGYzKcFE2ybR2/?mibextid=LQQJ4d">
            <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
            <Link className="" to="https://www.instagram.com/theautocops?igsh=eHVpcjk2Nm1qZDN3&utm_source=qr">
            <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link className="" to="https://pin.it/4dZxum076">
            <FontAwesomeIcon icon={faPinterest} />
            
            </Link>
            <Link className="" to="https://youtube.com/@theautocops?si=c2YGgSfZFK7wgzs1">
            <FontAwesomeIcon icon={faYoutube} />
            </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* col */}
            <div className="footer_col">
              <h6>Useful Links</h6>

              <ul className="footer_list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            {/* col */}
            <div className="footer_col">
              <h6>Our Services</h6>
              <ul className="footer_list">
                <li>
                <Link to="/stock">Buy</Link>
                </li>
                <li>
                <Link to="/sell">Sell</Link>
                </li>
                <li>
                <Link to="/financing">Financing</Link>
                </li>
                <li>
                <Link to="/insurance">Insurance</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer_2;
