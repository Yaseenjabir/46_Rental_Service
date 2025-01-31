import { FaBusAlt } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Res {
  belongsTo: string;
  slug: string;
}

export default async function RentalList() {
  const query = `*[_type == 'services']{
  "slug" : slug.current,
    belongsTo
}`;

  const res: Res[] = await client.fetch(query);

  return (
    <section className="py-10 min-h-[1000px] px-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-[#006400] hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-[#006400] rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-green-200 group-hover:bg-white flex items-center justify-center`}
        >
          <FaBusAlt className={`text-4xl text-[#006400]`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">
            Hourly, Daily, Weekly, Monthly Rentals
          </h1>
          <p>
            Are you interested in hiring the best & trustworthy bus rental in
            Dubai? You dont need to search more as you landed on the right site.
            Al Weam Bus Rental Dubai has been working in the market for almost
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Hourly, Daily, Weekly, Monthly Rentals")?.slug}`}
            className={`font-semibold text-[#006400] group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Hourly, Daily, Weekly, Monthly Rentals
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-[#dd8f3c] hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-[#dd8f3c] rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-[#dd8f3c56] group-hover:bg-white flex items-center justify-center`}
        >
          <FaPlaneDeparture className={`text-4xl text-[#dd8f3c]`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">Dubai Airport & Hotel Rentals</h1>
          <p>
            Hey, do you want easy and reliable airport transport service in
            Dubai? If yes, then you are at the right point to get what you
            expected. Al Weam Bus Rental Dubai is one of the leading
            transportation
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Dubai Airport & Hotel Rentals")?.slug}`}
            className={`font-semibold text-[#dd8f3c] group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Dubai Airport & Hotel Rentals
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-[#2A3D66] hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-[#2A3D66] rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-[#2a3d6646] group-hover:bg-white flex items-center justify-center`}
        >
          <FaMapLocationDot className={`text-4xl text-[#2A3D66]`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">Dubai and Abu Dhabi City Tours</h1>
          <p>
            Dubai is an ultimate gem and is considered the center point and
            business hub in UAE. Most of the people choose Dubai for business
            &amp; tourism. Travelers and tourists worldwide visit Dubai once a
            year
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Dubai and Abu Dhabi City Tours")?.slug}`}
            className={`font-semibold text-[#2A3D66] group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Dubai and Abu Dhabi City Tours
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-[#ec4e56] hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-[#ec4e56] rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-[#9e2a303b] group-hover:bg-white flex items-center justify-center`}
        >
          <FaLocationArrow className={`text-4xl text-[#ec4e56]`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">Point To Point Bus Rentals</h1>
          <p>
            To enjoy a smooth journey, rent a bus with a driver in Dubai with
            one of the leading bus rental companies in Dubai. Hire a vehicle in
            Dubai we provide all kinds of transfers inside Dubai covering all...
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Point To Point Bus Rentals")?.slug}`}
            className={`font-semibold text-[#ec4e56] group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Point To Point Bus Rentals
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-[#4A2C7C] hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-[#4A2C7C] rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-[#4b2c7c6c] group-hover:bg-white flex items-center justify-center`}
        >
          <BsFillSuitcaseLgFill className={`text-4xl text-[#4A2C7C]`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">
            Corporate Transportation Rentals
          </h1>
          <p>
            Al Weam Bus Rental has decades of experience in the bus rental
            industry in Dubai. We are continuously crawling to the top results
            in the ranking of best bus rental companies in Dubai. We offer
            great,...
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Corporate Transportation Rentals")?.slug}`}
            className={`font-semibold text-[#4A2C7C] group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Corporate Transportation Rentals
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
      <div
        className={`w-full py-14 px-5 flex text-center hover:bg-pink-500 hover:text-white items-center justify-start flex-col text-gray-700 bg-slate-100 border-b-[3px] border-b-pink-500 rounded-xl group transition-all ease-in-out duration-300`}
      >
        <div
          className={`h-20 w-20 bg-pink-200 group-hover:bg-white flex items-center justify-center`}
        >
          <MdCelebration className={`text-4xl text-pink-500`} />
        </div>
        <div className="flex items-center gap-2 flex-col mt-7">
          <h1 className="font-bold text-xl">Weddings & Events Rentals</h1>
          <p>
            If you are planning to hire transportation for a wedding event, then
            there is some important information for you to discover
            comprehensive insights on wedding transportation, from choosing the
            right v...
          </p>
          <Link
            href={`/services/${res.find((item) => item.belongsTo === "Weddings & Events Rentals")?.slug}`}
            className={`font-semibold text-pink-500 group-hover:text-white flex items-center justify-center gap-1 cursor-pointer hover:underline`}
          >
            Weddings & Events Rentals
            <MdArrowRightAlt className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
