import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className={classes.nav_bg}>
      <Container>
        <Navbar.Brand href="/">
            <img src="/assets/pictures/logo-ignite.png" className={classes.logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.youtube.com/watch?v=CK-IzQhc5A8">
              Don't Click
            </Nav.Link>
            <Nav.Link href="/articles">
                Article
            </Nav.Link>
            <Nav.Link href="/donation">Donation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              Login
            </Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
