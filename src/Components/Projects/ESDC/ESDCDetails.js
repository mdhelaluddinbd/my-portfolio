import React from "react";
import ESDC from "../../../Assets/projects-images/ESD/2.PNG";
import { Link } from "react-router-dom";

const ESDCDetails = () => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 ">
        <img className="img-fluid" src={ESDC} alt="" srcset="" />
      </div>

      <div className="col-sm-12 col-md-6 ">
        <p className="mb-2   fw-bold bg-light  d-inline-block p-2 rounded border">Description:</p>
        <p className=" text-start ">
          The Emergency Service In Dhaka City web-based totally utility goals to
          provide a comprehensive platform for getting access to critical
          emergency services in Dhaka metropolis. The application specializes in
          supporting citizens in want via supplying short get entry to
          hospitals, blood banks, doctors, police offerings, hearth services,
          and power-related assistance. The improvement system follows Agile
          methodology, permitting iterative improvement, frequent collaboration
          with stakeholders, and version to converting necessities. HTML, CSS,
          Bootstrap 5, React.js, MongoDB, and Node.js are utilized because the
          middle technology for implementing the application's front-end and
          back-end.
        </p>

        <div>
          <div>
            <span className="fw-bold">Technology used:</span>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              HTML 5
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              CSS 3
            </Link>
            <Link className="btn btn-success fw-bold rounded-4 m-3 p-2">
              Bootstrap 5{" "}
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              Javascript ES6
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              React Js
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              MongoDB
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              Node JS
            </Link>
            <Link className="btn btn-success fw-bold rounded-4 m-3 p-2">
              Express JS
            </Link>
          </div>

          <div>
            <a
              className="btn btn-outline-success m-2"
              href="https://github.com/mdhelaluddinbd/emergency-service-client-site" target=" "
            >
              {" "}
              Client Site Code
            </a>
            <a
              className="btn btn-outline-success m-2"
              href="https://github.com/mdhelaluddinbd/emergency-service-server-site" target=" "
            >
              {" "}
              Server Site Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESDCDetails;
