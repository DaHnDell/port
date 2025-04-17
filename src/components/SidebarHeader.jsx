// src/components/SidebarHeader.jsx
import React, { useState } from "react";
import { Offcanvas, Image } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

const SidebarHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button className="mobile-toggle d-lg-none" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </button>

      {/* Desktop Sidebar */}
      <aside className="sidebar d-none d-lg-flex flex-column align-items-center">
        <Image
          src="/assets/img/my-profile-img.jpg"
          roundedCircle
          width="100"
          height="100"
          alt="profile"
        />
        <h1 className="sitename mt-3">DahnDell</h1>

        {/* ScrollSpy 적용 영역만 */}
        <Scrollspy
          items={['home', 'about', 'resume', 'service', 'portfolio', 'contact']}
          currentClassName="active"
          componentTag="nav"
          className="nav flex-column text-center mt-4 w-100"
        >
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#resume" className="nav-link">Resume</a>
          <a href="#service" className="nav-link">Service</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
        </Scrollspy>

        <div className="social-links mt-auto mb-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://skype.com" target="_blank" rel="noreferrer">
            <i className="fab fa-skype"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </aside>

      {/* Offcanvas for Mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={handleClose}>Resume</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" onClick={handleClose}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/service" onClick={handleClose}>Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarHeader;