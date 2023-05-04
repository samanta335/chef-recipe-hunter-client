import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <h2 className="mt-4 text-success">Bangladeshi Food</h2>
      <Navbar className="mx-5" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing" className="ms-3">
                Blog
              </Nav.Link>
            </Nav>
            <Nav className="ms-5">
              <Nav.Link href="#deets">
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                {user?.email ? (
                  <Button onClick={handleLogout}>Logout</Button>
                ) : (
                  <Button variant="outline-info">Login</Button>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="border-start ps-2">
        <h5>Login With</h5>
        <Button variant="outline-success">
          <FaFacebook></FaFacebook> Login With Facebook
        </Button>
        <div className="mt-2 ms-1">
          <Button variant="outline-secondary">
            <FaGithub></FaGithub> Login With Github
          </Button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
