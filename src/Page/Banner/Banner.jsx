import React from "react";

const Banner = () => {
  return (
    <div className="d-flex ms-5 mt-3 mb-5 bg-light">
      <img
        className="w-50 rounded"
        src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1591994650693-0M94UIW15OMU0A4TZK0R/1.jpg"
        alt=""
      />

      <div className="ms-5 mt-5 text-danger">
        <h2>Traditional Food in Bangladesh</h2>
        <p className="fw-semibold ">
          Traditionally Bengalis at home and abroad eat Panta Bhat (overnight
          steeped rice), Ilish (Hilsa Fish) and varieties of Bhorta to
          commemorate Pohela Boishakh.
        </p>
        <Link to="/error">
          <button type="button" class="btn btn-danger px-4 ms-5 mt-2">
            Get Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
