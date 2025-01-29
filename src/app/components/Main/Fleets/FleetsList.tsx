"use client";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { PiHourglassLight } from "react-icons/pi";
import { IoAirplaneOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { PiInfoLight } from "react-icons/pi";
import { truncateText, Vehicle } from "@/app/utils/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useState } from "react";
import FleetForm from "./FleetForm";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
export default function FleetsList({ data }: { data: Vehicle[] }) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Vehicle>();
  const pathName = usePathname();

  const redirectToWhatsapp = (item: Vehicle) => {
    const message = `
     Hi, I need information about this vehicle *${item.name}* 

_*PRICING*_
- Per Hour Rentals: ${item.perHourRental} AED (1 Hour)
- Full Day Rentals: ${item.fullDayRental} (10 Hours)
- Airport Transfer: ${item.airportTransfer} (2 Hours)
- Weekly Rentals: ${item.weeklyRental} AED (10 Hours)

For more details, visit: *${process.env.NEXT_PUBLIC_VERCEL_URL}/${item.slug}*

     `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = process.env.NEXT_PUBLIC_ADMIN_PHONE_NUMBER;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 ${pathName === "/fleets" ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-10 md:gap-5`}
      >
        {data.map((item: Vehicle) => {
          return (
            <div key={item.slug}>
              <Image
                className="rounded-t-xl"
                src={urlFor(item.images).width(440).url()}
                layout="responsive"
                alt="bus-image"
                height={300}
                width={440}
              />
              <div className="bg-white p-7 text-gray-600 rounded-b-xl">
                <h1 className="text-gray-700 text-2xl font-medium h-[65px]">
                  <Link href={`/fleets/${item.slug}`}>
                    {truncateText(item.name, 54)}
                  </Link>
                </h1>
                <div className="mt-3">
                  <h4 className="text-nowrap flex items-center">
                    <PiHourglassLight className="text-lg mr-1" /> Per hour
                    Rentals :
                    <span className="font-semibold ml-1">
                      {item.perHourRental} AED
                    </span>
                  </h4>
                  <h5 className="flex items-center gap-1">
                    <CiClock2 className="text-lg" />
                    Hours : 1*
                  </h5>
                </div>
                <div className="mt-3">
                  <h4 className="text-nowrap flex items-center">
                    <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals
                    :
                    <span className="font-semibold ml-1">
                      {item.fullDayRental} AED
                    </span>
                  </h4>
                  <h5 className="flex items-center gap-1">
                    <CiClock2 className="text-lg" />
                    Hours : 10*
                  </h5>
                </div>
                <div className="mt-3">
                  <h4 className="text-nowrap flex items-center">
                    <IoAirplaneOutline className="text-lg mr-1" /> Airport
                    Transfer :
                    <span className="font-semibold ml-1">
                      {item.airportTransfer} AED
                    </span>
                  </h4>
                  <h5 className="flex items-center gap-1">
                    <CiClock2 className="text-lg" />
                    Hours : 2*
                  </h5>
                </div>
                <div className="mt-3">
                  <h4 className="text-nowrap flex items-center">
                    <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals
                    :
                    <span className="font-semibold ml-1">
                      {item.weeklyRental} AED
                    </span>
                  </h4>
                  <h5 className="flex items-center gap-1">
                    <CiClock2 className="text-lg" />
                    Hours : 10*
                  </h5>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setShowDialog(true);
                    }}
                    className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                  >
                    Send Inquiry
                  </button>
                  <div className="flex text-2xl items-center gap-2">
                    <Link href={`/fleets/${item.slug}`}>
                      <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
                    </Link>
                    <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                      <FaWhatsapp onClick={() => redirectToWhatsapp(item)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000000ce] transition-all ease-in-out duration-300 z-30 flex flex-col items-center justify-center px-5 py-2 ${showDialog ? "visible" : "invisible"}`}
      >
        <div className="bg-white overflow-y-scroll py-2 px-3 rounded-md relative">
          <FleetForm item={selectedItem} setShowDialog={setShowDialog} />
          <RxCross2
            onClick={() => setShowDialog(false)}
            className="absolute top-5 right-5 text-2xl text-gray-500 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
