import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import useWindowDimensions from "./../services/windowSize";
import { posts } from "../services/getPosts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";
import "../styles/main.css";

export default function BlogsSwiper() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        navigation={width > 960 ? true : false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          minWidth: "300px",
          height: "20vw",
          minHeight: "375px",
          marginBottom: "10%",
          borderRadius: "10px",
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post._id} className="swiper-background">
            {width > 960 && (
              <div style={{ width: "100%", height: "100%" }}>
                <img src={post.image} alt={post._id} />
              </div>
            )}
            <div className="swiper-text-container">
              <div
                className="gradient-bg"
                style={{
                  padding: "5px 10px",
                  borderRadius: "100px",
                  fontSize: "small",
                }}
              >
                {post.tag}
              </div>
              <p>
                <span className="subHeader-text">{post.header}</span>
                <br />
                <br />
                <span>{post.text}</span>
              </p>
              <Link
                to={`/blogs/${post._id}`}
                className="btn-sm link white-outline"
              >
                READ MORE
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
