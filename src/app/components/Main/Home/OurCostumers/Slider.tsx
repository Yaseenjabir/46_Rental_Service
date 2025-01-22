"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
interface Slide {
  id: number;
  description: string;
  username: string;
}

const data: Slide[] = [
  {
    id: 1,
    description:
      "I had an amazing experience with this car rental service! The booking process was quick and easy, and the staff were incredibly helpful and friendly. The car I rented was clean, well-maintained, and in excellent condition. I appreciated the transparency with pricing and the flexibility with pickup and drop-off times. Overall, it was a hassle-free and pleasant experience, and I will definitely be using their service again in the future! Highly recommend!",
    username: "Yaseen Jabir",
  },
  {
    id: 2,
    description:
      "I recently rented a car from this rental service for a weekend trip, and I couldn't be more satisfied! The booking process was incredibly easy through their website, and I appreciated the clear pricing with no hidden fees. The car was in fantastic condition – clean, comfortable, and well-maintained. The staff was friendly and professional, taking the time to explain everything and answer my questions.",
    username: "Muhammad Ali",
  },
  {
    id: 3,
    description:
      "I’ve rented from a few car services before, but this one really stands out. The vehicle I rented was top-notch – it ran smoothly, had great mileage, and was very clean. What I appreciated most was the seamless pick-up and drop-off process; it took no more than 15 minutes, which was a huge time-saver. The customer service was excellent too – the staff was courteous and made sure I had everything I needed.",
    username: "Waqas Yunus",
  },
];

export default function SliderComp() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item: Slide) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-full bg-white py-9 px-5 flex flex-col items-center justify-center gap-5">
                <div className="flex items-center justify-center">
                  <IoMdStar className="text-2xl text-yellow-400" />
                  <IoMdStar className="text-2xl text-yellow-400" />
                  <IoMdStar className="text-2xl text-yellow-400" />
                  <IoMdStar className="text-2xl text-yellow-400" />
                  <IoMdStar className="text-2xl text-yellow-400" />
                </div>
                <p className="text-gray-600 italic tracking-wide">
                  {item.description}
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
