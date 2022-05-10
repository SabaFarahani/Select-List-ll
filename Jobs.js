import React from "react";

const Job = ({
  title,
  condition1,
  condition2,
  skills1,
  skills2,
  skills3,
  skills4,
}) => {
  return (
    <main>
      <section className="job-wrapper" id="job-positions">
        <div className="job">
          <div className="job-details">
            <div className="job-profile"></div>
            <h3>{title}</h3>
            <div className="conditions">
              <span>{condition1}</span>
              <span>{condition2}</span>
            </div>
          </div>

          <div className="skills">
            <span>{skills1}</span>
            <span>{skills2}</span>
            <span>{skills3}</span>
            <span>{skills4}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Job;
