import React from "react";
import AppBanner from "../AppBanner/AppBanner";
import Brands from "../Category/Brands";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Brands></Brands>
      <AppBanner></AppBanner>
    </div>
  );
};

export default Home;
