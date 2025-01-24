"use client";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { RangeSlider } from "rsuite";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import FleetsList from "../components/Main/Fleets/FleetsList";

interface CheckBoxes {
  id: string;
  title: string;
  img: string;
}

interface Brands {
  id: string;
  title: string;
}

const checkBoxes: CheckBoxes[] = [
  {
    id: "minVan",
    title: "MiniVan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-minivan.svg",
  },
  {
    id: "sedan",
    title: "Sedan",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg",
  },
  {
    id: "suv",
    title: "Suv",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg",
  },
  {
    id: "van",
    title: "Van",
    img: "https://alweamtransport.com/assets/images/v-types/1699533779_alweam-icon-minivan.svg",
  },
  {
    id: "bus",
    title: "Bus",
    img: "https://alweamtransport.com/assets/images/v-types/1699534232_big-bus.svg",
  },
  {
    id: "car",
    title: "Car",
    img: "https://alweamtransport.com/assets/images/v-types/1698144294_alweam-icon-car.svg",
  },
  {
    id: "miniBus",
    title: "Mini Bus",
    img: "https://alweamtransport.com/assets/images/v-types/1699534250_alweam-icon-bus.svg",
  },
  {
    id: "luxuryCoach",
    title: "Luxury Coach",
    img: "https://alweamtransport.com/assets/images/v-types/alweam-icon-luxury-bus.svg",
  },
];
const brands: Brands[] = [
  {
    id: "bmw",
    title: "BMW",
  },
  {
    id: "ford",
    title: "Ford",
  },
  {
    id: "chevrolet",
    title: "Chevrolet",
  },
  {
    id: "honda",
    title: "Honda",
  },
  {
    id: "nissan",
    title: "Nissan",
  },
  {
    id: "audi",
    title: "Tesla",
  },
  {
    id: "mazda",
    title: "Cadillac",
  },
  {
    id: "cadillac",
    title: "Cadillach",
  },
];

export default function Fleets() {
  const [value, setValue] = useState([10, 50]);

  return (
    <>
      <BreadCrumbs data={{ title: "Fleets", crumb: "fleets" }} />
      <main className="w-full py-10 px-5 flex flex-col gap-5 max-w-[740px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto lg:flex-row">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="lg:w-[400px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-600 text-xl lg:text-base text-nowrap">
              What are you looking for ?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col bg-white py-3 px-2 rounded-lg">
              {/* Search Bar  */}
              <div className="flex w-full items-center justify-center border px-2 rounded-lg">
                <Input
                  placeholder="Type to search..."
                  className="outline-none focus:ring-0 border-none"
                />
                <IoSearch className="text-2xl text-gray-400 border-l w-10 cursor-pointer" />
              </div>
              <hr className="w-full my-6 bg-gray-500" />
              {/* CheckBoxex  */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 font-semibold text-lg">
                  Vehicle Types
                </h1>
                <div className="w-full h-[200px] overflow-y-scroll">
                  {checkBoxes.map((item: CheckBoxes) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                      >
                        <Checkbox id={item.id} />
                        <label
                          htmlFor={item.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                        >
                          <Image
                            src={item.img}
                            width={35}
                            height={15}
                            alt="car"
                          />
                          {item.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="w-full my-6 bg-gray-500" />
              {/* CheckBoxex  */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-600 font-semibold text-lg">Brands</h1>
                <div className="w-full h-[200px] overflow-y-scroll">
                  {brands.map((item: Brands) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 my-1 text-gray-500 p-2 bg-slate-50"
                      >
                        <Checkbox id={item.id} />
                        <label
                          htmlFor={item.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                        >
                          {item.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1">
                  <span>{value[0]} AED</span>
                  <span>{value[1]} AED</span>
                </div>
                <div className="px-2">
                  <RangeSlider
                    min={0}
                    max={13000}
                    onChange={(val) => setValue(val)}
                    defaultValue={[40, 100]}
                  />
                </div>
              </div>
              <button
                className="w-full bg-tropicalIndigoLight rounded py-3 text-white mt-5 font-semibold text-lg flex items-center justify-center gap-2 border border-tropicalIndigoLight hover:bg-transparent hover:text-tropicalIndigo transition-all ease-in-out duration-300
              "
              >
                <FaFilter className="text-sm" />
                Filter
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <FleetsList />
      </main>
    </>
  );
}
