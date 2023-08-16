import React from "react";
import NavLink from "react-bootstrap/esm/NavLink";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 footer-bg-color container">
      <div className="row justify-content-between align-items-center ">
        <div className=" col-lg -4 col-md-6 col-sm-12 ">
          <NavbarBrand href="#home">
            <span className="text-white fw-bold fs-2">Coder</span>{" "}
            <span className="text-warning fw-bold">Life</span>
          </NavbarBrand>
        </div>

        <div className="col-lg -4 col-md-6 col-sm-12 mt-md-3">
          <h4 className="text-primary text-start">Social Link</h4>

          <div className="d-flex flex-column text-start">
            <a
              className="text-white fw-bold text-decoration-none"
              href="https://www.facebook.com/mdhelaluddin.info"
              target=" "
            >
              Facebook
            </a>
            <a
              className="text-white fw-bold text-decoration-none"
              href="https://www.linkedin.com/in/md-helal-uddin-48680527b/"
              target=" "
            >
              Linkedin
            </a>
            <a
              className="text-white fw-bold text-decoration-none"
              href="https://twitter.com/mdhelaluddin_"
              target=" "
            >
              Twitter
            </a>
            <a
              className="text-white fw-bold text-decoration-none"
              href="https://github.com/mdhelaluddinbd"
              target=" "
            >
              Github
            </a>
          </div>
        </div>

        <div className="col-lg -4 col-md-6 col-sm-12 ">
          <div className=" d-flex flex-column justify-content-evenly  p-2">
            <h4 className="text-primary text-start">Quick Link</h4>
            <NavLink as={Link} to={"/about"} className="text-white fw-bold text-start">
              About
            </NavLink>
            <NavLink as={Link} to={"/project"} className="text-white fw-bold text-start">
              Projects
            </NavLink>
            <NavLink as={Link} to={"/contract"} className="text-white fw-bold text-start">
              Contract
            </NavLink>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="text-white" />
        <p className="p-2 text-white fw-bold">
          Copyright @ 2023 CoderLife. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
