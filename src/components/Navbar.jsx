import React, { useState } from "react";
import logo from "../assets/image 1.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/Hero.css";
const NavBar = () => {
  const [responsiveNavbar, setResponsiveNavbar] = useState(false);

  const handleNavbar = () => {
    return setResponsiveNavbar(!responsiveNavbar);
  };

  return (
    <>
     

<Navbar bg="white" expand="lg" className="fixed-top shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-brand">AB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="home-link">Home</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
          </Nav>
          <a href="https://bit.ly/46lmgep" target="_blank" className=' text-decoration-none btn  contact-button'>Resume</a>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
