import React from "react";
import skyNews from "../../../Assets/projects-images/sky-news/Signup.PNG";
import { Link } from "react-router-dom";

const SkyNewsDetails = () => {
  return (
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 ">
        <img className="img-fluid" src={skyNews} alt="" srcset="" />
      </div>

      <div className="col-sm-12 col-md-6 ">
        <p className="mb-2   fw-bold bg-light  d-inline-block p-2 rounded border">
          Description:
        </p>
        <p className=" text-start ">
          This is my single page Sky News project.I have use in my project such
          as : HTML 5,CSS 3,Bootstrap 5,JavaScript (ES6),React.js,Node.js and
          Express.js .I also have use in my project Contexts API,Firebase
          Authentication,Private Route,Email Verification,User create ,Update
          Profile.
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
              Contexts API
            </Link>
            <Link className="btn btn-success fw-bold  rounded-4 m-3 p-2">
              Firebase Authentication
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
              href="https://github.com/mdhelaluddinbd/sky-news-client"
              target=" "
            >
              {" "}
              Client Site Code
            </a>
            <a
              className="btn btn-outline-success m-2"
              href="https://github.com/mdhelaluddinbd/sky-news-server"
              target=" "
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

export default SkyNewsDetails;
