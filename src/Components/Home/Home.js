import React from "react";
import Image from "../../Assets/Md_Helal_Uddin.jpg";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import homeImg from '../../Assets/homeOne.png';





const Home = () => {
  return (
    <div className="container ">
      <div className="container row mt-5">
        <div className=" col-lg-7">
          
          <h1 className="bgColor rounded text-white d-inline px-2">
            <span>
              <Typewriter
                words={["Hi, I am Md.Helal Uddin"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="fw-bold fs-2">
            As a <span className="text-success">Frontend Developer</span>
          </p>

          <p className="textAlignment fs-5 mt-5">
            I am an enthusiastic, self-motivated, reliable, responsible and hard
            working person. I am a mature team worker and adaptable to all
            challenging situations. I am able to work well both in a team
            environment as well as using own initiative.
          </p>
          <h5 className="text-start mt-4">Social Link:</h5>
          <div className="text-start">
            <a href="https://www.facebook.com/mdhelaluddin.info" target=" ">
              <i class="fa-brands fa-square-facebook fs-2 p-2"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/md-helal-uddin-48680527b/"
              target=" "
            >
              <i class="fa-brands fa-linkedin fs-2 p-2"></i>
            </a>
            <a href="https://twitter.com/mdhelaluddin_" target=" ">
              <i class="fa-brands fa-square-twitter fs-2 p-2 "></i>
            </a>
            <a href="https://github.com/mdhelaluddinbd" target=" ">
              <i class="fa-brands fa-github fs-2 p-2 text-black"></i>
            </a>
            <a href="mailto:mdhelaluddin.cse@gmail.com" target=" ">
              {" "}
              <i class="fa-solid fa-square-envelope fs-2 p-2 text-danger"></i>
             
            </a>
          </div>
        </div>

        <div className="col-lg-5">
          <img
            className="img-fluid   rounded   border rounded border-2 hoverImage "
            src={Image}
            alt=""
            srcset=""
          />
        </div>

        <div className="mt-5 row">
          
        <div className="col-sm-12 col-md-12 col-lg-8">
        <div className="" >
        <img className="img-fluid border rounded" src={homeImg} alt="" srcset="" />
        </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4 mt-2">
        <h4 className="text-start">Importance of SDLC</h4>
         <div className=" d-flex align-items-start justify-content-start">
         <ul className="text-start">
          <li>Structured Approach</li>
          <li>Risk Management</li>
          <li>Quality Assurance</li>
          <li>Cost and Time Estimation</li>
          <li>Effective Communication</li>
          <li>Customer Satisfaction</li>
          <li>Flexibility and Adaptability</li>
         </ul>
         </div>
         <h4 className="text-start">Front-End Technologies</h4>
         <div className=" d-flex align-items-start justify-content-start">
         <ul className="text-start">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>React.js</li>
         
         </ul>
         </div>

        </div >
         
        </div>

        
      </div>
    </div>
  );
};

export default Home;
