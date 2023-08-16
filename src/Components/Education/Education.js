import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="mt-5">
      <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">Academic Qualification:</h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-3">
        <div className="col text-start ">
          <div className=" ">
            <p className="fs-4 fw-bold text-success ">
             
            Bachelor of Science (B.Sc)
            </p>
            <p className="fs-5">
              <span className="fw-bold">Major:</span>{" "}
              <span>Computer Science & Engineering</span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Institute:</span>{" "}
              <span>Green University of Bangladesh </span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Result:</span> <span> CGPA 2.46 out of 4</span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Passing Year:</span> <span>2023</span>
            </p>
            <p className="fs-5">
              <span className="fw-bold">Duration:</span> <span>4</span>
            </p>
          </div>
        </div>

        <div className="col text-start    ">
          <p className="fs-4 fw-bold text-success">
            
          Diploma in Engineering
          </p>
          <p className="fs-5">
            <span className="fw-bold">Major:</span>{" "}
            <span>Computer Technology </span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Institute:</span>{" "}
            <span>Cumilla Polytechnic Institute </span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Result:</span>{" "}
            <span>CGPA 3.13 out of 4 </span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Passing Year:</span> <span>2018</span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Duration:</span> <span>4</span>
          </p>
        </div>

        <div className="col text-start   ">
          <p className="fs-4 fw-bold text-success">
          Secondary School Certificate(SSC)
          </p>
          <p className="fs-5">
            <span className="fw-bold">Major:</span> <span>Science</span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Institute:</span>{" "}
            <span>Talgachi Abu Ishaque High School </span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Result:</span>{" "}
            <span>CGPA 4.75out of 5 </span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Passing Year:</span> <span>2014</span>
          </p>
          <p className="fs-5">
            <span className="fw-bold">Duration:</span> <span>5</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
