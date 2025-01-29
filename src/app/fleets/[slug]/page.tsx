import {
  FaBuilding,
  FaCalendarDays,
  FaCar,
  FaGlassWater,
  FaPlaneDeparture,
  FaRegClock,
  FaUsers,
  FaWifi,
} from "react-icons/fa6";
import DynamicCrumbs from "./DynamicCrumbs";
import SliderComp from "./Slider";
import { FaCalendarAlt } from "react-icons/fa";
import { IoDiamond, IoSettings } from "react-icons/io5";
import { MdOutlineSevereCold } from "react-icons/md";
import { Vehicle } from "@/app/utils/utils";
import { PortableText } from "next-sanity";
import FleetForm from "../../components/Main/Fleets/FleetForm";

async function fetchData(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSingleVehicle?query=${query}`
  );
  const data = await res.json();

  return data;
}

export default async function Page({ params }) {
  const { slug } = await params;

  const data: Vehicle = await fetchData(slug);

  return (
    <>
      <DynamicCrumbs
        data={{
          firstCrumb: { name: "Fleets", link: "/fleets" },
          secondCrumb: {
            name: data.name,
            link: "#",
          },
        }}
      />
      {data !== undefined && (
        <section className="w-full flex items-center justify-center">
          {/* This one has to be row when breakpoint change */}
          <div className="w-full flex flex-col py-10 px-5 lg:flex-row items-start justify-center lg:gap-5 max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] lg:px-0">
            {/* Lefty  */}
            <div className="flex flex-col gap-5 w-full lg:w-[60%]">
              <div className="bg-white rounded-lg p-2 w-full">
                <SliderComp data={data.images} />
              </div>
              {/* Specifications  */}
              <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Specifications
                </h1>
                <hr className="w-full" />
                {/* Make Company  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <FaBuilding className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Make / Company</h1>
                      <p>{data.company}</p>
                    </div>
                  </div>
                </div>
                {/* Capacity  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <FaUsers className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Capacity</h1>
                      <p>{data.capacity}</p>
                    </div>
                  </div>
                </div>
                {/* Manufactured  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <FaCalendarAlt className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Manufactured</h1>
                      <p>{data.manufactured}</p>
                    </div>
                  </div>
                </div>
                {/* Transmission  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <IoSettings className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Transmission</h1>
                      <p>{data.transmission}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services offered  */}
              <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Services offered in this vehicle
                </h1>
                <hr className="w-full" />
                <ul className="list-disc text-gray-600 px-4">
                  {data.services.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Characteristic  */}
              <div className="bg-white rounded-lg p-5 flex flex-col gap-4">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Specifications
                </h1>
                <hr className="w-full" />
                {/* Make Company  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <IoDiamond className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Interior</h1>
                      <p>{data.interior}</p>
                    </div>
                  </div>
                </div>
                {/* Capacity  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <FaWifi className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Wifi</h1>
                      <p>{data.wifi}</p>
                    </div>
                  </div>
                </div>
                {/* Manufactured  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <MdOutlineSevereCold className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Mini Freezer</h1>
                      <p>{data.freezer}</p>
                    </div>
                  </div>
                </div>
                {/* Transmission  */}
                <div className="text-tropicalIndigo">
                  <div className="flex items-center justify-start gap-2">
                    <div className="p-3 rounded-md border">
                      <FaGlassWater className="text-4xl" />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <h1 className="font-semibold text-lg">Water</h1>
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description  */}
              <div className="bg-white text-gray-900 leading-relaxed p-5 rounded-lg">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Description
                </h1>
                <hr className="my-4" />
                <section className="section-portable">
                  <PortableText value={data.description} />
                </section>
              </div>
            </div>
            {/* Righty  */}
            <div className="flex flex-col gap-5 mt-10 lg:mt-0 w-full lg:w-[40%]">
              <div className="bg-white p-4 rounded-lg">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Booking
                </h1>
                <hr className="my-3" />
                <FleetForm item={data} />
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h1 className="text-gray-700 font-semibold text-2xl tracking-wide">
                  Fairs
                </h1>
                <hr className="my-3" />
                <div className="flex flex-col text-gray-700 py-3 gap-5">
                  {/* Per Hour Rental  */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegClock className="text-4xl" />
                      <h1 className="flex items-center justify-center gap-1">
                        Per Hour Rental (1*hr) :
                        <span className="font-semibold">
                          {data.perHourRental} AED
                        </span>
                      </h1>
                    </div>
                    <p>Contact on whatsapp for urgent booking</p>
                  </div>
                  <hr className="w-full border-[2px] bg-ghostWhite rounded-full" />
                  {/* Full Day Rental  */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <FaCalendarDays className="text-4xl" />
                      <h1 className="flex items-center justify-center gap-1">
                        Full Day Rental (10*hr) :
                        <span className="font-semibold">
                          {data.fullDayRental} AED
                        </span>
                      </h1>
                    </div>
                    <p>Contact on whatsapp for urgent booking</p>
                  </div>
                  <hr className="w-full border-[2px] bg-ghostWhite rounded-full" />
                  {/* Airport transfer Rental  */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <FaPlaneDeparture className="text-4xl" />
                      <h1 className="flex items-center justify-center gap-1">
                        Airport Transfer (2*hr) :
                        <span className="font-semibold">
                          {data.airportTransfer} AED
                        </span>
                      </h1>
                    </div>
                    <p>Contact on whatsapp for urgent booking</p>
                  </div>
                  <hr className="w-full border-[2px] bg-ghostWhite rounded-full" />
                  {/* Weekly Rental  */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <FaCar className="text-4xl" />
                      <h1 className="flex items-center justify-center gap-1">
                        Weekly Rental (10*hr) :
                        <span className="font-semibold">
                          {data.weeklyRental} AED
                        </span>
                      </h1>
                    </div>
                    <p>Contact on whatsapp for urgent booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
