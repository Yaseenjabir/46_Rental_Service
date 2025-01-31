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
import { ProjectVehicleTypes } from "@/app/utils/utilInfo";
import Link from "next/link";

export default function SliderComp() {
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
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {ProjectVehicleTypes.map((item) => {
          return (
            <SwiperSlide key={item.value} className={styles.swiperSlide}>
              <Link
                href={`/vehicle-types/${item.value}`}
                className="max-w-[200px] lg:max-w-[150px] w-full h-min before:content-[''] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#f8f7ffa6] hover:before:bg-transparent cursor-pointer"
              >
                <Image
                  src={item.img ? item.img : ""}
                  layout="responsive"
                  width={1110}
                  height={430}
                  alt="car-pic"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
