import React from "react";
import "../css/styles.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toogler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav-item nav-link">About Us</Nav.Link>
              <Nav.Link className="nav-item nav-link">Services</Nav.Link>
              <Nav.Link className="nav-item nav-link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
