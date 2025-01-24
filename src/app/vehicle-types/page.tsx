import React from "react";
import BreadCrumbs from "../components/Main/BreadCrumbs/BreadCrumbs";
import Image from "next/image";

export default function VehicleTypes() {
  return (
    <section>
      <BreadCrumbs data={{ title: "Vehicle Types", crumb: "vehicle-types" }} />
      <div className="w-full grid grid-cols-1 py-10 px-5 md:px-0 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[740px] lg:max-w-[980px] xl:max-w-[1180px] mx-auto">
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/1699534232_big-bus.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Bus
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/alweam-icon-luxury-bus.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Luxury Coach
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/1699534250_alweam-icon-bus.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Mini Bus
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/alweam-icon-minivan.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Minivan
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/alweam-icon-sedan.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Sedan
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/alweam-icon-suv.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Suv
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/1698144294_alweam-icon-car.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Car
          </h1>
        </div>
        <div className="bg-white rounded-3xl hover:scale-105 cursor-pointer transition-all ease-in-out duration-300 px-2">
          <Image
            src="https://alweamtransport.com/assets/images/v-types/1699534232_big-bus.svg"
            alt="vehicle-image"
            layout="responsive"
            height={700}
            width={1400}
          />
          <h1 className="font-semibold text-gray-500 text-center text-lg mb-5">
            Bus
          </h1>
        </div>
      </div>
    </section>
  );
}
