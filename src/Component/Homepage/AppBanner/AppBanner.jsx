import React from "react";

const AppBanner = () => {
  return (
    <div className=" m-14  ">
      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src="https://i.ibb.co/GMCL9Lx/84783-branndsjet-application-development.gif"
            className=" lg:w-3/6 "
            alt=""
          />
          <div className="">
            <h1 className="text-5xl font-bold">Download our app</h1>
            <p className="py-6  text-slate-500 ">
              Buying & Selling is easier from our app too! To buy or sell on the
              go, download our app.
            </p>
            <div className="block lg:flex">
              <img
                src="https://i.ibb.co/pzP2zrV/pngegg-3.png"
                alt=""
                srcset=""
                className="h-20 cursor-pointer"
              />
              <img
                src="https://i.ibb.co/vcpn7Xw/pngegg-4.png"
                alt=""
                srcset=""
                className="h-24 pb-2  cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
