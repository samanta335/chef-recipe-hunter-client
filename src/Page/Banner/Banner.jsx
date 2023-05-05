import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="d-flex ms-5 mt-5 mb-5 ">
      <img
        className="w-50 rounded"
        src="https://www.bengalsaroma.com/wp-content/uploads/2018/03/qq.png"
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
          <button
            type="button"
            className="fw-semibold btn btn-danger px-4 ms-2 mt-2"
          >
            Let's See
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
