import React from "react";

import Banner from "../Banner/Banner";

import Cards from "../Cards/Cards";
import ExtraSec1 from "../ExtraSec1/ExtraSec1";
import ExtraSec2 from "../ExtraSec2/ExtraSec2";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtraSec2></ExtraSec2>
      <ExtraSec1></ExtraSec1>
      <Cards></Cards>
    </div>
  );
};

export default Home;
