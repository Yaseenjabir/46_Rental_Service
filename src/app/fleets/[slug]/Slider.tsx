"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Image as sanityImage } from "sanity";
import { urlFor } from "@/sanity/lib/image";

export default function SliderComp({ data }: { data: sanityImage[] }) {
  // Allow null in state instead of undefined
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    // We can safely assign null here, since the state is Slider | null
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      {data.length === 1 ? (
        <Image
          src={urlFor(data[0]).width(400).url()}
          width={400}
          height={200}
          layout="responsive"
          alt="slider-image"
        />
      ) : (
        <div className="slider-container w-full">
          <Slider asNavFor={nav2 ?? undefined} ref={sliderRef1}>
            {data.map((item: sanityImage, index: number) => {
              return (
                <div key={index}>
                  <Image
                    className="rounded-t-md w-full h-full"
                    src={urlFor(item).width(400).url()}
                    width={400}
                    height={200}
                    layout="responsive"
                    alt="slider-image"
                  />
                </div>
              );
            })}
          </Slider>

          <Slider
            asNavFor={nav1 ?? undefined}
            ref={sliderRef2}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {data.map((item: sanityImage, index: number) => {
              return (
                <div className="px-2" key={index}>
                  <Image
                    src={urlFor(item).width(400).url()}
                    width={400}
                    height={300}
                    layout="responsive"
                    alt="slider-image"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
