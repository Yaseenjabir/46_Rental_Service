import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface Data {
  id: number;
  title: string;
}

export default function TopTransportCompany() {
  const data: Data[] = [
    { id: 1, title: "Leading Bus Rental Dubai Company" },
    { id: 2, title: "Diverse Fleet Selection" },
    { id: 3, title: "Experienced Chauffeur Service Dubai" },
    { id: 4, title: "Prompt Airport Transfer Dubai" },
    { id: 5, title: "Bus Rental for cities" },
    { id: 6, title: "Comprehensive Transportation Services" },
  ];
  return (
    <section className="flex flex-col items-center justify-center px-5 gap-10 py-20">
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <h3 className="text-tropicalIndigo text-sm font-semibold">
          Discover the Allure of Luxury in Every Journey
        </h3>
        <h1 className="text-headings text-3xl font-bold">
          Luxury Bus Rental in Dubai for Unmatched Comfort and Style
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        <Image
          src="https://alweamtransport.com/assets/images/alweam/dubai_n1_company_alweam.webp"
          alt="Transport-Company"
          width={800}
          height={300}
          layout="responsive"
        />
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
          {data.map((item: Data) => {
            return (
              <div
                key={item.id}
                className="w-full py-7 lg:py-4 px-5 flex items-center gap-2 justify-start bg-white"
              >
                <div>
                  <FaCheckCircle className="text-lg xl:text-base text-tropicalIndigoLight hover:text-tropicalIndigo" />
                </div>
                <h1 className="text-headings font-semibold text-lg lg:text-base">
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
