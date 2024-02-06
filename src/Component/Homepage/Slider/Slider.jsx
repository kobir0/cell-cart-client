import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import shop from "./shop.json";
import Lottie from "lottie-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">
          <img
            src="https://i.ibb.co/BcHWBJV/Screenshot-2024-02-05-at-11-34-09-PM-copy.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <img
            src="https://i.ibb.co/R4zG4wp/Screenshot-2024-02-05-at-11-34-09-PM-copy.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <img
            src="https://i.ibb.co/Npgrc44/Screenshot-2024-0cc2-05-at-11-34-09-PM.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      {/* <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item flex justify-center mt-5 w-full"
        >
          <img
            src="https://i.ibb.co/vV1mbMp/f5293a39461db811a862ae854d4527ca.jpg"
            alt=""
            className="lg:w-[1000px] lg:h-[450px] "
          />
        </div>
        <div
          id="item2"
          className="carousel-item flex justify-center mt-5 w-full"
        >
          <img
            src="https://switcher.pickaboo.com/wp-content/uploads/2022/01/Exchange-Banner-1200-400.jpg"
            alt=""
            className=" lg:w-[1000px] lg:h-[450px]  "
          />
        </div>
        <div
          id="item3"
          className="carousel-item flex justify-center mt-5 w-full"
        >
          <img
            src="https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png"
            alt=""
            className="lg:w-[1000px] lg:h-[450px] "
          />
        </div>
      </div> */}
      {/* <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs  btn-outline">
          1
        </a>
        <a href="#item2" className="btn btn-xs btn-outline ">
          2
        </a>
        <a href="#item3" className="btn btn-xs  btn-outline">
          3
        </a>
      </div> */}

      {/* banner text */}

      <div className="hero min-h-screen h ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          {/* <img
            src="https://i.ibb.co/B2PQD09/22380-e-commerce.gif"
            alt=""
            className="max-w-sm rounded-lg "
          /> */}
          <Lottie className="  lg:h-96  h-80" animationData={shop}></Lottie>
          <div className="max-w-md text-center ">
            <h1 className="lg:text-5xl text-xl text-black font-bold">
              Well Come You To
              <span className="text-violet-800 m-2 ">Cell Cart</span>
            </h1>
            <p className="py-6  text-slate-500 text-lg ">
              Sell or buy pre-owned smart phones with certified from{" "}
              <span className="text-slate-600 font-semibold  ">Cell Cart </span>
              and get{" "}
              <span className="text-slate-600 font-semibold  ">15% </span> extra
              amount for sell on stripe payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
