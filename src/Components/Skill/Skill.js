import React from "react";
import './Skill.css';
import { FaHtml5, FaCss3, FaBootstrap, FaReact,FaNodeJs ,FaGithub,FaTools,FaFigma} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiFirebase, SiTailwindcss, SiJquery,SiExpress,SiMongodb,SiAdobephotoshop,SiMicrosoft,SiCisco } from "react-icons/si";
import { TbApi ,TbBrandVscode} from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";


const Skill = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          Technical Skills:
        </h2>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100 cardHover ">
              <h2 className="bg-secondary text-white mb-0">Expertise</h2>
              <div class="card-body bg-info mt-0">
                <div className="text-start fs-5 fw-bold">
                  <p className="">
                    <FaHtml5></FaHtml5> HTML 5
                  </p>
                  <p>
                    <FaCss3></FaCss3> CSS 3
                  </p>
                  <p>
                    <FaBootstrap></FaBootstrap> Bootstrap 5
                  </p>
                  <p>
                    <SiTailwindcss></SiTailwindcss> Tailwind{" "}
                  </p>
                  <p>
                    <DiJavascript></DiJavascript> JavaScript(ES6)
                  </p>
                  <p>
                    <SiJquery></SiJquery> Jquery
                  </p>
                  <p>
                    <FaReact></FaReact> React.js
                  </p>
                  <p>
                    <SiFirebase></SiFirebase> Firebase Auth
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div class="col">
            <div class="card h-100 cardHover">
              <h2 className="bg-secondary text-white mb-0">Comfortable</h2>
              <div class="card-body bg-info mt-0">
                <div className="text-start fs-5 fw-bold">
                  <p className="">
                    <FaNodeJs></FaNodeJs> Node.js
                  </p>
                  <p>
                    <SiExpress></SiExpress> Express.js
                  </p>
                  <p>
                    <SiMongodb></SiMongodb> MongoDB
                  </p>
                  <p>
                    <TbApi></TbApi> REST API{" "}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>




          <div class="col">
            <div class="card h-100 cardHover ">
              <h2 className="bg-secondary text-white mb-0">Tools</h2>
              <div class="card-body bg-info mt-0">
                <div className="text-start fs-5 fw-bold">
                  <p className="">
                    <TbBrandVscode></TbBrandVscode> VS Code
                  </p>
                  <p>
                    <BiGitBranch></BiGitBranch> Git
                  </p>
                  <p>
                    <FaGithub></FaGithub> Github
                  </p>
                  <p>
                    <FaTools></FaTools> ChromeDevTool
{" "}
                  </p>
                 
                </div>
              </div>
            </div>
          </div>


          <div class="col">
            <div class="card h-100 cardHover ">
              <h2 className="bg-secondary text-white mb-0">Additional Skills</h2>
              <div class="card-body bg-info mt-0">
                <div className="text-start fs-5 fw-bold">
                  <p className="">
                    <FaFigma></FaFigma> Figma
                  </p>
                  <p>
                    <SiAdobephotoshop></SiAdobephotoshop> Photoshop
                  </p>
                  <p>
                    <SiMicrosoft></SiMicrosoft> Microsoft365
                  </p>
                  <p>
                    <SiCisco></SiCisco> CCNA 
{" "}
                  </p>
                  <p>
                    <SiMicrosoft></SiMicrosoft> MCSA
{" "}
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
