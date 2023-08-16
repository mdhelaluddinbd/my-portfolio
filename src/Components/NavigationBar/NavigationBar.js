import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import cv from '../../Assets/CV/Md_Helal_Uddin_CV.pdf';
import './NavigationBar.css';
function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="container  nav-color"
    >
      <Container>
        <Navbar.Brand href="/">
          <span className="text-white fw-bold fs-2">Coder</span>{" "}
          <span className="text-warning fw-bold">Life</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav  " />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}  className="fw-bold text-white navTest"><i class="fa-solid fa-house pe-1"></i>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}  className="fw-bold text-white navTest">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to={"/education"}  className="fw-bold text-white navTest">
              Educations
            </Nav.Link>
            <Nav.Link as={Link} to={"/training"} className="fw-bold text-white navTest">
              Training
            </Nav.Link>
            <Nav.Link as={Link} to={"/skill"} className="fw-bold text-white navTest">
              Skill
            </Nav.Link>
            <Nav.Link as={Link} to={"/experience"} className="fw-bold text-white navTest">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}  className="fw-bold text-white navTest">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href={cv} download={cv} className="fw-bold text-white navTest">
              Download CV
            </Nav.Link>
            <Nav.Link as={Link} to={"/contract"} className="fw-bold text-white navTest">
              Contract
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
