import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-flex justify-content-center">
      <h2 className="mt-5">Bangladeshi's Chef Recipe</h2>
      <Navbar className="mx-5" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing" className="ms-3">
                Blog
              </Nav.Link>
            </Nav>
            <Nav className="ms-5">
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="outline-info">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="border-start ps-2">
        <h5>Login With</h5>
        <Button variant="outline-success">Login With Facebook</Button>
        <div className="mt-2 ms-1">
          <Button variant="outline-secondary">Login With Github</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
