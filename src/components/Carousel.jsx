import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://viettelpost.com.vn/wp-content/uploads/2023/10/1920x600-1-1.jpg"
            alt="slide 1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://viettelpost.com.vn/wp-content/uploads/2023/08/banner-web-1.jpg"
            alt="Slide 2"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://viettelpost.com.vn/wp-content/uploads/2023/05/banner-web-18.jpg"
            alt="Slide 3"
          ></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
