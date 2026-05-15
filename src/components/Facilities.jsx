import React from "react";

function Facilities() {
  return (
    <section className="section text-center">
      <div className="container">
        <h2 className="heading-red">Facilities</h2>

        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card facility-card p-3">
              <h5>Smart Classes</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card facility-card p-3">
              <h5>Play Area</h5>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card facility-card p-3">
              <h5>Activity Rooms</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;