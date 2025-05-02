"use client";
import React from "react";
import "./Section1.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Section1() {
  let images = [
    {
      src: "/home/Section1/1.png",
    },
    {
      src: "/home/Section1/2.png",
    },
    // {
    //   src: "/home/Section1/2.jpeg",
    // },
    // {
    //   src: "/home/Section1/3.jpeg",
    // },
    // {
    //   src: "/home/Section1/4.jpeg",
    // },
  ];

  return (
    <div className="h-fit w-full lg:w-full lg:h-full max-lg:mt-[5.2rem] overflow-hidden">
      <Swiper
        slidesPerView={1}
        effect={"cube"}
        grabCursor={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "25px",
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item.src}
              alt="banner"
              unoptimized={true}
              width={1400}
              height={340}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section1;
