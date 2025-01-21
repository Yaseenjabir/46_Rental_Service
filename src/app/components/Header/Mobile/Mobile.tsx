"use client";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
export default function Mobile({ navClasses }: { navClasses: string }) {
  const [slided, setSlided] = useState(true);

  return (
    <>
      <header className="w-full flex flex-col items-center justify-center">
        <div className="w-full py-5 px-5 flex items-center justify-between max-w-[760px] lg:max-w-[1000px] xl:hidden">
          <Image alt="logo" src="/assets/logo.png" width={200} height={50} />
          <RxHamburgerMenu
            className="text-2xl"
            onClick={() => setSlided(false)}
          />
        </div>
      </header>
      {/* Sliding Menu */}
      <div
        className={`w-full xl:hidden h-screen fixed top-0 left-0 px-5 flex items-center justify-center bg-tropicalIndigo transition-all ease-in-out duration-1000 ${
          slided ? "opacity-0 invisible delay-500" : "opacity-100 visible"
        }`}
      >
        <div
          className={`h-[85%] bg-white rounded-xl w-full p-5 transition-all ease-in-out duration-500 relative ${
            slided ? "translate-x-[120%]" : "translate-x-0 delay-1000"
          }`}
        >
          <nav>
            <ul className="flex gap-5 text-tropicalIndigo flex-col font-bold">
              <a className={navClasses}>Home</a>
              <a className={navClasses}>Services</a>
              <a className={navClasses}>Fleets</a>
              <a className={navClasses}>Vehicle Types</a>
              <a className={navClasses}>Destinations</a>
              <a className={navClasses}>Blogs</a>
              <a className={navClasses}>Payment</a>
              <a className={navClasses}>About</a>
              <a className={navClasses}>Contact</a>
              <button className="rounded-full py-2 px-3 border border-tropicalIndigo text-tropicalIndigo font-normal w-min text-nowrap hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300">
                Book Now
              </button>
            </ul>
          </nav>
          <RxCross2
            onClick={() => setSlided(true)}
            className="absolute top-5 right-5 text-2xl cursor-pointer text-tropicalIndigo hover:animate-spin"
          />
        </div>
      </div>
    </>
  );
}
