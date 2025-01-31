"use client";
import { useEffect, useRef } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BsFillBusFrontFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

interface CounterElement extends HTMLElement {
  innerHTML: string;
}

export default function Stats() {
  const countersRef = useRef<(CounterElement | null)[]>([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const animateValue = (
      start: number,
      end: number,
      duration: number,
      element: CounterElement
    ) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(
          progress * (end - start) + start
        ).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as CounterElement;
          const endValue = parseInt(target.getAttribute("data-end") || "0", 10);
          animateValue(0, endValue, 2000, target);
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <section className="py-10 px-5">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">OUR STATS</h3>
        <h1 className="text-headings text-3xl font-bold">
          These Numbers Defines Us | Count on us
        </h1>
      </div>
      <div className="grid grid-cols-1 place-content-center gap-10 lg:gap-5 mt-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <MdOutlineEmojiEmotions className="text-5xl text-orange-500" />
          <div className="flex flex-col items-start justify-center">
            <strong
              className="font-bold text-headings text-3xl"
              ref={(el) => {
                countersRef.current[0] = el;
              }}
              data-end="4250"
            >
              0
            </strong>
            <p className="text-gray-600 lg:text-sm">Happy Clients in 2024</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <BsFillBusFrontFill className="text-4xl text-blue-500 mr-2" />
          <div className="flex flex-col items-start justify-center">
            <strong
              className="font-bold text-headings text-3xl"
              ref={(el) => {
                countersRef.current[1] = el;
              }}
              data-end="67"
            >
              0
            </strong>
            <p className="text-gray-600 lg:text-sm">Latest Vehicles</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <MdOutlineSupportAgent className="text-5xl text-pink-500" />
          <div className="flex flex-col items-start justify-center">
            <strong
              className="font-bold text-headings text-3xl"
              ref={(el) => {
                countersRef.current[2] = el;
              }}
              data-end="24"
            >
              0
            </strong>
            <p className="text-gray-600 lg:text-sm">Hours Of Support</p>
          </div>
        </div>
        <div className="flex py-12 lg:py-7 px-5 lg:px-8 bg-white items-center justify-start gap-3 shadow-xl">
          <FaUsers className="text-5xl text-green-500" />
          <div className="flex flex-col items-start justify-center">
            <strong
              className="font-bold text-headings text-3xl"
              ref={(el) => {
                countersRef.current[3] = el;
              }}
              data-end="15"
            >
              0
            </strong>
            <p className="text-gray-600 lg:text-sm">Years Rental Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
