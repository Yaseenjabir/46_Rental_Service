import Image from "next/image";
import { PiEngineFill } from "react-icons/pi";
import { GiGearStick } from "react-icons/gi";
import { IoIosSpeedometer } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
export default function HeroSection2() {
  return (
    <section
      id="boxShadow"
      className="w-full h-[calc(100vh-120px)] border flex flex-col items-center justify-center px-5 relative bg-red-500"
    >
      <h1 className="text-[40px] md:text-7xl text-white italic font-extrabold text-nowrap mb-[200px] text-center lg:mb-[250px] xl:mb-[300px] flex items-start justify-center">
        <span className="text-black">3B</span>TRANSPORT{" "}
        <span className="ml-2 hidden md:block">LLC</span>
      </h1>
      <Image
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[430px] lg:max-w-[650px] md:max-w-[600px] xl:max-w-[700px]"
        alt="car-image"
        width={1000}
        height={700}
        layout="responsive"
        src={"/assets/car.png"}
      />
      <div className="bg-[#ffffff4f] rounded absolute top-[45%] md:top-[40%] left-[40%] md:left-[60%] backdrop-blur-md py-3 px-2 text-sm text-gray-100 max-w-[200px] xl:pb-5 lg:max-w-[250px] sm:left-[55%] flex flex-col gap-2 lg:text-base">
        <h1 className="font-bold italic">Engine</h1>
        <p className="text-[12px] lg:text-base leading-3 font-semibold">
          2.0L Turbocharged Inline-4
        </p>
        <p className="text-[12px] leading-3">
          BMW delivers an exceptional blend of performance, luxury, and
          cutting-edge technology, making it a standout in the automotive world.
        </p>
        <ul className="text-[12px] grid-cols-2 text-white hidden md:grid">
          <li className="flex items-center justify-start gap-1 font-semibold">
            <span className="font-semibold text-base">
              <PiEngineFill className="text-red-600" />
            </span>
            Inline-6
          </li>
          <li className="flex items-center justify-start gap-1 font-semibold">
            <span className="font-semibold text-base">
              <GiGearStick className="text-red-600" />
            </span>
            Auto
          </li>
          <li className="flex items-center justify-start gap-1 font-semibold">
            <span className="font-semibold text-base">
              <IoIosSpeedometer className="text-red-600" />
            </span>
            130 mph
          </li>
          <li className="flex items-center justify-start gap-1 font-semibold">
            <span className="font-semibold text-base">
              <BsFillFuelPumpFill className="text-red-600" />
            </span>
            21.9 GL
          </li>
        </ul>
      </div>
    </section>
  );
}
