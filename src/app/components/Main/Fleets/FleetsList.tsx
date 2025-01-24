import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { PiHourglassLight } from "react-icons/pi";
import { IoAirplaneOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { PiInfoLight } from "react-icons/pi";
export default function FleetsList() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
      <div>
        <Image
          className="rounded-t-xl"
          src="https://alweamtransport.com/assets/images/vehicles/thumb/1720338802_Rent_a_Yutong_53_Seater_Bus_in_Dubai_Perfect_for_Large_Groups_feature_image_.webp"
          layout="responsive"
          alt="bus-image"
          height={300}
          width={440}
        />
        <div className="bg-white p-7 text-gray-600 rounded-b-xl">
          <h1 className="text-gray-700 text-2xl font-medium">
            Yutong Big Bus 53 Seater
          </h1>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <PiHourglassLight className="text-lg mr-1" /> Per hour Rentals :
              <span className="font-semibold ml-1">200 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 1*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals :
              <span className="font-semibold ml-1">1350 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <IoAirplaneOutline className="text-lg mr-1" /> Airport Transfer :
              <span className="font-semibold ml-1">850 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 2*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals :
              <span className="font-semibold ml-1">6800 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Send Inquiry
            </button>
            <div className="flex text-2xl items-center gap-2">
              <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
              <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-t-xl"
          src="https://alweamtransport.com/assets/images/vehicles/thumb/1720338802_Rent_a_Yutong_53_Seater_Bus_in_Dubai_Perfect_for_Large_Groups_feature_image_.webp"
          layout="responsive"
          alt="bus-image"
          height={300}
          width={440}
        />
        <div className="bg-white p-7 text-gray-600 rounded-b-xl">
          <h1 className="text-gray-700 text-2xl font-medium">
            Yutong Big Bus 53 Seater
          </h1>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <PiHourglassLight className="text-lg mr-1" /> Per hour Rentals :
              <span className="font-semibold ml-1">200 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 1*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals :
              <span className="font-semibold ml-1">1350 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <IoAirplaneOutline className="text-lg mr-1" /> Airport Transfer :
              <span className="font-semibold ml-1">850 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 2*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals :
              <span className="font-semibold ml-1">6800 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Send Inquiry
            </button>
            <div className="flex text-2xl items-center gap-2">
              <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
              <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-t-xl"
          src="https://alweamtransport.com/assets/images/vehicles/thumb/1720338802_Rent_a_Yutong_53_Seater_Bus_in_Dubai_Perfect_for_Large_Groups_feature_image_.webp"
          layout="responsive"
          alt="bus-image"
          height={300}
          width={440}
        />
        <div className="bg-white p-7 text-gray-600 rounded-b-xl">
          <h1 className="text-gray-700 text-2xl font-medium">
            Yutong Big Bus 53 Seater
          </h1>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <PiHourglassLight className="text-lg mr-1" /> Per hour Rentals :
              <span className="font-semibold ml-1">200 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 1*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals :
              <span className="font-semibold ml-1">1350 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <IoAirplaneOutline className="text-lg mr-1" /> Airport Transfer :
              <span className="font-semibold ml-1">850 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 2*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals :
              <span className="font-semibold ml-1">6800 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Send Inquiry
            </button>
            <div className="flex text-2xl items-center gap-2">
              <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
              <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-t-xl"
          src="https://alweamtransport.com/assets/images/vehicles/thumb/1720338802_Rent_a_Yutong_53_Seater_Bus_in_Dubai_Perfect_for_Large_Groups_feature_image_.webp"
          layout="responsive"
          alt="bus-image"
          height={300}
          width={440}
        />
        <div className="bg-white p-7 text-gray-600 rounded-b-xl">
          <h1 className="text-gray-700 text-2xl font-medium">
            Yutong Big Bus 53 Seater
          </h1>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <PiHourglassLight className="text-lg mr-1" /> Per hour Rentals :
              <span className="font-semibold ml-1">200 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 1*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals :
              <span className="font-semibold ml-1">1350 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <IoAirplaneOutline className="text-lg mr-1" /> Airport Transfer :
              <span className="font-semibold ml-1">850 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 2*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals :
              <span className="font-semibold ml-1">6800 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Send Inquiry
            </button>
            <div className="flex text-2xl items-center gap-2">
              <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
              <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-t-xl"
          src="https://alweamtransport.com/assets/images/vehicles/thumb/1720338802_Rent_a_Yutong_53_Seater_Bus_in_Dubai_Perfect_for_Large_Groups_feature_image_.webp"
          layout="responsive"
          alt="bus-image"
          height={300}
          width={440}
        />
        <div className="bg-white p-7 text-gray-600 rounded-b-xl">
          <h1 className="text-gray-700 text-2xl font-medium">
            Yutong Big Bus 53 Seater
          </h1>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <PiHourglassLight className="text-lg mr-1" /> Per hour Rentals :
              <span className="font-semibold ml-1">200 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 1*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <LuCalendarDays className="text-lg mr-1" /> Full Day Rentals :
              <span className="font-semibold ml-1">1350 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <IoAirplaneOutline className="text-lg mr-1" /> Airport Transfer :
              <span className="font-semibold ml-1">850 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 2*
            </h5>
          </div>
          <div className="mt-3">
            <h4 className="text-nowrap flex items-center">
              <MdDirectionsCar className="text-lg mr-1" /> Weekly Rentals :
              <span className="font-semibold ml-1">6800 AED</span>
            </h4>
            <h5 className="flex items-center gap-1">
              <CiClock2 className="text-lg" />
              Hours : 10*
            </h5>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <button className="rounded-full py-2 px-5 border hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              Send Inquiry
            </button>
            <div className="flex text-2xl items-center gap-2">
              <PiInfoLight className="text-[43px] cursor-pointer text-gray-600 hover:animate-bounce" />
              <div className="p-2 rounded-full bg-green-500 text-white hover:animate-bounce cursor-pointer">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
