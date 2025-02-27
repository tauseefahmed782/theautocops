  import React, { useEffect, useRef, useState } from "react";
  import Nav from "react-bootstrap/Nav";
  import Navbar from "react-bootstrap/Navbar";
  import navLogo from "../../Images/logos/autocops_logo.png";
  import style from "./Header.module.css";
  import Button from "react-bootstrap/Button";
  import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
  import Blog from './../../pages/Blog/Blog';

  const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [isSidebarActive, setSidebarActive] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
      setSidebarActive(!isSidebarActive);
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarActive(false);
      }
    };

    useEffect(() => {
      if (isSidebarActive) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isSidebarActive]);

    // Close sidebar when navigating to a different route
    useEffect(() => {
      setSidebarActive(false); // Close the sidebar when the location changes
    }, [location]);

    return (
      <>
        <div className="header">
          <Navbar expand="lg" className={style.header_bg}>
            <div className="container">
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img
                    className="logo img img-fluid pr-4"
                    width={200}
                    src={navLogo}
                    alt="logo"
                  />
                </Link>
              </Navbar.Brand>
              <button
                className={`${style.mr2} navbar-toggler`}
                type="button"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end gap-lg-5"
              >
                <Nav className={` ${style.navbar_menu}`}>
                  <Link to="/">Home</Link>
                  <Link to="/aboutus">About us</Link>
                  <Link to="/stock">Shop</Link>
                  <Link to="/sell">Sell</Link>
                  <Link to="/financing">Financing</Link>
                  <Link to="/insurance">Insurance</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/our-videos">Our Videos</Link>
                </Nav>
                <div className="d-flex">
                  <Link to="/contact">
                    <Button variant="" className={style.btn_call}>
                      Talk to Car Expert
                    </Button>
                  </Link>
                </div>
              </Navbar.Collapse>
            </div>
          </Navbar>

          <div
            ref={sidebarRef}
            className={`position-fixed bg-white h-100 ${
              isSidebarActive ? "d-block" : "d-none"
            }`}
            style={{ top: 0, left: 0, width: "250px", zIndex: 1000 }}
          >
            <Nav className="flex-column p-3">
              <Nav className={` ${style.header_bg}  flex-column  gap-3`}>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
                <Link to="aboutus" onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link to="/stock" onClick={closeMobileMenu}>
                  Shop
                </Link>
                <Link to="/sell" onClick={closeMobileMenu}>
                  Sell
                </Link>
                <Link to="/financing" onClick={closeMobileMenu}>
                  Financing
                </Link>
                <Link to="/insurance" onClick={closeMobileMenu}>
                  Insurance
                </Link>
                <Link to="/blogs" onClick={closeMobileMenu}>
                  Blogs
                </Link>
                <Link to="/our-videos" onClick={closeMobileMenu}>Our Videos</Link>


                <div className="d-flex">
                <Link to="/contact">
                <Button variant="" className={style.btn_call}>
                    Talk to Car Expert
                  </Button>
                </Link>
                </div>
              </Nav>
            </Nav>
          </div>

          {isSidebarActive && (
            <div
              onClick={toggleSidebar}   
              className="position-fixed top-0 left-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999 }}
            ></div>
          )}
        </div>
      </>
    );
  };

  export default Header;
