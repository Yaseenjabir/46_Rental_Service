import { companyName } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
export default function HeroSection() {
  return (
    <>
      <section
        className="w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full max-w-[720px] py-5 px-5 flex flex-col gap-10 items-center justify-center lg:flex-row lg:max-w-[1000px] xl:max-w-[1180px] xl:py-14">
          <div className="w-full flex flex-col h-full">
            <h1 className="text-center font-bold text-2xl leading-7 mx-auto text-tropicalIndigo mb-2 md:text-start md:text-[26px] lg:text-3xl">
              Top Bus Rental Service in Dubai: Affordable Minibuses, Coaches &
              Luxury Vehicles for Every Occasion
            </h1>
            <p className="text-gray-700 tracking-wide">
              Looking for reliable bus rental services in Dubai? {companyName}
              offers a wide range of vehicles including luxury coaches,
              minibuses, coasters, vans, and sedans at the most competitive
              rates. Whether you are a tourist, corporate traveler, or planning
              a special event, we provide flexible rental options on a daily,
              hourly, weekly, or monthly basis. Our premium, cost-effective bus
              rental services are designed to ensure a smooth and enjoyable
              experience for all types of groups and occasions.
            </p>
            <Link
              href="/fleets"
              className="bg-tropicalIndigoLight py-2 px-8 w-min text-nowrap font-bold text-white rounded flex items-center justify-center gap-1 hover:gap-2 transition-all ease-in-out duration-300 mt-16 self-center lg:self-start"
            >
              View Fleets <MdArrowRightAlt className="text-3xl" />
            </Link>
          </div>
          <div className="w-full h-full">
            <Image
              src="https://alweamtransport.com/assets/images/alweam/home-page-bus.webp"
              alt="Bus-image"
              layout="responsive"
              width={955}
              height={614}
            />
          </div>
        </div>
      </section>
    </>
  );
}
