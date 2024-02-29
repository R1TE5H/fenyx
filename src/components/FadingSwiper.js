import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { photos } from "../services/getPhotos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../styles/swiper.css";
import "../styles/main.css";

// import required modules

export default function FadingSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        style={{ width: "50%", height: "100vh", filter: "grayscale(100%)" }}
        className="mySwiper"
      >
        {photos.map((element) => (
          <SwiperSlide key={element.id}>
            <img src={element.url} alt={element.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
