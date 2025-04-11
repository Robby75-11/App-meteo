import React from "react";
import { Navbar, Image } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center ms-2">
        <Image
          src="/images.jpg"
          alt="GloboMeteo Logo"
          height="30"
          className="me-2"
        />
        Meteo in the World
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">City</Navbar.Collapse>
      <Navbar.Brand href="#home">
        Green hope good weather hopefully
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end me-2"
      ></Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
