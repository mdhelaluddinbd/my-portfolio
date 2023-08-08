import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import cv from '../../Assets/CV/Md_Helal_Uddin_CV.pdf';
function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="container shadow bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">
          <span className="text-danger fw-bold fs-2">Coder</span>{" "}
          <span className="text-success fw-bold">Life</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}  className="fw-bold"><i class="fa-solid fa-house pe-1"></i>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}  className="fw-bold">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to={"/education"}  className="fw-bold">
              Educations
            </Nav.Link>
            <Nav.Link as={Link} to={"/training"} className="fw-bold">
              Training
            </Nav.Link>
            <Nav.Link as={Link} to={"/skill"} className="fw-bold">
              Skill
            </Nav.Link>
            <Nav.Link as={Link} to={"/experience"} className="fw-bold">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}  className="fw-bold">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href={cv} download={cv} className="fw-bold">
              Download CV
            </Nav.Link>
            <Nav.Link as={Link} to={"/contract"} className="fw-bold">
              Contract
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
