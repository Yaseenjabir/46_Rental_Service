import { companyLocation, companyName } from "@/app/utils/utils";
import Image from "next/image";
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
              Dubai Top Leading Bus Rental Company: Minibuses to Luxury Coaches
            </h1>
            <p className="text-gray-700 tracking-wide">
              Are you looking for a bus rental {companyLocation} service?
              {companyName} is the right bus rental company to lead the way to
              luxury buses, minibuses, coasters, vans and sedans rentals in
              Dubai. We specialize in providing the cheapest bus rental rates
              for high-quality rental services. Our persistent and reliable bus
              rental services are the key factor for success. We do provide bus
              rental {companyLocation} services for travelers, tourists,
              corporates, or for any special events on a daily, hourly, weekly,
              and monthly basis.
            </p>
            <button className="bg-tropicalIndigoLight py-2 px-8 w-min text-nowrap font-bold text-white rounded flex items-center justify-center gap-1 hover:gap-2 transition-all ease-in-out duration-300 mt-16 self-center lg:self-start">
              View Fleets <MdArrowRightAlt className="text-3xl" />
            </button>
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
