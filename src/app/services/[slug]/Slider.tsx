"use client";
import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Res } from "./page";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

function AutoPlay({ res }: { res: Res }) {
  const images2 = res.images;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      {images2.length === 1 ? (
        <Image
          src={urlFor(images2[0]).width(1000).url()}
          alt="slider-pic"
          width={1000}
          height={600}
          layout="responsive"
        />
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {images2.map((item, index: number) => {
              return (
                <div key={index}>
                  <Image
                    src={urlFor(item).width(1000).url()}
                    alt="slider-pic"
                    width={1000}
                    height={600}
                    layout="responsive"
                  />
                  {/* <img src={item} /> */}
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}

export default AutoPlay;
