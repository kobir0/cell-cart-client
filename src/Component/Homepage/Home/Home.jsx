import React from "react";
import AdvertiseProduct from "../AdevertiseProduct/AdvertiseProduct";
import AppBanner from "../AppBanner/AppBanner";
import Brands from "../Category/Brands";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Brands></Brands>
      <AdvertiseProduct></AdvertiseProduct>
      <AppBanner></AppBanner>
    </div>
  );
};

export default Home;
