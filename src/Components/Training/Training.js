import React from "react";

const Training = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          Training Summary:
        </h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-3">

        <div className="col text-start ">
            <div className=" ">
              <p className="fs-4 fw-bold text-success ">Web Development</p>

              <p className="fs-5">
                <span className="fw-bold">Institute:</span>{" "}
                <span>Programming Hero </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Location:</span>{" "}
                <span>
                Level-4, 34, Awal Centre, Banani, Dhaka
                </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold"> Year:</span> <span>2023</span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Duration:</span> <span>6 Months</span>
              </p>
            </div>
          </div>


          <div className="col text-start ">
            <div className=" ">
              <p className="fs-4 fw-bold text-success">Windows Server 2016 (MCSA)</p>

              <p className="fs-5">
                <span className="fw-bold">Institute:</span>{" "}
                <span>IBCS-PRIMAX Software (Bangladesh) Ltd </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Location:</span>{" "}
                <span>
                  House- 6/2, (Level: 4 & 6) Kazi Nazrul Islam Road, Block- F,
                  Dhaka 1207{" "}
                </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold"> Year:</span> <span>2018</span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Duration:</span> <span>3 Months</span>
              </p>
            </div>
          </div>


          <div className="col text-start ">
            <div className=" ">
              <p className="fs-4 fw-bold  text-success">Cisco Certified Network Associate (CCNA) </p>

              <p className="fs-5">
                <span className="fw-bold">Institute:</span>{" "}
                <span>Techno it solution Ltd. </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Location:</span>{" "}
                <span>
                Code Bari, Cumilla
                </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold"> Year:</span> <span>2017 </span>
              </p>
              <p className="fs-5">
                <span className="fw-bold">Duration:</span> <span>3 Months</span>
              </p>
            </div>
          </div>

          
          </div>
        </div>
      
    </div>
  );
};

export default Training;
