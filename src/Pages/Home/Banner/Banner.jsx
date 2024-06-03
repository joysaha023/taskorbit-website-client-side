import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="main-slide">
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/Z14NDH5/01.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">Hello Headers work</h2>
          <p className="text-xs md:text-base font-normal">Legend 1</p>
        </div>
      </div>
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/xMdNxSt/02.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">Hello Headers work</h2>
          <p className="text-xs md:text-base font-normal">Legend 1</p>
        </div>
      </div>
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/kXCg3TD/03.png"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">Hello Headers work</h2>
          <p className="text-xs md:text-base font-normal">Legend 1</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;