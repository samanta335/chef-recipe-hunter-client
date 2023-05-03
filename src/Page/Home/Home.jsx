import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../Banner/Banner";
import { Card } from "react-bootstrap";
import Cards from "../../Cards/Cards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cards></Cards>
    </div>
  );
};

export default Home;
