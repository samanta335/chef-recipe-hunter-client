import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center mt-5 bg-secondary text-white py-5">
      <div>
        <h4>Special Offer </h4>
        <p>10% Discount Available</p>
        <p> You can get free delivery up to 5 items order</p>
      </div>
      <div className="ms-5">
        <h4>Contact Us</h4>
        <p>
          <span className="fw-semibold">Phone Number:</span> 01500000007
        </p>
        <p>
          <span className="fw-semibold">Email:</span> chefhunter@gmail.com
        </p>
        <p>
          <span className="fw-semibold">Address:</span> Mirpur, Dhaka
        </p>
      </div>
    </div>
  );
};

export default Footer;
