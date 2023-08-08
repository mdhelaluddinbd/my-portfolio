import React from "react";
import { Link } from "react-router-dom";



const Skill = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          Technical Skills:
        </h2>
       
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-3">
          <div className="col text-start ">
            
           <div className=""> 
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">HTML 5</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">CSS 3</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">Bootstrap 5 </Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">Tailwind </Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">Javascript ES6</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">React Js</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">MongoDB</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">Node JS</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2">Express JS</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2"> REST API</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2"> Github</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2"> MCSA</Link>
          <Link className="btn btn-success fw-bold fs-5 rounded-4 m-3 p-2"> CCNA</Link>


          
           
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
