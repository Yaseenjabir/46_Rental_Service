"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { truncateText } from "@/app/utils/utils";
import { client } from "@/sanity/lib/client";
interface Slide {
  review: string;
  rating: number;
  username: string;
}

const query = `*[_type == "review"] | order(_createdAt desc) [0..4] {
username,
review,
rating
}`;
export default function SliderComp() {
  const [data, setData] = useState<Slide[]>();

  useEffect(() => {
    async function fetchData() {
      const res = await client.fetch(query);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500, // Delay between slides (in ms)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {data &&
          data.length > 0 &&
          data.map((item: Slide, index: number) => {
            const rating = item.rating;
            const yellowStars = Array(rating).fill(
              <IoMdStar className="text-2xl text-yellow-400" />
            );
            const grayStars = Array(5 - rating).fill(
              <IoMdStar className="text-2xl text-gray-400" />
            );

            return (
              <SwiperSlide key={index}>
                <div className="w-full bg-white py-9 px-5 flex flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center">
                    {yellowStars}
                    {grayStars}
                  </div>
                  <p className="text-gray-600 italic tracking-wide h-[265px] overflow-hidden">
                    {truncateText(item.review, 450)}
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <FaUserCircle className="text-4xl text-gray-500" />
                    <h1 className="font-bold text-lg">{item.username}</h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
