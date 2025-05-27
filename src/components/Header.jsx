// src/components/Header.jsx
import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Offcanvas,
    NavDropdown,
    Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar
            key="lg"
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
            className="px-3" // flex-column 제거하고 padding만
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <Image
                        src="src\assets\img\89357492.png"
                        roundedCircle
                        width="40"
                        height="40"
                        alt="git profile"
                    />
                    <span>DahnDell</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto"> {/* 오른쪽 정렬 */}
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>

                            <NavDropdown title="Dropdown" id="dropdown-nav">
                                <NavDropdown.Item as={Link} to="/dropdown1">Dropdown 1</NavDropdown.Item>
                                <NavDropdown drop="end" title="Deep Dropdown">
                                    <NavDropdown.Item as={Link} to="/deep/dropdown1">Deep Dropdown 1</NavDropdown.Item>
                                    <NavDropdown.Item as="button" disabled>Deep Dropdown 2</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>

            {/* 소셜 링크 */}
            <div className="text-center w-100 mt-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://skype.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
                    <i className="fab fa-skype"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </Navbar>
    );
};

export default Header;
