import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="mt-5">
        <h2 className="mb-5  fw-bold bg-light  d-inline-block p-2 rounded border">
          Work Experience:
        </h2>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-2">
          <div className="col text-start ">
            <div className="ms-4">
              <h4 className="fw-bold text-success">Designation:</h4> <span className="fw-bold">Web Developer(Intern)</span>
              <p>
                Runner Cyberlink Limited | 924/1, PR Tower,Shewrapara, Begum
                Rokeya Sarani,Dhaka.
              </p>
              <p className="text-primary fw-bold">(April, 2023 - July, 2023)</p>
              <h4 className="fw-bold text-success">Responsibilities:</h4>
              <ul>
                <li>
                  Meeting with the development team to discuss user interface
                  ideas and applications.
                </li>
                <li>
                  Developing and implementing highly-responsive user interface
                  components using React concepts.
                </li>
                <li>Documenting application changes and developing updates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
