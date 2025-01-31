"use client";
import Image from "next/image";
import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { PiInfoLight } from "react-icons/pi";
import { truncateText, Vehicle } from "@/app/utils/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useState } from "react";
import FleetForm from "./FleetForm";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaBuilding, FaUsers } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export default function FleetsList({ data }: { data: Vehicle[] }) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Vehicle>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage); // Total number of pages

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

  // Calculate items to display on the current page
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="w-full">
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-2 ${pathName === "/fleets" || pathName?.startsWith("/locations") ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-10 md:gap-5 `}
        >
          {currentItems.map((item: Vehicle) => {
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

                {/* <div className="bg-white p-7 text-gray-600 rounded-b-xl">
                  <h1 className="text-gray-700 text-xl font-medium h-[65px]">
                    <Link href={`/fleets/${item.slug}`}>
                      {truncateText(item.name, 40)}
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
                      <LuCalendarDays className="text-lg mr-1" /> Full Day
                      Rentals :
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
                      <MdDirectionsCar className="text-lg mr-1" /> Weekly
                      Rentals :
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
                      aria-label="Send Inquiry"
                      onClick={() => {
                        setSelectedItem(item);
                        setShowDialog(true);
                      }}
                      className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >
                      Send Inquiry
                    </button>
                    <div className="flex text-2xl items-center gap-2">
                      <Link
                        href={`/fleets/${item.slug}`}
                        aria-label="Go to vehicle-info page"
                      >
                        <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
                      </Link>
                      <div
                        aria-label="Redirect to whatsapp link"
                        className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer"
                      >
                        <FaWhatsapp onClick={() => redirectToWhatsapp(item)} />
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="bg-white py-5 px-3 text-gray-600 rounded-b-xl w-full">
                  <h1 className="text-gray-700 text-xl font-medium h-[65px]">
                    <Link href={`/fleets/${item.slug}`}>
                      {truncateText(item.name, 40)}
                    </Link>
                  </h1>
                  <div className="grid grid-cols-2 gap-y-5 ">
                    <div className="text-tropicalIndigo">
                      <div className="flex items-center justify-start gap-2">
                        <div className="p-1 rounded-md border">
                          <FaBuilding className="text-3xl" />
                        </div>
                        <div className="flex flex-col text-gray-600">
                          <h1 className="font-semibold">Company</h1>
                          <p className="text-sm">
                            {item.brand.charAt(0).toUpperCase() +
                              item.brand.slice(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-tropicalIndigo">
                      <div className="flex items-center justify-start gap-2">
                        <div className="p-1 rounded-md border">
                          <FaUsers className="text-3xl" />
                        </div>
                        <div className="flex flex-col text-gray-600">
                          <h1 className="font-semibold">Capacity</h1>
                          <p className="text-sm">
                            {item.capacity.charAt(0).toUpperCase() +
                              item.capacity.slice(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-tropicalIndigo">
                      <div className="flex items-center justify-start gap-2">
                        <div className="p-1 rounded-md border">
                          <FaCalendarAlt className="text-3xl" />
                        </div>
                        <div className="flex flex-col text-gray-600">
                          <h1 className="font-semibold">Manufactured</h1>
                          <p className="text-sm">{item.manufactured}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-tropicalIndigo">
                      <div className="flex items-center justify-start gap-2">
                        <div className="p-1 rounded-md border">
                          <IoSettings className="text-3xl" />
                        </div>
                        <div className="flex flex-col text-gray-600">
                          <h1 className="font-semibold">Transmission</h1>
                          <p className="text-sm">
                            {" "}
                            {item.transmission.charAt(0).toUpperCase() +
                              item.transmission.slice(1)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <button
                      aria-label="Send Inquiry"
                      onClick={() => {
                        setSelectedItem(item);
                        setShowDialog(true);
                      }}
                      className="rounded-full w-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                    >
                      Send Inquiry
                    </button>
                    <div className="flex text-2xl items-center gap-2">
                      <Link
                        href={`/fleets/${item.slug}`}
                        aria-label="Go to vehicle-info page"
                      >
                        <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
                      </Link>
                      <div
                        aria-label="Redirect to whatsapp link"
                        className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer"
                      >
                        <FaWhatsapp onClick={() => redirectToWhatsapp(item)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div
          className={`justify-center mt-10 items-center ${pathName === "/" ? "hidden" : "flex"}`}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-1 py-[5px] mx-1 rounded-l-md bg-tropicalIndigo disabled:bg-tropicalIndigo text-white font-semibold h-min text-[12px]"
          >
            <IoIosArrowBack />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2  rounded-md mx-1 font-semibold ${currentPage === i + 1 ? "bg-gray-200 text-headings" : "bg-gray-200"} hover:bg-tropicalIndigo hover:text-white transition-all ease-in-out duration-300`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-1 py-[5px] mx-1 rounded-r-md bg-tropicalIndigo disabled:bg-tropicalIndigo text-white font-semibold h-min text-[12px]"
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Dialog for Fleet Form */}
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
      </div>
    </>
  );
}
