import React from "react";


const Contract = () => {
  
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          Contract Me:
        </h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-2">
          <div className="col text-start ">
            <address>
              <p className=""><span className="fw-bold text-success">Address:</span> <span>53/2, Morol Bazar, Natun Bazar, Dhaka</span></p>
              
             <p> <span className="fw-bold text-success">Phone:</span> <span>+8801402948512</span></p>
             <p> <span className="fw-bold text-success">Email:</span> <span>mdhelaluddin.cse@gmail.com</span></p>
            </address>

            <div>
            <a href="https://www.facebook.com/mdhelaluddin.info" target=" ">
              <i class="fa-brands fa-square-facebook fs-1 p-2"></i>
            </a>
            <a href="https://www.linkedin.com/in/md-helal-uddin-48680527b/" target=" ">
              <i class="fa-brands fa-linkedin fs-1 p-2"></i>
            </a>
            <a href="https://twitter.com/mdhelaluddin_" target=" ">
              <i class="fa-brands fa-square-twitter fs-1 p-2 "></i>
            </a>
            <a href="https://github.com/mdhelaluddinbd" target=" ">
              <i class="fa-brands fa-github fs-1 p-2 text-black"></i>
            </a>
            <a href="mailto:mdhelaluddin.cse@gmail.com" target=" ">
              {" "}
              <i class="fa-solid fa-envelope fs-1 p-2 text-danger"></i>
            </a>
            </div>
          
            
          </div>

          <div className="col text-start ">
           
            <form action="" className="d-flex flex-column">
                <input className="mt-3 fs-4 border p-1 bg-light rounded" type="text" placeholder="Enter Your Name" />
                <input className="mt-3 fs-4 border p-1 bg-light rounded" type="email" placeholder="Enter Your Email" />
                <input className="mt-3 fs-4 border p-1 bg-light rounded" type="email" placeholder="Enter Your Subject" />
                <input className="mt-3 fs-4 border p-1 bg-light rounded" type="text" name="message" id="" style={{height:"5rem"}}/>
                <input className="btn btn-primary mt-3 fs-4 border p-1  rounded" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
