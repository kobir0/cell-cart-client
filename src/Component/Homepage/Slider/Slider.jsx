import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
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
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs  btn-outline">
          1
        </a>
        <a href="#item2" className="btn btn-xs btn-outline ">
          2
        </a>
        <a href="#item3" className="btn btn-xs  btn-outline">
          3
        </a>
      </div>

      {/* banner text */}

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/B2PQD09/22380-e-commerce.gif"
            alt=""
            className="max-w-sm rounded-lg "
          />
          <div className="max-w-md text-center ">
            <h1 className="text-5xl text-slate-500 font-bold">
              Well Come You <br></br> To <br></br>{" "}
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
