import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-image mt-5 p-5 text-center shadow-5-strong rounded mb-5 text-white"
      style={{
        backgroundImage: `url(https://www.ekushey-tv.com/media/imgAll/2019April/ilish-etv20190412111753.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <h1 className="mt-5">Traditional Food in Bangladesh</h1>
      <p className="fw-semibold">
        Traditionally Bengalis at home and abroad eat Panta Bhat (overnight
        steeped rice),
        <br />
        Ilish (Hilsa Fish) and varieties of Bhorta to commemorate Pohela
        Boishakh.
      </p>
    </div>
  );
};

export default Banner;
