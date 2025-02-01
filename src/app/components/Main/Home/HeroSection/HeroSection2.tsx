import Image from "next/image";

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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px] lg:max-w-[650px] md:max-w-[600px] xl:max-w-[700px]"
        alt="car-image"
        width={1000}
        height={700}
        layout="responsive"
        src={"/assets/car.png"}
      />
    </section>
  );
}
