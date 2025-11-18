import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const banners = [banner1, banner2, banner3];

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className="bg-gray-100 relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-navigation-size": "35px",
        }}
        loop={true}
        spaceBetween={10}
        className="mySwiper2"
        onSwiper={setSwiperInstance}
      >
        {banners.map((b, i) => (
          <SwiperSlide key={i}>
            <img className="w-full h-full" src={b} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute cursor-pointer top-1/2 left-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 transition-all"
      >
        <IoIosArrowBack size={25} />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute cursor-pointer top-1/2 right-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 transition-all"
      >
        <IoIosArrowForward size={25} />
      </button>
    </div>
  );
};

export default Banner;
