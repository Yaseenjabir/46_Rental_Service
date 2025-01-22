"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles2.css";
import styles from "./BrandsSlider.module.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

interface Slide {
  id: number;
  img: string;
}

export default function SliderComp() {
  const data: Slide[] = [
    {
      id: 1,
      img: "https://alweamtransport.com/assets/images/v-types/1698144294_alweam-icon-car.svg",
    },
    {
      id: 2,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg",
    },
    {
      id: 3,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg",
    },
    {
      id: 4,
      img: "https://alweamtransport.com/assets/images/v-types/1699533779_alweam-icon-minivan.svg",
    },
    {
      id: 5,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-luxury-bus.svg",
    },
    {
      id: 6,
      img: "https://alweamtransport.com/assets/images/v-types/1698144294_alweam-icon-car.svg",
    },
    {
      id: 7,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg",
    },
    {
      id: 8,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg",
    },
    {
      id: 9,
      img: "https://alweamtransport.com/assets/images/v-types/1699533779_alweam-icon-minivan.svg",
    },
    {
      id: 10,
      img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-luxury-bus.svg",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 2500, // Adjust the autoplay delay (2.5 seconds)
          disableOnInteraction: false, // Keeps autoplay running after user interactions
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((item: Slide) => {
          return (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div className="max-w-[200px] lg:max-w-[150px] w-full h-min before:content-[''] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#f8f7ffa6] hover:before:bg-transparent cursor-pointer">
                <Image
                  src={item.img}
                  layout="responsive"
                  width={1110}
                  height={430}
                  alt="car-pic"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
