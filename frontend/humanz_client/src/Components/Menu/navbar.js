import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="backgroundImage">
        <Navbar.Brand href="/home">Humanz Clients</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/geolocation">Gelocation</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
