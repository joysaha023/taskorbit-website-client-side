import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://taskorbit-website-server-side.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center my-6">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonial</h2>
      </div>
      <div className="px-6">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center space-y-4 items-center mx-24 my-16">
                <div className="w-24 h-24">
                  <img className="rounded-full" src={review.photo_url} />
                </div>
                <h3 className="text-xl md:text-2xl text-orange-400">
                  {review.user_name}
                </h3>
                <p className=" text-xs text-center w-full md:text-base">
                  {review.review}
                </p>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
