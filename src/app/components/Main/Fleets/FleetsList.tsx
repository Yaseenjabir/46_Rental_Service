"use client";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { truncateText, Vehicle } from "@/app/utils/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useState } from "react";
// import FleetForm from "./FleetForm";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCar } from "react-icons/fa6";

export default function FleetsList({ data }: { data: Vehicle[] }) {
  const [showDialog, setShowDialog] = useState(false);
  // const [selectedItem, setSelectedItem] = useState<Vehicle>();
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
          {currentItems.map((item: Vehicle, index: number) => {
            return (
              <div
                key={index}
                className="bg-red-500 text-gray-600 rounded-b-xl w-full"
              >
                <Image
                  className="rounded-t-xl max-h-[250px] min-h-[250px]"
                  src={urlFor(item.images).width(440).url()}
                  layout="responsive"
                  alt="bus-image"
                  height={250}
                  width={440}
                />
                <div className="bg-red-400 relative text-white px-5 w-full pt-14 pb-5 rounded-t-[50px] mt-10 flex flex-col gap-5">
                  <div>
                    <div className="flex items-center justify-start gap-2">
                      <FaCar className="text-sm" />
                      <span>
                        {item.vehicleType.charAt(0).toUpperCase() +
                          item.vehicleType.slice(1)}
                      </span>
                    </div>
                    <Link
                      href={`/fleets/${item.slug}`}
                      className="font-semibold text-2xl hover:underline"
                    >
                      {truncateText(item.name, 25)}
                    </Link>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">AED {item.weeklyRental}</p>
                      <FaWhatsapp
                        onClick={() => redirectToWhatsapp(item)}
                        className="text-2xl cursor-pointer"
                      />
                    </div>
                  </div>
                  <hr className="bg-black w-full" />
                  <div className="flex items-center justify-between px-2">
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">{item.manufactured}</span>
                      <span>Built</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">{item.capacity}</span>
                      <span>Seats</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">
                        {item.transmission.charAt(0).toUpperCase() +
                          item.transmission.slice(1)}
                      </span>
                      <span>Transmission</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">
                        {item.airportTransfer}
                      </span>
                      <span>Rent</span>
                    </div>
                  </div>
                  {/* Absolute div  */}
                  <div className="absolute -top-6  mx-auto w-[90%] bg-white rounded-xl flex items-center justify-between p-5">
                    <h1 className="text-red-500 font-semibold">
                      {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
                    </h1>
                    <span className="py-1 px-2 rounded-full bg-red-500 text-[10px] font-semibold">
                      {item.manufactured}
                    </span>
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
            {/* <FleetForm item={selectedItem} setShowDialog={setShowDialog} /> */}
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
