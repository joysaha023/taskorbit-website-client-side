import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="main-slide">
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/bK0jLY2/banner1.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">
            Get Started Right Away with Easy-to-Customize Templates
          </h2>
          <p className="text-xs md:text-base mt-2 font-normal">
            Create and Use Template for campaign Clone Template Edit/Update
            Template Variables, Text Captcha
          </p>
        </div>
      </div>
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/Wv6CjQN/banner2.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">
            Two Step Verification, Rating
          </h2>
          <p className="text-xs md:text-base mt-2 font-normal">
            Multiple Verification Multiple Rating Options
          </p>
        </div>
      </div>
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/4p2Hb8f/banner3.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl font-bold">
            Vcode Generation, Autosubmission
          </h2>
          <p className="text-xs md:text-base mt-2 font-normal">
            VCode generation Auto Submission to MW
          </p>
        </div>
      </div>
      <div>
        <img
          className="h-[40vh] md:h-[80vh]"
          src="https://i.ibb.co/VWGyzLb/banner4.jpg"
        />
        <div className="text-box">
          <h2 className="text-xl md:text-4xl  font-bold">
            Get Started Right Away with Easy-to-Customize Templates
          </h2>
          <p className="text-xs md:text-base mt-2 font-normal">
            Create and Use Template for campaign Clone Template Edit/Update
            Template Variables, Text Captcha
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
