import React from "react";
import "../css/styles.css";
import { useAuth } from "../Firebase/AuthContext";
import logo from "../assets/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const { currentUser, getRole } = useAuth();
  const newRole = getRole();
  console.log(`role inside the header is ${newRole}`);
  console.log(currentUser);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid>
          <Link to="/">
            <img className="img-responsive" src={logo} alt="brand-logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toogler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-item nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-item nav-link" to="/service">
                Services
              </Link>
              {!currentUser && (
                <Link className="nav-item nav-link" to="/register">
                  Sign Up
                </Link>
              )}
              {currentUser && (
                <Link className="nav-item nav-link" to="/profile">
                  Profile
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
