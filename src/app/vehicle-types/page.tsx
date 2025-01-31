import React from "react";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ProjectVehicleTypes } from "../utils/utilInfo";

export const metadata: Metadata = {
  title: "Vehicle Types | Reliable Bus Rentals in UAE | 3B Transport LLC",
  description:
    "Discover 3B Transport LLC’s wide range of vehicle options, including minibuses, coaches, buses, and luxury vehicles, designed for safe, comfortable, and efficient group transportation across the UAE.",
};

export default function VehicleTypes() {
  return (
    <section>
      <BreadCrumbs data={{ title: "Vehicle Types", crumb: "vehicle-types" }} />
      <div className="w-full grid grid-cols-1 py-10 px-5 md:px-0 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[740px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto">
        {ProjectVehicleTypes.map((item) => {
          return (
            <Link key={item.value} href={`/vehicle-types/${item.value}`}>
              <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
                <Image
                  src={item.img ? item.img : ""}
                  alt="vehicle-image"
                  layout="responsive"
                  height={700}
                  width={1400}
                />
                <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
                  {item.title}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
