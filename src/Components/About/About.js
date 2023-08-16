import React from "react";
import image from "../../Assets/about.jpg";
import './About.css';

const About = () => {
  return (
    <div>
      <div className=" row mt-5 ">
        <div className="col-sm-12 col-md-6 col-lg-6 ">
          <img
            className="p-2 rounded-5 img-fluid border bg-light  "
            src={image}
            alt=""
            srcset=""
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6  ">
          <div className=" p-2  ">
            <h1 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border" >About Me</h1>
            <p className="textAlignment lh-lg">
              My name is Md.Helal Uddin and I am 25 years old.My home district
              is Sirajganj.I have completed my B.Sc in Engineering in CSE at
              Green University Of Bangladesh in 2023 and also completed my
              Diploma in Engineering at Cumilla Polytechnic Institute in 2018
              and also completed SSC in 2014.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
