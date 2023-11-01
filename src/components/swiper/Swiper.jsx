import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "./swiper.css";
import "swiper/css";

export const SwiperAppleTV = () => {
  return (
    <Swiper
      style={{
        height: "80vh",
        width: "100%",
        paddingTop: "20px",
        marginBottom: "20px",
      }}
      slidesPerView={1.2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop="true"
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide className="slide-1"></SwiperSlide>
      <SwiperSlide className="slide-2"></SwiperSlide>
      <SwiperSlide className="slide-3"></SwiperSlide>
      <SwiperSlide className="slide-4"></SwiperSlide>
      <SwiperSlide className="slide-5"></SwiperSlide>
      <SwiperSlide className="slide-6"></SwiperSlide>
    </Swiper>
  );
};
